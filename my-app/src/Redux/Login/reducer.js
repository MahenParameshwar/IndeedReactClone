import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./actionTypes"

const initState = {
    isAuth:true,
    isLoading:false,
    isError:false,
    errorMsg:"",
    loggedUser:{
        "user_id": "1e1abf9c-4846-4c6a-b41c-67166ca87fe6",
        "email": "albert@gmail.com",
        "password": "123",
        "saved_jobs": {},
        "applied_job": {
          "c175eec9-3ff1-412d-b262-ad3b1b1f95fa": {
            "jobkey": "c175eec9-3ff1-412d-b262-ad3b1b1f95fa",
            "location": "Mumbai",
            "companyName": "Aron Infratech Private Limited (Aron Developers Inc.)",
            "jobTitle": "Staff Accountant/Accounts Payable",
            "dateSaved": 1609567265704
          }
        },
        "my_reviews": [],
        "id": 5
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
        };
        case LOGOUT: return {
            ...state,
            isAuth:false
        }
        default: return state
    }
}