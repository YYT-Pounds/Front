/**
 * 本地缓存
 */
class LocalStorage {
    name: string

    constructor(name: string) {
        this.name = name
    }

    get() {
        return localStorage.getItem(this.name)
    }

    set(value: any) {
        localStorage.setItem(this.name, value)
    }

    remove() {
        localStorage.removeItem(this.name)
    }
}

export default LocalStorage