import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { CompanyBox } from "../Layout/Companies/CompanyBox";
import SearchIcon from '@material-ui/icons/Search';
import { Box, 
    Container,
    makeStyles,
    Grid,
    Typography,
    OutlinedInput,
    Button,
    withStyles,
    InputAdornment,
    TextField,
    FormHelperText

} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: "#f2f2f2",
        padding: 0
    },
    boxSearch: {
        backgroundColor: "white",
        margin: 0,
        height: "300px",
        backgroundPosition: "right",
        backgroundImage: "url(/Images/companyreview.PNG)",
        backgroundRepeat: "no-repeat"

    },
    outerSearchGrid: {
        marginTop: "50px",
        flexDirection: "column"
    },
    h3: {
        fontWeight: "bold",
        marginBottom: "20px" 
    },
    h5: {
        color: "#6f78a5",
        fontWeight: "400",
        marginBottom: "70px"
    },
    outlinedInput: {
        border: "2px solid #cccccc",
        borderRadius: "10px",
        width: "450px"
    },
    formhelperText: {
        color: "#085ff7",
        paddingLeft: "20px",
        cursor: "pointer"
    },
    companiesHiring: {
        marginTop: "50px",
        marginBottom: "20px",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center"
    }
}))

const SearchButton = withStyles((theme) => ({
    root: {
        color: "#ffffff",
        backgroundColor: "#085ff7",
        cursor: "pointer",
        width: "200px",
        borderRadius: "200px",
        height: "53px",
        marginLeft: "50px",
        '&:hover': {
            backgroundColor: "#0542ac",
        },
    },
}))(Button);

export function CompanyReviews() {

    const classes = useStyles();
    const[companies, setCompanies] = useState([]);
    const[query, setQuery] = useState("");

    console.log(companies)

    const onTextChange = (e) => {
        setQuery(e.target.value);
        console.log(query)
    }

    useEffect(() => {
        axios.get("http://localhost:5000/companies")
            .then((res) => {
                
                setCompanies(res.data)
            })
            .catch((err) => console.log(err))
    },[])


    return (
        <Container className = {classes.container} maxWidth = "xl">
            <Box className = {classes.boxSearch} >
                <Grid container className = {classes.outerSearchGrid} direction = "row">
                    <Grid item >
                        <Typography className = {classes.h3} variant = "h3">
                            Find great places to work
                        </Typography>
                        <Typography className = {classes.h5} variant = "h5">
                            Discover millions of company reviews
                        </Typography>
                    </Grid>
                    <Grid item xl = {8} lg = {8} md = {10} sm = {12} xs = {12}>
                        <form>
                            <TextField  
                                className = {classes.outlinedInput} 
                                required 
                                type = "text" 
                                variant="outlined"
                                placeholder = "Enter a company name"
                                value = { query }
                                onChange = { onTextChange }
                                InputProps={{
                                    endAdornment: (
                                      <InputAdornment position="end">
                                        <SearchIcon />
                                      </InputAdornment>
                                     )
                                    }}
                                />
                            <SearchButton type = "submit" variant = "contained">
                                Search
                            </SearchButton>
                            <FormHelperText className = {classes.formhelperText}>Do you want to search for salaries?</FormHelperText>
                        </form>
                    </Grid>
                </Grid>
            </Box>
            <Grid className = {classes.companiesHiring} container align= "center" xl = {10} lg = {10} md = {11} sm = {12} xs = {12}>
                <Grid item container  >
                    <Grid item>
                        <img src="/Images/location.PNG" alt="location pin" style = {{padding: "5px 0 5px 10px"}} />
                    </Grid>
                    <Grid item>
                        <Typography style = {{paddingTop: "15px"}} variant = "h5">Companies Hiring Now</Typography>
                    </Grid>
                </Grid>
                <Grid container style = {{width: "100%"}}>
                    {
                        companies.map((item,index) => {
                            return(
                                <CompanyBox 
                                    key = {item.id}
                                    logo = {item.logo}
                                    name = {item.company}
                                    rating = {item.ratings}
                                />
                            )
                        })
                    }
                </Grid>
            </Grid>
            <Grid className = {classes.companiesHiring} container align= "center" xl = {8} lg = {8} md = {10} sm = {12} xs = {12}>
                <Grid item container  >
                    <Grid item>
                        <img src="/Images/popularcompany.PNG" alt="location pin" style = {{padding: "5px 0 5px 10px"}} />
                    </Grid>
                    <Grid item>
                        <Typography style = {{paddingTop: "15px"}} variant = "h5">Popular Companies</Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    {
                        companies?.map((item) => {
                            return(
                                <CompanyBox 
                                    key = {item.id}
                                    logo = {item.logo}
                                    name = {item.company}
                                    rating = {item.ratings}
                                />
                            )
                        })
                    }
                </Grid>
            </Grid>
            <Grid className = {classes.companiesHiring} style = {{borderTop: "10px solid #ff5a1f"}} container align= "center" xl = {8} lg = {8} md = {10} sm = {12} xs = {12}>
                <Grid item >
                    <Typography style = {{paddingTop: "15px"}} variant = "h5">Rate your recent company:</Typography>
                </Grid>
                <Grid item >
                    
                </Grid>
            </Grid>
        </Container>
    )
}