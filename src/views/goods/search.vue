<template>
  <div>
    <!-- 搜索框 -->
    <van-search placeholder="请输入搜索关键词" id="inputId" v-model="searchTxt" @input="ss" />
    <list :man="man"></list>
  </div>
</template>

<script>
import list from "@/components/home/list";
export default {
    data() {
        return {
          searchTxt:"",
          man:[]
        };
    },  
    created() {

    },
    components:{
        list
    },
    mounted() {
       document.getElementById('inputId').focus()
    },
    methods: {
       ss(){
        //   console.log(this.searchTxt)
        if(this.searchTxt == ""){
            this.$router.push('/two')
            return false;
        }
           this.$axios("https://api.it120.cc/small4/shop/goods/list").then(
             res => {
            let arr = res.data.data
            this.man = arr.filter(item=>{
             return item.name.includes(this.searchTxt)
            })
          })
        }
       
    }
};
</script>

<style scoped>
</style>
