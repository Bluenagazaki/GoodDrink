import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    favs: JSON.parse(localStorage.getItem('favs')) || [],
    random: [],
    search: [],
    currentItem: {},
  },
  getters: {

    random: (state) => state.random,
    search: (state) => state.search,
    favs: (state) => state.favs,
    currentItem: (state) => state.currentItem,
    isFav: (state) => (id) => {
      return !!state.favs.find((search) => search.idDrink === id);
    },

  },
  mutations: {

    current(state, item) {
      state.currentItem = item;
    },

    search(state, search) {
      state.search = search;
    },

    random(state, random) {
      if (typeof random === 'object') {
        state.random.push(random);
      } else {
        state.random = [];
      }
    },

    fav(state, item) {
      if (!state.favs.find((search) => search.idDrink === item.idDrink)) {
        state.favs.push(item);
      } else {
        const key = state.favs.map((el) => el.idDrink).indexOf(item.idDrink);
        state.favs.splice(key, 1);
      }
      localStorage.setItem('favs', JSON.stringify(state.favs));
    },

  },
  actions: {

    init() {
      axios.defaults.baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/';
    },

    getRandom({commit}) {
      commit('random');
      for (let i = 1; i <= 16; i++) {
        axios({
          url: 'random.php',
          method: 'GET',
        })
        .then((rep) => {
          commit('random', rep.data.drinks[0]);
        });
      }
    },

    getItem({commit}, id) {
      commit('current', {});
      const url = 'lookup.php?i=' + id;
      axios({
        url,
        method: 'GET',
      })
      .then((rep) => {
        commit('current', rep.data.drinks[0]);
      });
    },

    search({commit}, searchValue) {
      if (searchValue !== '') {
        const url = 'search.php?s=' + searchValue;
        axios({
          url,
          method: 'GET',
        })
        .then((rep) => {
          commit('search', rep.data.drinks);
        });
      } else {
        commit('search', []);
      }
    },

    toggleFav({commit}, item) {
      commit('fav', item);
    },
  },
});
