import React ,{useState} from 'react';
import Button from '../Buttons/Button';
import { Drawer } from 'antd';
import './drawer.css';

const Drawers = (props) => {
  const {modalTitle,onCancel,open,placement,footer} = props;    
  return (
    <React.Fragment>  
      <Drawer 
      title={modalTitle}
      placement={placement}
      onClose={onCancel}    
      footer={footer}
      open={open}
      {...props} />  
    </React.Fragment>
  );
};  
export default Drawers;