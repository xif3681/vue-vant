
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/icon/local.css';
import { Icon, Switch } from 'vant'
import '@vant/touch-emulator';
import './style.less'
import './assets/icons/iconfont/iconfont.css'
import services from './services'
Vue.config.productionTip = false
Vue.prototype.$services = services

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
Vue.use(Icon)
Vue.use(Switch)
