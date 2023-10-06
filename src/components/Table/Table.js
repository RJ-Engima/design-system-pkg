import React from 'react';
import {  Table } from 'antd';
import './table.css';

const Tables = (props) => {
  const {columns,data,onChange,id,scroll,rowSelection
    ,className,pagination,defaultCurrent,bordered,disabled,
    onClick,loading,showHeader,showSorterTooltip,size,sticky,tableLayout,value,showSizeChanger,showQuickJumper, expandContent, rowExpandable} = props
  return (
    <React.Fragment>
      <Table
      className={className}
      bordered={bordered}
      id={id}
      value={value}
      rowSelection={rowSelection}
      columns={columns} // data head  values
      dataSource={data} // data columns values
      showHeader={showHeader} // show and hide header (boolean)
      showSorterTooltip={showSorterTooltip}
      sticky={sticky}
      size={size}
      loading={loading}
      tableLayout={tableLayout} // table  auto  or  fixed
      onChange={onChange}
      pagination={pagination}
      defaultCurrent={defaultCurrent}
      scroll= {scroll ? scroll : { x: "120vw" }}
      onClick={onClick}
      disabled={disabled}
      showSizeChanger={showSizeChanger}
      showQuickJumper={showQuickJumper}
      expandable={{
        expandedRowRender: expandContent,
        rowExpandable: rowExpandable,
      }}
      {...props}
      />
    </React.Fragment>
  );
};

export default Tables;