import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)
export default new vuex.Store({
    state:{
      loading:true,
    },
    mutations:{
         loadingAdimin(state,item){
              state.loading = item
         }
         
    },
    actions:{

    },
    getters:{

    },
})