<template>
  <div class="box">

    <!-- 搜索框 -->
    <van-search placeholder="请输入搜索关键词" id="inputId" v-model="searchTxt" @input="ss" @keydown.enter="sousuo"> 
        <template #left>
            <van-icon name="arrow-left" size="20" @click="back"></van-icon>
        </template>
    </van-search>
    <!-- 历史记录 -->
    <div class="history" v-if="isadmin">
        <p>
          <span>历史记录</span>
          <van-icon name="delete" color="#1989fa" @click="rem"/>
        </p>
        <ul>
          <li v-for="(item,index) in historyList" :key="index">
            {{ item }}
          </li>
        </ul>
    </div>
    <list :man="man" v-else></list>
  </div>
</template>

<script>
import storage from '@/utils/local'
import list from "@/components/home/list";
export default {
    data() {
        return {
          searchTxt:"",
          man:[],
          //历史记录
          historyList:[],
          //渲染数据
          list:[],
          //历史记录显示隐藏
          isadmin:true
        };
    },  
    created() {
    },
    components:{
        list
    },
    mounted() {
       document.getElementById('inputId').focus()
       this.getList()

    },
    methods: {
       ss(){
        if(this.searchTxt == ""){
            this.man = []
            this.isadmin = true
            return false;
        }
        this.isadmin = false
           this.$axios("https://api.it120.cc/small4/shop/goods/list").then(
             res => {
            let arr = res.data.data
            this.man = arr.filter(item=>{
             return item.name.includes(this.searchTxt)
            })
          })
        },
        back(){
          this.$router.back()
        },
        getList(){  //获取本地数据
             let data = storage.get('yx-search',true)
             this.historyList = (data == null ? [] : data) //如果本地数据为空
             console.log(this.historyList)
        }
        ,
        sousuo(){  //写入本地
          if(this.searchTxt == ""){
            return false;
          }
          this.historyList.unshift(this.searchTxt)  //将数据写入数组前面

          if(this.historyList.length >8){   
            this.historyList.pop()
          }
             
          storage.set('yx-search',this.historyList,true)
        },
        rem(){
           storage.remove('yx-search')
           this.getList()
        }

    }
};
</script>

<style scoped lang="scss">
.history{
  width: 90%;
  height: 200px;
  margin: 0 auto;
  p{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ul{
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    flex-wrap: wrap;
    li{
      line-height: 30px;
      width: 60px;
      text-align: center;
      background-color: #f0f0f0;
      border-radius: 8px;
    }
  }
}
</style>
