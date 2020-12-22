<template>
  <div class="hello">
    <MyNavBar></MyNavBar>
    <van-field readonly clickable label="当前区域" :value="value" placeholder="选择区域" @click="showPicker = true" />
    <van-popup v-model="showPicker" round position="bottom">
      <van-picker :default-index="0" value-key="name" show-toolbar :columns="distributions" @cancel="showPicker = false" @confirm="onConfirm" />
    </van-popup>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { BOOKING_USER_DISTRIBUTIONS, CURRENT_DISTRIBUTE } from '@/constants';
// import { Toast } from 'vant';
export default {
  name: 'HomePage',
  components: {
    MyNavBar: () => import('@/components/MyNavBar')
  },
  data() {
    return {
      value: '',
      currentDistribute: {},
      showPicker: false
    };
  },
  computed: {
    ...mapGetters({
      distributions: BOOKING_USER_DISTRIBUTIONS
    })
  },
  methods: {
    ...mapActions([CURRENT_DISTRIBUTE]),

    onConfirm(value, index) {
      this.value = value.name;
      this.showPicker = false;
      this.handleCommand(index);
    },

    handleCommand(index) {
      this.value = this.distributions[index]
        ? this.distributions[index].name
        : '';
      this.currentDistribute = this.distributions[index];
      this[CURRENT_DISTRIBUTE]({
        code: this.currentStor && this.currentDistribute.code,
        name: this.currentStor && this.currentDistribute.name
      });
    }
  },
  mounted() {
    setTimeout(() => {
      this.handleCommand(0);
    }, 1000);
  }
};
</script>

<style scoped>
</style>
