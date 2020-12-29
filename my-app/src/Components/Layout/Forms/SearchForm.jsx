import { Box, Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import React, { useState , useRef, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import classNames from "classnames";
import LocationInput from './LocationInput';
import JobInput from './JobInput';

const useStyles = makeStyles((theme) => ({
    form_container:{
        padding:'0px 10vw',
        marginTop:'80px'
    },
    margin: {
      margin: theme.spacing(1),
    },
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
        '& div':{
            marginTop:'30px'
        },
        
    },
  }))

function SearchForm(props) {
    
    const classes = useStyles();
    const [job,setJob] = useState('')
    const [location,setLocation] = useState('');

    return (
            <form action="" className={classes.searchForm}>
                <Grid container spacing={1}>
                    
                    <Grid item   lg={5} md={5} sm={5} xs={12}>
                        <Typography variant='h5'>
                            What?
                        </Typography>
                        <FormHelperText className={classes.removeMargin}>Job title, keywords, or company</FormHelperText>
                        <JobInput setJob={setJob} job={job} classes={classes} />
                    </Grid>

                    <Grid item lg={5} md={5} sm={5} xs={12}>
                        <Typography variant='h5' >
                            Where
                        </Typography>
                        <FormHelperText className={classes.removeMargin}>City, state, or pin code</FormHelperText>
                        <LocationInput setLocation={setLocation} location={location} classes={classes} />
                    </Grid>
                    
                    <Grid item lg={2} md={2} sm={2} xs={12} className={classes.btn_Container}>
                        <Button color={'primary'} variant='contained'>
                            Find Jobs
                        </Button>
                    </Grid>
                </Grid>
            </form>
       
        
    );
}

export default SearchForm;