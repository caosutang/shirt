<template>
<div>
  <header class="nav" v-bind:style="toggleSidebar ? 'left: 0px': 'left: 300px' ">
    <div v-if="toggleSidebar" style="font-size:25px;cursor:pointer;padding-right:10px;padding-left:5px;padding-top: 5px" @click="$store.dispatch('nav/toggleSidebar')">&#9776; </div>
    <img src="~/assets/img/sprd-logo_horizontal.svg" alt="Insert picture" height="50px" >
    <div class="col-12 col-md-5">
      <div class="wrap">
        <div class="search">
          <input type="text" class="searchTerm" placeholder="What are you looking for?">
          <button type="submit" class="searchButton">
            <i class="fa fa-search"></i>
          </button>

        </div>
      </div>
    </div>
    <div class="tools">
      <nuxt-link to="/" class="wishList">
        <i class="fa fa-heart"></i>
      </nuxt-link>

      <nuxt-link to="/" class="cart">
        <i class="fa fa-shopping-bag" ></i>
      </nuxt-link>

      <nuxt-link to="/" class="SignIn">
        <i class="fa fa-user" ></i>
      </nuxt-link>
      <div v-if="!toggleSidebar">
        <AppLinks/>
      </div>

    </div>

  </header>

</div>

</template>

<script>
  import AppLinks from "~/components/AppLinks";
  export default {
      components: {
          AppLinks
      },
      computed: {
          toggleSidebar() {
              return this.$store.getters['nav/toggleSidebar'];

          }
      }
  }
</script>

<style scoped>

  init {

  }

  .nav {
    padding-top: 1rem;
    background-color: #c4bda9;
    padding-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 5rem;
    position: relative;
  }

  a {
    color: #111111;
  }

  .search {
    width: 100%;
    position: relative;
    display: flex;
  }

  .searchTerm {
    width: 100%;
    border: 3px solid #00B4CC;
    border-right: none;
    padding: 5px;
    height: 100%;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: #9DBFAF;
  }

  .searchTerm:focus{
    color: #00B4CC;
  }

  .searchButton {
    width: 100px;
    border: 1px solid #00B4CC;
    background: #00B4CC;
    text-align: center;
    color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
  }

  .tools{
    position: fixed;
    cursor: pointer;
    top: 25px;
    width: 50px;
    height: 50px;
    right: 5rem;
  }

  .SignIn{
    position: absolute;
    right: 3rem;
  }

  .cart {
    position: absolute;
    right: 6rem;
  }

  .wishList {
    position: absolute;
    right: 9rem;
  }

  .fa {
    font-size: 25px;
  }

  /*Resize the wrap to see the search bar change!*/
  .wrap{
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }


  .slide-side-enter-active,
  .slide-side-leave-active {
    transition: all 0.3s ease-out;
  }
  .slide-side-enter,
  .slide-side-leave-to {
    transform: translateX(-100%);
  }

</style>
