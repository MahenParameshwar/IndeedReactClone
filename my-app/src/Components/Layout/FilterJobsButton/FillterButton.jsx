import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
    menu:{
        fontSize:'12px',
        margin:'20px 20px 60px 0px',
        borderRadius:'10px',
        outline:'none',
        border:'1px solid #D4D2D0',
        backgroundColor:'#D4D2D0',
        padding:'10px',
        fontWeight:'bold'
    }
}))

function FillterButton({setType,type,typeStr,typeArr,formatDate}) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
      
    };
  
    const handleClose = (type) => {
        setAnchorEl(null);
        if(typeof type === 'string' || typeof type === 'number' )
            setType(type)
    };
    return (
        <>
                <button  className={classes.menu}  onClick={handleClick}>
                    {
                        !type ? typeStr : formatDate ? `Last ${type === 1 ? '24 hours' : `${type} days` }` : type 
                        
                    }
                </button>

                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {
                        typeArr.map( (type,index) => <MenuItem key={index} onClick={()=>handleClose(type)}>
                            
                            {formatDate ? `Last ${type === 1 ? '24 hours' : `${type} days` }` : type }
                            
                            </MenuItem>
                            
                        )
                    }
                
                </Menu>
        </>
    )
}

export default FillterButton;