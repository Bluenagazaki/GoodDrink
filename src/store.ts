import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    favs: JSON.parse(localStorage.getItem('favs')) || [],
  },
  mutations: {

  },
  actions: {

    init() {
      axios.defaults.baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/';
    },

    getRandom() {
      return new Promise((resolve) => {
        const url = 'random.php';
        axios({
          url,
          method: 'GET',
        })
        .then((rep) => {
          const temp = rep.data.drinks[0];
          resolve(temp);
        });
      });
    },

    getItem({}, id) {
      return new Promise((resolve) => {
        const url = 'lookup.php?i=' + id;
        axios({
          url,
          method: 'GET',
        })
        .then((rep) => {
          const temp = rep.data.drinks[0];
          resolve(temp);
        });
      });
    },

    search({}, searchValue) {
      return new Promise((resolve) => {
        const url = 'search.php?s=' + searchValue;
        axios({
          url,
          method: 'GET',
        })
        .then((rep) => {
          const temp = rep.data.drinks;
          resolve(temp);
        });
      });
    },

    toggleFav({}, id) {
      let favs = this.state.favs;
      if (favs.includes(id)) {
        favs.splice(favs.indexOf(id), 1);
      } else {
        favs.push(id);
      }
      favs = JSON.stringify(favs);
      localStorage.setItem('favs', favs);
    },
  },
});
