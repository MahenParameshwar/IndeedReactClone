import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import { useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import Pagination from '@material-ui/lab/Pagination';
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles';
import SearchForm from '../Layout/Forms/SearchForm/SearchForm';
import FillterButton from '../Layout/FilterJobsButton/FillterButton';
import { getSearchData, fetchSuccess, setCount } from '../../Redux/Search/actions';
import JobDescription from '../Layout/JobDescription';
import styled from 'styled-components'

import JobMenu from '../Layout/Menu/JobMenu';
import {makeSaveJobRequest} from '../../Redux/SaveJob/actions'
const useStyles = makeStyles(theme=>({
    jobContainer:{
        width:'450px',
        
    },
    card:{
        border:'1px solid black',
        padding:'15px',
        cursor:'pointer',
        position:'relative',
        '&:hover':{
            '& $job_title':{
                textDecoration:'underline'
            }
        },
        borderRadius:'10px',
        marginBottom:'20px'
    },
    job_title:{
        fontWeight:'bold',
        fontSize:'20px'
    },
    job_subTitle:{
        fontSize:'16px'
    },
    job_snippet:{
        margin:'20px 0px 10px 0px',
        fontSize:'15px',
        lineHeight:'1.4rem'
    },
    greyText:{
        fontSize:'14px',
        color:'grey'
    },
    job_section:{
        padding:'0 8vw',
        position:'relative'
    },
    sort_container:{
                    display:'flex',
                    justifyContent:"space-between",
                    width:"450px",
                    fontSize:'14px',
                    margin:'10px 0px'
    },
    sortStyle:{
        color:theme.palette.primary.main,
        cursor:'pointer',
        '&:hover':{
            textDecoration:'underline'
        }
    },
    bold:{
        fontWeight:'bolder',
        cursor:'pointer',
    }
}))

const LoadingContainer = styled.div`
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;



        .loader {
            position: relative;
            display: grid;
            grid-template-columns: 33% 33% 33%;
            grid-gap: 2px;
            width: 75px;
            height: 75px;
            
            
            > div {
                position: relative;
                width: 100%;
                height: 100%;
                background: #0652DD;
                transform: scale(0.0);
                transform-origin: center center;
                animation: loader 2s infinite linear;
                
                &:nth-of-type(7) {}
                
                &:nth-of-type(1),
                &:nth-of-type(5), 
                &:nth-of-type(9) {
                    animation-delay: 0.4s;
                }
                
                &:nth-of-type(4),
                &:nth-of-type(8) {
                    animation-delay: 0.2s;
                }
                
                &:nth-of-type(2),
                &:nth-of-type(6) {
                    animation-delay: 0.6s;
                }
                
                &:nth-of-type(3) {
                    animation-delay: 0.8s;
                }
            }
        }
        
        @keyframes loader {
            0%   { transform: scale(0.0); }
            40%  { transform: scale(1.0); }
            80%  { transform: scale(1.0); }
            100% { transform: scale(0.0); }
        }
    `



function DisplayJobs(props) {
    
    const query = new URLSearchParams(props.location.search)
    const classes = useStyles()

    let job = query.get('q') || ""
    let location = query.get('location') || ""
    let start = query.get('start')
    let jt = query.get("jt") || ""
    let occu = query.get("occupation") || ""
    let edu = query.get("education") || ""
    let sal = query.get("salary") || ""
    
//// Harsh Changes
    let totalResults = useSelector(state=>state.search.totalCount)
    let jobs = useSelector(state=>state.search.searched)
    let isLoading = useSelector(state=>state.search.isLoading)
///////
///// Mahen changes
    
    let [page,setPage] = useState(1)
    let [jobType,setJobType] = useState(jt) 
    let [fromage,setFromage] = useState(0)
    let [sortType,setSortType] = useState('relevance')
    let [occupation, setOccupation] = useState(occu)
    let [education , setEducation] = useState(edu)
    let [salary , setSalary] = useState(sal)

    let [sortDateIsCliked,setSortDateIsCliked] = useState(false)

    // let [jobs,setJobs] = useState([])

    ///////

    let [jobData,setJobData] = useState(null)   
    const dispatch = useDispatch()
    const history = useHistory()
    
    
    const loggedUser = useSelector(state=>state.login.loggedUser);
    
    // useEffect(()=>{

    // },[page])

    const handlePageChange = (event, page) => {
        setPage(page)
        console.log(job)
        history.push(`/jobs?q=${job}&location=${location}&start=${(page-1)*15}&jt=${jobType}`)
    };


//// Harsh Changes
    // console.log(job,location,start)
    // useEffect(()=>{
    //             console.log("use effect")
    //             dispatch(getSearchData({job,location,start}))
                
            
            
    // },[job,location,start])

////////
////// Mahen Changes

    const handleSort = (sort)=>{
        setSortDateIsCliked(!sortDateIsCliked)
        setSortType(sort)
    }


    useEffect(()=>{

        
        dispatch(getSearchData(job,location,start,jobType,fromage,occupation,education,salary))
    },[job,location,page,jobType,fromage,sortType,occupation,education,salary])



    const getJobDescription = (jobKey)=>{
        
        axios
        .get(`https://cors-anywhere.herokuapp.com/https://api.indeed.com/ads/apigetjobs?publisher=7778623931867371&jobkeys=${jobKey}&v=2&format=json`)
        .then(
            res=>{
                setJobData(res.data.results[0])
            }
        )
    }

    const handelSave = ({jobkey,city,company,jobtitle})=>{
        const {id,saved_jobs} = loggedUser
        saved_jobs[jobkey] = {
            city,
            company,
            jobkey,
            jobtitle,
            dateSaved:new Date().getTime()
        }
        
        dispatch(makeSaveJobRequest({user_id:id,saved_jobs}))
    }

    const removeFromSaved = ({jobkey})=>{
        const {id,saved_jobs} = loggedUser
        delete saved_jobs[jobkey]
        dispatch(makeSaveJobRequest({user_id:id,saved_jobs}))
    }

    

    return (
        <Container className={classes.job_section}>
            <Box style={{transform:"scale(0.8) translateX(-12%)"}}>
                <SearchForm />
            </Box>
            {
                isLoading ? (
                    <LoadingContainer >
                        <div className="loader">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </LoadingContainer>
                ):(
                    <>
                        <Box>
                <FillterButton type={jobType} setType={setJobType} 
                typeArr={['Fulltime','Walk-In','Fresher','Part-time']}
                formatDate={false}
                typeStr='JOB TYPE'/>

                <FillterButton type={fromage} setType={setFromage} 
                typeArr={[1,3,7,14]}
                formatDate={true}
                typeStr='DATE POSTED'/>

                <FillterButton type={occupation} setType={setOccupation} 
                typeArr={['Software','Government','Account','Executive and personal assitansts']}
                formatDate={false}
                typeStr='Occupation'/>

                <FillterButton type={education} setType={setEducation} 
                typeArr={[`12th`,`Diploma`,`Bachelor's degree`,`Master's degree`]}
                formatDate={false}
                typeStr='Education'/>

                <FillterButton type={salary} setType={setSalary} 
                typeArr={["Ascending","Descending"]}
                formatDate={false}
                typeStr='Salary'/>
            
            </Box>
            <Box className={classes.greyText}>
                jobs in {location}
            </Box>
            <Box className={classes.sort_container}>
                <Box>
                    Sort by 
                    <span className={classNames({[classes.sortStyle] : sortDateIsCliked , [classes.bold] : !sortDateIsCliked})} onClick={()=>handleSort('relevance')}> relevance </span> 
                    / 
                    <span className={classNames({[classes.sortStyle] : !sortDateIsCliked , [classes.bold] : sortDateIsCliked})} onClick={()=>handleSort('date')}> date </span>
                </Box>
                <Box>
                    {
                        `Page ${Math.floor(start/15) + 1} of ${totalResults} results`
                    }
                </Box>
              
            </Box>
           
                <Box style={{display:'flex'}}>
                     
                    <Grid className={classes.jobContainer}  container>

                        {
                            jobs.map((job,index)=>
                            <Grid className={classes.card}  item key={job.jobkey} lg={12} md={12} sm={12} xs={12} >
                                <Box onClick={()=>getJobDescription(job.jobkey)} >
                                    <Typography  className={classes.job_title}>
                                        {job.jobtitle}
                                    </Typography>
                                    <Typography className={classes.job_subTitle}>
                                        {job.company}
                                    </Typography>
                                    <Typography className={classes.job_subTitle}>
                                        {job.city}
                                    </Typography>
                                    <div className={classes.job_snippet} dangerouslySetInnerHTML={{__html: job.snippet}}></div>
                                    <Typography className={classes.greyText}>
                                        {job.formattedRelativeTime}
                                    </Typography>
                                </Box>
                                <JobMenu 
                                job={job} 
                                handelSave={handelSave}
                                removeFromSaved={removeFromSaved}/>
                            </Grid>)
                        }
                        
                    </Grid>
                    {
                        jobData ? <JobDescription jobData={jobData} /> : <></> 
                    }
                    
                </Box>
                <Pagination onChange={handlePageChange} count={
                    totalResults % 15 === 0 ?
                    Math.floor(totalResults/15) : Math.floor(totalResults/15) + 1 } variant="outlined" shape="rounded" />
                
                    </>
                )
            }
            
        </Container>
    );
    
}

export default DisplayJobs;