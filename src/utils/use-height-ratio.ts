/**
 * 大屏自适应屏幕比例
 */
import {onUnmounted, ref} from "vue"
import debounce from "@/utils/debounce.ts";

/**
 * 获取自适应大小
 */
function useHeightRatio(BASE_RATIO: number) {
    let ratio = ref(1)
    const resize = () => {
        /**
         * 客户端的宽高比
         */
        const clientRatio = document.body.clientWidth / document.body.clientHeight
        /**
         * 获取宽高比值
         */
        ratio.value = clientRatio / BASE_RATIO
    }
    /**
     * 初始化时执行一次
     */
    resize()
    /**
     * 加入防抖
     */
    const debounceResize = debounce(resize, 100)
    /**
     * 监听
     */
    onUnmounted(() => {
        window.removeEventListener('resize', debounceResize)
    })
    return ratio
}

export default useHeightRatio