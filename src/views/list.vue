<template>
  <div>
    <header>
      <!-- <h1>{{$route.name}}</h1> -->
    </header>

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
export default Vue.extend({
  name: 'List',

  data() {
    return {
      favs: [],
    };
  },
  computed: {

  },
  methods: {
    getItem(id) {
      this.$store.dispatch('getItem', id)
      .then((rep) => {
        this.favs.push(rep);
      });
    },
  },
  created() {
    const favs = this.$store.state.favs;
    for (const key in favs) {
      if (favs.hasOwnProperty(key)) {
        const element = favs[key];
        this.getItem(element);
      }
    }
  },
});
</script>
