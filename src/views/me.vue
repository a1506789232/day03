<template>
  <div class="box">
    <!-- 头部 -->
    <header>
      <div>
        <img src="@/assets/1.jpg" alt />
      </div>
      <div>
        <p>积分:300</p>
        <p @click="tui">退出登录</p>
      </div>
    </header>
    <!-- 通知栏 -->
    <van-notice-bar background="white" left-icon="volume-o" text="新上线更稳定的付费快递查询接口" scrollable />
    <!-- 订单 -->
    <div class="dingdan">
      <div class="meding" @click="myOrder">
        <van-icon name="bag-o" size="25" color="yellow"/>
        <div>我的订单</div>
        <van-icon name="arrow" />
      </div>
      <ul>
          <li>
              <van-icon name="paid" size="25"/>
              <p>待付款</p>
          </li>
          <li>
             <van-icon name="send-gift-o"  size="25"/>
             <p>待发货</p>
          </li>
           <li>
             <van-icon name="logistics"  size="25"/>
             <p>待收货</p>
          </li>
          <li>
              <van-icon name="comment-o"  size="25"/>
              <p>待评价</p>
          </li>
      </ul>
    </div>
    <!-- 中间余额部分 -->
    <div class="yue">
        <ul>
            <li>
                <van-icon name="after-sale" size="25"  color="red"/>
                <p>我的余额</p>
            </li>
            <li>
                <van-icon name="edit" size="25"  color="red"/>
                <p>我的砍价</p>
            </li>
            <li>
                <van-icon name="coupon-o" size="25"  color="yellow"/>
                <p>我的礼券</p>
            </li>
            <li>
                <van-icon name="star-o" size="25"  color="yellow"/>
                <p>我的收藏</p>
            </li>
            <li @click="location">
                <van-icon name="location-o" size="25"  color="blue"/>
                <p>我的地址</p>
            </li>
            <li>
                <van-icon name="service-o" size="25"  color="blue"/>
                <p>我的客服</p>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import local from '@/utils/local'
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    myOrder(){
      this.$router.push('/myorder')
    },
    location(){
       this.$router.push('/localList')
    },
    tui(){
       local.remove('徐海峰')
       this.$router.push('/login/dl')
    }
  }
};
</script>

<style scoped lang='scss'>
.box {
  width: 100%;
  background-color: #f0f0f0;
  header {
    color: white;
    width: 100%;
    height: 150px;
    background-color: #C1B18F;
    display: flex;
    align-items: center;
    div:nth-child(1) {
      width: 30%;
      text-align: center;
      img {
        width: 80%;
        border-radius: 50%;
      }
    }
    div:nth-child(2) {
      width: 70%;
      p {
        line-height: 50px;
        margin-left: 20px;
      }
      p:nth-child(1) {
        width: 80px;
        height: 30px;
        background-color: #b3a078;
        line-height: 30px;
        border-radius: 8px;
        padding-left: 10px;
        box-sizing: border-box;
      }
    }
  }
}
.dingdan {
  background-color: white;
  width: 100%;
  height: 100px;
  margin-top: 10px;
  font-size: 12px;
  .meding {
      width: 100%;
      display: flex;
      height: 35%;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;
      padding: 0 10px;
      box-sizing: border-box;
  }
  ul{
      height: 65%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      li{
          text-align: center;
      }
  }
}
.yue{
    width: 100%;
    height: 150px;
    background-color: white;
    margin-top: 10px;
    font-size: 12px;
    ul{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: center;
        height: 100%;
        li{
            width: 33%;
            text-align: center;
            p{
                line-height: 30px;
            }
        }
    }
}
</style>
