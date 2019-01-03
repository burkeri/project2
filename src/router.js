import Vue from "vue";
import Router from "vue-router";

// Landing Pg
import Home from "./views/Home.vue";
// Register
import Register from "./views/Register";
// Login
import Login from "./views/Login";
// Search
import Search from "./views/Search";
// Route
// Info
// On Route
// Arrived
// End
// Post Review

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/search",
      name: "search",
      component: Search
    },
    {
      path: "/info",
      name: "info",
      component: Info
    }
  ]
});
