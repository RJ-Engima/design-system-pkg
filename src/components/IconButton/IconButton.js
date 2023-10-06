import React from 'react'
import {Fab,Box} from '@mui/material';
import './IconButton.css';

const IconButtonDs = (props) => { 
  let  {className,size,arialabel,color,children,variant,onClick,disabled} = props;  
  return (
    <React.Fragment>
      <Box className={className ? `${className} btnIcon` : 'btnIcon icon-primary'}>
        <Fab color={color} aria-label={arialabel}   
        variant={variant ? variant : variant="contained"}   
        size={size ? size : size="small"} 
        onClick={onClick} 
        disabled={disabled} {...props}>  
          {children}  
        </Fab>  
      </Box>
    </React.Fragment>
  )
}

export default IconButtonDs