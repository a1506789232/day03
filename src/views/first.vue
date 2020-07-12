<template>
  <div class="box">
    <div class="content">
      <!-- banner -->
      <banner :bannerList="bannerList"></banner>
      <!-- 内容部分 -->
       <p class="p">全民砍价</p>
      <cut :shopList="shopList"></cut>
      <!-- 精选 -->
      <goods :goodList="goodList"></goods>
      <!-- 人气推荐 -->
      <p class="p">人气推荐&nbsp;></p>
      <list :man="man"></list>
     <div class="kong" style="height:50px;width:100%"></div>
      
    </div>
  </div>
</template>

<script>
import "@/assets/reset.css";
import area from "@/assets/area.js";
import banner from "@/components/home/banner";
import cut from "@/components/home/cut";
import goods from "@/components/home/goods";
import list from "@/components/home/list";
export default {
  data() {
    return {
      bannerList: [],
      //  商品数据
      shopList: [],
      //精选数据
      goodList:[],
      //人气推荐
      man:[],
      num:3
    };
  },
   components:{
     banner,cut,goods,list
   },
  created() {},
  mounted() {
    this.getBann();
    this.sList();
    this.goodL()
    this.manTui()
  },
  methods: {
    getBann() {
      this.$axios("https://api.it120.cc/small4/banner/list").then(res => {
        this.bannerList = res.data.data;
      });
    }, //商品请求数据
    sList() {
      this.$axios("https://api.it120.cc/small4/shop/goods/kanjia/list").then(
        res => {
          let id = Object.keys(res.data.data.goodsMap).splice(-3)
          id.forEach(item=>{
               this.shopList.push(res.data.data.goodsMap[item])
          })
        }
      );
    },
     //精选
    goodL() {
      this.$axios("https://api.it120.cc/small4/cms/news/list").then(
        res => {
          this.goodList = res.data.data;
          console.log(res.data.data)
        }
      );
    }
    ,
     //人气推荐
    manTui() {
      this.$axios("https://api.it120.cc/small4/shop/goods/list").then(
        res => {
          let shuju = res.data.data
          let arr = shuju.filter(item=>{
             return item.name.indexOf('测试') == -1
          })
          this.man = arr;
          console.log(arr.splice(4))
        }
      );
    }
  }
};
</script>

<style scoped lang="scss">

.box {
  width: 100%;
  /* height: 100%; */
  background-color: #f5f5f5f5;
}
.content {
  width: 100%;
  min-height: 101%;
}
.p{
    height: 50px;
     background-color: white;
     text-align: center;
     line-height: 50px;
     margin-top: 10px;
     width: 100%;
}
</style>
