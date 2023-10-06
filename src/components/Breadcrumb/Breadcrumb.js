import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import {Link} from "react-router-dom";
import "./breadcrumb.css";

// const handleClick = (event) => {   
//   event.preventDefault(); 
//   console.info("You clicked a breadcrumb.");  
// };   

function Breadcrumb(props) {  
  const {items,linktext,color,className,onClick,style,disabled} = props;  
    return (    
        <div role="presentation" onClick={onClick}>            
            <Breadcrumbs aria-label="breadcrumb" {...props}>         
            {items.map((item) => {    
              return (    
              <Link style={{color: '#71767A',textDecoration: 'none'}} target="_self" underline={item.underline}      
               color={item.color} to={item.href}>   
                {item.text}       
              </Link>       
              )   
            })} 
            <Typography  component="body2"       
              style={style} 
              color={color} 
              disabled={disabled}
              className={className ? className : 'default-color'}>  
              {linktext}    
            </Typography>     
            </Breadcrumbs>            
        </div>      
    );    
}     

export default Breadcrumb;  

{
    /* <Breadcrumbs aria-label="breadcrumb">   
<Link underline="hover" color="inherit" href="/">   
  MUI     
</Link>   
<Link   
  underline="hover"   
  color="inherit"   
  href="/material-ui/getting-started/installation/"   
>   
  Core    
</Link>   
<Typography color="text.primary">Breadcrumbs</Typography>   
</Breadcrumbs>   */
}