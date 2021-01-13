import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import MainMenu from "../views/MainMenu.vue";
import Rules from "../views/Rules.vue";
import Ingame from "../views/Ingame.vue";
import Scoreboard from "../views/Scoreboard.vue";
import Offline from "../views/Offline.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "MainMenu",
    component: MainMenu
  },
  {
    path: "/rules",
    name: "Rules",
    component: Rules
  },
  {
    path: "/ingame",
    name: "Ingame",
    component: Ingame
  },
  {
    path: "/scoreboard",
    name: "Scoreboard",
    component: Scoreboard
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
