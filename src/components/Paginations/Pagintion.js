import React, {useState} from 'react';
import "./pagination.css"
import { Pagination } from 'antd';

const CustomPagination = (props) => {
  const {total, defaultPageSize,defaultCurrent, onChange, current} = props

  return(
    <Pagination
      className='ds_pagination'
      total={total}
      showTotal={((total, range) => `${range[0]}-${range[1]} of ${total} items`)}
      defaultPageSize={defaultPageSize}
      defaultCurrent={defaultCurrent}
      onChange={onChange}
      // current={current === undefined ? 1 : current}
    />
  )
};
export default CustomPagination;