<template>
  <div class="box">
    <!-- 轮播 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in bannerList" :key="index" class="item">
        <img :src="item.pic" alt />
      </van-swipe-item>
    </van-swipe>
    <!-- 商品介绍 -->
    <div class="present">
        <p v-html="present.name"></p>
        <p v-html="present.characteristic"></p>
        <p>
            <ul>
                <li>
                    <span style="color:red">低价:{{ present.minPrice }}</span>
                    <span style="color:#ccc;font-size:12px;">原价:{{ present.originalPrice }}</span>
                </li>
                <li style="color:#ccc;font-size:12px;">
                    库存：{{ present.stores }}
                </li>
            </ul>
        </p>
    </div>
    <!-- 选项卡 -->
    <div class="content">
       <van-tabs v-model="active">
            <van-tab title="商品介绍">
                <div v-html="this.shopList"></div>
            </van-tab>
            <van-tab title="商品评价">商品评价</van-tab>
        </van-tabs>
    </div>
    <!-- 返回键 -->
    <van-icon name="arrow-left" class="base" @click="base"></van-icon>
    <!-- 尾部 -->
    <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
        <van-goods-action-icon icon="cart-o" text="购物车" />
        <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 轮播图片数组
      bannerList: [],
      active: 0,
      //商品规格
      shopList: "",
      //商品介绍
      present:{}
    };
  },
  created() {},
  mounted() {
    this.xuan();
  },
  methods: {
    xuan() {
      this.$axios({
        url: "https://api.it120.cc/small4/shop/goods/detail",
        params: { id: this.$route.query.id }
      }).then(res => {
        console.log(res.data.data);
        this.bannerList = res.data.data.pics;
        this.shopList = res.data.data.content;
        this.present = res.data.data.basicInfo
      });
    },
    base(){
        this.$router.back()
    }
  }
};
</script>

<style  lang="scss">

.box {
    position: relative;
  width: 100%;
//   padding: 10px;
  box-sizing: border-box;
  background: #f0f0f0;
  //轮播
  .my-swipe {
  width: 100%;
  .item {
    width: 100%;
    img {
      width: 100%;
      height: 350px;
    }
  }
  }
  //内容
  .content {
      background-color: white;
      width: 100%;
      padding: 10px;
      margin-top:10px;
       box-sizing: border-box;
    p {
      width: 100% !important;
      img {
        width: 100% !important;
        height: 30% !important;
      }
    }

    span{
        margin-top: 10px;
        // text-indent: 20px;
    }
  }
  .base{
      background-color: white;
      width: 30px;
      height: 30px;
      background-color: #f0f0f0;
      border-radius: 50%;
      text-align: center;
      line-height: 30px;
      position: absolute;
      top:10px;
      left:10px;
  }
}
.present{
    background-color: white;
    width: 100%;
    height: 100px;
    padding: 10px;
    box-sizing: border-box;
    ul{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    p{
        line-height: 20px;
    }
    p:nth-child(2){
        font-size: 12px;
        color:#ccc;
        margin-bottom: 15px;
    }
}
</style>
