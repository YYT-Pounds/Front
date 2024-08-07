declare module '*.vue' {
    import {DefineComponent} from "vue"
    const component: DefineComponent<{}, {}, any>
    export default component
}

declare module 'element-plus/es/locale/lang/zh-cn.mjs'