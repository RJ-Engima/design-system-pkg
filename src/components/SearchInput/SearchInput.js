import React from "react";
import { Select, Input } from "antd";
import "./search.css";

function SearchInput(props) {
  const {
    mainClass,
    compact,
    searchClass,
    defaultValue,
    SearchtypeClass,
    placeholder,
    showSelect,
    Options,
    allowClear,
    onChangeSelect,
    onChangeSearch,
    onKeyDown,
    onKeyUp,
    value,
    searchValue,
    searchName,
    searchid
  
  } = props 
  
  return (
    <React.Fragment>
      <Input.Group compact={compact} className={mainClass}>
      {showSelect ? <Select className={SearchtypeClass} value={value}
      onChange={onChangeSelect} defaultValue={defaultValue}>
          {Options.map((inner) => {
            return (
              <Option value={inner.value} key={inner.id}>
                {inner.content}
              </Option>
            );
          })}
        </Select> : null }
        <Input.Search className={searchClass ? searchClass : 'search-box'} onChange={onChangeSearch} name={searchName} id={searchid}
         value={searchValue} onKeyUp={onKeyUp} onKeyDown={onKeyDown}
         placeholder={placeholder} allowClear={allowClear} />
      </Input.Group>
    </React.Fragment>
  );
}

export default SearchInput;

{
  /* <Input.Group compact className="search-category-light">
<Select className="search-type" defaultValue="Mobile Number">
  <Option value="Mobile Number">Mobile Number</Option>
  <Option value="Category">Category</Option>
</Select>
<Input.Search className="search-box" placeholder="PlaceHolder" />
</Input.Group> */
}
