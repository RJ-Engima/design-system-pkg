import React from 'react'
import TablePagination from "@mui/material/TablePagination";
import './pagination.css'

export default function TablePaginations(props) {
  const { className, count, page, onPageChange, rowsPerPage, onRowsPerPageChange } = props
  return (
    <TablePagination
      className={className}
      component="div"
      count={count}
      page={page}
      onPageChange={onPageChange}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={onRowsPerPageChange}
    />
  )
}
