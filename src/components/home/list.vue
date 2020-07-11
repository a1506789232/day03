<template>
  <div class="renqi">
      <p class="p">人气推荐&nbsp;></p>
    <ul>
      <li v-for="(item,index) in man" :key="index">
        <img :src="item.pic" alt />
        <div>
          <p>{{ item.name }}</p>
          <p style="color:#ccc;fontSize:12px">{{ item.characteristic }}</p>
          <p style="color:red">￥{{ item.minPrice }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["man"],
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.renqi {
  width: 100%;
  background-color: white;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 50%;
      padding: 10px;
      box-sizing: border-box;
      height: 278px;
      p {
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      img {
        width: 100%;
        height: 80%;
      }
      div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 20%;
      }
    }
  }
}
.p{
    height: 50px;
     background-color: white;
     text-align: center;
     line-height: 50px;
     margin-top: 10px;
     width: 100%;
}
</style>
