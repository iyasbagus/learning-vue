import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/Dashboard.vue";
import AboutView from "../views/About.vue";
import UserView from "../views/User.vue";
import UserDetailView from "../views/UserDetail.vue"

const routes = [
    { path: '', component: DashboardView },
    { path: '/about', component: AboutView },
    { path: '/user', component: UserView },
    { path: '/user/params', component: UserDetailView },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router