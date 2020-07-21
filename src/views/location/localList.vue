<template>
  <div>
    <van-nav-bar
      title="地址"
      left-text="返回"
      right-text="新增地址"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <div>
          <p>{{ item.linkMan }}-{{ item.mobile }}</p>
          <p>{{ item.address }}</p>
        </div>
        <van-icon name="delete" @click="remove(item.id)"></van-icon>
      </li>
    </ul>
  </div>
</template>

<script>
import local from "@/utils/local";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {},
  mounted() {
    let user = local.get("徐海峰", true);
    let formData = new FormData();
    formData.append("token", user.token);
    this.$axios
      .post("https://api.it120.cc/small4/user/shipping-address/list", formData)
      .then(res => {
        console.log(res.data.data);
        this.list = res.data.data;
      });
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    onClickRight() {
        this.$router.push('/localCreate')
    },
    remove(id) {
      let user = local.get("徐海峰", true);
      let formData = new FormData();
      formData.append("token",user.token);
      formData.append("id",id);
      this.$axios.post(
        "https://api.it120.cc/small4/user/shipping-address/delete",formData
      ).then(res=>{
           this.$totas.success('删除成功')
      });
    }
  }
};
</script>

<style scoped lang="scss">
ul {
  width: 100%;
  li {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
    padding: 10px;
    box-sizing: border-box;
    p {
      line-height: 40px;
    }
    p:nth-child(2) {
      font-size: 12px;
      color: #ccc;
    }
  }
}
</style>
