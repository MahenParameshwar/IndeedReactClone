import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    recentSearchContainer:{
        padding:'0 12vw',
        marginTop:'40px'
    },
    recentSearchHeader:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    },
    recentSearchList:{
        marginTop:'30px',
        '& li':{
            marginBottom:'40px',
            fontSize:'16px',
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            letterSpacing:'0.1rem',
            transition:'all 0.2s ease',
        }
    },
    recentSearchText:{
        '&:hover':{
            cursor:'pointer',
            textDecoration:'underline'
        }
    }
  }))
function RecentSearch(props) {
    const classes = useStyles();
    const [isEditClicked,setIsEditIsClicked] = useState(true);
    return (
        <Box className={classes.recentSearchContainer}>
            <Box className={classes.recentSearchHeader}>
                <Typography style={{fontSize:'20px'}} variant="h5">
                    Recent Searches
                </Typography>
                {
                    isEditClicked ? 
                    <Box>
                        <Button variant='contained' style={{marginRight:'10px'}}>
                            Clear
                        </Button >
                        <Button variant='contained' onClick={()=>setIsEditIsClicked(false)}>
                            Done
                        </Button>
                    </Box> :
                    <Button className={classes.editBtn} onClick={()=>setIsEditIsClicked(true)}>
                        Edit
                    </Button>
                }
                
            </Box>
                <ul className={classes.recentSearchList}>
                    <li>
                        <span className={classes.recentSearchText}>
                            java developer - Mumbai, Maharashtra
                        </span>
                        {
                            isEditClicked ?
                            <Button style={{fontWeight:'bolder'}}>
                                X
                            </Button> :
                            <></> 
                        }
                        
                    </li>
                    
                </ul>
        </Box>
    );
}

export default RecentSearch;