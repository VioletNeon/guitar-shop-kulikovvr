const selectGuitars = (state) => state.filteredGuitars;
const selectCurrentPage = (state) => state.currentPage;
const selectPriceFrom = (state) => state.priceFrom;
const selectPriceTo = (state) => state.priceTo;
const selectIsAcousticParameterSet = (state) => state.isAcousticParameterSet;
const selectIsElectricGuitarParameterSet = (state) => state.isElectricGuitarParameterSet;
const selectIsUkuleleParameterSet = (state) => state.isUkuleleParameterSet;
const selectIsFourStringsParameterSet = (state) => state.isFourStringsParameterSet;
const selectIsSixStringsParameterSet = (state) => state.isSixStringsParameterSet;
const selectIsSevenStringsParameterSet = (state) => state.isSevenStringsParameterSet;
const selectIsTwelveStringsParameterSet = (state) => state.isTwelveStringsParameterSet;
const selectIsSortingByPopularity = (state) => state.isSortingByPopularity;
const selectIsSortingByPrice = (state) => state.isSortingByPrice;
const selectIsSortingLowToHigh = (state) => state.isSortingLowToHigh;
const selectIsSortingHighToLow = (state) => state.isSortingHighToLow;
const selectIsModalAddProductOpen = (state) => state.isModalAddProductOpen;
const selectIsModalSuccessfulAdditionOpen = (state) => state.isModalSuccessfulAdditionOpen;
const selectIsModalDeleteProductOpen = (state) => state.isModalDeleteProductOpen;
const selectPopupBasketGuitar = (state) => state.popupBasketGuitar;
const selectBasketGuitars = (state) => state.basketGuitars;
const selectPopupDeleteFromBasketGuitar = (state) => state.popupDeleteFromBasketGuitar;
const selectPromoCode = (state) => state.promoCode;
const selectTotalAmount = (state) => state.totalAmount;

export {
  selectGuitars,
  selectCurrentPage,
  selectPriceFrom,
  selectPriceTo,
  selectIsAcousticParameterSet,
  selectIsElectricGuitarParameterSet,
  selectIsUkuleleParameterSet,
  selectIsFourStringsParameterSet,
  selectIsSixStringsParameterSet,
  selectIsSevenStringsParameterSet,
  selectIsTwelveStringsParameterSet,
  selectIsSortingByPopularity,
  selectIsSortingByPrice,
  selectIsSortingLowToHigh,
  selectIsSortingHighToLow,
  selectIsModalAddProductOpen,
  selectIsModalSuccessfulAdditionOpen,
  selectIsModalDeleteProductOpen,
  selectPopupBasketGuitar,
  selectBasketGuitars,
  selectPopupDeleteFromBasketGuitar,
  selectPromoCode,
  selectTotalAmount
};
