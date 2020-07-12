<template>
  <div>
    <van-nav-bar
      title="商品页面"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"

    />
   <list :man="man" v-if="this.man.length>0"></list>
   <van-empty description="还没有商品" v-else/>
  </div>
</template>

<script>
import list from "@/components/home/list";
export default {
  data() {
    return {
        man:[],
    };
  },
  created() {},
  mounted() {
    console.log(this.$route.query);
    this.manTui()
  },
  computed:{
     
  },
  methods: {
      manTui() {
      this.$axios("https://api.it120.cc/small4/shop/goods/list").then(
        res => {
          let shuju = res.data.data
          console.log(shuju)
          let arr = shuju.filter(item=>{
             return item.categoryId == this.$route.query.id
          })
          this.man = arr;
        }
      );
    },
    onClickLeft(){
        this.$router.back()
    },//模糊搜索
    search1(){
       this.$router.push('/search')
    }
  },
  components:{
      list
  }
};
</script>

<style scoped>
</style>
