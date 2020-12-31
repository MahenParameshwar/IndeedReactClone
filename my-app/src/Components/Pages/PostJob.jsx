import { Container,Grid,OutlinedInput,Typography ,InputAdornment, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Quill from '../Layout/Quill';

const useStyles = makeStyles((theme) => ({
    root: {
        width:'100%',
        '& > *':{
            marginBottom:'20px'
        }
    },
    select_job_type: {
        width:'100%'
    }

  }));
function PostJob(props) {
    const classes = useStyles();
    return (
        <Container>
            <Typography variant='h4'>
                Indeed for employers
            </Typography>
            <form className={classes.root} style={{width:'100%'}}>
                
                <Grid item lg={12} md={12} sm={12} xs={12} >
                    <label >
                        Company name for this job
                    </label>
                    <OutlinedInput
                    style={{width:'100%'}}
                    className={classes.input }
                    />
                </Grid>
                
                <Grid item lg={12} md={12} sm={12} xs={12} >
                    <label >
                        Job Title
                    </label>
                    <OutlinedInput
                    style={{width:'100%'}}
                    className={classes.input }
                    />
                </Grid>

                <Grid item lg={12} md={12} sm={12} xs={12} >
                    <label >
                        Location
                    </label>
                    <OutlinedInput
                    style={{width:'100%'}}
                    className={classes.input }
                    />
                </Grid>

                <Grid item lg={12} md={12} sm={12} xs={12} >
                    <label >
                        Company website
                    </label>
                    <OutlinedInput
                    style={{width:'100%'}}
                    className={classes.input }
                    />
                </Grid>
                
            


            <Grid spacing={2} item container lg={12} md={12} sm={12} xs={12}>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                    <FormControl variant="outlined" className={classes.select_job_type}>
                        <label>
                            Job Type
                        </label>
                        <Select
                        >
                        <option aria-label="None" value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                    <FormControl variant="outlined" className={classes.select_job_type}>
                        <label>
                            Occupation
                        </label>
                        <Select
                        >
                        <option aria-label="None" value="" />
                        <option value={10}>Software</option>
                        <option value={20}>Government</option>
                        <option value={20}>Account</option>
                        <option value={30}>Executive and personal assitansts</option>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                    <FormControl variant="outlined" className={classes.select_job_type}>
                        <label>
                            Education Level
                        </label>
                        <Select
                        >
                        <option aria-label="None" value="" />
                        <option value={10}>12th pass</option>
                        <option value={20}>Diploma</option>
                        <option value={30}>Bachelor's degree</option>
                        <option value={30}>Master's degree</option>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid item container spacing={1} lg={12} md={12} sm={12} xs={12}>
                <Grid item container lg={12} md={12} sm={12} xs={12}>
                    <label>Salary</label>
                </Grid>

                <Grid item lg={4} md={4} sm={4} xs={4}>
                    <OutlinedInput
                    startAdornment={<InputAdornment position="start"> Rs </InputAdornment>}
                    style={{width:'100%'}}
                    className={classes.input }
                    /> 
                </Grid>
                <Grid item lg={0.5} md={0.5} sm={0.5} xs={0.5}>
                    <Typography variant='h5'>
                        to
                    </Typography>
                </Grid>
                <Grid item lg={3} md={3} sm={3} xs={3}>
                    <OutlinedInput
                    style={{width:'100%'}}
                    className={classes.input }
                    />
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                    <FormControl variant="outlined" className={classes.select_job_type}>
                        <Select
                        >
                        <option aria-label="None" value="" />
                        <option value={10}>Per Hour</option>
                        <option value={20}>Per month</option>
                        <option value={30}>Per day</option>
                        <option value={30}>Per year</option>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <label>
                Description
            </label>
            <Quill />
            <Button variant="contained" color='primary'>
                Submit
            </Button>
            </form>
        </Container>
    );
}

export default PostJob;