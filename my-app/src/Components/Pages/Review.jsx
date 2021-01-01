import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCompanyReviews } from '../../Redux/CompanyReviews/action';
import axios from "axios";
import { Grid, Container } from '@material-ui/core';

export function Review(props) {
    const companyDetails = useSelector(state => state.companies.currentCompany);
    const [reviews, setReviews] = useState([]);
    const query = new URLSearchParams(props.location.search);
    const id =query.get('id')
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCompanyReviews(id));

        axios.get(`http://localhost:5000/reviews?company_id=${id}`)
            .then((res) => {
                setReviews(res.data)
                console.log(res.data)
            })
            .catch((err) => console.log("Error getting reviews" + err))
        
    },[])
    return (

        companyDetails ?
        <Container maxwidth = "xl">
            <Grid container>

            </Grid>
        </Container>
        : <></>
    )
}
