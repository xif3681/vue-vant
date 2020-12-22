
<template>
  <Tabbar route class="my-tabbar" active-color="#3253B2" inactive-color="#909090">
    <TabbarItem to="/" replace @click="$store.dispatch('cleanKeepList')">
      <img  slot="icon" slot-scope="props" :src="props.active ? icon.mission_show : icon.mission" />
      <div>订货</div>
    </TabbarItem>
    <TabbarItem to="/management" @click="$store.dispatch('cleanKeepList')">
      <img slot="icon" slot-scope="props" :src="props.active ? icon.report_show : icon.report" />
      管理
    </TabbarItem>
    <TabbarItem to="/about" replace @click="$store.dispatch('cleanKeepList')">
      <img slot="icon" slot-scope="props" :src="props.active ? icon.mine_show : icon.mine" />
      我的
    </TabbarItem>
  </Tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
  name: 'MyTabbar',
  components: {
    Tabbar,
    TabbarItem
  },
  data() {
    return {
      icon: {
        mine_show: require('../assets/icons/user.png'),
        mine: require('../assets/icons/user-dark.png'),
        mission_show: require('../assets/icons/investigation.png'),
        mission: require('../assets/icons/investigation-dark.png'),
        report_show: require('../assets/icons/report-new.png'),
        report: require('../assets/icons/report-new-dark.png')
      },
      active: 'a'
    };
  },
  created() {},
  methods: {}
};
</script>

<style lang='less'>
.my-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  border-top:1px solid #8E8E93;
  .van-tabbar-item__icon{
    margin-bottom: 4px;
  }
  .van-tabbar-item__text {
    text-align: center;
    font-size: 10px;
  }
  .iconinvestigation, .iconreport, .iconuser {
    color:#B7B7C0;
    font-size: 18px;
  }
  .iconinvestigation.active,.iconreport.active,.iconuser.active {
      color: #2E66F1;
  }

}
</style>
