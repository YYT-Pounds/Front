/**
 * 防抖
 * @param fn    传入的方法
 * @param interval  延迟
 */
function debounce(fn: Function, interval: number) {
    let timer: any = null
    return function (this: any, args: object) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.call(this, args)
            timer = null
        }, interval)
    }
}

export default debounce