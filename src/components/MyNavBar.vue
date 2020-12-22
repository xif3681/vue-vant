<template>
  <van-nav-bar
  :fixed="true"
  :placeholder ="true"
  title="智能订货系统"
/>
</template>

<script>
import { Toast } from 'vant';
export default {
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    }
  }
}
</script>

<style>

</style>
