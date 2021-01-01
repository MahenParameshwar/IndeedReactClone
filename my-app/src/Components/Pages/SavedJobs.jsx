import { Box, Button, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { makeSaveJobRequest } from '../../Redux/SaveJob/actions';
import { timeDifference } from '../../Utils/timeDifference';
import {ApplyModal} from "../Layout/JobApplyModal/ApplyModal"
import {makeApplyRequest} from "../../Redux/JobApply/actions"

const useStyles = makeStyles((theme)=>({
    applyButton:{
        color:'white',
        width:"49%",
        borderRadius:'50px',
        backgroundColor:'#0145E3',
        marginRight:'2%',
        '&:hover':{
            color:'white',
            width:"49%",
            borderRadius:'50px',
            backgroundColor:'#0145E3',
            marginRight:'2%',
        }
    },
    updateButton:{
        color:'#0145E3',
        width:"49%",
        border:'2px solid #909090',
        borderRadius:'50px',
        
    }
}))

function SavedJobs(props) {
    const classes = useStyles();
    const {saved_jobs,applied_job} = useSelector(state=>state.login.loggedUser)
    const jobKeys = Object.keys(saved_jobs).reverse()
    const applied = Object.keys(applied_job).reverse()
    
    const [ignored, forceUpdate] =useReducer(x => x + 1, 0)

    const dispatch = useDispatch();
    const loggedUser = useSelector(state=>state.login.loggedUser)
    // console.log(loggedUser)
    const [open, setOpen] = useState(false)
    const [jobId, setJobId] = useState("")

    const removeFromSaved = ({jobkey})=>{
        const {id} = loggedUser
        delete saved_jobs[jobkey]
        dispatch(makeSaveJobRequest({user_id:id,saved_jobs}))
        forceUpdate();
    }

    const handleClose=() =>{
        setOpen(false)
        setJobId("")
    }

    const handleOpen=(id)=>{
        setJobId(id)
        setOpen(true)
    }

    const handleApply=()=>{
        const {id} = loggedUser
        console.log(jobId)
        applied_job[jobId]={...saved_jobs[jobId],dateSaved:new Date().getTime()}
        delete saved_jobs[jobId]
        dispatch(makeApplyRequest({user_id:id,saved_jobs,applied_job}))
        setOpen(false)
        forceUpdate()
    }
    
    return (
        
        <Container>
            <Typography variant={'h5'}>
                My Jobs
            </Typography>
            <ul style={{display:'flex'}}>
                <NavLink to="/">
                    Saved {jobKeys.length}
                </NavLink>
                <NavLink to="/">
                    Applied {applied.length}
                </NavLink>
            </ul>

            <Box>
                
                    {
                        jobKeys.map((key)=>{
                            return (
                                <Grid  spacing={2} key={key} container item lg={12} md={12} sm={12} xs={12}>
                                    <Grid item lg={1} md={1} sm={1} xs={1}>
                                        Icon
                                    </Grid>
                                    <Grid item lg={5} md={5} sm={5} xs={5}>
                                        <Typography variant='h5'> 
                                            {saved_jobs[key].jobTitle}
                                        </Typography>
                                        <Box>
                                        {saved_jobs[key].companyName},{saved_jobs[key].city}
                                        </Box>
                                        <Box>
                                            Saved { timeDifference(saved_jobs[key].dateSaved)}
                                        </Box>
                                    </Grid>
                                    <Grid item lg={4} md={4} sm={4} xs={4}>
                                        <Button className={classes.applyButton} onClick={()=>handleOpen(key)} disabled={applied_job[key]?true:false}>
                                            {applied_job[key]?"Already applied":"Apply"}
                                        </Button>
                                        <Button className={classes.updateButton}>
                                            Update
                                        </Button>
                                    </Grid>
                                    <Grid onClick={()=>{removeFromSaved({jobkey:key})}} item lg={1} md={1} sm={1} xs={1}>
                                        X
                                    </Grid>
                            </Grid>
                            )
                        })
                    }
                   
                    
               
            </Box>
            <ApplyModal 
                open={open}
                handleClose = {()=>handleClose()}
                jobId = {jobId}
                handleApply ={()=>handleApply()}
            />
        </Container>
    );
}

export default SavedJobs;