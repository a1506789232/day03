<template>
  <div>
    <van-nav-bar title="注册页面" left-text="返回" left-arrow />
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
      <!-- 确认密码 -->
      <van-field
        v-model="confirmpwd"
        placeholder="确认密码"
        :type="pwdisadmin1?'password':'text'"
        class="inp"
        :right-icon="pwdisadmin1?'closed-eye':'eye-o'"
        @click-right-icon="pwdisadmin1 = !pwdisadmin1"
      />
      <!-- 用户名 -->
      <van-field v-model="nick" placeholder="用户名" class="inp" right-icon="manager" />
      <!-- 图形码 -->
      <van-field v-model="picCode" placeholder="图形码" class="inp">
        <template #right-icon>
          <van-image :src="imgurl" @click="imgc" />
        </template>
      </van-field>
      <!-- 城市 -->
      <van-field
        v-model="citytext"
        placeholder="城市"
        class="inp"
        right-icon="location-o"
        @click="show = true"
      />
      <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
        <van-area
          show-toolbar
          title="标题"
          :area-list="columns"
          @cancel="show = false"
          @confirm="historyT"
        />
      </van-popup>
      <!-- 验证码 -->
      <van-field v-model="code" placeholder="验证码" class="inp">
        <template #button>
          <van-button size="small" type="primary" @click="codeBtn">{{ codetxt }}</van-button>
        </template>
      </van-field>
      <!-- 按钮 -->
      <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" block @click="btn">点击注册</van-button>
      <p class="jump"><router-link to="/login/dl">已有账号？立即登录</router-link></p>
    </div>
  </div>
</template>

<script>
import "@/assets/reset.css";
import area from "@/assets/area.js";
import axios from "axios";

export default {
  data() {
    return {
      mobile: "", //手机号
      pwd: "", //密码
      confirmpwd: "", //确认密码
      codeKey:"", //验证码key
      nick: "", //昵称
      city: "", //城市
      code: "", //短信验证码
      //   条形码地址
      imgurl: "",
      //   密码显示隐藏
      pwdisadmin: true,
      pwdisadmin1: true,
      //   城市弹框
      show: false,
      columns: area, //城市列表
      city: "",
      province: "",
      citytext: "",
      //验证码按钮文本
      codetxt: "发送验证码",
      picCode: ""
    };
  },
  created() {},
  mounted() {
    //   调用条形码
    this.imgc();
  },
  methods: {
    //   条形码
    imgc() {
      this.codeKey =(new Date().getTime());
      let url = `https://api.it120.cc/small4/verification/pic/get`;
      this.imgurl = `${url}?key=${this.codeKey}`;
      console.log(this.codeKey);
    },
    historyT(arr) {
      //城市点击确定时触发
      this.show = false;
      let list = arr
        .map(item => {
          return item.name;
        })
      this.city = list[1]
      this.province = list[0]
      this.citytext = list.join(" ");
      console.log(this.city,this.province);
      
    },
    btn() {
      //点击注册验证正则
      if (
        this.mobile == "" ||
        this.pwd == "" ||
        this.confirmpwd == "" ||
        this.imgcode == "" ||
        this.nick == "" ||
        this.code == ""
      ) {
        this.$toast.fail("请完善信息");
        return false;
      }

      let phone = /^1[3,4,5,7,8]\d{9}$/;       //手机号码正则
      if (!phone.test(this.mobile)) {
        this.$toast.fail("请输入正确手机号格式");
        return false;
      }
      if (this.pwd != this.confirmpwd) {       //查看密码是否一致
        this.$toast.fail("密码不一致");
        return false;
      }
      this.submitBtn()
      
    },
    codeBtn() {
      //点击发送验证码
      if (this.mobile == "") {
        this.$toast.fail("请输入手机号");
        return false;
      }
      axios  //验证
        .post(
          `https://api.it120.cc/small4/verification/sms/get?mobile=${this.mobile}&&picCode=${this.picCode}&&key=${this.codeKey}`
        )
        .then(res => {
          if(res.data.code != 0){        //如果报错就显示出来
             this.$toast.fail(res.data.msg);
             return false;
        }
         console.log(this.mobile,this.codeKey,this.picCode)
          let num = 10;
          let time = setInterval(() => {    //倒计时
            num--;
            if (num < 1) {
              clearInterval(time);
              this.codetxt = "重新发送";
              return false;
            }
            this.codetxt = `${num}s 后重新发送`;
          }, 1000);
        });
    },
    submitBtn(){
         this.$axios({   //请求注册
           url:"https://api.it120.cc/small4/user/m/register",
           params:{
              mobile:this.mobile,
              pwd:this.pwd,
              code:this.code,
              nick:this.nick,
              province:this.province,
              city:this.city
           }
         }).then(res=>{
            console.log(res.data)
            if(res.data.code != 0){        //如果报错停止执行
              this.$toast.fail(res.data.msg)
              return false;
            }
            this.$toast.success("注册成功");    //没有报错注册成功
            this.$router.push('/')
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
