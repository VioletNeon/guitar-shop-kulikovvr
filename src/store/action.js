const ActionType = {
  LOAD_GUITARS: 'loadGuitars',
  CHANGE_SORT_TYPE: 'changeSortType',
  FILTER_GUITARS: 'filterGuitars',
  SET_PAGE_NUMBER: 'setPageNumber',
};

const loadGuitars = (guitars) => ({
  type: ActionType.LOAD_GUITARS,
  guitars,
});

const filterGuitars = (payload) => ({
  type: ActionType.FILTER_GUITARS,
  payload,
});

const changeSortType = (sortType) => ({
  type: ActionType.CHANGE_SORT_TYPE,
  sortType,
});

const setPageNumber = (currentPage) => ({
  type: ActionType.SET_PAGE_NUMBER,
  currentPage,
});

export {
  ActionType,
  loadGuitars,
  filterGuitars,
  changeSortType,
  setPageNumber
};
