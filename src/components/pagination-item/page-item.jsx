import React from 'react';
import PropTypes from 'prop-types';
import {DEFAULT_PAGE} from '../../const';

const FOUR_PAGES = 4;

function PageItem({pageCount, currentPage, pageNumber, setNewPageNumber}) {
  const previousPage = currentPage - DEFAULT_PAGE;
  const nextPage = currentPage + DEFAULT_PAGE;
  const isCurrentPage = pageNumber === currentPage;
  const isPreviousOrNextPage = pageNumber === previousPage || pageNumber === nextPage;
  const isSubPreviousOrNextPage = pageNumber === (previousPage - DEFAULT_PAGE) || pageNumber === (nextPage + DEFAULT_PAGE);
  const isNotFirstAndLastPage = pageNumber !== DEFAULT_PAGE && pageNumber !== pageCount;

  const handleButtonPageClick = () => {
    setNewPageNumber(pageNumber);
  };

  if (isCurrentPage) {
    return (
      <li>
        <button
          className="pagination__page pagination__page--current"
          type="button"
          onClick={handleButtonPageClick}
        >
          {pageNumber}
        </button>
      </li>
    );
  }

  if (pageCount <= FOUR_PAGES || isPreviousOrNextPage || !isNotFirstAndLastPage) {
    return (
      <li>
        <button
          className="pagination__page"
          type="button"
          onClick={handleButtonPageClick}
        >
          {pageNumber}
        </button>
      </li>
    );
  }

  if (isSubPreviousOrNextPage && isNotFirstAndLastPage) {
    return (
      <li>
        <button
          className="pagination__page pagination__page--averaged"
          type="button"
        >
          ...
        </button>
      </li>
    );
  }

  return '';
}

PageItem.propTypes = {
  pageCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setNewPageNumber: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired,
};

export default PageItem;
