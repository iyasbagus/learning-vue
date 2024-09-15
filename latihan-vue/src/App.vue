<template>
  <div class="menu">
  <Navbar/>
  </div>

  <div class="main">
  <RouterView />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar
  }
}
</script>

<style>
  body{
    margin: 0;
  }
</style>

<style scoped>
  .menu {
    background-color: #eee;
    line-height: 2.5;
    padding: 10px;
  }
  .main{
    padding: 10px;
  }
</style>