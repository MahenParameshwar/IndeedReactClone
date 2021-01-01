import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"

const initState = {
    isAuth:false,
    isLoading:false,
    isError:false,
    errorMsg:"",
    loggedUser: {
        
      }
}

export const loginReducer = (state=initState,{type,payload})=>{
    switch (type){
        case LOGIN_REQUEST: return {
            ...state,
            isLoding:true
        };
        case LOGIN_SUCCESS: return {
            ...state,
            isAuth:true,
            isLoading:false,
            loggedUser:payload
        };
        case LOGIN_FAILURE: return {
            ...state,
            isError:true,
            isLoading:false,
            errorMsg:payload
        }
        default: return state
    }
}