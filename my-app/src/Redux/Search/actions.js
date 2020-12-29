import { FETCH_ERROR, FETCH_JOBS_ID_SUCCESS, FETCH_LOADING, FETCH_SUCCESS } from "./actionTypes"
import axios from "axios"

const fetchSuccess = payload =>{
    return {
        type:FETCH_SUCCESS,
        payload
    }
}


const fetchloading = () =>{
    return {
        type:FETCH_LOADING
    }
}

const fetchError = () =>{
    return {
        type:FETCH_ERROR
    }
}

const  putJobsById=(payload)=>{
    return{
        type:FETCH_JOBS_ID_SUCCESS,
        payload
    }
}

const addJobsById = payload=>dispatch=>{

    var config = {
        method: 'put',
        url: 'http://localhost:8000/jobs',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : payload
    }


    axios(config)
    .then(res=>dispatch(putJobsById(res.data)))
    
}

const getJobsId = payload=>dispatch=>{


    var config = {
        method: 'get',
        url: 'http://localhost:8000/jobs',
        headers: { }
    };

    axios(config)
    .then(res=>{
        let jobs = res.data
        console.log(jobs)
        for(let i =0 ; i<payload.length;i++)
        {
            
            if(!jobs[payload[i].jobkey])
            {
                jobs[payload[i].jobkey] = payload[i]
            }
        }

        dispatch(addJobsById(jobs))
    })
}


export const getSearchData = payload =>dispatch=>{
    dispatch(fetchloading())
    const {query ,location} = payload
    // console.log(query,location)


    var config = {
        method: 'GET',
        url: `https://cors-anywhere.herokuapp.com/https://api.indeed.com/ads/apisearch?publisher=7778623931867371&q=${query}&l=${location}&latlong=1&limit=20&co=us&chnl=&userip=1.2.3.4&v=2&format=json`  
    //   headers: { 
    //     'Cookie': 'CTK=1eqmm5d4tocjg800'
    //   }
    };

    axios(config)
    .then(res=>{
        console.log("data",res.data.results)
        dispatch(fetchSuccess(res.data.results))
        dispatch(getJobsId(res.data.results))
    })
    .catch(err=>dispatch(fetchError()))

}