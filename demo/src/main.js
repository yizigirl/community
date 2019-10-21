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


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
