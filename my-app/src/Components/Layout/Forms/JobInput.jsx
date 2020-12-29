import { Box, Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import React, { useState , useRef, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import classNames from "classnames";

function JobInput({classes,setJob,job}) {
    const [display,setDisplay] = useState(false); 
    const [jobOptions,setJobOptions] = useState(['Java Developer','Javascript Developer','React Developer','Government','Account']);
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
                                value={job}
                                onChange={event => setJob(event.target.value)}
                                />
                                {
                                    display && (
                                        <div style={{position:'absolute'}} className={classes.autocontainer}>
                                            {
                                                jobOptions.filter(option => option.toLowerCase().indexOf(job.toLowerCase()) > -1).map((option,index)=>{
                                                    return (
                                                        <div key={index}
                                                        onClick={()=>{
                                                            setJob(option)
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

export default JobInput;