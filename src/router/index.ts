import cockpit from "@/pages/cockpit/index.vue";
import {RouteRecordRaw} from "vue-router";

/**
 * 路由
 */
const routerList: RouteRecordRaw[] = [
    {
        path: "/index/cockpit",
        name: "cockpit",
        component: cockpit,
        meta: {
            title: "驾驶舱",
            icon: "Edit"
        }
    }
]

export default routerList