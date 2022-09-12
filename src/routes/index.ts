import { createRouter, createWebHistory } from "vue-router";

import DashboardNormal from "../layouts/DashboardNormal/index.vue";
import DashboardForms from "../layouts/DashboardForms/index.vue";

const routes = createRouter({
  history: createWebHistory(""),
  routes: [
    {
      path: "",
      component: DashboardNormal,
      children: [
        {
          path: "",
          name: "Dashboard",
          component: ( ) => import('../views/Home.vue')
        }
      ]
    },
    {
      path: "/login",
      component: DashboardForms,
      children: [
        {
          path: "",
          component: () => import("../views/Login.vue"),
        },
      ],
    },
  ],
});

export default routes;
