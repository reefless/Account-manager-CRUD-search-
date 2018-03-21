<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <headerNav/>
    <router-view></router-view>
  </div>
</template>
<script>
  import index from './components/index.vue'
  import headerNav from './components/headerNav.vue'
  export default {
    name: 'app',
    components: {
      index,
      headerNav
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
  }
</style>
