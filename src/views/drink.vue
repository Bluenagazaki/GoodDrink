<template>
  <div id="drink">

    <div class="image">
      <img :src="item.strDrinkThumb" alt="">
    </div>

    <div class="desc">
      <h3 class="title">
        <button type="button" name="button" @click="toggleFav">
          <font-awesome-icon :icon="['fal', 'star']" v-if="!isFav"/>
          <font-awesome-icon :icon="['fas', 'star']" v-if="isFav"/>
        </button>
        {{item.strDrink}}</h3>
      <p class="category">{{item.strCategory}} - {{item.strAlcoholic}}</p>

      <p class="glass">{{item.strGlass}}</p>

      <ul class="ingredients">
        <li v-for="ingredient in ingredients">
          <img :src="ingredient.image" alt="">
          {{ingredient.name}}
          -
          {{ingredient.measure}}
        </li>
      </ul>

      <p class="instructions">{{item.strInstructions}}</p>

    </div>









    <!-- <div>{{item}}</div>
    <button @click="toggleFav">
    <p v-if="!isFav">Favoris</p>
    <p v-if="isFav">Enlever</p>
  </button> -->


</div>
</template>
<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'Drink',
  data() {
    return {
      item: null,
    };
  },

  created() {
    this.$store.dispatch('getItem', this.$route.params.id)
    .then((rep) => {
      this.item = rep;
    });
  },

  computed: {
    isFav() {
      const id = this.item.idDrink;
      return this.$store.state.favs.includes(id);
    },
    ingredients() {
      let ret = [

      ];

      for (let i = 1; i <= 15; i++) {
        ret.push({
          name: this.item['strIngredient' + i],
          measure: this.item['strMeasure' + i],
          image: 'https://www.thecocktaildb.com/images/ingredients/' + this.item['strIngredient' + i] + '-Small.png',
        });
      }

      ret = ret.filter((el) => {
        return el.name != null;
      });

      return ret;
    },
  },

  methods: {
    toggleFav() {
      const id = this.item.idDrink;
      this.$store.dispatch('toggleFav', id);
    },
  },
});
</script>
