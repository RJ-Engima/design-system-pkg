import React, { useState } from 'react';
import {  Modal } from 'antd';
import Button from '../Buttons/Button';
import './modal.css';

const Popup = (props) => {
    
  const {className,modalTitle,open,onOk,onCancel,footer,closable,zIndex} = props;     
  
  return (
    <React.Fragment> 
      <Modal 
        className={className ? className : 'modal-md'}  
        title={modalTitle} 
        open={open} 
        onOk={onOk} 
        zIndex={zIndex} 
        onCancel={onCancel} 
        closable={closable}
        footer={footer}
        {...props} /// covers children props            
        >   
      </Modal>
    </React.Fragment> 
  );
};
export default Popup;