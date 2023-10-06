import React, { useState } from 'react';
import { Radio } from 'antd';
import {Box,FormHelperText} from '@mui/material';
import ErrorIcon from "../../assets/img/Solid-System-Close-Circle.png";
import './Radio.css';

const RadioButton = (props) => {
  
const {radioOptions,onChange,value,radioGroupClass,className,errorStatus,helperText,type} = props;

return (
    <div className="form-group input_group">    
        <Radio.Group  onChange={onChange} optionType={type} buttonStyle="solid"> 
            {radioOptions?.map((row) => {
                return(
                    <Radio 
                        {...props}  
                        className={className ? `defaultRadio ${className}` : 'defaultRadio'}    
                        name={row.name} 
                        id={row.id} 
                        disabled={row.disabled} 
                        value={row.value}
                        >{row.label}     
                    </Radio>  
                )
            })}
        </Radio.Group>  
        {errorStatus ? 
            <FormHelperText className="error-check">
                <img src={errorStatus ? ErrorIcon : '' } alt="status Img" />
                {helperText}</FormHelperText> : ''  
        }   
    </div>  
);

};

export default RadioButton;