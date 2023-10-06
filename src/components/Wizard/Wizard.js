import React, { useState } from 'react';
import {Box} from '@mui/material'
import { Steps,message } from 'antd';
import Button from '../Buttons/Button';
import './stepper.css'; 

const Wizard = (props) => {
  const {steps,className,clickable,onChange,direction,children,verticalStepper,type} = props;

  return (
    <>
    <Box className={verticalStepper}>
      <Steps
        type={type? type : 'navigation'}    
        size="small"    
        direction={direction} 
        onChange={onChange}  // to activate clickable    
        className={className ? `${className}` + 'site-navigation-steps' : 'site-navigation-steps'} 
        items={steps}
        {...props}
      />
      <div>{children}</div>
      </Box>
    </>
  );
};
export default Wizard;