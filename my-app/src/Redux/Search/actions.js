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

export const getSearchData = (job="",location="",page="1") =>dispatch=>{
    // dispatch(fetchloading())
    
    console.log(job,location)
    let url = `http://localhost:8000/jobs?_page=${page}&_limit=5`
    
    if(location !== "" && job !== ""){
        url = `http://localhost:8000/jobs?location_like=${location}&jobTitle_like=${job}&_page=${page}&_limit=5`
    }
    else
    if(location !== "")
    {
        url = `http://localhost:8000/jobs?location_like=${location}&_page=${page}&_limit=5`
    }
    else
    if(job !== ""){
        url = `http://localhost:8000/jobs?jobTitle_like=${job}&_page=${page}&_limit=5`
    }
    else
    return

    var config = {
        method: 'GET',
        url: url,
    };

            axios(config)
            .then(res=>{
                console.log("data",res.data)
                dispatch(fetchSuccess(res.data))
                // res.data.results?.map(item=>dispatch(addJobs(item)))

            }).then(()=>{
                let url = `http://localhost:8000/jobs`
    
                if(location !== "" && job!== ""){
                    url = `http://localhost:8000/jobs?location_like=${location}&jobTitle_like=${job}`
                }
                else
                if(location !== "")
                {
                    url = `http://localhost:8000/jobs?location_like=${location}`
                }
                else
                if(job !== ""){
                    url = `http://localhost:8000/jobs?jobTitle_like=${job}`
                }
                axios({
                    method: 'GET',
                    url: url,
                }).then((res)=>{
                    console.log(res.data.length)
                    dispatch(setCount(res.data.length))
                })
            })
            .catch(err=>{   
                console.log("error")
                dispatch(fetchError())
            })
    

}