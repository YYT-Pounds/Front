import {createRouter, createWebHashHistory} from "vue-router";

import index from "../pages/index/index.vue";
import customer from "../pages/customer/index.vue";
import department from "../pages/department/index.vue";

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
            title: "驾驶舱"
        }
    },
    {
        path: "/customer",
        name: "customer",
        component: customer,
        meta: {
            title: "客户管理"
        }
    },
    {
        path: "/department",
        name: "department",
        component: department,
        meta: {
            title: "部门管理"
        }
    }
]

const router = createRouter({
    mode: "history",
    history: createWebHashHistory(),
    routes: routes
})

export default router;
