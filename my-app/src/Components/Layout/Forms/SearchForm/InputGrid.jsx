import {  Button, Grid, Typography } from '@material-ui/core';
import React, { useState , useRef, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from './Input';


function InputGrid({label,helperText,classes,setValue,value,options}) {
    return (
        <Grid item lg={5} md={5} sm={5} xs={12}>
            <Typography variant='h5'>
                {label}
            </Typography>
            <FormHelperText className={classes.removeMargin}>{helperText}</FormHelperText>
            <Input setValue={setValue} value={value} classes={classes} options={options} />            
        </Grid>
    );
}

export default InputGrid;