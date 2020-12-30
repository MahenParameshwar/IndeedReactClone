import { Box, Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import SearchForm from '../Layout/Forms/SearchForm/SearchForm';
import axios from 'axios'
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchData } from '../../Redux/Search/actions';

const useStyles = makeStyles(theme=>({
    jobContainer:{
        width:'450px',
    },
    card:{
        border:'1px solid black',
        padding:'15px',
        cursor:'pointer',
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
    },
    sort_container:{
                    display:'flex',
                    justifyContent:"space-between",
                    width:"450px",
                    fontSize:'14px',
                    margin:'10px 0px'
                }
    
}))

function DisplayJobs(props) {
    
    const query = new URLSearchParams(props.location.pathname.split('/')[2]);
    const classes = useStyles()
    let job = query.get('q')
    let location = query.get('l')
    let start = query.get('start')
    let jobs = useSelector(state=>state.search.searched)
    let [jobData,setJobData] = useState({})
    let totalResults = useSelector(state=>state.search.totalCount)
    const dispatch = useDispatch()
    const history = useHistory()
    
    
    
    const handlePageChange = (event, page) => {
        history.push(`/jobs/q=${job}&l=${location}&start=${(page-1)*15}`)
    };

    console.log(job,location,start)
    useEffect(()=>{
                console.log("use effect")
                dispatch(getSearchData({job,location,start}))
                
            
            
    },[job,location,start])

    const getJobDescription = (jobKey)=>{
        
        axios
        .get(`https://cors-anywhere.herokuapp.com/https://api.indeed.com/ads/apigetjobs?publisher=7778623931867371&jobkeys=${jobKey}&v=2&format=json`)
        .then(
            res=>{
                console.log(res.data.results[0])
                
            }
        )
    }

    

    return (
        <Container className={classes.job_section}>
            <Box style={{transform:"scale(0.8) translateX(-12%)"}}>
                <SearchForm />
            </Box>
            <Box className={classes.greyText}>
                jobs in {location}
            </Box>
            <Box className={classes.sort_container}>
                <Box>
                    Sort by relevence / date
                </Box>
                <Box>
                    {
                        `Page ${Math.floor(start/15) + 1} of ${totalResults} results`
                    }
                </Box>
            </Box>
                <Grid className={classes.jobContainer}  container>
                    {
                        jobs.map((job,index)=>
                        <Grid onClick={()=>getJobDescription(job.jobkey)} className={classes.card}  item key={job.jobkey} lg={12} md={12} sm={12} xs={12} >
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
                        </Grid>)
                    }
                </Grid>
                <Pagination onChange={handlePageChange} count={
                    totalResults % 15 === 0 ?
                    Math.floor(totalResults/15) : Math.floor(totalResults/15) + 1 } variant="outlined" shape="rounded" />
            
        </Container>
    );
}

export default DisplayJobs;