import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

import login from '@/frame/pages/login/index.vue'
import index from "@/frame/pages/index/index.vue"
import routerList from '@/router/index.ts'
import token from "@/frame/apis/token.ts";
import request from "@/frame/apis/request.ts";
import {ElMessage} from "element-plus";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: "/login"
    },
    {
        path: "/login",
        name: "login",
        component: login,
        meta: {
            title: "登录"
        }
    },
    {
        path: "/index",
        name: "index",
        component: index,
        meta: {
            title: "安沁"
        },
        children: routerList
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

router.beforeEach(async (to, from, next) => {
    next()
    return
    //登录页不鉴权
    // if (to.name === "login") {
    //     next()
    //     return
    // }
    // const tokenValue = token.get()
    // if (tokenValue) {
    //     try {
    //         //校验token
    //         const result = await request.get("")
    //         //进行判断token有效性，再存入token，无效则跳登录页
    //         if (result) {
    //             next()
    //             ElMessage.success("已为您自动登录")
    //             return
    //         } else {
    //             next({name: "login"})
    //             token.remove()
    //             ElMessage.error("登录失效，请重新登录")
    //             return
    //         }
    //     } catch (err) {
    //         next(false)
    //         token.remove()
    //         ElMessage.error("登录失效，请重新登录")
    //         return
    //     }
    // } else {
    //     //无token，跳转登录页
    //     next({name: "login"})
    //     return
    // }
})

export default router;
