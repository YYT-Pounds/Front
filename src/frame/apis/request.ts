import axios from 'axios'
import token from './token.ts'
import proxyUrl from "@/frame/config/api.ts";
import {ElMessage} from "element-plus";

const request = axios.create({
    baseURL: proxyUrl,
    headers: {
        'Authorization': token.get() === null ? "" : 'Bearer ' + token.get()
    },
    timeout: 5000,
})

request.interceptors.request.use((config) => {
    return config;
})

request.interceptors.response.use((res) => {
    return res.data.data;
}, (error) => {
    if (error.response) {
        if (error.response.status == 404) {
            ElMessage.error(`错误代码：${error.response.status}；错误信息：找不到接口！`)
        } else {
            ElMessage.error(`错误代码：${error.response.data.status}；错误信息：${error.response.data.errorMessage}！`)
        }
    }
    return Promise.reject(error);
})

export default request;