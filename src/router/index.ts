import {createRouter, createWebHashHistory} from "vue-router";

import index from "../pages/index/index.vue";

const routes = [
    {
        path: "/",
        redirect: "/index"
    },
    {
        path: "/index",
        name: "index",
        component: index,
        meta: {
            title: "驾驶舱",
            icon: "Plus"
        }
    },
    {
        path: "/index",
        name: "index",
        component: index,
        meta: {
            title: "驾驶舱",
            icon: "Edit"
        }
    },
    {
        path: "/index",
        name: "index",
        component: index,
        meta: {
            title: "驾驶舱",
            icon: ""
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router;
