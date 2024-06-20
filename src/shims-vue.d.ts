import {ComponentCustomProps} from "vue"

declare module 'vue' {
    interface GlobalComponents {
        IntrinsicElements: Record<string, any>;
    }
}