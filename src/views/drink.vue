<template>

  <div id="drink" v-if="true">

    <div class="image">
      <img :src="item.strDrinkThumb" alt="">
    </div>

    <div class="desc">
      <h3 class="title">
        <button class="favBtn" @click="toggleFav">
          <font-awesome-icon :icon="['fal', 'star']" v-if="!isFav"/>
          <font-awesome-icon :icon="['fas', 'star']" v-if="isFav"/>
        </button>
        <span class="drinkName">{{item.strDrink}}</span>
        </h3>
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

    </div>
  </template>

  <script lang="ts">
  import Vue from 'vue';
  import Drink from '@/models/Interfaces';
  export default Vue.extend({
    name: 'Drink',
    created() {
      this.$store.dispatch('getItem', this.$route.params.id);
    },
    computed: {
      item(): Drink {
        return this.$store.getters.currentItem;
      },
      isFav(): boolean {
        const id = this.item.idDrink || null;
        return this.$store.getters.isFav(id);
      },
      ingredients(): object[] {
        let ret = [];

        for (let i = 1; i <= 15; i++) {
          ret.push({
            name: this.item['strIngredient' + i],
            measure: this.item['strMeasure' + i],
            image: 'https://www.thecocktaildb.com/images/ingredients/' + this.item['strIngredient' + i] + '-Small.png',
          });
        }

        ret = ret.filter((el: Drink) => {
          return el.name != null;
        });

        return ret;
      },
    },
    methods: {
      toggleFav() {
        this.$store.dispatch('toggleFav', this.item);
      },
    },
  });
  </script>
