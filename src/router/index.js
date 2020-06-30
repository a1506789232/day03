import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import zc from '@/views/login/zc'
import dl from '@/views/login/dl'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta:{
        title:"严选商城首页"
      }
    },
    {
      path: '/login/zc',
      name: 'zc',
      component: zc,
      meta:{
        title:"严选商城注册页"
      }
    },
    {
      path: '/login/dl',
      name: 'dl',
      component: dl,
      meta:{
        title:"严选商城登录页"
      }
    }
  ]
})
