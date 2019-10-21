import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const index = () => import('../pages/index.vue');
const login = () => import('../pages/login.vue');
const welcome = () => import('../pages/welcome.vue');
const managelist = () => import('../pages/managelist.vue');
const manageadd = () => import('../pages/manageadd.vue');
// const managelist = () => import('../pages/managelist.vue');
// const managelist = () => import('../pages/managelist.vue');
// const managelist = () => import('../pages/managelist.vue');
// const managelist = () => import('../pages/managelist.vue');
export default new Router({
  routes: [
    {
      path: '/index',
      component: index,
      children: [
        {
          path: '',
          component: welcome
        },
        {
          path: 'managelist',
          name:'管理员管理',
          component: managelist
        }
      ]
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})
