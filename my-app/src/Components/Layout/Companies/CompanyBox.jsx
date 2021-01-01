import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';


/*

<Grid container style = {{width: "100%"}} >
                <Grid item >
                    <img src = {logo} alt = {name} width = "50px"/>
                </Grid>
                <Grid container item>
                    <Grid item>
                        <Typography variant = "h6">{name}</Typography>
                    </Grid>
                    <Grid item>
                        {rating}
                        <StarIcon style = {{color: "red"}} />
                    </Grid>
                </Grid>
    </Grid>*/


export function CompanyBox({ logo, rating, name}) {
    console.log(name)
    return (
        
            <Grid item conatainer lg={3} md={3} sm={6} xs={12} style={{display:'flex'}}>
                
                <img src = {logo} alt = {name} width = "50px" style={{marginLeft:'10px'}}/>
                
                <Grid item container>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography variant = "h6">{name}</Typography>
                    </Grid>
                    <Grid item container lg={12} md={12} sm={12} xs={12}>
                        <Grid item lg={6} md={6} sm={6} xs={6}>
                            {rating} stars
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={6}>
                            120000 reviews
                        </Grid>
                    </Grid>
                </Grid>
        </Grid>
    )
}
