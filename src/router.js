import { createRouter, createWebHistory } from 'vue-router';
import Calendar from './views/Calendar-Site.vue';

const routes = [
  {
    path: '/calendar', 
    name: 'Calendar',
    component: Calendar
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
