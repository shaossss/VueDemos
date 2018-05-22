// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import axios from 'axios'
import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'
import seller from './components/seller/seller'

import './common/stylus/index.styl'


Vue.use(VueRouter);

/* eslint-disable no-new */
Vue.prototype.$http = axios
/*定义路由*/
const router = new VueRouter({
  routes:[
    {path:'/goods',component:goods},
    {path:'/ratings',component:ratings},
    {path:'/seller',component:seller}
  ],
  linkActiveClass:'active'
})
/*const app = new Vue({
  router
}).$mount('#app')*/
// 页面加载自动导航到goods页面
router.push('/goods');
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});


