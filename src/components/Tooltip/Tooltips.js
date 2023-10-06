import React from 'react';
import { Space, Tooltip } from 'antd';
import './tooltip.css';   

const Infotips = ({title,placement,children,className,color,key,style}) => ( 
  <React.Fragment>  
    <Space wrap>
        <Tooltip overlayClassName={className} style={style} title={title} color={color} key={key} placement={placement}>
        {children}  
        </Tooltip>
    </Space>
  </React.Fragment> 
);
export default Infotips;