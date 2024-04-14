import {createRouter, createWebHashHistory} from "vue-router";

import index from "../pages/index/index.vue"
import login from "../pages/login/index.vue"
import menu from "../pages/menu/index.vue"
import context from "../pages/context/index.vue"
import home from "../component/home/index.vue"
import admin from "../component/admin/index.vue"
import user from "../component/user/index.vue"
import health from "../component/health/index.vue"
import work from "../component/work/index.vue"
import meal from "../component/meal/index.vue"
import charge from "../component/charge/index.vue"

const routes = [
    {
        path:"/",
        redirect:"/login"
    },
    {
        path: "/login",
        name:"login",
        component:login,
        meta:{
            title:"登录"
        }
    },
    {
        path:"/index",
        name:"index",
        component:index,
        meta:{
            title:"导航"
        }
    },
    {
        path: "/menu",
        name:"menu",
        component:menu,
        meta:{
            title:"菜单"
        }
    },
    {
        path:"/context",
        name:"context",
        component: context,
        redirect: "/home",
        children:[
            {
                path:"/home",
                name:"home",
                component:home,
                meta:{
                    title:"首页"
                }
            },
            {
                path:"/admin",
                name:"admin",
                component: admin,
                meta:{
                    title:"人员管理"
                }
            },
            {
                path: "/user",
                name:"user",
                component: user,
                meta:{
                    title:"用户管理"
                }
            },
            {
                path: "/health",
                name:"health",
                component: health,
                meta:{
                    title:"健康管理"
                }
            },
            {
                path: "/work",
                name:"work",
                component: work,
                meta:{
                    title:"工单管理"
                }
            },
            {
                path: "/meal",
                name:"meal",
                component: meal,
                meta:{
                    title:"餐饮管理"
                }
            },
            {
                path: "/charge",
                name:"charge",
                component: charge,
                meta:{
                    title:"餐饮管理"
                }
            }
        ]
    }
]

const router = createRouter({
    mode:"history",
    history:createWebHashHistory(),
    routes:routes
})

export default router;
