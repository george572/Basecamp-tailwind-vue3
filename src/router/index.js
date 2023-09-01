import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/society',
      name: 'Society',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/politics',
      name: 'Politics',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/justice',
      name: 'Justice',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/business-economics',
      name: 'Business',
      component: () => import('../views/HomeView.vue'),
    },
  ],
});

export default router;
