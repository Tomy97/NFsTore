import { createRouter, createWebHistory } from "vue-router";

import DashboardForms from "../layouts/DashboardForms/index.vue";
import Dashboard from "../layouts/Dashboard/index.vue";

const routes = createRouter({
  history: createWebHistory(""),
  routes: [
    {
      path: "",
      component: Dashboard,
      children: [
        {
          path: "/home",
          name: "Home",
          component: () => import("../views/Home.vue"),
        },
        {
          path: "/profile",
          name: "Profile",
          component: () => import("../views/Profile.vue"),
        },
        {
          path: "comprar",
          name: "Comprar",
          component: () => import("../views/Purchase.vue"),
        },
      ],
    },
    {
      path: "/",
      component: DashboardForms,
      children: [
        {
          path: "login",
          name: "Login",
          component: () => import("../views/Login.vue"),
        },
        {
          path: "register",
          name: "Register",
          component: () => import("../views/Register.vue"),
        },
        {
          path: "send-email",
          name: "SendEmail",
          component: () => import("../views/SendEmail.vue"),
        },
        {
          path: "recovery-password",
          name: "RecoveryPassword",
          component: () => import("../views/RecoveryPassword.vue"),
        },
      ],
    },
  ],
});

export default routes;
