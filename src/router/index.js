import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
]

const router = createRouter({
    mode:"history",
    history:createWebHashHistory(),
    routes:routes
})

export default router;
