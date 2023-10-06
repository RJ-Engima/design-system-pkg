import React from 'react';
import { Icon } from '@mui/material'; 
import './icon.css';  

export default function Ibtn({className,style,onClick}) {     
  return (
    <React.Fragment>  
      <Icon className={className} style={style} onClick={onClick} />   
    </React.Fragment>   
  )
}

// className =>   <Icon className="btni btni-sm outline-info add-icon" />   