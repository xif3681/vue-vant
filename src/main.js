
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/icon/local.css';
import { Icon, Switch, NavBar, Picker, Field, Popup } from 'vant'
import '@vant/touch-emulator';
import './style.less'
import './assets/icons/iconfont/iconfont.css'
import services from './services'
Vue.config.productionTip = false
Vue.prototype.$services = services

Vue.prototype.$emptyObject = (obj) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
Vue.use(Icon)
Vue.use(Switch)
Vue.use(NavBar)
Vue.use(Picker)
Vue.use(Field)
Vue.use(Popup)
