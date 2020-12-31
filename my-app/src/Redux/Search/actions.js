import { COUNT_TOTAL_RESULT, FETCH_ERROR, FETCH_JOBS_ID_SUCCESS, FETCH_LOADING, FETCH_SUCCESS } from "./actionTypes"
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

const addJobs = payload=>dispatch=>{

    var config = {
        method: 'post',
        url: 'http://localhost:8000/jobs',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : payload
    }

    axios(config)
    .then(res=>(res.data))
    
}

// const getJobsId = payload=>dispatch=>{

//     var config = {
//         method: 'get',
//         url: 'http://localhost:8000/jobs',
//         headers: { }
//     };

//     axios(config)
//     .then(res=>{
//         let jobs = res.data
//         console.log(jobs)
//         for(let i =0 ; i<payload.length;i++)
//         {
            
//             if(!jobs[payload[i].jobkey])
//             {
//                 jobs[payload[i].jobkey] = payload[i]
//             }
//         }

//         dispatch(addJobs(jobs))
//     })
// }
const setCount = payload=>{
    return {
        type:COUNT_TOTAL_RESULT,
        payload
    }
}

export const getSearchData = payload =>dispatch=>{
    dispatch(fetchloading())
    const {job ,location,start,jobType,fromage,sortType} = payload
    console.log(job,location,start)


    var config = {
        method: 'GET',
        url: `https://cors-anywhere.herokuapp.com/https://api.indeed.com/ads/apisearch`,
        params:{
            publisher:'7778623931867371',
            q:job,
            l:location,
            co:'in',
            limit:15,
            start:start,
            jt:jobType,
            v:2,
            fromage:fromage,
            format:'json',
            sort:sortType
            }
    //   headers: { 
    //     'Cookie': 'CTK=1eqmm5d4tocjg800'
    //   }
    };

    axios(config)
    .then(res=>{
        // console.log("data",res.data.results)
        dispatch(fetchSuccess(res.data.results))
        dispatch(setCount(res.data.totalResults))
        // res.data.results.map(item=>dispatch(addJobs(item)))

    })
    .catch(err=>dispatch(fetchError()))

}