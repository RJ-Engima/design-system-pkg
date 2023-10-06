import React, { useEffect } from "react";
import {Link} from 'react-router-dom'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Icon from "@mui/material/Icon";
import successIcon from '../../assets/img/alertsuccessIcon.svg';
import warningIcon from '../../assets/img/alertwarningIcon.svg';
import infoIcon from '../../assets/img/alertinfoIcon.svg';
import dangerIcon from '../../assets/img/alertdangerIcon.svg';
import closeIcon from '../../assets/img/closeIcon.svg';
import "./alert.css";

function Alert(props) {  
  const { className, titletext,subtext, 
    showTitleTextLink,titleTexthref,titleTexttarget,titleTextLink, //titleHyperlink
    showSubTextLink,subTexthref,subTextLink,subTexttarget,  //subTextHperlink 
    alertIcon,showTitle,showSubtitle,status} = props 
  const [close, setClose] = React.useState(false);  
  return (  
    <React.Fragment>
      {close || (
        <Box className={className + ' dsAlert' + ` ${status}`  }>   
          <Icon className={"alert-icon"} style={{ marginBottom: "auto" }}
            children={  
              status === 'alert-success' ? <img src={successIcon} alt="success-icon" /> : '' || 
              status === 'alert-warning' ? <img src={warningIcon} alt="warning-icon" /> : '' ||
              status === 'alert-danger' ?  <img src={dangerIcon} alt="danger-icon" /> : '' || 
              status === 'alert-info' ?  <img src={infoIcon} alt="info-icon" /> : '' } 
           />        
          <Box className="alert-box"> 
           {showTitle ?  <Typography variant="body2" className={"titleText"}>    
              {titletext} {showTitleTextLink ? <Link to={titleTexthref} target={titleTexttarget}>{titleTextLink}</Link> : ''}
            </Typography> : ''} 
            {showSubtitle ? <Typography variant="body2" className={"subtextClass"}>       
              {subtext} {showSubTextLink ? <Link to={subTexthref} target={subTexttarget}>{subTextLink}</Link> : ''}
            </Typography> : ''}     
          </Box> 
          <Icon 
            children={<img src={closeIcon} alt="close-icon" />} 
            onClick={() => {
              setClose(true); 
            }}      
          />    
        </Box>
      )}
    </React.Fragment>
  );
}

export default Alert;

// ref

{
  /* <Box className="alert-lg alert-danger">
<Icon className="success_icon" style={{ marginBottom: "auto" }} />
<Box style={{ display: "block" }}>
  <Typography variant="body2" className="titletext">
    Success
  </Typography>
  <Typography variant="body2" className="subtext">
    Subtext
  </Typography>
</Box>
<Icon
  className="close_icon"
  onClick={() => {
    setClose(true);
  }}
/>
</Box> */
}
