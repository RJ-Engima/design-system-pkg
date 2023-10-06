import React from "react";
import './subtext.css';
import Avatars from "../Avatars/Avatars";

function Subtext({avatartext,fname,subname,className,src}) {  
  return (
    <React.Fragment>
      <div className="img-flex">
        <Avatars className={className} src={src}>{avatartext}</Avatars>
        <div className="d-block"> 
          <h5 className="top-text">{fname}</h5>
          <sub className="sub-text">{subname}</sub>   
        </div>
      </div>
    </React.Fragment>
  );
}

export default Subtext;
