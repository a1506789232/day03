<template>
    <div>
        <van-nav-bar title="项目登录页面" left-text="返回" left-arrow />
        <div class="body">
            <!-- 手机号 -->
            <van-field v-model="mobile" placeholder="手机号码" class="inp" right-icon="phone-circle-o" />
            <!-- 密码 -->
            <van-field
                v-model="pwd"
                placeholder="密码"
                :type="pwdisadmin?'password':'text'"
                class="inp"
                :right-icon="pwdisadmin?'closed-eye':'eye-o'"
                @click-right-icon="pwdisadmin = !pwdisadmin"
            />
            <!-- 按钮 -->
            <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" block @click="btn">点击登录</van-button>
            <p class="jump"><router-link to="/login/zc">没有账号？立即注册</router-link></p>
        </div>
    </div>
</template>

<script>
import "@/assets/reset.css";
import area from "@/assets/area.js";
import local from "@/utils/local.js";
export default {
    data() {
        return {
            pwdisadmin:true,
            mobile:"",
            pwd:""
        };
    },
    beforeRouteEnter(to,from,next) {
        let g = local.get('徐海峰',true)
        if(g!= null){
            next('/')
        }else{
            next()
        }
        
    },
    mounted() {

    },
    methods: {
       btn(){
           if(this.mobile=="" || this.pwd==""){
               this.$toast.fail('请完善信息')
               return false;
           }
           this.login()
       },
       login(){
           this.$axios({
               url:"https://api.it120.cc/small4/user/m/login?deviceId=007&deviceName=monkey",
               params:{
                   mobile:this.mobile,
                   pwd:this.pwd
               }
           }).then(res=>{
               if(res.data.code != 0){
                   this.$toast.fail(res.data.msg)
                   return false;
               }
               console.log(res.data.data)
               local.set('徐海峰',res.data.data,true)
               this.$router.push('/')
            //    this.$toast.success('登录成功')
           })
       }
    }
};
</script>

<style scoped  lang="scss">
.body {
  width: 90%;
  margin: 0 auto;
  .inp {
    width: 100%;
    border: 1px solid #f5f5f5;
    background-color: #f5f5f5;
    border-radius: 0.2rem;
    margin-bottom: 0.4rem;
    img {
      width: 3rem;
    }
  }
  .jump{
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
}
</style>