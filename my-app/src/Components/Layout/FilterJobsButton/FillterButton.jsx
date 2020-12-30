import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'

function FillterButton({setType,type,typeStr,typeArr,formatDate}) {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = (type) => {
        setAnchorEl(null);
        setType(type)
    };
    return (
        <>
             <Button variant='contained' aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    {
                        !type ? typeStr : formatDate ? `Last ${type === 1 ? '24 hours' : `${type} days` }` : type }
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {
                        typeArr.map((type,index)=> <MenuItem key={index} onClick={()=>handleClose(type)}>
                            
                            {formatDate ? `Last ${type === 1 ? '24 hours' : `${type} days` }` : type }
                            
                            </MenuItem>)
                    }
                
                </Menu>
        </>
    );
}

export default FillterButton;