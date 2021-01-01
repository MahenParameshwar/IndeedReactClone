import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

export function Review() {
    const companyDetails = useSelector(state => state.companies.currentCompany);
    console.log(companyDetails)

    return (
        <div>
            <h1>Reviews</h1>
            <div>
                {companyDetails[0].company}
                <img src = {companyDetails[0].logo} alt = {companyDetails[0].company} />
            </div>
        </div>
    )
}
