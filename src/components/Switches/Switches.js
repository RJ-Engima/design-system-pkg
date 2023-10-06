import React from "react";
import "./Switches.css";

import {
  FormGroup,
  FormControl,
  FormControlLabel,
  Switch,
} from "@mui/material";

function Switchbox(props) {
  const { className, variant, label, labelPlacement, disabled ,defaultChecked,onChange} =
    props;        
  return (
    <div className="form-group input_group input-box"> 
      <FormControl component='fieldset' variant={variant}>   
        <FormGroup> 
          <FormControlLabel 
            control={<Switch 
              {...props}
            className={className ? `primary-check ${className}` : 'primary-check'} 
            defaultChecked={defaultChecked}
            disabled={disabled} />} 
            label={label}
            labelPlacement={labelPlacement}  
            onChange={onChange} 
          />
        </FormGroup>
      </FormControl>
    </div>
  );
} 

export default Switchbox;