import axios from 'axios'
import token from './token.ts'
import production from "@/frame/config/api/api.ts";
import {ElMessage} from "element-plus";

const request = axios.create({
    baseURL: production,
    headers: {
        'Authorization': 'Bearer ' + token.get()
    },
    timeout: 5000,
})

request.interceptors.request.use((config) => {
    return config;
})

request.interceptors.response.use((res) => {
    return res.data.data;
}, (error) => {
    ElMessage.error(`错误代码：${error.response.data.status}；错误信息：${error.response.data.errorMessage}！`)
    return Promise.reject(error);
})

export default request;