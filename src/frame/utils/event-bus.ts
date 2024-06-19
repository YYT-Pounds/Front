/**
 * 创建全局事件总线
 */
export const eventBus = {
    /**
     * 事件存储
     */
    events: new Map(),
    /**
     * 设置值
     * @param name
     * @param value
     */
    set(name: string, value: object) {
        this.events.set(name, value)
    },
    /**
     * 获取值
     */
    get(name: string) {
        return this.events.get(name)
    }
}

/**
 * 暴露
 */
export default eventBus