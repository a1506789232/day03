<template>
  <div>
    <!-- 搜索框 -->
    <van-search placeholder="请输入搜索关键词" @focus="search1"/>
    <!-- 内容部分 -->
    <van-tree-select height="85vh" :items="items" :main-active-index.sync="active">
      <template #content>
        <ul>
          <li v-for="(item,index) in fenleiList" :key="index" @click="jump(item)">
                <div>
                   <img :src="item.icon" alt />
                </div>
                <p>{{ item.name }}</p>
          </li>
        </ul>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 选项卡下标
      active: 0,
      //   分类
      items: [{ text: "所有商品" }],
      //   全部数据
      list: [],
      //数据的pid
      listId: [0]
    };
  },
  created() {},
  computed: {
    fenleiList() {
      return this.list.filter(item => {
        if (this.active == 0) {
          return this.list;
        }
        return this.listId[this.active] == item.pid;
      });
    }
  },
  mounted() {
    this.fen();
  },
  methods: {
    // 请求数据
    fen() {
      this.$axios("https://api.it120.cc/small4/shop/goods/category/all").then(
        res => {
          console.log(res.data.data);
          this.list = res.data.data;
          //   pid是高级分类
          this.list.forEach(item => {
            if (item.pid == 0) {
              this.items.push({ text: item.name });
              this.listId.push(item.id);
            }
          });
        }
      );
    },
    jump(item){
        console.log(item.id)
        this.$router.push({
            path:'/fenleiX',
            query:{id:item.id}
        })
    },
    search1(){
        this.$router.push('/search')
    }
  }
};
</script>

<style scoped lang="scss">
ul {
  display: flex;
  flex-wrap: wrap;
  li {
    width: 30%;
    height: 100px;
    div {
        height: 80%;
      img {
        width: 100%;
      }
    }

    p {
      text-align: center;
    }
  }
}
</style>
