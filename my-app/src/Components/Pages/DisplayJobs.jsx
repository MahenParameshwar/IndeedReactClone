import { Box, Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import SearchForm from '../Layout/Forms/SearchForm/SearchForm';
import axios from 'axios'
import Pagination from '@material-ui/lab/Pagination';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({
    card:{
        border:'1px solid black',
    },
    jobContainer:{
        width:'450px'
    }
}))

function DisplayJobs(props) {
    
    const query = new URLSearchParams(props.location.pathname.split('/')[2]);
    const classes = useStyles()
    let job = query.get('q')
    let location = query.get('l')
    let start = query.get('start')
    let [jobs,setJobs] = useState([])
    let [totalResults,setTotalResults] = useState(0);
    const history = useHistory()
    
    
    
    const handlePageChange = (event, page) => {
        history.push(`/jobs/q=${job}&l=${location}&start=${(page-1)*15}`)
    };


    useEffect(()=>{
        axios
        .get(`https://cors-anywhere.herokuapp.com/https://api.indeed.com/ads/apisearch?publisher=7778623931867371&q=${job}&l=${location}&co=in&limit=15&start=${start}&v=2&format=json`)
        .then(
            res=>{
                console.log(res)
                setTotalResults(res.data.totalResults)
                setJobs(res.data.results)
            }
            )
    },[job,location,start])

    console.log(jobs) 
    return (
        <Container>
            <div style={{transform:"scale(0.8)",width:'70%'}}>
                <SearchForm />
                
            </div>
            <Grid className={classes.jobContainer}  container>
                {
                    jobs.map((job,index)=>
                    <Grid className={classes.card}  item key={job.jobkey} lg={9} md={12} sm={12} xs={12} >
                        <Typography variant={'job_title'}>
                            {job.jobtitle}
                        </Typography>
                        <Typography>
                            {job.company}
                        </Typography>
                        <Typography>
                            {job.city}
                        </Typography>
                        <Typography>
                            {job.snippet}
                        </Typography>
                        <Typography>
                            {job.formattedRelativeTime}
                        </Typography>
                    </Grid>)
                }
            </Grid>
            <Pagination onChange={handlePageChange} count={Math.floor(totalResults/15)} variant="outlined" shape="rounded" />
        </Container>
    );
}

export default DisplayJobs;