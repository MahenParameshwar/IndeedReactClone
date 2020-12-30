import {  Button, Grid, Typography } from '@material-ui/core';
import React, { useState , useRef, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from './Input';
import InputGrid from './InputGrid';
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
    
    const classes = useStyles();
    const [job,setJob] = useState('')
    const [location,setLocation] = useState('');
    const [jobOptions,setJobOptions] = useState(['Java Developer','Javascript Developer','React Developer','Government','Account']);
    const [locationOptions,setLocationOptions] = useState(['Bangalore','Mumbai','Delhi','Kolkata','Chennai']);
    const history = useHistory()
    const handelSubmit = (e)=>{
        e.preventDefault();
        history.push(`/jobs/q=${job}&l=${location}`)
    }
    return (
            <form style={{transform:"scale(0.8) translateX(-12%)",zIndex:'1'}}  onSubmit={handelSubmit} className={classes.searchForm}>
                <Grid container spacing={1}>
                    
                    <InputGrid setValue={setJob} value={job} label={'What?'} 
                    helperText={'City, state, or pin code'} classes={classes}
                    options={jobOptions}
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