import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Input from '../views/Input.vue';
import Result from '../views/Result.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/input', component: Input },
  { path: '/result', component: Result },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
