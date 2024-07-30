import request from "./request.ts"
import ProcessRequestInterface from "./constructor";

class ProcessRequest implements ProcessRequestInterface {
    get(url: string, data?: any) {
        return request({url: url, method: "GET", params: data})
    }

    post(url: string, data?: any) {
        return request({url: url, method: "post", params: data})
    }

    put(url: string, data?: any) {
        return request({url: url, method: "PUT", params: data})
    }

    delete(url: string, data?: any) {
        return request({url: url, method: "DELETE", params: data})
    }
}

export default ProcessRequest