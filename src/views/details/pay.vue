<template>
  <div class="box">
    <!-- 头部 -->
    <van-nav-bar title="确认付款" left-arrow @click-left="onClickLeft" />
    <!-- 商品详情 -->
    <ul>
      <li>
        <van-icon name="gold-coin-o" size="20" color="red" />
        <div>
          <p>商品总额：￥{{ this.$store.state.subMoney/100 }}</p>
          <p>订单号：{{ this.$store.state.dingdan }}</p>
        </div>
      </li>
      <li>
        <van-icon name="location-o" size="20" color="blue" />
        <div>
          <div>
            <p>{{ city.linkMan }}&nbsp;&nbsp;{{ city.mobile }}</p>
            <p>{{ city.address }}</p>
          </div>
        </div>
      </li>
    </ul>
    <!-- 微信支付 -->
    <p class="zhifu">微信支付</p>
  </div>
</template>

<script>
import local from '@/utils/local'
export default {
  data() {
    return {
      city: {},
      tokenNum:""
    };
  },
  created() {},
  mounted() {
      this.tokenNum = JSON.parse(local.get("徐海峰")).token; //获取本地登录的token值
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
  methods: {
    onClickLeft() {
      //返回上一页
      this.$router.back();
    }
  }
};
</script>

<style scoped lang="scss">
ul {
  width: 100%;
  li {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    border-top: 1px solid #ccc;
    div {
      width: 80%;
      p {
        line-height: 40px;
      }
    }
  }
}
.zhifu{
    width: 100%;
    text-align: center;
    height: 50px;
    line-height: 50px;
    position: fixed;
    bottom: 0;
    color: white;
    background-color: red;
}
.box{
    width: 100%;
    height: 100%;
    position: relative;
}
</style>
