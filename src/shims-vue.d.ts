import {ComponentCustomProps, DefineComponent} from "vue"

declare module 'vue' {
    interface GlobalComponents {
        IntrinsicElements: Record<string, any>;
    }

    const components: DefineComponent<{}, {}, any>
    export default components
}