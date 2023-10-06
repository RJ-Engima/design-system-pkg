import React from "react";
import { DatePicker } from "antd";
import "./daterangepicker.css";
  
function DateRangePicker(props) {  
  const {
    className,
    allowClear,
    autoFocus,
    disabled,
    inputReadOnly,
    placeholder,
    size,
    onChange,
    suffixIcon,
    value,  
    showTime,
    style,
    onCalendarChange,
    placement,
    defaultValue, 
    format,        
  } = props;
  return (
    <DatePicker.RangePicker   
      {...props}
      defaultValue={defaultValue}      
      format={format} 
      className={className? `datePicker ${className}` : 'datePicker'}
      size={size}
      onChange={onChange}
      suffixIcon={<i className="icon icon-Line-System-Calendar"></i>} 
      style={style}
      placement={placement}
      value={value}
      disabled={disabled}
      allowClear={true}
      autoFocus={autoFocus}
      inputReadOnly={true}  
      showTime={showTime}
      onCalendarChange={onCalendarChange}
    />
  );
}

export default DateRangePicker;

// import { DatePicker } from "antd";
// import type { DatePickerProps } from "antd";
// import "antd/dist/antd.css";

// // import const
// const onChange: DatePickerProps["onChange"] = (date, dateString) => {console.log(date, dateString);};

// <DatePicker.RangePicker className="Date-Range-Picker" />
