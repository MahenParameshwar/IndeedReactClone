import { COUNT_TOTAL_RESULT, FETCH_ERROR, FETCH_JOBS_ID_SUCCESS, FETCH_LOADING, FETCH_SUCCESS } from "./actionTypes"
import axios from "axios"

export const fetchSuccess = payload =>{
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

export const addJobs = payload=>dispatch=>{

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
export const setCount = payload=>{
    return {
        type:COUNT_TOTAL_RESULT,
        payload
    }
}

export const dispatchCount =payload=>dispatch=>{
    const {job ,location,start,jobType,fromage,sortType} = payload
    // console.log(job,location,start)


    var config = {
        method: 'GET',
        url: `http://localhost:8000/jobs`,
        params:{
            q:job,
            city_like:location,
            jobType_like:jobType,
            _start:start,
            
            // _sort:"date",
            // _order:""
            }
    };

    axios(config)
    .then(res=>{
        // console.log("data",res.data)
        dispatch(setCount(res.data.length))

    })
}

export const getSearchData = (job="",location="",start=0,jobType="",fromage="",occupation="",education="",salary="") =>dispatch=>{
    dispatch(fetchloading())
    // const {job ,location:"",start:0,jobType:"",fromage,sortType} = payload
    let order = salary === "Ascending" ? "asc" : salary === "Descending"? "desc" : ""
    console.log(job,location,start,jobType,fromage,occupation,education,salary)


    var config = {
        method: 'GET',
        url: `http://localhost:8000/jobs`,
        params:{
            q:job,
            // location_like:location,
            city_like:location,
            jobType_like:jobType,
            // date:fromage,
            // occupation_like:occupation,
            // education_like:education,
            // _sort:"startSalary",
            // order:order,
            _start:start,
            _limit:15
            // _sort:"date",
            // _order:""
            }
    };


    setTimeout(()=>{
        
            axios(config)
            .then(res=>{
                console.log("data",res.data)
                dispatch(fetchSuccess(res.data))
                dispatch(dispatchCount({job ,location,start,jobType,fromage}))
                // res.data.results?.map(item=>dispatch(addJobs(item)))

            })
            .catch(err=>{   
                console.log("error")
                dispatch(fetchError())
            })
    },1000)

}