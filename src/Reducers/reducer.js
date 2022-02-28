const initialState={
    username:"",
    userId:"",
    loggedIn:false,
    selectedCategory:"",
    selectedProduct:null
}

const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case "LOGIN" :  return {
                            ...state,
                            username:action.username,
                            userId:action.userId,
                            loggedIn:true 
                        }
        case "LOGOUT" : return initialState
       
        default: return state;
    }
}


export default authReducer;