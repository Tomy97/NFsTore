import { createRouter, createWebHistory } from 'vue-router'

import DashboardNormal from '../layouts/DashboardNormal/index.vue'
import DashboardForms from '../layouts/DashboardForms/index.vue'

const routes = createRouter({
  history: createWebHistory(''),
  routes: [
    {
      path: '/home',
      component: DashboardNormal,
      children: [
        {
          path: '',
          name: 'Dashboard',
          component: () => import('../views/Home.vue'),
        },
      ],
    },
    {
      path: '/',
      component: DashboardForms,
      children: [
        {
          path: 'login',
          component: () => import('../views/Login.vue'),
        },
        {
          path: 'register',
          name: 'Register',
          component: () => import('../views/Register.vue'),
        },
      ],
    },
  ],
})

export default routes
