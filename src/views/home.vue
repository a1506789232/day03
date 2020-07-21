<template>
    <div>
      <router-view></router-view>
        <!-- 尾部 -->
      <van-tabbar :fixed="true" route>
        <van-tabbar-item icon="home-o" to="/first">首页</van-tabbar-item>
        <van-tabbar-item icon="apps-o" to="/two">分类</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o" to="/shopcar">购物车</van-tabbar-item>
        <van-tabbar-item icon="user-o" to="/me">个人</van-tabbar-item>
      </van-tabbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
      active: 0,

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped>

</style>
