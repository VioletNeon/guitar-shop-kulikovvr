import {ActionType} from './action';

const PAGE_GUITARS_COUNT = 9;

const SortTypes = {
  DEFAULT: 'Default',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  POPULAR_LOW_TO_HIGH: 'Popular: low to high',
  POPULAR_HIGH_TO_LOW: 'Popular: high to low',
};

const sorting = {
  [SortTypes.PRICE_LOW_TO_HIGH]: (guitars) => guitars.sort((a, b) => a.price - b.price),
  [SortTypes.PRICE_HIGH_TO_LOW]: (guitars) => guitars.sort((a, b) => b.price - a.price),
  [SortTypes.POPULAR_LOW_TO_HIGH]: (guitars) => guitars.sort((a, b) => a.price - b.price),
  [SortTypes.POPULAR_HIGH_TO_LOW]: (guitars) => guitars.sort((a, b) => b.price - a.price),
};

const sortGuitars = function(sortType, guitars) {
  return sorting[sortType](guitars);
};

const filterGuitars = (guitarsList, filterParameters = []) => {
  if (!filterParameters.length) {
    return guitarsList;
  }

  return guitarsList.filter((guitar) => filterParameters.every(([key, value]) => guitar[key] === value));
};

const initialState = {
  guitars: [],
  filteredGuitars: '',
  pageNumber: PAGE_GUITARS_COUNT,
  backUpFilteredGuitars: [],
  sortType: SortTypes.DEFAULT,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_GUITARS:
      return {
        ...state,
        guitars: action.guitars,
        filteredGuitars: filterGuitars(action.guitars),
        sortType: initialState.sortType,
      };
    case ActionType.CHANGE_SORT_TYPE:
      return {
        ...state,
        sortType: action.sortType,
        filteredGuitars: action.sortType === SortTypes.DEFAULT ? state.backUpFilteredGuitars : sortGuitars(action.sortType, state.filteredGuitars),
      };
    case ActionType.FILTER_GUITARS:
      return {
        ...state,
        filteredGuitars: filterGuitars(state.guitars, action.payload),
        backUpFilteredGuitars: filterGuitars(state.guitars, action.payload),
        pageNumber: initialState.pageNumber,
      };
    case ActionType.SET_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: action.pageNumber,
      };
    default:
      return state;
  }
};

export {reducer};
