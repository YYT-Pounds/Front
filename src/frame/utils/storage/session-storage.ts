/**
 * 浏览器缓存
 */
class SessionStorage {
    name: string

    constructor(name: string) {
        this.name = name
    }

    get() {
        return sessionStorage.getItem(this.name)
    }

    set(value: any) {
        sessionStorage.setItem(this.name, value)
    }

    remove() {
        sessionStorage.removeItem(this.name)
    }
}

export default SessionStorage