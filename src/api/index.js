import request from './request'

const adminSelect = () => request({url:"peaceful/admin/select",method:"GET"});
const adminNew = (params) => request({url:"peaceful/admin/new",method:"GET",params:params});
const adminDelete = (params) => request({url:"peaceful/admin/delete",method:"GET",params:params});
const adminUpdate = (params) => request({url:"peaceful/admin/update",method:"GET",params:params});
const adminLogin = (params) => request({url:"peaceful/admin/login",method:"GET",params:params});
const chargeSelect = () => request({url:"peaceful/charge/select",method:"GET"});
const chargeNew = (params) => request({url:"peaceful/charge/new",method:"GET",params:params});
const chargeDelete = (params) => request({url:"peaceful/charge/delete",method:"GET",params:params});
const chargeUpdate = (params) => request({url:"peaceful/charge/update",method:"GET",params:params});
const healthSelect = () => request({url:"peaceful/health/select",method:"GET"});
const healthNew = (params) => request({url:"peaceful/health/new",method:"GET",params:params});
const healthDelete = (params) => request({url:"peaceful/health/delete",method:"GET",params:params});
const healthUpdate = (params) => request({url:"peaceful/health/update",method:"GET",params:params});
const mealSelect = () => request({url:"peaceful/meal/select",method:"GET"});
const mealNew = (params) => request({url:"peaceful/meal/new",method:"GET",params:params});
const mealDelete = (params) => request({url:"peaceful/meal/delete",method:"GET",params:params});
const mealUpdate = (params) => request({url:"peaceful/meal/update",method:"GET",params:params});
const userSelect = () => request({url:"peaceful/user/select",method:"GET"});
const userNew = (params) => request({url:"peaceful/user/new",method:"GET",params:params});
const userDelete = (params) => request({url:"peaceful/user/delete",method:"GET",params:params});
const userUpdate = (params) => request({url:"peaceful/user/update",method:"GET",params:params});
const workSelect = () => request({url:"peaceful/work/select",method:"GET"});
const workNew = (params) => request({url:"peaceful/work/new",method:"GET",params:params});
const workDelete = (params) => request({url:"peaceful/work/delete",method:"GET",params:params});
const workUpdate = (params) => request({url:"peaceful/work/update",method:"GET",params:params});

export {
    adminNew, adminSelect,adminDelete,adminUpdate,adminLogin,
    chargeNew,chargeSelect,chargeDelete,chargeUpdate,
    healthNew,healthSelect,healthDelete,healthUpdate,
    mealNew,mealSelect,mealDelete,mealUpdate,
    userNew,userSelect,userDelete,userUpdate,
    workNew,workSelect,workDelete,workUpdate
}
