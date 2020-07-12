// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from '@/utils/request'
import store from '@/store/index'


Vue.config.productionTip = false
//引入vant组件信息
import vant from "vant";
import "vant/lib/index.css";

Vue.prototype.$axios = axios
Vue.use(vant);

//页面标题设置
router.beforeEach((to,from,next)=>{  //全局路由守卫
    if(to.hasOwnProperty("meta")){
        document.title = to.meta.title
    }
    next()
})


/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
