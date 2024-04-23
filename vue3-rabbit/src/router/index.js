// createRouter 创建router实例对象
// createWebHistory 创建history模式的路由
import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login/index.vue"; // 登录页
import Layout from "@/views/Layout/index.vue"; // 首页
import Home from "@/views/Home/index.vue"; // 首页
import Category from "@/views/Category/index.vue"; // 首页
import SubCategory from "@/views/SubCategory/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "",
          component: Home,
        },
        {
          path: "Category/:id",
          component: Category,
        },
        {
          path: "category/sub/:id",
          component: SubCategory,
        },
      ],
    },
    {
      path: "/login",
      component: Login,
    },
  ],
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
