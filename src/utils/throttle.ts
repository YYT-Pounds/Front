/**
 * 节流
 */
function throttle(fn: Function, interval: number) {
    let lastTime = 0
    let timer: NodeJS.Timer | null = null
    return function (this: any, args: object) {
        const now = Date.now()
        if (now - lastTime > interval) {
            fn.call(this, args);
            lastTime = now;
        } else if (!timer) {
            timer = setTimeout(() => {
                fn.call(this, args);
                lastTime = Date.now()
                timer = null;
            }, interval - (now - lastTime))
        }
    }
}

export default throttle