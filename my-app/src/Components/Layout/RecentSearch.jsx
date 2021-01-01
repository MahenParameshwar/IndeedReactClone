import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { loadData, saveData } from '../../Utils/localStorage';
import {getSearchData} from "../../Redux/Search/actions"
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

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
    const [isEditClicked,setIsEditIsClicked] = useState(false);
    const [recent, setRecent] = useState([])
    const history = useHistory()
    const dispatch = useDispatch() 

    useEffect(() => {
        let data = loadData("recent") || []
        console.log(data,"recent")
        setRecent(data)
    }, [])
    
    console.log(recent)
    const handleClearRecent=()=>{
        saveData("recent",[])
        setRecent([])
    }

    const handleDeleteRecent=(key)=>{
        let data = recent.filter((item,index)=>index !== key?item :null )
        console.log(data)
        saveData("recent",data)
        setRecent(data)
    }



    const handleSearch=value=>{
        let query = value.split(" - ")
        console.log(query)
        let job = query[0]
        let location =query[1] || ""
        
        console.log(job,location)
        let start = 0 ,jobType="",formage="",sortType=""
        dispatch(getSearchData(job,location))
        
        let data = loadData("recent") || []
        let str = job !== "" && location !== "" ? `${job} - ${location}` : job === "" && location !== "" ? `${location}` : `${job}`

        if(data.length === 4){
            data.reverse()
            if(data.some(item=>item===str)){
                data = data.filter(item=>item !== str)
                data.push(str)
            }
            else{
                data.shift()
                data.push(str)
            }
            
        }
        else {
            if(data.some(item=>item===str)){
                data = data.filter(item=>item !== str)
                data.push(str)
            }
            else{
                
                data.push(str)
            }
        }

        saveData("recent",data.reverse())
        history.push(`/jobs/q=${job}&location=${location}&page=1`)

        // console.log(str,"str")

    }

    return (
        <Box className={classes.recentSearchContainer}>
            <Box className={classes.recentSearchHeader}>
                <Typography style={{fontSize:'20px'}} variant="h5">
                    Recent Searches
                </Typography>
                {
                    isEditClicked && recent.length !==0 ? 
                    <Box>
                        <Button variant='contained' style={{marginRight:'10px'}} onClick ={()=>handleClearRecent()}>
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
                    {/* <li>
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
                        
                    </li> */}
                    {
                        recent?.map((item,index)=>(
                            // console.log(item,"item")
                            <li key = {index}>
                            <span className={classes.recentSearchText} onClick={e=>handleSearch(e.target.innerHTML)}>
                                {/* java developer - Mumbai, Maharashtra */}
                                {item}
                            </span>
                                <Button style={{fontWeight:'bolder'}} onClick={()=>handleDeleteRecent(index)}>
                                    X
                                </Button> 
                            </li>
                        ))
                    }

                    
                </ul>
        </Box>
    );
}

export default RecentSearch;