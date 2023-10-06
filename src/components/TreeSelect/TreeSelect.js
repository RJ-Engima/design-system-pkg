import React from "react";
import { TreeSelect } from "antd";
import { FormHelperText ,Box} from "@mui/material";
import "./treeselect.css";
import SuccessIcon from "../../assets/img/Solid-System-Check-Circle.png";
import ErrorIcon from "../../assets/img/Solid-System-Close-Circle.png";

const { SHOW_PARENT } = TreeSelect;

const TreeSelects = (props) => {
  const {
    className,
    id,
    onChange,
    value,
    labelfor,
    placeholder,
    maxTagCount,
    defaultValue,
    treeData,
    disabled,
    showArrow,
    label,
    status,
    helperText
  } = props;
  const tProps = {
    treeData,
    value,
    onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
  };
  return (
    <React.Fragment>
      <div className="form-group input_group input-box">
        <label for={labelfor} className="labelClass">{label}</label>
      <TreeSelect
        {...props}
        {...tProps}
        className={className ? `drop-sm ${className}` : 'drop-sm'}
        id={id}
        allowClear
        maxTagCount="responsive"
        defaultValue={defaultValue}
        showArrow={true}
        autoClearSearchValue={true}
        onChange={onChange}
        treeData={treeData}
        disabled={disabled}
      />

       {status ?
        <FormHelperText className={`${status === "success" ? "success-text" : '' || status === "error"  ? 'error-text' : ''}`}>
         <img src={status === "success" ? SuccessIcon : '' || status === "error" ? ErrorIcon : ''} alt="status Img" /> {helperText}
        </FormHelperText> : ''}
      </div>
    </React.Fragment>
  );
};

export default TreeSelects;
