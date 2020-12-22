import { Dialog } from 'vant'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const permissionCheck = function (type) {
  let permission = sessionStorage.getItem('permission') ? JSON.parse(sessionStorage.getItem('permission')) : {}
  return !!permission[type]
}
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '主页',
        permissionCheck (to, from, next) {
          next()
        }
      },
      component: () => import('./views/home/Index.vue')
    },
    {
      path: '/management',
      name: 'management',
      meta: {
        title: '管理',
        permissionCheck (to, from, next) {
          next()
        }
      },
      component: () => import('./views/management/Index.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: '我的',
        permissionCheck (to, from, next) {
          next()
        }
      },
      component: () => import('./views/about/Index.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 集中修改title
  if (to.meta.title) document.title = to.meta.title
  // 先检查permissionCheck，没有检查permissionType，都没有，放行
  if (sessionStorage.getItem('token')) {
    if (to.meta.permissionCheck) {
      to.meta.permissionCheck(to, from, next)
    } else if (to.meta.permissionType) {
      if (permissionCheck(to.meta.permissionType)) {
        next()
      } else {
        Dialog.alert({
          title: '无权限',
          message: '请联系管理员'
        }).then(() => {
          next('/')
        })
      }
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
