// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//reset.css
import './assets/css/reset.css'
//axios
import axios from 'axios'
Vue.prototype.axios = axios;
//element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//filter
import filter from './filter/index';
for (var key in filter) {
  Vue.filter(key, filter[key]);
}
//响应拦截
axios.interceptors.response.use(res=>{
  if(res.data.code==-1){
    router.push('/login');
    return;
  }
  return res;
});
//路由守卫
router.beforeEach((to,from,next)=>{
  if(to.path=='/login'){
    next();
    return;
  }
  if(sessionStorage.getItem('adminCode')!=0){
    if(sessionStorage.getItem('adminCode')!=1){
      next('/login');
      return;
    }
  }
  if(to.path.includes('manage')){
    if(sessionStorage.getItem('adminCode')==0){
      next();
    }else{
      next('/login');
    }
    return;
  }
  next();
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
