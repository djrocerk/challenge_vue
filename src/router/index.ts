import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../components/Home/Home.vue";
import TaskEdit from "../components/TaskEdit/TaskEdit.vue";
import LoginView from "../components/Login/Login.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/tasks",
    name: "tasks",
    redirect: "/",
  },
  {
    path: "/task/:id",
    name: "task_edit",
    component: TaskEdit,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== "login") {
    if (!localStorage.getItem("user")) {
      next({ name: "login" });
    } else next();
  } else {
    if (localStorage.getItem("user")) {
      next({ name: "home" });
    } else next();
  }
});

export default router;
