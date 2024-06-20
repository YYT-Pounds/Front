(function (window) {
    class Promise {
        PromiseState: string
        PromiseResult: any

        constructor(executor: any) {
            this.PromiseState = 'pending'
            this.PromiseResult = undefined
            executor()

            const _resolve = (value: any) => {
                if (this.PromiseState === 'pending') {
                    this.PromiseState = 'fulfilled'
                    this.PromiseResult = value
                }
            }

            const _reject = (value: any) => {
                if (this.PromiseState === 'pending') {
                    this.PromiseState = 'rejected'
                    this.PromiseResult = value
                }
            }

            try {
                executor(_resolve, _reject)
            } catch (err) {

            }
        }

        then(onFulfilled: any, onRejected: any) {
            if (!(onFulfilled instanceof Function)) onFulfilled = (value: any) => value
            if (!(onFulfilled instanceof Function)) onRejected = (reason: any) => {
                throw reason
            }
            return new Promise((resolve: any, reject: any) => {
                const _common = function (this: any, callback: any) {
                    setTimeout(() => {
                        try {
                            const value: any = callback(this.PromiseResult)
                            if (value instanceof Promise) {
                                value.then(resolve, reject)
                            } else {
                                resolve(value)
                            }
                        } catch (err) {
                            reject(err)
                        }
                    })
                }
                if (this.PromiseState === 'fulfilled') _common.call(this, onFulfilled)
                else if (this.PromiseState === 'rejected') _common.call(this, onRejected)
            })
        }
    }
})(window)

