<template>
  <div id="mySidenav" class="sidenav">
    <a v-show='!toggleSidebar' @click="$store.dispatch('nav/toggleSidebar')" >&times;</a>
    <nuxt-link to="/" >Home</nuxt-link>
    <nuxt-link to="/" >About</nuxt-link>
    <nuxt-link to="/" >Services</nuxt-link>
  </div>
</template>

<script>
  export default {
      computed: {
          toggleSidebar() {
              return this.$store.getters['nav/toggleSidebar'];
          }
      }
  }
</script>

<style scoped>

  .sidenav {
    position: fixed;
    height: 100%;
    z-index: 1;
    top: 0;
    left: 0;
    width: 300px;
    padding-top: 30px;
    background-color: #00B4CC;
  }
  .sidenav a {
    display: block;
    padding-left: 15px;
    padding-bottom: 15px;
    cursor: pointer;
  }

</style>
