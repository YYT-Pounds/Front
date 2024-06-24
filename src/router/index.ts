import {RouteRecordRaw} from "vue-router";

/**
 * 路由
 */
const routerList: RouteRecordRaw[] = [
    {
        path: "/cockpit",
        name: "cockpit",
        component: () => import("@/pages/cockpit/index.vue"),
        meta: {
            title: "驾驶舱",
            icon: "Edit"
        }
    },
    {
        path: "/staff",
        name: "staff",
        component: () => import("@/pages/staff/index.vue"),
        meta: {
            title: "人员管理",
            icon: "Edit"
        }
    },
    {
        path: "/customer",
        name: "customer",
        component: () => import("@/pages/customer/index.vue"),
        meta: {
            title: "客户管理",
            icon: "Edit"
        }
    },
    {
        path: "/code-rule",
        name: "code-rule",
        component: () => import("@/pages/code-rule/index.vue"),
        meta: {
            title: "编码规则",
            icon: "Edit"
        }
    }
]

export default routerList