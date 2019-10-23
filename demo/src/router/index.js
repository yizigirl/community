import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const index = () => import('../pages/index.vue');
const login = () => import('../pages/login.vue');
const welcome = () => import('../pages/welcome.vue');
const managelist = () => import('../pages/managelist.vue');
const bannerlist = () => import('../pages/bannerlist.vue');
const teacherlist = () => import('../pages/teacherlist.vue');
const waterlist = () => import('../pages/waterlist.vue');
const maintainlist = () => import('../pages/maintainlist.vue');
const housekeeping = () => import('../pages/housekeeping.vue');
const changepass = () => import('../pages/changePass.vue');
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
        },
        {
          path: 'bannerlist',
          name:'banner管理',
          component: bannerlist
        },
        {
          path: 'teacherlist',
          name:'家教管理',
          component: teacherlist
        },
        {
          path: 'waterlist',
          name:'水站管理',
          component: waterlist
        },
        {
          path: 'maintainlist',
          name:'维修管理',
          component: maintainlist
        },
        {
          path: 'housekeeping',
          name:'家政管理',
          component: housekeeping
        },
        {
          path: 'changepass',
          name:'修改密码',
          component: changepass
        },
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
