<template>
  <div>
    <van-nav-bar title="商品详情页面" left-text="返回" left-arrow @click-left="onClickLeft" />
    <ul>
      <li v-for="(item,index) in list" :key="index" @click="jump(item)">
        <img :src="item.pic" alt />
        <div>
          <p v-html="item.title"></p>
          <p v-html="item.descript"></p>
          <p class="xiangq">查看详情</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  created() {},
  mounted() {
    this.xuan();
  },
  methods: {
    xuan() {
      this.$axios("https://api.it120.cc/small4/cms/news/list").then(res => {
        this.list = res.data.data;
        console.log(this.list);
      });
    },
    jump(item) {
      this.$router.push({
        path: "/onlyX",
        query: { id: item.id }
      });
    },
    onClickLeft(){
        this.$router.push('/first')
    }
  }
};
</script>

<style scoped lang="scss">
ul {
  width: 100%;
  li {
    width: 100%;
    margin-bottom: 10px;
    height: 200px;
    position: relative;
    color: white;
    img {
      width: 100%;
      height: 100%;
    }
    div {
      position: absolute;
      top: 0;
      text-align: center;
      width: 100%;
      p {
        line-height: 50px;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .xiangq {
        width: 100px;
        border: 1px solid white;
        margin: 0 auto;
        line-height: 30px;
      }
    }
  }
}
</style>
