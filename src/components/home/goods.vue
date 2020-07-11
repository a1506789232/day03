<template>
  <div class="good">
    <p class="p">精选主题&nbsp;></p>
    <van-swipe :loop="false" :width="300" class="txt" :show-indicators="false">
      <van-swipe-item
        v-for="(item,index) in goodList"
        :key="index"
        style="margin:0 10px"
        class="good_li"
      >
        <div style="height:198px;">
          <img :src="item.pic" alt />
        </div>
        <p>{{ item.title }}</p>
        <p>{{ item.descript }}</p>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props:["goodList"],
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.good{
    background-color: white;
}
.van-swipe-item{
    margin: 0;padding: 0;
}
.txt p{
     height: 20px;
     background-color: white;
     /* text-align: center; */
     line-height: 20px;
     margin-top: 10px;
     width: 100%;
     white-space: nowrap;  
     text-overflow:ellipsis; 
     overflow:hidden;
}
.p{
    height: 50px;
     background-color: white;
     text-align: center;
     line-height: 50px;
     margin-top: 10px;
     width: 100%;
}
img{
    width: 100%;
}
.van-swipe-item{
    box-sizing: border-box;
}
</style>
