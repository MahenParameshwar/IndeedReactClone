import { Box, Button, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { makeSaveJobRequest } from '../../Redux/SaveJob/actions';
import { timeDifference } from '../../Utils/timeDifference';


const useStyles = makeStyles((theme)=>({
    applyButton:{
        color:'white',
        width:"200px",
        height:'40px',
        borderRadius:'50px',
        backgroundColor:'#0145E3',
        marginRight:'2%',
        '&:hover':{
            color:'white',
            
            borderRadius:'50px',
            backgroundColor:'#0145E3',
            marginRight:'2%',
        }
    },
    updateButton:{
        color:'#0145E3',
        width:"200px",
        height:'40px',
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
        
        <Container style={{padding:'100px 10vw',display:'flex'}}>
                <Box>
                    <Typography variant={'h5'} style={{fontSize:'40px',marginBottom:'20px'}}>
                        My Jobs
                    </Typography>
                    <ul style={{display:'flex',marginBottom:'20px'}}>
                        <NavLink to="/savedjobs" activeStyle={{
                            color:"#0145E3",
                            textDecoration:'underline'
                        }}
                        style={{
                            fontSize:'25px',
                            marginRight:"30px"
                        }}
                        >
                            Saved {jobKeys.length}
                        </NavLink>
                        <NavLink to="/"
                        style={{
                            fontSize:'25px'
                        }}
                        
                        >
                            Applied 0
                        </NavLink>
                    </ul>

                    <Box>
                        
                            {
                                jobKeys.map((key)=>{
                                    return (
                                        <Box style={{display:'flex'}}   key={key} >
                                        
                                            <Box style={{maxWidth:'500px'}}>
                                                <Typography variant='h5' style={{fontSize:'18px',marginBottom:'15px'}}> 
                                                    {saved_jobs[key].jobTitle}
                                                </Typography>
                                                <Box style={{marginBottom:'15px',fontWeight:'600',color:'grey'}}>
                                                {saved_jobs[key].companyName} | {saved_jobs[key].location}
                                                </Box>
                                                <Box style={{marginBottom:'30px',fontSize:'14px',fontWeight:'400',color:'grey'}}>
                                                    Saved { timeDifference(saved_jobs[key].dateSaved)}
                                                </Box>
                                            </Box>
                                            <Box style={{display:'flex'}}>
                                                <Button className={classes.applyButton}>
                                                    Apply Now
                                                </Button>
                                                <Button className={classes.updateButton}>
                                                    Update
                                                </Button>
                                            </Box>
                                            <Box onClick={()=>{removeFromSaved({jobkey:key})}} style={{cursor:"pointer",width:"40px",height:'40px',display:'flex',justifyContent:'center',alignItems:'center'}} >
                                                <span>
                                                    X
                                                </span>
                                            </Box>
                                    </Box>
                                    )
                                })
                            }
                        
                            
                    
                    </Box>
                </Box>
        </Container>
    );
}

export default SavedJobs;