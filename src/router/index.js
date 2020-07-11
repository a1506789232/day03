import Vue from 'vue'
import Router from 'vue-router'
import zc from '@/views/login/zc'
import dl from '@/views/login/dl'
import first from '@/views/first'
import two from '@/views/two'
import three from '@/views/three'
import four from '@/views/four'
import home from '@/views/home'
import cutList from '@/views/list/cutList'
import shopList from '@/views/list/shopList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:"/first",
      component: home,
      meta: {
        title: "严选商城首页"
      },
      children: [
        {
          path: '/first',
          name: 'first',
          component: first,
          meta: {
            title: "严选商城首页"
          }
        },
        {
          path: '/two',
          name: 'two',
          component: two,
          meta: {
            title: "严选商城登录页"
          }
        }
        ,
        {
          path: '/three',
          name: 'three',
          component: three,
          meta: {
            title: "严选商城登录页"
          }
        }
        ,
        {
          path: '/four',
          name: 'four',
          component: four,
          meta: {
            title: "严选商城登录页"
          }
        }
      ]
    },
    { //注册页面
      path: '/login/zc',
      name: 'zc',
      component: zc,
      meta: {
        title: "严选商城注册页"
      }
    },
    {  //登录页面
      path: '/login/dl',
      name: 'dl',
      component: dl,
      meta: {
        title: "严选商城登录页"
      }
    }
    ,
    {  //砍价页面
      path: '/cutList',
      name: 'cutList',
      component: cutList,
      meta: {
        title: "砍价页面"
      }
    }
    ,
    {  //砍价页面
      path: '/shopList',
      name: 'shopList',
      component: shopList,
      meta: {
        title: "商品推荐页面"
      }
    }
  ]
})
