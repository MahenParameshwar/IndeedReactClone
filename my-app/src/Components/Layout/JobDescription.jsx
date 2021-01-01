import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
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
        width:'100%',
        display:'flex',
        alignItems:'center',
        height:'53px',
        padding:'0 25px',
        fontSize:'16px',
        borderRadius:'2px',
        backgroundColor:theme.palette.primary.main
    }
})) 
function JobDescription({jobData}) {
    const classes = useStyles()
    const {company,city,url,snippet,jobTitle} = jobData
    // console.log(url)
    return (
        <Box className={classes.container}>
            <Box>
                {jobTitle}
            </Box>
            <Box>
                {company}
            </Box>
            <Box>
                {city}
            </Box>
            <Box>
                ₹ 50,000 - 75,000
            </Box>
            <a className={classes.link} href={url}>
                Apply on Company site
            </a>
            <Box>
                {snippet}
            </Box>
        </Box>
    );
}

export default JobDescription;