import React from 'react'
import { FormHelperText } from '@mui/material';
import TextareaAutosize from "@mui/material/TextareaAutosize";
import SuccessIcon from "../../assets/img/Solid-System-Check-Circle.png";
import ErrorIcon from "../../assets/img/Solid-System-Close-Circle.png";
import "./textarea.css";

export default function TextArea(props) {
  const {className, placeholder,disabled, onChange, onKeyDown,status,helperText,labelfor,label, resize} = props
  return (
    <div className={`form-group input_group ${status}`}>
      <label for={labelfor} className="labelClass">{label}</label>
      <TextareaAutosize
        {...props}
        className={`textarea-box ${className, resize === false ? "resize-disabled" : ""}`}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        onKeyDown={onKeyDown}
        minRows={1}
      />
        {status ?
          <FormHelperText style={{marginTop: "0 !important"}} className={`${status === "success" ? "success-text" : '' || status === "error"  ? 'error-text' : ''}`}>
          <img src={status === "success" ? SuccessIcon : '' || status === "error" ? ErrorIcon : ''} alt="status Img" /> {helperText}
          </FormHelperText> : ''
        }
    </div>
  )
}
