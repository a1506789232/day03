import Vue from 'vue'
import Router from 'vue-router'
import zc from '@/views/login/zc'
import dl from '@/views/login/dl'
import first from '@/views/first'
import two from '@/views/two'
import shopcar from '@/views/shopcar'
import me from '@/views/me'
import home from '@/views/home'
import cutList from '@/views/list/cutList'
import shopList from '@/views/list/shopList'
import fenleiX from '@/views/goods/fenleiX'
import search from '@/views/goods/search'
import shopXiang from '@/views/goods/shopXiang'
import onlyX from '@/views/goods/onlyX'
import details from '@/views/details/details'
import submit from '@/views/details/submit'
import pay from '@/views/details/pay'
import cutDetails from '@/views/details/cutDetails'
import cutsure from '@/views/details/cutsure'
import detailsFen from '@/views/details/detailsFen'
import myorder from '@/views/order/myorder'
import localList from '@/views/location/localList'
import localCreate from '@/views/location/localCreate'

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
          path: '/me',
          name: 'me',
          component: me,
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
    },
    {  //提交订单页面
      path: '/submit',
      name: 'submit',
      component: submit,
      meta: {
        title: "提交订单页面"
      }
    },
    {  //支付页面
      path: '/pay',
      name: 'pay',
      component: pay,
      meta: {
        title: "支付页面"
      }
    }
    ,
    {  //砍价详情页面
      path: '/cutDetails',
      name: 'cutDetails',
      component: cutDetails,
      meta: {
        title: "砍价详情页面"
      }
    }
    ,
    {  //确认砍价页面
      path: '/cutsure',
      name: 'cutsure',
      component: cutsure,
      meta: {
        title: "确认砍价页面"
      }
    }
    ,
    {  //拆分砍价页面
      path: '/detailsFen',
      name: 'detailsFen',
      component: detailsFen,
      meta: {
        title: "拆分砍价页面"
      }
    }
    ,
    {  //我的订单页面
      path: '/myorder',
      name: 'myorder',
      component: myorder,
      meta: {
        title: "我的订单"
      }
    }
    ,
    {  //我的地址页面
      path: '/localList',
      name: 'localList',
      component: localList,
      meta: {
        title: "地址列表"
      }
    }
    ,
    {  //我的地址页面
      path: '/localCreate',
      name: 'localCreate',
      component: localCreate,
      meta: {
        title: "新增地址"
      }
    }
  ]
})
