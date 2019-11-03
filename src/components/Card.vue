<template>

  <div class="card" @click="openItem">
    <img :src="item.strDrinkThumb" class="card-img-top" alt="...">
    <!-- <div class="img" :style="{backgroundImage: 'url(' + item.strDrinkThumb + ')'}"></div> -->
    <div class="card-body">
      <h5 class="card-title">{{item.strDrink}}</h5>
      <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
      <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
    </div>
  </div>

</template>

<script>
export default {
  name: 'Card',

  props: {
    item: Object,
  },

  data() {
    return {

    };
  },

  methods: {
    openItem(id) {
      const link = 'drink/' + this.item.idDrink;
      this.$router.push(link);
    },
  },

};
</script>
