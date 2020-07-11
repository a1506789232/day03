<template>
    <header>
        <!-- 头部轮播 -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(item,index) in bannerList" :key="index">
            <img :src="item.picUrl" alt />
          </van-swipe-item>
        </van-swipe>
        <!-- 头部导航 -->
        <ul
          style="height:100px;display:flex;align-items:center;justfy-content:space-between"
          class="headerNav"
        >
          <li style="width:25%;text-align:center;">
            <van-icon name="like" :size="50" color="red"/>
            <p>签到</p>
          </li>
          <li style="width:25%;text-align:center;">
            <van-icon name="goods-collect" :size="50"  color="red"/>
            <p>礼券</p>
          </li>
          <!-- <li> -->
            <router-link tag="li" to="cutList" style="width:25%;text-align:center;">
               <van-icon name="gift" :size="50"  color="red"/>
               <p>砍价</p>
            </router-link>
          <!-- </li> -->
          <li style="width:25%;text-align:center;">
            <van-icon name="column" :size="50"  color="red"/>
            <p>专栏</p>
          </li>
        </ul>
      </header>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    props:["bannerList"],
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped>
/* 轮播样式 */
.van-swipe-item img {
  width: 100%;
}
.my-swipe .van-swipe-item {
  width: 100%;
}

header {
  width: 100%;
  position: relative;
}
.headerNav {
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #fff;
  border-radius: 30px 30px 0 0;
  background-color: white;
}
</style>
