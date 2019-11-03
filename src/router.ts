import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home.vue';
import List from './views/list.vue';
import Random from './views/random.vue';
import Search from './views/search.vue';
import Drink from './views/drink.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        title: 'GoodDrink - Home',
      },
    },
    {
      path: '/list',
      name: 'Favorites',
      component: List,
      meta: {
        title: 'GoodDrink - Favorites',
      },
    },
    {
      path: '/random',
      name: 'Random',
      component: Random,
      meta: {
        title: 'GoodDrink - Random',
      },
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      meta: {
        title: 'GoodDrink - Search',
      },
    },
    {
      path: '/drink/:id',
      name: 'Info',
      component: Drink,
      meta: {
        title: 'GoodDrink - Info',
      },
    },
  ],
});
