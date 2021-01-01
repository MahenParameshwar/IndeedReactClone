import { Box, Button, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { makeSaveJobRequest } from '../../Redux/SaveJob/actions';
import { timeDifference } from '../../Utils/timeDifference';


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
    const {saved_jobs} = useSelector(state=>state.login.loggedUser)
    const jobKeys = Object.keys(saved_jobs).reverse()
    
    const [ignored, forceUpdate] =useReducer(x => x + 1, 0)

    const dispatch = useDispatch();
    const loggedUser = useSelector(state=>state.login.loggedUser)
    console.log(loggedUser)
    
    const removeFromSaved = ({jobkey})=>{
        const {id} = loggedUser
        delete saved_jobs[jobkey]
        dispatch(makeSaveJobRequest({user_id:id,saved_jobs}))
        forceUpdate();
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
                    Applied 0
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
                                            {saved_jobs[key].jobtitle}
                                        </Typography>
                                        <Box>
                                        {saved_jobs[key].company},{saved_jobs[key].city}
                                        </Box>
                                        <Box>
                                            Saved { timeDifference(saved_jobs[key].dateSaved)}
                                        </Box>
                                    </Grid>
                                    <Grid item lg={4} md={4} sm={4} xs={4}>
                                        <Button className={classes.applyButton}>
                                            Apply Now
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
        </Container>
    );
}

export default SavedJobs;