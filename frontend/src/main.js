import { createApp } from 'vue';
import Vuex from 'vuex';
import store from './store';
import router from './router';
import App from './App.vue';

createApp(App)
  .use(Vuex)
  .use(store)
  .use(router)
  .mount('#app');
