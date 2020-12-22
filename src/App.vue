<template>
  <div id="app">
    <watermark inputText="" inputAllowDele inputDestroy />
    <div class="layout" v-if="user.token && !$emptyObject(privileges)">
      <div class="content">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
        <MyTabbar />
      </div>
    </div>

    <div class="empty-layout" v-else-if="!loading">
      <p v-if="$emptyObject(privileges)">无系统权限，请联系系统管理员</p>
      <Button v-else type="primary" round :disabled="this.loading" :loading="loading" @click="redirectToSSOLogin">应用授权</Button>
    </div>
  </div>
</template>
<script>
import http from './services/request';
import {
  getSessionItem,
  setSessionItem,
  getSearchParameter
} from './utils/common';
import Watermark from './components/Watermark';
import MyTabbar from './components/MyTabbar';
import { Toast, Button } from 'vant';
import {
  BOOKING_CONFIGS,
  BOOKING_USER_ORG_LIST,
  BOOKING_USER_AUTH,
  BOOKING_USER_PRIVILEGES
} from './constants';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    Button,
    MyTabbar,
    Watermark
  },
  data() {
    return {
      loading: false
    };
  },
  computed: {
    ...mapGetters({
      privileges: BOOKING_USER_PRIVILEGES,
      user: BOOKING_USER_AUTH
    })
  },
  created() {
    this.controller();
  },
  methods: {
    async init() {
      try {
        const enums = await this.$services.order.allocationOrderConfig();
        const { data: orgList } = await this.$services.order.orgList();
        this.$store.dispatch(BOOKING_CONFIGS.ALL, enums);
        this.$store.dispatch(BOOKING_USER_ORG_LIST, orgList);
      } catch (error) {
        console.log('init Error: ', error);
      }
    },
    controller() {
      const localUser = JSON.parse(getSessionItem('user')) || {};
      console.log(typeof localUser);
      if (localUser && localUser.token && localUser.token !== 'undefined') {
        console.log(1);
        http.defaults.headers.common['Authorization'] = localUser.token;
        if (!this.user.token) {
          this.$store.dispatch(BOOKING_USER_AUTH, localUser);
        }
        if (
          this.$emptyObject(this.$store.state.common.configs) ||
          this.$emptyObject(this.$store.state.common.orgList)
        ) {
          this.init();
        }
        return;
      }

      const ticket = getSearchParameter('ticket');
      if (ticket) {
        console.log(2);
        this.getUser({ ticket });
      } else {
        console.log(3);
        this.$services.cas.login();
      }
    },

    async getUser(params) {
      const { userCode, ticket, userName } = params;
      console.log(userCode);
      console.log(userName);
      const loading = Toast.loading({
        duration: 0,
        forbidClick: true,
        message: '登录中...'
      });
      this.loading = true;
      if (ticket) {
        const casUser = await this.$services.cas.serviceValidate(ticket);

        const {
          authenticationSuccess = {},
          authenticationFailure = {}
        } = casUser.serviceResponse;
        debugger;
        if (authenticationFailure && authenticationFailure.code) {
          Toast.fail('用户权限验证失败, 请重新登录');
          setTimeout(() => {
            this.$services.cas.logout();
          }, 1000);
          this.loading = false;
          return;
        }

        const {
          deptname: [userDeptname] = [],
          name: [userName] = [],
          oaid: [userCode] = []
        } = authenticationSuccess.attributes || {};
        const orderUser = await this.$services.order.login(userCode);
        const user = {
          ...orderUser,
          deptname: userDeptname,
          name: userName,
          code: userCode
        };
        this.$store.dispatch(BOOKING_USER_AUTH, user);
        setSessionItem('user', user);
        http.defaults.headers.common['Authorization'] = orderUser.token;
        this.loading = false;
        loading.clear();
        this.$router.go(0);
        this.init();
      } else {
        this.$services.cas.login();
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
  background: #f2f1f6;
  overflow-x: hidden;
  .content {
    width: 100%;
  }
}
</style>
