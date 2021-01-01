import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';

export function CompanyBox(companyData) {
    console.log(companyData)
    return (
        
        <Grid container xs={6} sm={3}>
            <Grid item >
                <img src = {companyData.logo} alt = {companyData.company} />
            </Grid>
            <Grid container item>
                <Grid item>
                    <Typography variant = "h6">{companyData.company}</Typography>
                </Grid>
                <Grid item>
                    {companyData.ratings}
                    <StarIcon />
                </Grid>
            </Grid>
        </Grid>
    )
}
