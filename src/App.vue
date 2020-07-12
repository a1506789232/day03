<template>
  <div id="app">
    <router-view/>
     <loading></loading>
  </div>
</template>

<script>
import loading from "@/views/1/loading";
export default {
  name: 'App',
  data(){
    return {
    }
  },
  components:{
    loading
  }
}
</script>

<style>
*{margin: 0;padding: 0;list-style: none;}
html,body{
  width: 100%;
  /* height: 100%; */
}
ul{
  margin: 0;padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
  height: 100%;
}
</style>
