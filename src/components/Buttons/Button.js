import React from "react";
import {Button,Box} from "@mui/material";
import "./button.css";

function Buttonds(props) {
  const {
    className,
    disabled,
    value,
    variant,
    style,
    onClick,
    children,
    component,
    startIcon,
    endIcon,
    type,
    arialabel,
  } = props;
  return (
    <React.Fragment>
      <Box className={className ? className : 'btn-primary'}> 
        <Button
          variant={variant ? variant : "contained"} 
          disabled={disabled}
          style={style} 
          onClick={onClick}
          component={component}
          aria-label={arialabel}
          type={type}
          startIcon={startIcon}
          endIcon={endIcon} {...props}>
          {value}
          {children}
          
        </Button>  
      </Box>
    </React.Fragment>
  );
}

export default Buttonds;

// add_icon_left

// add_icon_left
