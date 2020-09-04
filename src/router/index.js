import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "甘特图",
    component: Home
  },
  {
    path: "/compare",
    name: "版本对比",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Compare.vue")
  },
  {
    path: "/doc",
    name: "文档",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Doc.vue")
  }
];

const router = new VueRouter({
  routes,
  linkExactActiveClass: 'active'
});

export default router;
