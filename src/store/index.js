import vue from 'vue'
import vuex from 'vuex'
import vuexPersist   from 'vuex-persist' //导入持久化

const vuexLocal = new vuexPersist({
     storage:window.localStorage
})

vue.use(vuex)
export default new vuex.Store({
    state:{
      loading:true,
      count:'111',
      cartList:[],
      nums:0
    },
    mutations:{
         loadingAdimin(state,item){
              state.loading = item
         },
         jumpShop(state,obj){
              let a = state.cartList.findIndex(item=>{   //如果有相同的商品num++
                   return item.id == obj.id
              }) 
              if(a != -1){
                   state.cartList[a].num+=obj.num
                   return false;
              }
              state.cartList.push(obj)
         },
         fuzhi(state,list){
               state.cartList = list
         }
         
    },
    actions:{

    },
    getters:{

    },
    plugins:[vuexLocal.plugin]
})