import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"

const initState = {
    isAuth:true,
    isLoading:false,
    isError:false,
    errorMsg:"",
    loggedUser: {
        "email": "m@gmail.com",
        "password": "123",
        "user_id": "1dd3a24b-60b4-4c02-bb5e-615b79579ab2",
        "saved_jobs": {
          "791deeda881044b4": {
            "city": "Mumbai",
            "company": "Accenture",
            "jobkey": "791deeda881044b4",
            "jobtitle": "SAP UI5 Fiori Development (HTML5 & Java) Application Developer",
            "dateSaved": 1609499964973
          }
        },
        "my_reviews": [],
        "id": 8
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