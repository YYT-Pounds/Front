/**
 * 防抖
 * @param fn    传入的方法
 * @param interval  延迟
 */
function debounce(fn: Function, interval: number) {
    let flag = false
    return function (this: any, args: object) {
        if (flag) {
            return false
        }
        flag = true
        setTimeout(() => {
            fn.call(this, args)
            flag = false
        }, interval)
    }
}

export default debounce