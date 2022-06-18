import { createWebHistory, createRouter } from "vue-router";
import HellowWorld from "../components/HelloWorld.vue";
import Logout from "../components/Logout.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HellowWorld,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;