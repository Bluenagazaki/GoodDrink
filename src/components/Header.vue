<template>
  <header class="main-header">
    <router-link to="/"><h1 class="logo">GoodDrink</h1></router-link>
    <button class="burger" @click='toggleMenu'>
      <font-awesome-icon :icon="['fal', 'bars']"/>
    </button>
    <nav :class='{active: menu}'>
      <router-link to="/">Home</router-link>
      <router-link to="/random">Random</router-link>
      <router-link to="/list">Favorites</router-link>
      <router-link to="/search">Search</router-link>
    </nav>
  </header>
</template>


<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Header',
  data() {
    return {
      menu: false,
    };
  },
  created(): void {
    this.$router.beforeEach((to, from, next) => {
      this.menu = false;
      next();
    });
  },
  methods: {
    toggleMenu(): void {
      this.menu = !this.menu;
    },
  },
});

</script>


<style>


</style>
