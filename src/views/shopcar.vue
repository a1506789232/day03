<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar title="购物车页面" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!-- 商品 -->
    <ul>
      <li v-for="(item,index) in shopList" :key="index">
        <van-checkbox v-model="item.checked" />
        <van-card
          :num="item.num"
          :price="item.price"
          :title="item.name"
          :thumb="item.pic"
          class="li_items"
        >
        <!-- 数量插槽 -->
          <template #num>  
            <van-stepper v-model="item.num" />
          </template>
        </van-card>
      </li>
    </ul>

    <!-- 下单 -->
    <van-submit-bar :price="allPrice" button-text="提交订单">
      <van-checkbox v-model="checked" @click="allC">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      shopList: [],
      money:0
    };
  },
  created() {},
  mounted() {
    this.shopList = this.$store.state.cartList;
  },
  methods: {
    onClickLeft() {
      //点击返回上一页
      this.$router.back();
    },
    allC(){  //如果点击全选全部选中
        
             this.shopList.forEach(item=>{
                  if(this.checked){
                      item.checked = true
                  }else{
                     item.checked = false
                  }
             })
        
    }
  },
  watch:{
      shopList:{
          handler(value){
              let num = 0
            value.forEach(item => {
                 if(item.checked){
                      num+=1
                 } 
             });
             if(num == value.length){
                 this.checked = true
             }else{
                this.checked = false
             }

             //如果数据改变就修改vuex中的数组
             this.$store.commit('fuzhi',this.shopList)
          },deep:true
      }
  },
  computed:{
        allPrice(){
            let money = 0
            this.shopList.map(item=>{
                if(item.checked){
                   money += item.num*item.price
                }
            })
            return money*100;
        }
  }
};
</script>

<style scoped lang="scss">
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
</style>
