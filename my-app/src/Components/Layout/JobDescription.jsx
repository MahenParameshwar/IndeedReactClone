import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import  Section  from './Section';
const useStyles = makeStyles(theme=>({
    container:{
        position:'sticky',
        top:'20px',
        marginLeft:'50px',
        alignSelf: 'flex-start',
        border:'1px solid black',
        padding:'20px',
        flex:'1',
        borderRadius:'10px '
    },
    link:{
        width:"100px",
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:'10px',
        height:'53px',
        padding:'0 25px',
        fontSize:'20px',
        color:'white',
        
        backgroundColor:theme.palette.primary.main
    }
})) 
function JobDescription({jobData}) {
    const classes = useStyles()
    const {companyName,location,companyUrl,snippet,jobTitle,jobDescription,startSalary,endSalary} = jobData
    
    return (
        <Box className={classes.container}>
            <Typography variant={'h5'} style={{marginBottom:'10px'}}>
                {jobTitle}
            </Typography>
            <Box style={{marginBottom:'10px'}}>
                {companyName},{location}
            </Box>
            
            <Box style={{marginBottom:'10px'}}>
                ₹ {Number(startSalary).toLocaleString('en-IN')} - ₹ {Number(endSalary).toLocaleString('en-IN')}
            </Box>
            
            <a className={classes.link} href={companyUrl} style={{marginBottom:'30px'}}>
                Apply now
            </a>
            <Section jobDescription={jobDescription} summary={snippet} />
        </Box>
    );
}

export default JobDescription;