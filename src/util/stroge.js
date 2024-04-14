const getUserState = () =>{
    return JSON.parse(sessionStorage.getItem("user_state"));
}

const setUserState = (value) =>{
    sessionStorage.setItem("user_state", JSON.stringify(value))
}

export {
    getUserState,
    setUserState
}
