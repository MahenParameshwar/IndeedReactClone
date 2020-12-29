import { Box, Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import React, { useState , useRef, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import classNames from "classnames";

function LocationInput({classes,setLocation,location}) {
    const [display,setDisplay] = useState(false);
    const [locationOptions,setLocationOptions] = useState(['Bangalore','Mumbai','Delhi','Kolkata','Chennai']);
    const wrapperRef = useRef(null);

    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);
        return () => {
          window.removeEventListener("mousedown", handleClickOutside);
        };
      });

      const handleClickOutside = event => {
        const { current: wrap } = wrapperRef;
        if (wrap && !wrap.contains(event.target)) {
          setDisplay(false);
        }
      };
      
    return (
        <Box  ref={wrapperRef} className={classes.suggestionInput}>
                                <OutlinedInput
                                className={classes.input }
                                onClick={()=>setDisplay(!display)}
                                value={location}
                                onChange={event => setLocation(event.target.value)}
                                />
                                {
                                    display && (
                                        <div style={{position:'absolute'}} className={classes.autocontainer}>
                                            {
                                                locationOptions.filter(option => option.toLowerCase().indexOf(location.toLowerCase()) > -1).map((option,index)=>{
                                                    return (
                                                        <div key={index}
                                                        onClick={()=>{
                                                            setLocation(option)
                                                            setDisplay(false)
                                                        }}
                                                        style={{cursor:'pointer'}}
                                                        >
                                                            <span style={{marginLeft:'15px'}}>
                                                                {option}
                                                            </span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                }
                            </Box>
    );
}

export default LocationInput;