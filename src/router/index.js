import Vue from 'vue'
import Router from 'vue-router'
import zc from '@/views/login/zc'
import dl from '@/views/login/dl'
import first from '@/views/first'
import two from '@/views/two'
import shopcar from '@/views/shopcar'
import four from '@/views/four'
import home from '@/views/home'
import cutList from '@/views/list/cutList'
import shopList from '@/views/list/shopList'
import fenleiX from '@/views/goods/fenleiX'
import search from '@/views/goods/search'
import shopXiang from '@/views/goods/shopXiang'
import onlyX from '@/views/goods/onlyX'
import details from '@/views/details/details'

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
          path: '/shopcar',
          name: 'shopcar',
          component: shopcar,
          meta: {
            title: "严选商城购物车页"
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
    ,
    {  //分类详情
      path: '/fenleiX',
      name: 'fenleiX',
      component: fenleiX,
      meta: {
        title: "分类商品详情页面"
      }
    }
    ,
    {  //搜索页面
      path: '/search',
      name: 'search',
      component: search,
      meta: {
        title: "搜索页面"
      }
    }
    ,
    {  //文章页面
      path: '/shopXiang',
      name: 'shopXiang',
      component: shopXiang,
      meta: {
        title: "详情页面"
      }
    }
    ,
    {  //文章详情页面
      path: '/onlyX',
      name: 'onlyX',
      component: onlyX,
      meta: {
        title: "文章详情页面"
      }
    }
    ,
    {  //商品详情页面
      path: '/details',
      name: 'details',
      component: details,
      meta: {
        title: "商品详情页面"
      }
    }
  ]
})
