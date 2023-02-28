import { createRouter, createWebHistory } from "vue-router";

import Countries from "../views/countries/index.vue";
import Search from "../views/SearchView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Countries",
      component: Countries,
    },
    {
      path: "/search",
      name: "Search",
      component: Search,
    },
    /* {
      path: "/about",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    }, */
  ],
});

export default router;
