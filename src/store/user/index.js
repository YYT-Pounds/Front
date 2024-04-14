import {getUserState, setUserState} from "../../util/stroge";
import {adminLogin} from "../../api";

const actions = {
    async login(context,value){
        await adminLogin({...value}).then(async result =>{
            if (result.status === 200) {
                if (result.data === "Normal") {
                    context.commit("LOGIN_SUCCESS", {...value, loginState: true})
                } else if (result.data === "DataError") {
                    context.commit("FAIL", "账号或者密码错误")
                } else if (result.data === "DataFormatError") {
                    context.commit("FAIL", "账号或者密码格式错误")
                } else if (result.data === "EmptyError") {
                    context.commit("FAIL", "账号、密码为空");
                } else if (result.data === "DatabaseError") {
                    context.commit("FAIL", "数据库错误");
                } else if (result.data === "DataNotFoundError") {
                    context.commit("FAIL", "账号不存在，请验证");
                } else {
                    context.commit("FAIL", "服务器错误，请联系管理员");
                }
            }
        })
    }
};
const mutations = {
    LOGIN_SUCCESS(state,value){
        state.userState = value;
        setUserState(value);
    },
    LOGOUT(state){
        state.userState = {loginState:false};
        setUserState(state.userState);
    },
    FAIL(state,value){
        state.failCode = value;
    }
};
const state = {
    userState:getUserState() || {loginState:false},
    failCode:""
};

export default {
    actions,mutations,state
}
