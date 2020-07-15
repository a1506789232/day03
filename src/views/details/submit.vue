<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar title="提交订单" left-arrow @click-left="onClickLeft" />
    <!-- 地址 -->
    <div class="city">
      <van-icon name="location-o" color="#ccc" />
      <div>
        <p>{{ city.linkMan }}-{{ city.mobile }}</p>
        <p>{{ city.address }}</p>
      </div>
      <van-icon name="arrow" />
    </div>
    <!-- 商品详情 -->
    <ul>
      <li v-for="(item,index) in this.$store.state.submitList" :key="index">
        <van-card :num="item.num" :price="item.price" :title="item.name" :thumb="item.pic" />
      </li>
    </ul>
    <!-- 备注 -->
    <van-field label="备注" placeholder="请输入备注" />
    <!-- 二次提交订单 -->
    <van-submit-bar :price="allPrice" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
import local from "@/utils/local";
export default {
  data() {
    return {
      //token值
      tokenNum: "",
      //默认地址
      city: {},
    };
  },
  created() {},
  mounted() {
    this.tokenNum = JSON.parse(local.get("徐海峰")).token; //获取本地登录的token值
    this.site();
  },
  methods: {
    onClickLeft() {
      //返回上一页
      this.$router.back();
    },
    site() {
      //获取地址
      this.$axios({
        url: "https://api.it120.cc/small4/user/shipping-address/default",
        params: {
          token: this.tokenNum
        }
      }).then(res => {
        this.city = res.data.data;
      });
    },
    onSubmit(){
       //创建订单
        let form= new FormData()
        form.append('token',this.tokenNum)
        console.log(form)


        let arr = []
        this.$store.state.submitList.forEach(item => {
               let obj = new Object()
               obj.goodsId = item.id
               obj.number = item.num
               obj.propertyChildIds = item.propertyId
               arr.push(obj)
        });
        
        form.append('goodsJsonStr',JSON.stringify(arr))


        this.$axios.post('https://api.it120.cc/small4/order/create',form).then(res=>{
            this.$store.commit('dingdan',{orderNumber:res.data.data.orderNumber})
        })

        this.$toast.loading('正在进入支付页面')
        setTimeout(()=>{
          this.$router.push('/pay')
        },3000)
    }
  },
  computed:{
      allPrice(){  //计算总价
            let money = 0
            this.$store.state.submitList.map(item=>{
                if(item.checked){
                   money += item.num*item.price
                }
            })
            return money*100;
        }
  }
};
</script>

<style scoped lang="scss">
.city {
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 2px solid green;
  div {
    width: 70%;
    p {
      font-size: 12px;
      line-height: 40px;
    }
  }
}
</style>
