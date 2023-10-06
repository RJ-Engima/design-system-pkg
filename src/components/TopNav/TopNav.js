import * as React from "react";
import { Box, Stepper, Step, StepLabel, Typography } from "@mui/material";
import Button from "../Buttons/Button";
import SearchInput from "../SearchInput/SearchInput"
import "./topNav.css";
import Avatars  from "../Avatars/Avatars";
import Notify from "../../assets/img/notifyImg.png"
import Image1 from '../../assets/img/avatar_img.png';

function TopNav({
  style,
  className,
  search,
  button,
  avatar,
  notification,
  logo,
  programName
  }) {


  return (
    <Box sx={{ width: "100%" }} style={style} className={`topNav ${className ? className : ""}`}>
      <div className="leftSec">
        { logo ?
        <div className="logoSec">
          {logo}
          <p>{programName}</p>
        </div>
        : ""
        }
        { search === true ?
          <SearchInput
          compact
          searchClass="search-box"
          allowClear={true}
          onChangeSearch={(e) => console.log(e.target.value)}
          placeholder="Search Input"
          />
        : ""
        }
      </div>
      <div className="rightSec">
        {button === true ?
          <div className="btnDiv">
            <Button className="btn-lg btn-primary" iconright="btn_icon_right" value="Create" />
          </div>
        : ""
        }
        {notification === true ?
          <div className="notifyDiv">
            <img src={Notify} />
          </div>
          : ""
        }
        {avatar === true ?
          <div className="avatarDiv">
            <Avatars className="avatar-md" src={Image1} alt={'Image'} />
          </div>
          : ""
        }
      </div>


    </Box>
  );
}

export default TopNav;
