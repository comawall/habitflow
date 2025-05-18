import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthView from "../views/AuthView.vue";
import MainMenu from "../views/MainMenu.vue";
import RegView from "../views/RegView.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: HomeView},
        {path: '/auth', component: AuthView},
        {path: '/menu', component: MainMenu},
        { path: '/registration', component: RegView }
     
    ]
})