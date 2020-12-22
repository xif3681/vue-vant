
<template>
  <Tabbar route class="my-tabbar" active-color="#50bc93" inactive-color="#909090">
    <TabbarItem to="/" replace>
      <img slot="icon" slot-scope="props" :src="props.active ? icon.order_show : icon.order" />
      <div>订货</div>
    </TabbarItem>
    <TabbarItem v-if="!disableAllocationApplyPrivilege" to="/management">
      <img slot="icon" slot-scope="props" :src="props.active ? icon.settings_show : icon.settings" />
      管理
    </TabbarItem>
    <TabbarItem to="/about" replace>
      <img slot="icon" slot-scope="props" :src="props.active ? icon.mine_show : icon.mine" />
      我的
    </TabbarItem>
  </Tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
import { mapGetters } from 'vuex';
import { BOOKING_PRIVILEGES, BOOKING_USER_PRIVILEGE_AUTH } from '@/constants';
export default {
  name: 'MyTabbar',
  components: {
    Tabbar,
    TabbarItem
  },
  data() {
    return {
      BOOKING_PRIVILEGES,
      icon: {
        mine_show: require('../assets/icons/user_show.png'),
        mine: require('../assets/icons/user.png'),
        order_show: require('../assets/icons/order_show.png'),
        order: require('../assets/icons/order.png'),
        settings_show: require('../assets/icons/settings_show.png'),
        settings: require('../assets/icons/settings.png')
      }
    };
  },
  computed: {
    ...mapGetters({
      privilegeAuth: BOOKING_USER_PRIVILEGE_AUTH
    }),
    disableAllocationApplyPrivilege() {
      return !this.privilegeAuth(this.BOOKING_PRIVILEGES.ALLOCATION_APPLY);
    }
  },
  created() {
    console.log(this.disableAllocationApplyPrivilege);
  },
  methods: {}
};
</script>

<style lang='less'>
.my-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #8e8e93;
  .van-tabbar-item__icon {
    margin-bottom: 4px;
  }
  .van-tabbar-item__text {
    text-align: center;
    font-size: 10px;
  }
  .iconinvestigation,
  .iconreport,
  .iconuser {
    color: #b7b7c0;
    font-size: 18px;
  }
  .iconinvestigation.active,
  .iconreport.active,
  .iconuser.active {
    color: #2e66f1;
  }
}
</style>
