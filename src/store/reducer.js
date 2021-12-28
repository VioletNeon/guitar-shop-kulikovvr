import {ActionType} from './action';
import {DEFAULT_PAGE, PromoCodes, SortTypes} from '../const';
import {promoCalculating} from '../utils';

const ONE_SIMPLE_VALUE = 1;

const sorting = {
  [SortTypes.PRICE_HIGH_TO_LOW]: (guitars) => guitars.sort((a, b) => a.price - b.price),
  [SortTypes.PRICE_LOW_TO_HIGH]: (guitars) => guitars.sort((a, b) => b.price - a.price),
  [SortTypes.POPULAR_HIGH_TO_LOW]: (guitars) => guitars.sort((a, b) => a.popularity - b.popularity),
  [SortTypes.POPULAR_LOW_TO_HIGH]: (guitars) => guitars.sort((a, b) => b.popularity - a.popularity),
};

const sortGuitars = function(sortParameters, guitars, backUpFilteredGuitars) {
  const [isSortingByPopularity, isSortingByPrice, isSortingLowToHigh, isSortingHighToLow] = sortParameters;
  const isDefaultSortType = (isSortingByPrice && isSortingByPopularity) || (!isSortingByPrice && !isSortingByPopularity);
  const isDefaultSortParameter = !isSortingLowToHigh && !isSortingHighToLow;
  switch (true) {
    case isSortingByPopularity && isSortingHighToLow: return sorting[SortTypes.POPULAR_HIGH_TO_LOW](guitars);
    case isSortingByPopularity && isSortingLowToHigh: return sorting[SortTypes.POPULAR_LOW_TO_HIGH](guitars);
    case (isSortingByPrice && isSortingHighToLow) || (isDefaultSortType && isSortingHighToLow): return sorting[SortTypes.PRICE_HIGH_TO_LOW](guitars);
    case (isSortingByPrice && isSortingLowToHigh) || (isDefaultSortType && isSortingLowToHigh): return sorting[SortTypes.PRICE_LOW_TO_HIGH](guitars);
    case isDefaultSortType && isDefaultSortParameter: return backUpFilteredGuitars;
    default: return guitars;
  }
};

const filterGuitars = (guitarsList, filterParameters) => {
  const [filterTypeParameter, filterStringsParameter, priceFrom, priceTo] = filterParameters;

  return guitarsList.filter((guitar) => {
    const isPriceFrom = +priceFrom <= +guitar.price;
    const isPriceTo = +priceTo >= +guitar.price;
    const isPriceInputEmpty = !priceFrom && !priceTo;
    const isMatchedPrice = isPriceInputEmpty ? true : isPriceFrom && isPriceTo;
    const isMatchedType = filterTypeParameter.length === 0 ? true : filterTypeParameter.some((type) => type === guitar.type);
    const isMatchedStrings = filterStringsParameter.length === 0 ? true : filterStringsParameter.some((string) => string === guitar.strings);

    return isMatchedPrice && isMatchedType && isMatchedStrings;
  });
};

const updateParametersItemFromList = (parameters, updatedParameter, isChecked) => {
  if (isChecked) {
    return [...parameters, updatedParameter];
  }

  const indexOfDeletedItem = parameters.findIndex((item) => item === updatedParameter);

  if (indexOfDeletedItem === -1) {
    return parameters;
  }

  return [...parameters.slice(0, indexOfDeletedItem), ...parameters.slice(indexOfDeletedItem + ONE_SIMPLE_VALUE)];
};

const updateBasketGuitarsList = (basketGuitarsList, updatedItem, isAddition) => {
  const indexOfUpdatedItem = basketGuitarsList.findIndex((guitar) => guitar.number === updatedItem.number);
  const isItemInList = indexOfUpdatedItem !== -1;

  switch (true) {
    case isItemInList && isAddition:
      basketGuitarsList[indexOfUpdatedItem].count += 1;
      return [...basketGuitarsList];
    case !isItemInList && isAddition:
      updatedItem.count = 1;
      return [...basketGuitarsList, updatedItem];
    case isItemInList && !isAddition && basketGuitarsList[indexOfUpdatedItem].count > 1:
      basketGuitarsList[indexOfUpdatedItem].count -= 1;
      return [...basketGuitarsList];
    case isItemInList && !isAddition && basketGuitarsList[indexOfUpdatedItem].count === 1:
      return [...basketGuitarsList.slice(0, indexOfUpdatedItem), ...basketGuitarsList.slice(indexOfUpdatedItem + ONE_SIMPLE_VALUE)];
    default: return basketGuitarsList;
  }
};

const calculateSum = (basketGuitarsList) => {
  let totalAmount = 0;
  if (basketGuitarsList.length !== 0) {
    basketGuitarsList.forEach((guitar) => {
      totalAmount += (guitar.price * guitar.count);
    });
  }

  return totalAmount;
};

const calculatePromoAmount = (promoCode, totalAmount) => {
  switch (promoCode) {
    case PromoCodes.GITARAHIT: return promoCalculating[PromoCodes.GITARAHIT](totalAmount);
    case PromoCodes.SUPERGITARA: return promoCalculating[PromoCodes.SUPERGITARA](totalAmount);
    case PromoCodes.GITARA2020: return promoCalculating[PromoCodes.GITARA2020](totalAmount);
    default: return totalAmount;
  }
};

const initialState = {
  guitars: [],
  filteredGuitars: [],
  currentPage: DEFAULT_PAGE,
  backUpFilteredGuitars: [],
  priceFrom: '1000',
  priceTo: '35000',
  filterTypeParameter: [],
  filterStringsParameter: [],
  isAcousticParameterSet: false,
  isElectricGuitarParameterSet: false,
  isUkuleleParameterSet: false,
  isFourStringsParameterSet: false,
  isSixStringsParameterSet: false,
  isSevenStringsParameterSet: false,
  isTwelveStringsParameterSet: false,
  isSortingByPopularity: false,
  isSortingByPrice: false,
  isSortingLowToHigh: false,
  isSortingHighToLow: false,
  isModalAddProductOpen: false,
  isModalSuccessfulAdditionOpen: false,
  isModalDeleteProductOpen: false,
  popupBasketGuitar: {},
  popupDeleteFromBasketGuitar: {},
  basketGuitars: [],
  promoCode: '',
  totalAmount: '',
  backUpTotalAmount: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_GUITARS:
      return {
        ...state,
        guitars: action.guitars,
        filteredGuitars: action.guitars,
        backUpFilteredGuitars: action.guitars,
      };
    case ActionType.SET_PRICE_SORT_TYPE:
      return {
        ...state,
        isSortingByPrice: action.isChecked,
        filteredGuitars: sortGuitars([
          state.isSortingByPopularity, action.isChecked, state.isSortingLowToHigh, state.isSortingHighToLow,
        ], state.filteredGuitars, state.backUpFilteredGuitars),
      };
    case ActionType.SET_POPULARITY_SORT_TYPE:
      return {
        ...state,
        isSortingByPopularity: action.isChecked,
        filteredGuitars: sortGuitars([
          action.isChecked, state.isSortingByPrice, state.isSortingLowToHigh, state.isSortingHighToLow], state.filteredGuitars, state.backUpFilteredGuitars),
      };
    case ActionType.SET_HIGH_TO_LOW_SORT_PARAMETER:
      return {
        ...state,
        isSortingHighToLow: action.isChecked,
        isSortingLowToHigh: false,
        filteredGuitars: sortGuitars([
          state.isSortingByPopularity, state.isSortingByPrice, false, action.isChecked], state.filteredGuitars, state.backUpFilteredGuitars),
      };
    case ActionType.SET_LOW_TO_HIGH_SORT_PARAMETER:
      return {
        ...state,
        isSortingHighToLow: false,
        isSortingLowToHigh: action.isChecked,
        filteredGuitars: sortGuitars([
          state.isSortingByPopularity, state.isSortingByPrice, action.isChecked, false], state.filteredGuitars, state.backUpFilteredGuitars),
      };
    case ActionType.FILTER_GUITARS:
      return {
        ...state,
        filteredGuitars: filterGuitars(state.guitars, [
          state.filterTypeParameter, state.filterStringsParameter, state.priceFrom, state.priceTo]),
        backUpFilteredGuitars: filterGuitars(state.guitars, [
          state.filterTypeParameter, state.filterStringsParameter, state.priceFrom, state.priceTo]),
        currentPage: initialState.currentPage,
      };
    case ActionType.SET_PAGE_NUMBER:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case ActionType.SET_PRICE_FROM_PARAMETER:
      return {
        ...state,
        priceFrom: action.priceFrom,
      };
    case ActionType.SET_PRICE_TO_PARAMETER:
      return {
        ...state,
        priceTo: action.priceTo,
      };
    case ActionType.SET_GUITAR_ACOUSTIC_TYPE_PARAMETER:
      return {
        ...state,
        filterTypeParameter: updateParametersItemFromList(state.filterTypeParameter, action.payload, action.isChecked),
        filterStringsParameter: initialState.filterStringsParameter,
        isAcousticParameterSet: action.isChecked,
        isFourStringsParameterSet: false,
        isSixStringsParameterSet: false,
        isSevenStringsParameterSet: false,
        isTwelveStringsParameterSet: false,
      };
    case ActionType.SET_GUITAR_ELECTRIC_TYPE_PARAMETER:
      return {
        ...state,
        filterTypeParameter: updateParametersItemFromList(state.filterTypeParameter, action.payload, action.isChecked),
        filterStringsParameter: initialState.filterStringsParameter,
        isElectricGuitarParameterSet: action.isChecked,
        isFourStringsParameterSet: false,
        isSixStringsParameterSet: false,
        isSevenStringsParameterSet: false,
        isTwelveStringsParameterSet: false,
      };
    case ActionType.SET_GUITAR_UKULELE_TYPE_PARAMETER:
      return {
        ...state,
        filterTypeParameter: updateParametersItemFromList(state.filterTypeParameter, action.payload, action.isChecked),
        filterStringsParameter: initialState.filterStringsParameter,
        isUkuleleParameterSet: action.isChecked,
        isFourStringsParameterSet: false,
        isSixStringsParameterSet: false,
        isSevenStringsParameterSet: false,
        isTwelveStringsParameterSet: false,
      };
    case ActionType.SET_GUITAR_FOUR_STRINGS_PARAMETER:
      return {
        ...state,
        filterStringsParameter: updateParametersItemFromList(state.filterStringsParameter, action.payload, action.isChecked),
        isFourStringsParameterSet: action.isChecked,
      };
    case ActionType.SET_GUITAR_SIX_STRINGS_PARAMETER:
      return {
        ...state,
        filterStringsParameter: updateParametersItemFromList(state.filterStringsParameter, action.payload, action.isChecked),
        isSixStringsParameterSet: action.isChecked,
      };
    case ActionType.SET_GUITAR_SEVEN_STRINGS_PARAMETER:
      return {
        ...state,
        filterStringsParameter: updateParametersItemFromList(state.filterStringsParameter, action.payload, action.isChecked),
        isSevenStringsParameterSet: action.isChecked,
      };
    case ActionType.SET_GUITAR_TWELVE_STRINGS_PARAMETER:
      return {
        ...state,
        filterStringsParameter: updateParametersItemFromList(state.filterStringsParameter, action.payload, action.isChecked),
        isTwelveStringsParameterSet: action.isChecked,
      };
    case ActionType.SET_MODAL_ADD_PRODUCT_VISIBLE:
      return {
        ...state,
        popupBasketGuitar: action.guitarNumber ? state.filteredGuitars.find((guitar) => guitar.number === action.guitarNumber) : state.popupBasketGuitar,
        isModalAddProductOpen: action.isVisible,
      };
    case ActionType.SET_MODAL_SUCCESSFUL_ADDITION_VISIBLE:
      return {
        ...state,
        isModalSuccessfulAdditionOpen: action.isVisible,
      };
    case ActionType.SET_MODAL_DELETE_PRODUCT_VISIBLE:
      return {
        ...state,
        popupDeleteFromBasketGuitar: action.guitarNumber ? state.basketGuitars.find((guitar) => guitar.number === action.guitarNumber) : state.popupDeleteFromBasketGuitar,
        isModalDeleteProductOpen: action.isVisible,
      };
    case ActionType.ADD_GUITAR_IN_BASKET_LIST:
      return {
        ...state,
        basketGuitars: updateBasketGuitarsList(state.basketGuitars, action.addGuitar, true),
      };
    case ActionType.DELETE_GUITAR_FROM_BASKET_LIST:
      return {
        ...state,
        basketGuitars: updateBasketGuitarsList(state.basketGuitars, action.deletedGuitar, false),
      };
    case ActionType.CALCULATE_AMOUNT:
      return {
        ...state,
        totalAmount: calculateSum(state.basketGuitars),
        backUpTotalAmount: calculateSum(state.basketGuitars),
      };
    case ActionType.SET_PROMO_CODE:
      return {
        ...state,
        promoCode: action.promoCode,
      };
    case ActionType.CALCULATE_BY_PROMO_CODE:
      return {
        ...state,
        totalAmount: calculatePromoAmount(state.promoCode, state.backUpTotalAmount),
      };
    default: return state;
  }
};

export {reducer};
