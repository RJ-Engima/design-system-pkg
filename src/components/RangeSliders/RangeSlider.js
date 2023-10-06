import React from "react";
import { Slider, Input } from "@mui/material";
import "./rangeSlider.css";

const RangeSlider = (props) => {
  const {
    title,
    markValues,
    value,
    size,
    step,
    defaultValue,
    className,
    valueLabelDisplay,
    onChange,
    inputProps,
    inputValue,
    onInputChange,
    onInputBlur,
  } = props;
  return inputProps !== undefined ? (
    <div className="rs-div">
      <div>
        <span className="rs-title">{title}</span>
        <Input
          inputProps={inputProps}
          value={inputValue}
          onChange={onInputChange}
          onBlur={onInputBlur}
        />
        <Slider
          size="small"
          step={step}
          defaultValue={defaultValue}
          className={className}
          marks={markValues}
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  ) : (
    <Slider
      size="small"
      step={step}
      defaultValue={defaultValue}
      className={className}
      marks={markValues}
      valueLabelDisplay={valueLabelDisplay}
      onChange={onChange}
    />
  );
};

export default RangeSlider;
