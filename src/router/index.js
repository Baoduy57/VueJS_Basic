import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Address from "@/views/Address.vue";
import AboutUser from "@/views/AboutUser.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
      children: [
        {
          path: "user",
          name: "user",
          component: AboutUser,
        },
      ],
    },
    {
      path: "/address",
      name: "address",
      component: Address,
    },
  ],
});

export default router;
