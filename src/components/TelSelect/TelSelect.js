import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./telselect.css";
import { FormHelperText,Box } from "@mui/material";
import SuccessIcon from "../../assets/img/Solid-System-Check-Circle.png"
import ErrorIcon from "../../assets/img/Solid-System-Close-Circle.png"

function TelSelect(props) {

  const {
    className,
    inputClass,
    value,
    status,
    placeholder,
    onChange,
    label,
    labelfor,  
    disabled, 
    labelId,
    name,
    id,
    key,
    searchPlaceholder,
    helperText, 
    enableSearch,
  } = props 

  return (
    <React.Fragment>
      <div className="form-group input_group">  
        <div className={ `inputTelSelect ${status}`} style={{display: "block",textAlign: 'left'}}>   
        <label for={labelfor} id={labelId} className="labelClass">{label}</label>  
        <PhoneInput
          {...props} 
          placeholder={placeholder}
          name={name}
          disabled={disabled}
          id={id}
          type="text" 
          searchPlaceholder={searchPlaceholder}
          disableSearchIcon="true"
          key={key}
          inputClass={inputClass ? `${inputClass} input-sm tel-input` : 'input-sm tel-input'} 
          countryCodeEditable={false}
          enableSearch={enableSearch}
          value={value}
          onChange={onChange}
        />
  
      {status ? 
        <FormHelperText className={`${status === "success" ? "success-text" : '' || status === "error"  ? 'error-text' : ''}`}>  
         <img src={status === "success" ? SuccessIcon : '' || status === "error" ? ErrorIcon : ''} alt="status Img" /> {helperText}   
        </FormHelperText> : ''}   
      </div>
      </div>
    </React.Fragment>
  );
}

export default TelSelect;
