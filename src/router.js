import { createRouter, createWebHistory } from 'vue-router';
import Calendar from './views/Calendar-Site.vue';
import ToDoApp from './components/ToDoApp.vue';

const routes = [
  {
    path: '/',
    name: 'ToDo',
    component: ToDoApp,
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
