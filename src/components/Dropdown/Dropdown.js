import React from 'react';
import { Select,Space } from 'antd';
import './dropdown.css';
import SuccessIcon from "../../assets/img/Solid-System-Check-Circle.png";
import ErrorIcon from "../../assets/img/Solid-System-Close-Circle.png";
import { FormHelperText,Box } from '@mui/material';

const DropDown = (props) => {
 const {maxTagCount,selectOptions,className,mode,style,placeholder,
    defaultValue,onChange,optionLabel,id,disabled,label,labelfor,status,helperText,onSearch} = props
    return (
  <React.Fragment>
    <div className="form-group input_group">
    <label for={labelfor} className="labelClass">{label}</label>
    <i className='qwdqw'></i>
  <Select
    {...props}
    mode={mode}   // single or multiple
    className={className ? ` ${className} drop-sm` : 'drop-sm'}
    style={style}
    allowClear
    id={id}
    placeholder={placeholder}
    disabled={disabled}
    defaultValue={defaultValue}
    onChange={onChange}
    showSearch
    onSearch={onSearch}
    optionLabelProp={optionLabel}
    maxTagCount="responsive"  //responsive
  >
    {selectOptions.map((drop) => {
      return (
        <Option value={drop.value} id={drop.id} label={drop.label} disabled={drop.disabled}>
          <Space>
            {drop.value}
          </Space>
      </Option>
      )
    })}
  </Select>
  {status ?
        <FormHelperText className={`${status === "success" ? "success-text" : '' || status === "error"  ? 'error-text' : ''}`}>
         <img src={status === "success" ? SuccessIcon : '' || status === "error" ? ErrorIcon : ''} alt="status Img" /> {helperText}
        </FormHelperText> : ''}
  </div>
  </React.Fragment>
)};
export default DropDown;


