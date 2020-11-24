import { createRouter, createWebHistory } from 'vue-router';
import Home from '../page/Home.vue';
import Signin from '../page/Signin.vue';
import Auction from '../page/Auction.vue';
import Room from '../page/Room.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/auction',
    name: 'Auction',
    component: Auction
  },
  {
    path: '/auction/room/:id',
    name: 'Room',
    component: Room
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
