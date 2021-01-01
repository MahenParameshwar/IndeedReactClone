import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';

export function CompanyBox({ logo, rating, name, handleClick, id}) {
    console.log(name)
    return (
        
            <Grid item container lg={3} md={3} sm={6} xs={12} style={{display:'flex'}}>
                
                <img src = {logo} alt = {name} width = "50px" style={{marginLeft:'10px'}}/>
                
                <Grid item container>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography onClick = {() => handleClick(id) } variant = "h6">{name}</Typography>
                    </Grid>
                    <Grid item container lg={12} md={12} sm={12} xs={12}>
                        <Grid item lg={6} md={6} sm={6} xs={6}>
                            {rating} stars
                        <StarIcon style = {{color: "darkyellow"}} />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={6}>
                            120000 reviews
                        </Grid>
                    </Grid>
                </Grid>
        </Grid>
    )
}
