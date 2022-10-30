import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

function Pagination({onChangePage}) {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected)}
      pageRangeDisplayed={5}
      pageCount={3}
      previousLabel="<"
      renderOnZeroPageCount={null}
      activeClassName={styles.activeLi}
      pageClassName={styles.li}
      previousClassName={styles.previous}
      nextClassName={styles.next}
    />
  );
}

export default Pagination;
