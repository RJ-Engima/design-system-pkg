import React from "react";

import { Chip } from "@mui/material";
import "./infoBadges.css";

function Badge(props) { 
  const { label, className,style,onClick,
    sx ,variant,color,children }  = props; 
  return (    
    <React.Fragment>  
      <Chip className={className} style={style}
      onClick={onClick} color={color} label={label}
       sx={sx} variant={variant} icon={children} {...props}>   
        </Chip>    
    </React.Fragment> 
  );  
}

export default Badge;
