import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import Header from './components/Header.vue';
import Card from './components/Card.vue';

import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faStar as faStarSolid,
} from '@fortawesome/pro-solid-svg-icons';

import {
  faStar,
  faCocktail,
  faBars,
} from '@fortawesome/pro-light-svg-icons';

library.add(
  faStarSolid,
  faStar,
  faCocktail,
  faBars,
);

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('card', Card);
Vue.component('my-header', Header);

Vue.config.productionTip = false;



new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
