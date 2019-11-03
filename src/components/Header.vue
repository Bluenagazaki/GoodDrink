<template>
<header class="main-header">
  <router-link to="/home"><h1 class="logo">GoodDrink</h1></router-link>
    <nav>
        <router-link to="/home">Home</router-link>
        <router-link to="/random">Random</router-link>
        <router-link to="/list">Favorites</router-link>
        <router-link to="/search">Search</router-link>
    </nav>
</header>
</template>


<script>
export default {
name: 'Header',

 };

</script>


<style>


</style>
