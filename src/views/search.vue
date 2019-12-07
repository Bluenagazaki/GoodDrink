<template>
  <div>
    <header>
      <!-- <h1>{{$route.name}}</h1> -->
      <!-- <input type="search" v-model="search" @keyup.enter="searchItems"> -->
      <div class="searchbar">
        <input type="search" id="searchbar-input" placeholder="Search a cocktail" v-model="search" @keyup="searchItems">
        <button @click="searchItems" class="icon">
          <font-awesome-icon :icon="['fal', 'cocktail']"/>
        </button>

        <!-- <button @click='searchItems'>Rechercher</button> -->

      </div>
    </header>

    <div class="card-list">
      <card v-for="item in items" :key="item.idDrink" :item="item"/>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Drink from '@/models/Interfaces';
export default Vue.extend({
  name: 'Search',
  data() {
    return {
      search: '',
    };
  },
  computed: {
    items(): Drink[] {
      return this.$store.getters.search;
    },
  },
  mounted(): void {
    document.getElementById('searchbar-input').focus();
  },
  methods: {
    searchItems(): void {
      if (this.search !== '') {
        this.$store.dispatch('search', this.search);
      } else {
        this.$store.dispatch('search', '');
      }
    },
  },
});
</script>
