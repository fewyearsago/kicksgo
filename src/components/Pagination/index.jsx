import React from 'react';
import style from './index.module.scss';
import ReactPaginate from 'react-paginate';

const Pagination = ({ onChangePage }) => {
  return (
    <div className={style.root}>
      <ReactPaginate
        className={style.rootPagination}
        breakLabel="..."
        previousLabel="<"
        nextLabel=">"
        onPageChange={(e) => onChangePage(e.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
