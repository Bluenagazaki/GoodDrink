<template>
  <div>
    <!-- <header>
      <h1>{{$route.name}}</h1>
    </header> -->
    <div>
      <button id="refreshRandom" class="button" @click='getItems'>Refresh</button>
      <div class="card-list">
        <card v-for="item in items" :key="item.idDrink" :item="item"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Drink from '@/models/Interfaces';
export default Vue.extend({
  name: 'Random',
  computed: {
    items(): Drink[] {
      return this.$store.getters.random;
    },
  },
  created() {
    this.getItems();
  },
  methods: {
    getItems(): void {
      this.$store.dispatch('getRandom');
    },
  },
});
</script>
