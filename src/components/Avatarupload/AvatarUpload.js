import React,{useState} from 'react';
import { Upload, message } from 'antd';
import './avatar.css';

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';           
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!'); 
  }
  const isLt5M = file.size / 1024 / 1024 < 5;
  if (!isLt5M) {
    message.error('Image must smaller than 5MB!');
  }
  return isJpgOrPng && isLt5M;
};

const AvatarUpload = (props) => {
  const {onChange,children,className,name,crossOrigin,id,action} = props 

  const dummyRequest = async ({ file, onSuccess }) => {    
    setTimeout(() => {
       onSuccess("ok");
    }, 0);
  }
  const uploadButton = (
    <></>
  );
  return (
    <React.Fragment>
      <Upload
        name={name} 
        uid={id}
        className={className ? className : 'avatar-md'}       
        customRequest={dummyRequest}  
        listType="picture-circle"    
        crossOrigin={crossOrigin} 
        showUploadList={false}  
        beforeUpload={beforeUpload}     
        action={action}
        onChange={onChange} 
        {...props}
        >
        {children}
        <div className="editIcon"></div>
      </Upload>
    </React.Fragment> 
  );
};
export default AvatarUpload;