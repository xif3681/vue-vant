<template>
  <div class="my-page">
    <MyNavBar></MyNavBar>
    <div class="my-infos row">
      <div class="my-img">
        <van-image :src="logoImage" alt />
      </div>
      <div class="my-name">
        <div>{{ user.name }}</div>
        <div class="title_c">账号: {{ user.code }}</div>
      </div>
    </div>

    <Cell class="bottom_version" :title="`当前版本：${version}`" />
  </div>
</template>

<script>
import {
  Cell,
  DropdownItem,
  DropdownMenu,
  Image
  // Dialog
} from 'vant';

import LogoImage from '../../assets/icons/logo.png';
import diaoyan from '../../assets/icons/diaoyan.png';
import { getSessionItem } from '../../utils/common';
import { VERSIONDEFAUT } from '@/constants/version';

export default {
  name: 'My',
  components: {
    Cell,
    [Image.name]: Image,
    [DropdownItem.name]: DropdownItem,
    [DropdownMenu.name]: DropdownMenu,
    MyNavBar: () => import('@/components/MyNavBar')
  },
  data() {
    return {
      user: {},
      currentOrg: {},
      version: '',
      logoImage: LogoImage,
      icon: {
        diaoyan: diaoyan
      }
    };
  },
  async created() {
    this.getUser();
    this.version = VERSIONDEFAUT;
  },

  methods: {

    getUser() {
      this.user = JSON.parse(getSessionItem('user')) || {};
    },

    onClickLeft() {
      // 返回需要跳转页面
    },
    onClickRight() {
      // 右侧点击事件
    }
  }
};
</script>
<style lang="less" scoped>
.my-page {
  min-height:100vh;
  background:#F2F1F6;
  color: #1F2026;
  .van-cell:not(:last-child)::after {
    border: none;
  }
  .org-img {
    width: 20px;
    height: 20px;
  }
}
.flex-v-center {
  display: flex;
  align-items: center;
}
.list-item {
  height: 49px;
  margin-top: 5px;
  align-items: center;
  padding: 0 15px;
  &-title {
    color: #1F2026;
    font-size: 18px;
    margin-left: 13px;
  }
  &-value {
    color: #40454E;
    font-size: 16px;
  }
}

.my-infos {
  padding: 12px 15px;
  background: white;
  .van-cell__value {
    .flex-v-center() {};
  }
  .my-img {
    width: 57px;
    height: 57px;

  }
  .my-name {
    margin-left: 12px;
    font-size: 18px;
    font-weight: 500;
    // color:#1F2026;
    flex: 1;
    .title_c {
      font-size: 14px;
      margin-top: 12px;
      color: #8A8C9A;
    }
  }
}

.my-org {
  margin-top: 15px;
  .van-cell__value {
    .flex-v-center() {};
  }
  .my-org-exchange {
    .flex-v-center() {};
    flex: 1;
    display: flex;
    justify-content: flex-end;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    padding-right: 20px;
  }
  .my-org-select {
    padding-left: 12px;
  }
}

.van-hairline--top-bottom::after {
  border-width: 0px;
}
.my-org-exchange {
  padding-right: 0px !important;
  /deep/ .van-dropdown-menu__title::after {
    visibility: hidden;
  }
}
.bottom_version {
  position: fixed;
  bottom: 70px;
  left: 0;
  align-items: center;
  padding-left: 15px;
}
.iconorganizaation {
  color: #FF7A1E;
  font-size: 20px;
}
.iconmanage {
  color: #2E66F1;
  font-size: 20px;
}
</style>
