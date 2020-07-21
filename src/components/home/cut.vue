<template>
  <div class="con">
    <ul>
      <li class="news" v-for="(item,index) in shopList" :key="index" @click="cutDetails(item)">
        <div class="newsLeft">
          <img :src="item.pic" alt />
        </div>
        <div class="newsRight">
          <p v-html="item.name"></p>
          <p v-html="item.characteristic" style="font-size:12px;color:#ccc"></p>
          <div class="newsRight-price">
            <span style="color:red">
              ￥{{ item.minPrice }}
              <p style="font-size:12px;text-align:center">低价</p>
            </span>
            <span style="color:#ccc">
              ￥{{ item.originalPrice }}
              <p style="font-size:12px;text-align:center">原价</p>
            </span>
            <span style="color:#ccc">
              {{ item.stores }}
              <p style="font-size:12px;text-align:center">限量</p>
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props:["shopList"],
  created() {},
  mounted() {},
  methods: {
    cutDetails(item){
         console.log(item.id)
        //  this.$axios({url:'https://api.it120.cc/small4/shop/goods/detail',params:{id:item.id}}).then(res=>{
              this.$router.push({
                 path:'/cutDetails',
                 query:{id:item.id}
              })
        //  })
    }
  }
};
</script>

<style scoped>
.con {
  width: 100%;
  margin-top: 5px;
}
.con > p {
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: white;
}
.con>ul li{
    display: flex;
    height: 100px;
}
.news {
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: white;
  margin-bottom: 1px;
}
.newsLeft {
  width: 30%;
  height: 100px;
  display: flex;
  align-items: center;

}
.newsLeft > img {
  width: 100%;
}
.newsRight{
    width: 100%;
    box-sizing: border-box;
    padding: 0px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.newsRight>p{
    margin-top: 10px;
}
.newsRight-price{
    width: 100%;
    display: flex;
    justify-content: space-between;
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
