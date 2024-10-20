import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/HomeView.vue";
import Contact from "../views/Contact.vue";
import LoginPage from "../views/Login.vue";
import Services from "../views/Services.vue"
import Promotions from "../views/Promotions.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "LandingPage",
      component: LandingPage,
    },
    {
      path: "/promotions",
      name: "Promotions",
      component: Promotions,
    },
    {
      path: "/services",
      name: "Services",
      component: Services,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
