import React from 'react';
import { Checkbox } from 'antd';
import {Box,FormHelperText} from '@mui/material';
import ErrorIcon from "../../assets/img/Solid-System-Close-Circle.png";
import './checkbox.css';

const checkBox = (props) => {

    const {options,defaultValue,onChange,className,errorStatus,helperText} = props; 
    return (
        <React.Fragment>
            <div className="form-group input_group">           
                <Checkbox.Group 
                {...props}      
                className={className ? `defaultCheck ${className}` : "defaultCheck"}    
                options={options}   
                defaultValue={defaultValue} 
                onChange={onChange}
               />  
            {errorStatus ? 
            <FormHelperText className="error-check">
                <img src={errorStatus ? ErrorIcon : '' } alt="status Img" />
                {helperText}</FormHelperText> : '' }      
            </div>  
        </React.Fragment>   
    )   
}


export default checkBox;