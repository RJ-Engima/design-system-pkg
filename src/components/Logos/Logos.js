import React from "react";
// main css import
import "./medialogos.css";
import Icon from "@mui/material/Icon";

function Logo({ className,style,onClick } ) {
  return (
    <React.Fragment>
      <Icon className={className} style={style} onClick={onClick}></Icon>
    </React.Fragment>
  );
}

export default Logo;
