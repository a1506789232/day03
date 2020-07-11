<template>
    <div>
      <router-view></router-view>
        <!-- 尾部 -->
      <van-tabbar v-model="active" :fixed="true">
        <van-tabbar-item icon="home-o"><router-link to="/" style="color:black">首页</router-link></van-tabbar-item>
        <van-tabbar-item icon="apps-o"><router-link to="/two" style="color:black">分类</router-link></van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o"><router-link to="/three" style="color:black">购物车</router-link></van-tabbar-item>
        <van-tabbar-item icon="user-o"><router-link to="/four" style="color:black">个人</router-link></van-tabbar-item>
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
