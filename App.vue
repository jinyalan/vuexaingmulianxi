<template>
  <div id="app">
    <!-- <a href="/">首页</a>
    <a href="/page">首页</a> -->
    <router-link to="/" exact>首页</router-link>
    <router-link to="/page" active-class="pagestyle">page页面</router-link>
    <!-- <router-link to="/work" active-class="pagestyle">work页面</router-link>
    <router-link to="/first">first页面</router-link> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
.router-link-active{
  background-color: purple;
}
.pagestyle{
  font-weight: bold;
}
.nav{
  font-size: 26px;
  background-color: aqua;
}
</style>
