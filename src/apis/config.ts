import request from './request'

const axiosConfig = () => request({url: '/public/config/base.json', method: 'GET'})

export {
    axiosConfig
}