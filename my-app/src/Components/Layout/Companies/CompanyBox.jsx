import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';

export function CompanyBox({ logo, rating, name}) {
    console.log(name)
    return (
        <Grid>
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
            </Grid>
            <Grid>
                <Grid></Grid>
            </Grid>
        </Grid>
    )
}
