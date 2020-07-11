<template>
  <div>
    <van-nav-bar
      title="砍价页面"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <cut :shopList="shopList"></cut>
  </div>
</template>

<script>
import cut from "@/components/home/cut";
export default {
  data() {
    return {
      shopList: []
    };
  },
  created() {},
  mounted() {
    this.sList();
  },
  methods: {
    sList() {
      this.$axios("https://api.it120.cc/small4/shop/goods/kanjia/list").then(
        res => {
          this.shopList = res.data.data.goodsMap;
        }
      );
    },
    onClickLeft(){
        this.$router.back()
    }
  },
  components: {
    cut
  }
};
</script>

<style scoped>
.p {
  height: 50px;
  background-color: white;
  text-align: center;
  line-height: 50px;
  margin-top: 10px;
  width: 100%;
}
</style>
