export const login=(user,userid)=>{
    return {
        type: "LOGIN",
        username: user,
        userId: userid
    }
}

export const logout=()=>{
    return {
        type: "LOGOUT"
    }
}

