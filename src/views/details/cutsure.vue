<template>
  <div class="box">
    <header>
      <van-icon name="user-circle-o" size="60" color="white" />
      <p style="color:white">我发现一个好货，来帮我看到最低价吧~</p>
      <!-- 商品 -->
      <div class="shop">
        <img :src="yuan.pic" alt />
        <div>
          <p v-html="yuan.name"></p>
          <p>
            <span>低价￥{{ list.minPrice }}</span>
            <span>原价￥{{ yuan.originalPrice }}</span>
          </p>
        </div>
      </div>
      <p style="color:white">当前价141.52元，已砍27.4800000000004元</p>
      <p class="anniu">
        <button>以当前价格购买</button>
        <button>邀请好友砍价</button>
      </p>
      <van-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" />
      <van-icon name="arrow-left" class="fanhui" size="30" @click="base"/>
    </header>
  </div>
</template>

<script>
import local from "@/utils/local";
export default {
  data() {
    return {
      list: {},
      kjId: 0,
      yuan: {},
      obj:{},
      time: 30 * 60 * 60 * 1000,
    };
  },
  created() {},
  mounted() {
    this.yuan = this.$route.query;
    let kj = this.$store.state.cutId;
    kj.forEach(item => {
      if (item.goodsId == this.$route.query.id) {
        this.kjId = item.id;
      }
    });
    let token = local.get("徐海峰", true);
    let obj = new FormData();
    obj.append("token", token.token);
    obj.append("kjid", this.kjId);
    this.$axios
      .post("https://api.it120.cc/small4/shop/goods/kanjia/join", obj)
      .then(res => {
        this.list = res.data.data;
      });
      this.goods()
  },
  methods: {
     goods(){
        let data = new Date();
        let data1 = new Date(2020, 6, 21, 0, 0, 0);
        this.time= data1.getTime() - data.getTime();
     },
     base(){
       this.$router.back()
     }
  },
  computed: {
  }
};
</script>

<style scoped lang="scss">
.box {
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
}
ul {
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  li {
    width: 100%;
    display: flex;
    .li_items {
      flex: 1;
    }
  }
}
.shop {
  width: 80%;
  margin: 0 auto;
  display: flex;
  height: 100px;
  justify-content: space-between;
  padding: 5px;
  box-sizing: border-box;
  background-color: #f6edde;
  border-radius: 10px;
  img {
    width: 20%;
  }
  div {
    width: 75%;
    p {
      width: 100%;
      line-height: 35px;
      display: flex;
      justify-content: space-between;
    }
    p:nth-child(2) {
      width: 80%;
    }
  }
}
header {
  background-color: #e7d9bf;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.anniu {
  display: flex;
  margin: 0 auto;
  button {
    margin-right: 10px;
  }
}
.fanhui{
  position: absolute;
  top: 10px;
  left: 10px;
  border-radius: 50%;
  background-color: #ccc;
  color: white;
}
</style>
