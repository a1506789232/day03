<template>
  <div>
    <van-nav-bar
      title="订单详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <ul>
      <li v-for="(item,index) in goodsMap" :key="index">
        <p class="p">查看详情&nbsp;></p>
        <van-card
          v-for="(it,i) in item"
          :key="i"
          :num="it.number"
          price="2.00"
          :desc="it.property"
          :title="it.goodsName"
          :thumb="it.pic"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import local from "@/utils/local";
export default {
  data() {
    return {
      goodsMap: []
    };
  },
  created() {},
  mounted() {
    let user = local.get("徐海峰", true);
    let fromData = new FormData();
    fromData.append("token", user.token);
    this.$axios
      .post("https://api.it120.cc/small4/order/list", fromData)
      .then(res => {
        this.goodsMap = res.data.data.goodsMap;
        console.log(this.goodsMap);
      });
  },
  methods: {
      onClickLeft(){
          this.$router.back()
      }
  }
};
</script>

<style scoped lang="scss">
ul {
  width: 100%;

  li {
    width: 100%;

    .p {
      width: 100%;
      height: 40px;
      line-height: 40px;
      padding-left: 10px;
      box-sizing: border-box;
    }
  }
}
</style>
