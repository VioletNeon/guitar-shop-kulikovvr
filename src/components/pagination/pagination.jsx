import React from 'react';
import PropTypes from 'prop-types';
import {DEFAULT_PAGE} from '../../const';
import PageItem from '../pagination-item/page-item';

function Pagination({pageCount, currentPage, setNewPageNumber}) {
  const pages = [...Array(pageCount).keys()].map((i) => i + DEFAULT_PAGE);

  const handleButtonBackClick = () => {
    setNewPageNumber(currentPage - DEFAULT_PAGE);
  };

  const handleButtonNextClick = () => {
    setNewPageNumber(currentPage + DEFAULT_PAGE);
  };

  return (
    <ul className="pagination">
      <li>
        <button
          className={`pagination__page ${currentPage === DEFAULT_PAGE ? 'visually-hidden' : 'pagination__page--back'}`}
          type="button"
          onClick={handleButtonBackClick}
        >
          Назад
        </button>
      </li>
      {pages.map((pageNumber) => (
        <PageItem
          key={pageNumber}
          pageCount={pages.length}
          currentPage={currentPage}
          pageNumber={pageNumber}
          setNewPageNumber={setNewPageNumber}
        />
      ))}
      <li>
        <button
          className={`pagination__page ${currentPage === pageCount || pageCount === 0 ? 'visually-hidden' : 'pagination__page--next'}`}
          type="button"
          onClick={handleButtonNextClick}
          disabled={currentPage === pageCount}
        >
          Далее
        </button>
      </li>
    </ul>
  );
}

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setNewPageNumber: PropTypes.func.isRequired,
};

export default Pagination;
