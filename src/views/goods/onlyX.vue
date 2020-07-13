<template>
  <div>
    <van-nav-bar
      title="商品详情页面"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="content">
         <h2 v-html="list.title"></h2>
         <img :src="list.pic" alt="">
         <p v-html="list.content"></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: {}
    };
  },
  created() {},
  mounted() {
    console.log(this.$route.query.id);
    this.xuan();
  },
  methods: {
    xuan() {
      this.$axios({
        url: "https://api.it120.cc/small4/cms/news/detail",
        params: {
          id: this.$route.query.id
        }
      }).then(res => {
        this.list = res.data.data;
      });
    },
    onClickLeft(){
        this.$router.back()
    }
  }
};
</script>

<style scoped lang="scss">
.content{
    width: 100%;
    h2{
        text-align: center;
        margin: 10px 0;
    }
    img{
        width: 100%;
    }
    p{
        line-height: 30px;
        text-indent: 30px;
    }
}
</style>
