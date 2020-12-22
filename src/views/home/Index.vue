<template>
  <div class="hello">
    <MyNavBar></MyNavBar>
    <van-field readonly clickable label="当前门店" :value="value" placeholder="选择门店" @click="showPicker = true" />
    <van-popup v-model="showPicker" round position="bottom">
      <van-picker :default-index="0" value-key="name" show-toolbar :columns="stores" @cancel="showPicker = false" @confirm="onConfirm" />
    </van-popup>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import {
  BOOKING_USER_STORES,
  CURRENT_DISTRIBUTE,
  BOOKING_USER_CURRENT_STORE
} from '@/constants';
// import { Toast } from 'vant';
export default {
  name: 'HomePage',
  components: {
    MyNavBar: () => import('@/components/MyNavBar')
  },
  data() {
    return {
      value: '',
      currentStore: {},
      showPicker: false
    };
  },
  computed: {
    ...mapGetters({
      stores: BOOKING_USER_STORES
    })
  },
  methods: {
    ...mapActions([CURRENT_DISTRIBUTE, BOOKING_USER_CURRENT_STORE]),
    updateCurrentStore(store) {
      try {
        this[BOOKING_USER_CURRENT_STORE](store);
      } catch (error) {
        console.log('updateCurrentStore Error: ', error);
      }
    },
    onConfirm(value, index) {
      this.value = value.name;
      this.showPicker = false;
      this.handleCommand(index);
    },

    handleCommand(index) {
      this.value = this.stores[index] ? this.stores[index].name : '';
      this.currentStore = this.stores[index];
      this.updateCurrentStore(this.stores[index]);
      this[CURRENT_DISTRIBUTE]({
        code: this.currentStor && this.currentStore.distribution_code,
        name: this.currentStor && this.currentStore.distribution_name
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
