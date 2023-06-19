import { createRouter, createWebHistory } from "vue-router";

import DashboardForms from "../layouts/DashboardForms/index.vue";
import Dashboard from "../layouts/Dashboard/index.vue";

const routes = createRouter({
  history: createWebHistory(""),
  routes: [
    {
      path: "",
      component: Dashboard,
      redirect: "home",
      children: [
        {
          path: "/home",
          name: "Home",
          component: () => import("../views/HomeViews.vue")
        },
        {
          path: "/profile",
          name: "Profile",
          component: () => import("../views/ProfileViews.vue")
        },
        {
          path: "/productos",
          name: "Productos",
          component: () => import("../views/Products.vue")
        },
        {
          path: "/compra",
          name: "Compra",
          component: () => import("../views/BuyViews.vue")
        },
        {
          path: "/comprar/:id",
          name: "Comprar",
          component: () => import("../views/PurchaseViews.vue")
        },
        {
          path: "/comprar/:id/compra-exitosa",
          name: "CompraExitosa",
          component: () => import("../views/BuyingSuccess.vue")
        },
        {
          path: "/crear",
          name: "Crear",
          component: () => import("../views/CreateViews.vue")
        },
        {
          path: "login",
          name: "Login",
          component: () => import("../views/LoginViews.vue")
        },
      ]
    },
    {
      path: "/",
      component: DashboardForms,
      children: [
        {
          path: "login",
          name: "Login",
          component: () => import("../views/LoginViews.vue")
        },
        {
          path: "register",
          name: "Register",
          component: () => import("../views/RegisterViews.vue")
        },
        {
          path: "send-email",
          name: "SendEmail",
          component: () => import("../views/SendEmailViews.vue")
        },
        {
          path: "recovery-password",
          name: "RecoveryPassword",
          component: () => import("../views/RecoveryPasswordViews.vue")
        }
      ]
    }
  ]
});

export default routes;
