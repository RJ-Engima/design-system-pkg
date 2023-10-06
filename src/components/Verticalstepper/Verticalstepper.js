import React from 'react';
import { Steps } from 'antd';
import './vstepper.css';
import {Box} from '@mui/material';
import  Button  from '../Buttons/Button'; 

const CustomStepper = ({onChange,items,nextbtn,backbtn,finishbtn}) => {  
  const [current, setCurrent] = React.useState(0);        

  // Next Button 
  const handleNext = () => {
    setCurrent(current + 1);  
  }

  // Previous Button 
  const handlePrevious = () => {
    if(current === 0) {
      setCurrent(0);      
    } else {
      setCurrent(current - 1);  
    }   
  };

  // finish button 

  const handleReset = () => { 
     setCurrent(0); 
  }


  return (
    <React.Fragment>
      <Steps
        className={'CustomStepper'}
        current={current}
        onChange={onChange}    
        direction="vertical"
        items={items}  
      />
      <Box style={{display: 'flex',justifyContent: 'space-between',flexDirection: 'row-reverse',marginTop: '20px'}}> 
        {current < items.length && (  
          <Button className='btn-sm btn-success' onClick={handleNext}>  
            {nextbtn}
          </Button>
        )}
        {current === items.length  && ( 
          <Button className="btn-sm btn-info" onClick={handleReset}>          
            {finishbtn}
          </Button>
        )}      
        {current > -1 && (    
          <Button className='outline-dark btn-sm' onClick={handlePrevious}>   
            {backbtn}  
          </Button>
        )}  
      </Box>    
    </React.Fragment>     
  );
};

export default CustomStepper; 