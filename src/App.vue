<template>
  <div id="app">
    <watermark :inputText="watermarkTxt" inputAllowDele inputDestroy />
    <div class="layout" v-if="token && !!privileges.length">
      <div class="content">
        <keep-alive :include="getKeepaliveList">
          <router-view></router-view>
        </keep-alive>
        <MyTabbar />
      </div>
    </div>

    <div class="empty-layout" v-else>
      <p v-if="!privileges.length">无系统权限，请联系系统管理员</p>
      <Button
        v-else
        type="primary"
        round
        :disabled="this.loading"
        :loading="loading"
        @click="redirectToSSOLogin"
      >应用授权</Button>
    </div>
  </div>
</template>
<script>
import http from './services/request';

import { getSSOHost } from './constants/host';
import {
  getSessionItem,
  setSessionItem,
  getSearchParameter
} from './utils/common';
import Watermark from './components/Watermark';
import MyTabbar from './components/MyTabbar';
import { Toast, Button } from 'vant';
export default {
  name: 'App',
  components: {
    Button,
    MyTabbar,
    Watermark
  },
  data() {
    return {
      loading: false,
      token: '',
      privileges: [],
      watermarkTxt: '' // TODO: 不再使用？
    };
  },
  created() {
    this.controller();
  },
  computed: {
    getKeepaliveList() {
      console.log(this.$store.getters.getKeepList)
      return this.$store.getters.getKeepList;
    }
  },
  beforeRouteLeave(to, from, next) {
    if (to.name !== 'EditNews') {
      this.$store.commit('removeKeepaliveList', from.name);
    } else {
      this.$store.commit('setKeepaliveList', from.name);
    }
    next();
  },
  methods: {

    controller() {
      const token = getSessionItem('token') || '';
      const privileges = JSON.parse(getSessionItem('privileges')) || [];
      if (token && token !== 'undefined') {
        console.log(1)
        this.token = token;
        this.privileges = privileges;
        http.defaults.headers.common['Authorization'] = token;
        return;
      }

      // const userCode = getSearchParameter('userCode');
      // const userName = decodeURIComponent(getSearchParameter('userName'));
      // if (userCode) {
      //   console.log(3)
      //   this.getUser({ userCode, userName });
      //   return;
      // }

      const ticket = getSearchParameter('ticket');
      if (ticket) {
        console.log(2)
        this.getUser({ ticket });
      } else {
        console.log(3)
        this.redirectToSSOLogin();
      }
    },
    redirectToSSOLogin() {
      let originUrl = window.location.href;
      const ssoHost = getSSOHost();
      const ticket = getSearchParameter('ticket');
      if (ticket) {
        const index = originUrl.indexOf('?');
        originUrl = originUrl.substring(0, index);
      }
      window.location.href = ssoHost + originUrl;
    },

    async getUser(params) {
      const { userCode, ticket, userName } = params;
      console.log(userCode)
      console.log(userName)
      const loading = Toast.loading({
        duration: 0,
        forbidClick: true,
        message: '登录中...'
      });
      this.loading = true;
      if (ticket) {
        const casUser = await this.$services.cas.serviceValidate(ticket)
        console.log(casUser)

        const { authenticationSuccess = {}, authenticationFailure = {} } = casUser.serviceResponse
        if (authenticationFailure && authenticationFailure.code) {
          Toast.fail('用户权限验证失败, 请重新登录');
          setTimeout(() => {
            this.$services.cas.logout()
          }, 1000)
          return
        }

        const { deptname: [ userDeptname ] = [], name: [ userName ] = [], oaid: [ userCode ] = [] } = authenticationSuccess.attributes || {}

        const orderUser = await this.$services.order.login(userCode)

        const user = {
          ...orderUser,
          deptname: userDeptname,
          name: userName,
          code: userCode
        }

        setSessionItem('token', orderUser.token);
        setSessionItem('user', user);
        setSessionItem('privileges', [orderUser.privileges]);
        http.defaults.headers.common['Authorization'] = orderUser.token;
        this.token = orderUser.token;
        this.privileges = [orderUser.privileges];
        this.loading = false;
        loading.clear();
        this.$router.go(0);
      } else {
        this.$services.cas.login()
      }
    }
  }
};
</script>
<style lang='less' scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.empty-layout {
  width: 100%;
  height: calc(100vh);
  background: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.layout {
  width: 100%;
  background: #F2F1F6;
  overflow-x: hidden;
  .content {
    width: 100%;
  }
}
</style>
