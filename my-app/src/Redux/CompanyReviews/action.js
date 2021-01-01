import { FETCH_COMPANY_REQUEST, FETCH_COMPANY_SUCCESS, FETCH_COMPANY_FAILURE } from "./actionsConstants";
import axios from "axios";

export const fetchRequest = ()=>{
    return {
        type: FETCH_COMPANY_REQUEST
    }
}

export const fetchSuccess = (payload)=>{
    return {
        type: FETCH_COMPANY_SUCCESS,
        payload: payload
    }
}

export const fetchFailure = (error)=>{
    return {
        type: FETCH_COMPANY_FAILURE,
        payload: error
    }
}

export const searchCompany = (payload) => dispatch => {

    dispatch(fetchRequest())
    
    axios.get('')
        .then((res)=>{
            dispatch(fetchSuccess(res.data))
        })
        .catch((err)=>dispatch(fetchFailure('Somthing went wrong')))
}