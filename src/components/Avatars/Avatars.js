import React from "react";
import { Avatar } from "@mui/material";
import "./avatar.css";

const Avatars = (props) => {
  const { alt, src, className, children, style } = props;
  return (
    <React.Fragment>
      <Avatar className={className} alt={alt} src={src} style={style} {...props}>
        {children}
      </Avatar>
    </React.Fragment>
  );
};

export default Avatars;
