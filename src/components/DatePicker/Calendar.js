import React from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import "./datepicker.css";    


// const handleDown = (e) => {
//   if('input' !== Number)  {
//       e.preventDefault(); 
//   } else if('input' == Number) {
//       e.value;
//   }
// } 

function Calendar(props) { 
  const {
    className,
    picker,
    placeholder,
    disabled,
    onSelect,
    inputReadOnly,
    autoFocus,
    allowClear,
    onChange,
    size,
    suffixIcon,
    style,
    value,
    placement, 
    format,
    showTime
  } = props;
  return ( 
    <React.Fragment> 
      <DatePicker  
      {...props}
        className={className ? `datePicker ${className}` : 'datePicker'} 
        showTime={showTime}
        defaultValue={dayjs(new Date())}  
        suffixIcon={<i className="icon icon-Line-System-Calendar"></i>}
        format={format}     
        inputReadOnly={true}  
        style={style} 
        onChange={onChange}
        autoFocus={autoFocus}
        size={size} 
        value={value}
        allowClear={true}
        onSelect={onSelect}
        disabled={disabled} 
        picker={picker} 
        placeholder={placeholder} 
        placement={placement} 
      />  
    </React.Fragment>
  );
}

export default Calendar;

{   
  /* <DatePicker className="Month-picker" picker='month'  placeholder='month picker' />   */    
}   
