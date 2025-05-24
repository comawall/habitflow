import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthView from "../views/AuthView.vue";
import MainMenu from "../views/MainMenu.vue";
import RegView from "../views/RegView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/auth', component: AuthView },
    { path: '/menu', component: MainMenu, meta: { requiresAuth: true } },
    { path: '/registration', component: RegView }
  ]
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !token) {
    next('/auth');
  } else {
    next();
  }
});

export default router;
