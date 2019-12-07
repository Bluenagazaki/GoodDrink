<template>
  <div>
    <!-- <header>
      <h1>{{$route.name}}</h1>
    </header> -->

    <!-- <ul>
    <li v-for="item in favs" :key="item.idDrink">
    {{item}}
  </li>
</ul> -->
<div class="card-list">
  <card v-for="item in favs" :key="item.idDrink" :item="item"/>
</div>

</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Drink from '@/models/Interfaces';
export default Vue.extend({
  name: 'List',
  computed: {
    favs(): Drink[] {
      return this.$store.getters.favs;
    },
  },
  methods: {
    getItem(id: string): void {
      this.$store.dispatch('getItem', id)
      .then((rep: Drink) => {
        this.favs.push(rep);
      });
    },
  },
});
</script>
