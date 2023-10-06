import React from "react";
import { DatePicker } from "antd";
import "./daterangepicker.css";
import dayjs from "dayjs";

function DateRangePicker(props) {
  const {
    className,
    allowClear,
    autoFocus,
    disabled,
    inputReadOnly,
    // defaultValue,
    defaultPickerValue,
    placeholder,
    size,
    handleChange,
    suffixIcon,
    // value,
    defaultValue,
    showTime,
    style,
    onCalendarChange,
    placement,
    // defaultValue,
    format,
  } = props;
  const [dates, setDates] = React.useState(null);
  const [value, setValue] = React.useState(null);

  let Limiter = (current) => {
    if (!dates) {
      return false;
    }
    const tooLate = dates[0] && current.diff(dates[0], 'days') > 30;
    const tooEarly = dates[1] && dates[1].diff(current, 'days') > 7;
    return !!tooEarly || !!tooLate;
  };

  const onOpenChange = (open) => {
    if (open) {
      setDates([null, null]);
    } else {
      setDates(null);
    }
  };

  const handleDateChange = (date, stringDate) => {
    setValue(date);
    if(handleChange) {
      handleChange(stringDate);
    } else {
      console.log('nothing');
    }
  };
  const {RangePicker} = DatePicker

  const dateFormat = 'YYYY/MM/DD';

  return (
    <RangePicker
    {...props}
      // defaultValue={defaultValue}
      format={format}
      className={className}
      placeholder={placeholder}
      size={size}
      suffixIcon={suffixIcon}
      style={style}
      placement={placement}
      value={value}
      disabled={disabled}
      allowClear={true}
      autoFocus={autoFocus}
      inputReadOnly={true}
      showTime={showTime}
      // onCalendarChange={onCalendarChange}
      // disabledDate={Limiter ? Limiter : ''}
      onCalendarChange={(val) => setDates(val)}
      onChange={handleDateChange}
      onOpenChange={onOpenChange}
      // defaultPickerValue={moment(new Date())}
      defaultValue={[dayjs('2015/01/01', dateFormat), dayjs('2015/01/01', dateFormat)]}
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
