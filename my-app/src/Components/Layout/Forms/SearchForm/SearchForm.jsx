import {  Button, Grid, Typography } from '@material-ui/core';
import React, { useState , useRef, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux"
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from './Input';
import InputGrid from './InputGrid';
import { getSearchData } from '../../../../Redux/Search/actions';
import { loadData, saveData } from '../../../../Utils/localStorage';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({

   
    input:{
        width:'100%',
        height:'45px',
        
    },
    removeMargin:{
        margin:'0'
    },
    searchForm:{
        display:'flex',
        justifyContent:'center'
    },
    btn_Container:{
        display:'flex',
        alignItems:'flex-end',
        
        '& button':{
            width:'100%',
            height:"45px",
            fontSize:'13px',
            fontWeight:'bold',
            borderRadius:'10px'
        }
    },
    suggestionInput:{
        position:'relative'
    },
    autocontainer:{
        border:`1px solid ${theme.palette.primary.main}`,
        width:'99%',
        backgroundColor:"white",
        borderBottomLeftRadius:'5px',
        borderBottomRightRadius:'5px',
        zIndex:'10',
        paddingBottom:'30px',
        position:'absolute',
        '& div':{
            marginTop:'30px'
        },
        
    },
  }))

function SearchForm(props) {
    
    const dispatch = useDispatch()
    const classes = useStyles();
    const [job,setJob] = useState('');
    const [location,setLocation] = useState('');
    const [jobOptions,setJobOptions] = useState(['Java Developer','Javascript Developer','React Developer','Government','Account']);
    const [locationOptions,setLocationOptions] = useState(['Bangalore','Mumbai','Delhi','Kolkata','Chennai']);
    const history = useHistory()

    const handleSearch=e=>{
        
        e.preventDefault()
        let start = 0 ,jobType="",formage="",sortType=""
        dispatch(getSearchData({job,location,start,jobType,formage,sortType}))
        
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
        history.push(`/jobs/q=${job}&l=${location}`)

        // console.log(str,"str")

    }



    // const handelSubmit = (e)=>{
    //     e.preventDefault();
    //     history.push(`/jobs/q=${job}&l=${location}`)
    // }
    return (
            <form  onSubmit={handleSearch} className={classes.searchForm}>
                <Grid container spacing={1}>
                    
                    <InputGrid setValue={setJob} value={job} label={'What?'} 
                    helperText={'City, state, or pin code'} classes={classes}
                    options={job !== "" ?jobOptions:null}
                    />

                    <InputGrid setValue={setLocation} value={location} label={'Where'}
                    helperText='City, state, or pin code' classes={classes}
                    options={locationOptions} />

                    <Grid item lg={2} md={2} sm={2} xs={12} className={classes.btn_Container}>
                        <Button color={'primary'} variant='contained' type='submit'>
                            Find Jobs
                        </Button>
                    </Grid>
                </Grid>
            </form>
       
        
    );
}

export default SearchForm;