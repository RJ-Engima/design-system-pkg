import React,{useState} from 'react'
import './inputs.css';
import SuccessIcon from "../../assets/img/Solid-System-Check-Circle.png"
import ErrorIcon from "../../assets/img/Solid-System-Close-Circle.png"
import PasswordIcon from '../../assets/img/password-input.png'; 
import eyeIcon from '../../assets/img/eye-icon.png';  
import FormHelperText from '@mui/material/FormHelperText';

const Inputs = (props) => {  
  
  const {style,onChange,labeltext,htmlFor,name,type
    ,id,className,placeholder,disabled,helpIcon,helpTextvariant,helpText,
    required,autocomplete,value,autoFocus,defaultValue,inputRef,readOnly,sx,
    maxLength,minLength ,status,helperText,calcHeight,onBlur,onFocus,onSelect,onSubmit,
    onKeyUp,onKeyPress,onKeyDown,onMouseEnter,OnMouseLeave,onMouseDown,onReset  
  } = props 

  const [passwordToggle, setpasswordToggle] = useState(false);    
  const [imgToggle,setimgToggle] = useState(PasswordIcon);  

  function togglePassword() {   
    // setpasswordToggle(!passwordToggle);    
    if (passwordToggle) {   
     return setpasswordToggle(!passwordToggle) ,setimgToggle(PasswordIcon);
    } else {
     return setpasswordToggle(!passwordToggle) ,setimgToggle(eyeIcon);
    }   
}

  return (
    <div className={'form-group input_group input-box ' + `${status}`}> 
        <label className='labelClass' htmlFor={htmlFor}>{labeltext}</label>
       <div className="form-content">
          <input 
          {...props}      
          type={passwordToggle ? "text" : "password" || type ? type : type} 
          name={name} 
          id={id}  
          className={className ? `input-sm ${className}`: "input-sm"} // NOte   
          style={style} 
          placeholder={placeholder} 
          onChange={onChange} 
          onBlur={onBlur}
          onSelect={onSelect}
          onSubmit={onSubmit}
          onFocus={onFocus}
          onReset={onReset}
          onKeyUp={onKeyUp}
          onKeyPress={onKeyPress}     
          onMouseEnter={onMouseEnter}     
          onMouseLeave={OnMouseLeave}   
          onMouseDown={onMouseDown}   
          onKeyDown={onKeyDown}     
          disabled={disabled} 
          required={required} 
          value={value} 
          autoFocus={autoFocus} 
          inputRef={inputRef} 
          readOnly={readOnly} 
          defaultValue={defaultValue}  
          sx={sx} 
          minLength={minLength} 
          maxLength={maxLength} />          
          
          {type === "password" ?      
              <div className="eye-active" onClick={togglePassword}><img src={imgToggle} alt="password" /></div>   
            : ""
          }   
        </div> 
        {status ? 
        <FormHelperText className={`${status === "success" ? "success-text" : '' || status === "error"  ? 'error-text' : ''}`}>  
         <img src={status === "success" ? SuccessIcon : '' || status === "error" ? ErrorIcon : ''} alt="status Img" /> {helperText}   
        </FormHelperText> : ''} 
        {/* {status === "success" ? 
        <FormHelperText className="success-text">  
          <span className='input_success_icon'><img src={SuccessIcon}/></span>
            {helperText}  
        </FormHelperText> : ''}   
        {status === "error" ? 
        <FormHelperText className="error-text">  
          <span className='input_error_icon'><img src={ErrorIcon}/></span>
            {helperText}
        </FormHelperText> : ''}    */}
    </div>
  )
}

export default Inputs;

