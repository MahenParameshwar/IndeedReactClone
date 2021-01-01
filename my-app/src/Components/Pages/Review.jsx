import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getCompanyReviews } from '../../Redux/CompanyReviews/action';

export function Review(props) {
    const companyDetails = useSelector(state => state.companies.currentCompany);
    const query = new URLSearchParams(props.location.search);
    const id =query.get('id')
    const dispatch = useDispatch()
    useEffect(()=>{
       
        dispatch(getCompanyReviews(id));
        
    },[])
    return (

        companyDetails ?
        <div>
            <h1>Reviews</h1>
            <div>
                {companyDetails.company}
                <img src = {companyDetails.logo} alt = {companyDetails.company} />
            </div>
        </div> : <></>
    )
}
