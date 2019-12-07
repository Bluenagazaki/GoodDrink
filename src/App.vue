<template>

  <div id="app">

    <my-header/>

    <div class="content">
      <router-view></router-view>
    </div>

  </div>

</template>

<script>
import '@/scss/style.scss';
import Vue from 'vue';
export default Vue.extend({
  watch: {
  $route(to, from) {
    document.title = to.meta.title || 'Your Website';
  },
},
  created() {
    this.$store.dispatch('init');
  },
});
</script>
