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
    <!-- 商品规格 -->
    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      @add-cart="addCart"
      @stepper-change="numCart"
      @sku-selected="skuSelected"
    />


    <!-- 返回键 -->
    <van-icon name="arrow-left" class="base" @click="base"></van-icon>
    <!-- 尾部 -->
    <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
        <van-goods-action-icon icon="cart-o" text="购物车" @click="jump"/>
        <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
        <van-goods-action-button type="warning" text="加入购物车" @click="show = true"/>
        <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import local from '@/utils/local'
export default {
  data() {
    return {
      // 轮播图片数组
      bannerList: [],
      active: 0,
      //商品规格
      shopList: "",
      //商品介绍
      present:{},
      //商品规格
      show: false,
       sku:{
        //sku的规格类目，比如商品的颜色，尺寸
        tree:[
          {
            k: "颜色",
            k_s: "c1",
            v:[
              {id:1,name:"白色"},
              {id:2,name:"红色"},
              {id:3,name:"蓝色"},
            ]
          }
        ],
        list:[
          {id:1000,c1:1,price:2000,stock_num:12},
          {id:1000,c1:2,price:30000,stock_num:15},
          {id:1000,c1:3,price:50000,stock_num:18},
        ],
        price: 1000,
        stock_num: 100,
        },
        //商品的图片信息
        goods: {
          picture: "",
        },
        //sku的图片
        nums:1, //默认商品数量
        arr:[],//添加商品到vuex组件中要传入到vuex的数组
        guige:"", //选择商品的规格
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
        this.setSku(res.data.data.properties)
        this.goods.picture = res.data.data.basicInfo.pic
      });
    },
    base(){
        this.$router.back()
    },
    setSku(property){
      if(property == undefined){    //如果没有数据就停止执行
        return false; 
      }
      
      let tree = []
      let list = []
      property.forEach(element => {   //商品描述
          let obj = new Object()
          obj.k_s = `k_${element.id}`
          obj.k = element.name
          obj.v = element.childsCurGoods
          tree.push(obj)
      });
      this.sku.tree = tree
      
      tree.forEach(item=>{
         item.v.forEach(element=>{
             let obj = new Object()
             obj.id = item.k_s.split("_")[1]
             obj[item.k_s] = element.id
             obj.price = 1000
             obj.stock_num = 120
             list.push(obj)
         })
      })
      this.sku.list = list
      
    }, //加入购物车
    addCart(){ 
        let loginStatus = local.get('徐海峰')
        if(loginStatus == null){
            this.$toast.fail('请先登录')
            this.$router.push('/login/dl')
            return false;
        }
        let obj = new Object()
        obj.id = this.present.id
        obj.num = this.nums
        obj.price = this.present.originalPrice
        obj.name = this.present.name
        obj.checked = true
        obj.pic = this.present.pic
        obj.propertyId = this.guige
        this.$store.commit('jumpShop',obj)
        this.show = false

    },
    numCart(value){ //商品数量变化时触发
        this.nums = value
    },
    jump(){
      this.$router.push({
        path:'/shopcar'
      })
    },//选择商品规格时触发
    skuSelected(value){
          this.guige = `${value.skuValue.propertyId}:${value.skuValue.id}`
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
