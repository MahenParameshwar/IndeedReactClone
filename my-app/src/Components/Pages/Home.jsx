import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../Layout/Forms/SearchForm';
import RecentSearch from '../Layout/RecentSearch';


const useStyles = makeStyles((theme) => ({
    container:{
        padding:'0px 10vw',
        marginTop:'80px'
    }
  }))
function Home(props) {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <SearchForm />
            <div>
                <Link to="/">
                    Employers Yours next job is
                </Link>
            </div>
            <RecentSearch />
        </Container>
    );
}

export default Home;