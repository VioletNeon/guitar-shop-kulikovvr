const ActionType = {
  LOAD_GUITARS: 'loadGuitars',
  CHANGE_SORT_TYPE: 'changeSortType',
  FILTER_GUITARS: 'filterGuitars',
  SET_PAGE_NUMBER: 'setPageNumber',
  ADD_GUITAR_TYPE_PARAMETER: 'addGuitarTypeParameter',
  DELETE_GUITAR_TYPE_PARAMETER: 'deleteGuitarTypeParameter',
  ADD_GUITAR_STRINGS_PARAMETER: 'addGuitarStringsParameter',
  DELETE_GUITAR_STRINGS_PARAMETER: 'deleteGuitarStringsParameter',
  SET_PRICE_FROM_PARAMETER: 'setPriceFromParameter',
  SET_PRICE_TO_PARAMETER: 'setPriceToParameter',
  SET_GUITAR_ACOUSTIC_TYPE_PARAMETER: 'setGuitarAcousticTypeParameter',
  SET_GUITAR_ELECTRIC_TYPE_PARAMETER: 'setGuitarElectricTypeParameter',
  SET_GUITAR_UKULELE_TYPE_PARAMETER:  'setGuitarUkuleleTypeParameter',
  SET_GUITAR_FOUR_STRINGS_PARAMETER: 'setGuitarFourStringsParameter',
  SET_GUITAR_SIX_STRINGS_PARAMETER: 'setGuitarSixStringsParameter',
  SET_GUITAR_SEVEN_STRINGS_PARAMETER: 'setGuitarSevenStringsParameter',
  SET_GUITAR_TWELVE_STRINGS_PARAMETER: 'setGuitarTwelveStringsParameter',
  SET_PRICE_SORT_TYPE: 'setPriceSortType',
  SET_POPULARITY_SORT_TYPE: 'setPopularitySortType',
  SET_HIGH_TO_LOW_SORT_PARAMETER: 'setHighToLowSortParameter',
  SET_LOW_TO_HIGH_SORT_PARAMETER: 'setLowToHighSortParameter',
  SET_MODAL_ADD_PRODUCT_VISIBLE: 'setModalAddProductState',
  SET_MODAL_SUCCESSFUL_ADDITION_VISIBLE: 'setModalSuccessfulAdditionState',
  SET_MODAL_DELETE_PRODUCT_VISIBLE: 'setModalDeleteProductState',
  SET_GUITAR_IN_MODAL_ADD_PRODUCT: 'setGuitarInModalAddProduct',
  ADD_GUITAR_IN_BASKET_LIST: 'addGuitarInBasketList',
  DELETE_GUITAR_FROM_BASKET_LIST: 'deleteGuitarFromBasketList',
  SET_PROMO_CODE: 'setPromoCode',
  CALCULATE_BY_PROMO_CODE: 'calculateByPromoCode',
  CALCULATE_AMOUNT: 'calculateAmount',
};

const loadGuitars = (guitars) => ({
  type: ActionType.LOAD_GUITARS,
  guitars,
});

const filterGuitars = () => ({
  type: ActionType.FILTER_GUITARS,
});

const changeSortType = (sortType) => ({
  type: ActionType.CHANGE_SORT_TYPE,
  sortType,
});

const setPageNumber = (currentPage) => ({
  type: ActionType.SET_PAGE_NUMBER,
  currentPage,
});

const setPriceFromParameter = (priceFrom) => ({
  type: ActionType.SET_PRICE_FROM_PARAMETER,
  priceFrom,
});

const setPriceToParameter = (priceTo) => ({
  type: ActionType.SET_PRICE_TO_PARAMETER,
  priceTo,
});

const setGuitarAcousticTypeParameter = (payload, isChecked) => ({
  type: ActionType.SET_GUITAR_ACOUSTIC_TYPE_PARAMETER,
  payload,
  isChecked,
});

const setGuitarElectricTypeParameter = (payload, isChecked) => ({
  type: ActionType.SET_GUITAR_ELECTRIC_TYPE_PARAMETER,
  payload,
  isChecked,
});

const setGuitarUkuleleTypeParameter = (payload, isChecked) => ({
  type: ActionType.SET_GUITAR_UKULELE_TYPE_PARAMETER,
  payload,
  isChecked,
});

const setGuitarFourStringsParameter = (payload, isChecked) => ({
  type: ActionType.SET_GUITAR_FOUR_STRINGS_PARAMETER,
  payload,
  isChecked,
});

const setGuitarSixStringsParameter = (payload, isChecked) => ({
  type: ActionType.SET_GUITAR_SIX_STRINGS_PARAMETER,
  payload,
  isChecked,
});

const setGuitarSevenStringsParameter = (payload, isChecked) => ({
  type: ActionType.SET_GUITAR_SEVEN_STRINGS_PARAMETER,
  payload,
  isChecked,
});

const setGuitarTwelveStringsParameter = (payload, isChecked) => ({
  type: ActionType.SET_GUITAR_TWELVE_STRINGS_PARAMETER,
  payload,
  isChecked,
});

const setPriceSortType = (isChecked) => ({
  type: ActionType.SET_PRICE_SORT_TYPE,
  isChecked,
});

const setPopularitySortType = (isChecked) => ({
  type: ActionType.SET_POPULARITY_SORT_TYPE,
  isChecked,
});

const setHighToLowSortParameter = (isChecked) => ({
  type: ActionType.SET_HIGH_TO_LOW_SORT_PARAMETER,
  isChecked,
});

const setLowToHighSortParameter = (isChecked) => ({
  type: ActionType.SET_LOW_TO_HIGH_SORT_PARAMETER,
  isChecked,
});

const setModalAddProductState = (isVisible, guitarNumber) => ({
  type: ActionType.SET_MODAL_ADD_PRODUCT_VISIBLE,
  isVisible,
  guitarNumber,
});

const setModalSuccessfulAdditionState = (isVisible) => ({
  type: ActionType.SET_MODAL_SUCCESSFUL_ADDITION_VISIBLE,
  isVisible,
});

const setModalDeleteProductState = (isVisible, guitarNumber) => ({
  type: ActionType.SET_MODAL_DELETE_PRODUCT_VISIBLE,
  isVisible,
  guitarNumber,
});

const addGuitarInBasketList = (addGuitar) => ({
  type: ActionType.ADD_GUITAR_IN_BASKET_LIST,
  addGuitar,
});

const deleteGuitarFromBasketList = (deletedGuitar) => ({
  type: ActionType.DELETE_GUITAR_FROM_BASKET_LIST,
  deletedGuitar,
});

const setPromoCode = (promoCode) => ({
  type: ActionType.SET_PROMO_CODE,
  promoCode,
});

const calculateByPromoCode = () => ({
  type: ActionType.CALCULATE_BY_PROMO_CODE,
});

const calculateAmount = () => ({
  type: ActionType.CALCULATE_AMOUNT,
});

export {
  ActionType,
  loadGuitars,
  filterGuitars,
  changeSortType,
  setPageNumber,
  setPriceFromParameter,
  setPriceToParameter,
  setGuitarAcousticTypeParameter,
  setGuitarElectricTypeParameter,
  setGuitarUkuleleTypeParameter,
  setGuitarFourStringsParameter,
  setGuitarSixStringsParameter,
  setGuitarSevenStringsParameter,
  setGuitarTwelveStringsParameter,
  setPriceSortType,
  setPopularitySortType,
  setHighToLowSortParameter,
  setLowToHighSortParameter,
  setModalAddProductState,
  setModalSuccessfulAdditionState,
  setModalDeleteProductState,
  addGuitarInBasketList,
  deleteGuitarFromBasketList,
  setPromoCode,
  calculateByPromoCode,
  calculateAmount
};
