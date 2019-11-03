<template>
  <div>
    <header>
      <!-- <h1>{{$route.name}}</h1> -->
    </header>
    <div>
      <button class="button" @click='getItems'>Refresh</button>
      <div class="card-list">
        <card v-for="item in items" :key="item.idDrink" :item="item"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Random',

  data() {
    return {
      items: [],
    };
  },
  created() {
    this.getItems();
  },
  methods: {
    getItems() {
      this.items = [];
      for (let i = 1; i <= 14; i++) {
        this.$store.dispatch('getRandom')
        .then((rep) => {
          this.items.push(rep);
        });
      }
    },
  },
});
</script>
