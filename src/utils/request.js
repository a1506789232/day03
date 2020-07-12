import axios from 'axios'
import store from '@/store/index'

let sever = axios.create({
    baseURL:'',
    timeout:3000
})

sever.interceptors.request.use(config=>{
    store.commit('loadingAdimin',true)
    return config;

})

sever.interceptors.response.use(res=>{
    setTimeout(function(){
        store.commit('loadingAdimin',false)
    },500)
    
    return res;

})

export default sever;