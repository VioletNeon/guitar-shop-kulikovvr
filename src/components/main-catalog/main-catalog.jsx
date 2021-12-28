import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {SortTypes} from '../../const';
import Guitars from '../guitars/guitars';
import Pagination from '../pagination/pagination';
import Filter from '../filter/filter';
import AddProductModal from '../add-product-modal/add-product-modal';
import SuccessfulAdditionModal from '../successful-addition-modal/successful-addition-modal';
import {
  selectGuitars,
  selectCurrentPage,
  selectIsSortingByPopularity,
  selectIsSortingByPrice,
  selectIsSortingLowToHigh,
  selectIsSortingHighToLow,
  selectIsModalAddProductOpen,
  selectIsModalSuccessfulAdditionOpen,
  selectPopupBasketGuitar
} from '../../store/selectors';
import {
  setPageNumber,
  setPriceSortType,
  setPopularitySortType,
  setHighToLowSortParameter,
  setLowToHighSortParameter,
  setModalAddProductState,
  setModalSuccessfulAdditionState,
  addGuitarInBasketList,
  calculateAmount
} from '../../store/action';

const GUITARS_COUNT = 9;

function MainCatalog() {
  const guitars = useSelector(selectGuitars);
  const currentPage = useSelector(selectCurrentPage);
  const isSortingByPopularity = useSelector(selectIsSortingByPopularity);
  const isSortingByPrice = useSelector(selectIsSortingByPrice);
  const isSortingLowToHigh = useSelector(selectIsSortingLowToHigh);
  const isSortingHighToLow = useSelector(selectIsSortingHighToLow);
  const isModalAddProductOpen = useSelector(selectIsModalAddProductOpen);
  const isModalSuccessfulAdditionOpen = useSelector(selectIsModalSuccessfulAdditionOpen);
  const popupBasketGuitar = useSelector(selectPopupBasketGuitar);

  const dispatch = useDispatch();

  const pageCount = Math.ceil(guitars.length / GUITARS_COUNT);

  const handleSortParameterInputChange = (evt) => {
    if (evt.target.tagName !== 'INPUT') {return;}

    const targetID = evt.target.id;
    const targetIsChecked = evt.target.checked;

    switch (targetID) {
      case SortTypes.POPULARITY: return dispatch(setPopularitySortType(targetIsChecked));
      case SortTypes.PRICE: return dispatch(setPriceSortType(targetIsChecked));
      case SortTypes.HIGH_TO_LOW: return dispatch(setHighToLowSortParameter(targetIsChecked));
      case SortTypes.LOW_TO_HIGH: return dispatch(setLowToHighSortParameter(targetIsChecked));
      default:
    }
  };

  const setNewPageNumber = (number) => {
    dispatch(setPageNumber(number));
  };

  const onModalSuccessfulAdditionStateSet = () => {
    dispatch(setModalAddProductState(false));
    dispatch(addGuitarInBasketList(popupBasketGuitar));
    dispatch(calculateAmount());
    dispatch(setModalSuccessfulAdditionState(!isModalSuccessfulAdditionOpen));
    document.body.style.overflow = isModalSuccessfulAdditionOpen ? 'visible' : 'hidden';
  };

  const onModalSuccessfulAdditionStateCloseSet = () => {
    dispatch(setModalSuccessfulAdditionState(!isModalSuccessfulAdditionOpen));
    document.body.style.overflow = isModalSuccessfulAdditionOpen ? 'visible' : 'hidden';
  };

  const onModalAddProductStateSet = (guitarNumber) => {
    dispatch(setModalAddProductState(!isModalAddProductOpen, guitarNumber));
    document.body.style.overflow = isModalAddProductOpen ? 'visible' : 'hidden';
  };

  return (
    <main className="page-main">
      <h1 className="page-main__tittle">Каталог гитар</h1>
      <ul className="breadcrumbs">
        <li className="breadcrumbs__item">
          <Link className="breadcrumbs__link" to="">
            <span className="breadcrumbs__description">Главная</span>
            <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.14689 0.645917C8.19334 0.599354 8.24852 0.562411 8.30926 0.537204C8.37001 0.511998 8.43513 0.499023 8.50089 0.499023C8.56666 0.499023 8.63178 0.511998 8.69253 0.537204C8.75327 0.562411 8.80845 0.599354 8.85489 0.645917L11.8549 3.64592C11.9015 3.69236 11.9384 3.74754 11.9636 3.80828C11.9888 3.86903 12.0018 3.93415 12.0018 3.99992C12.0018 4.06568 11.9888 4.13081 11.9636 4.19155C11.9384 4.2523 11.9015 4.30747 11.8549 4.35392L8.85489 7.35392C8.76101 7.4478 8.63367 7.50055 8.50089 7.50055C8.36812 7.50055 8.24078 7.4478 8.14689 7.35392C8.05301 7.26003 8.00026 7.13269 8.00026 6.99992C8.00026 6.86714 8.05301 6.7398 8.14689 6.64592L10.7939 3.99992L8.14689 1.35392C8.10033 1.30747 8.06339 1.2523 8.03818 1.19155C8.01297 1.13081 8 1.06568 8 0.999917C8 0.93415 8.01297 0.869028 8.03818 0.808283C8.06339 0.747538 8.10033 0.692363 8.14689 0.645917Z" fill="black"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M0 4C0 3.86739 0.0526785 3.74021 0.146447 3.64645C0.240215 3.55268 0.367392 3.5 0.5 3.5H11C11.1326 3.5 11.2598 3.55268 11.3536 3.64645C11.4473 3.74021 11.5 3.86739 11.5 4C11.5 4.13261 11.4473 4.25979 11.3536 4.35355C11.2598 4.44732 11.1326 4.5 11 4.5H0.5C0.367392 4.5 0.240215 4.44732 0.146447 4.35355C0.0526785 4.25979 0 4.13261 0 4Z" fill="black"/>
            </svg>
          </Link>
        </li>
        <li className="breadcrumbs-item">
          <Link className="breadcrumbs__link" to="">Каталог</Link>
        </li>
      </ul>
      <Filter/>
      <section className="sort-section">
        <div className="sort-section__wrapper">
          <h2 className="sort-section__tittle">Сортировать:</h2>
          <form className="sort-form">
            <div className="sort-form__wrapper-parameter">
              <label className="sort-form__parameter-description" htmlFor="Price">
                <input
                  className="sort-form__parameter"
                  type="checkbox"
                  id="Price"
                  name="by-price"
                  onChange={handleSortParameterInputChange}
                  checked={isSortingByPrice}
                />
                <span>по цене</span>
              </label>
              <label className="sort-form__parameter-description" htmlFor="Popularity">
                <input
                  className="sort-form__parameter"
                  type="checkbox"
                  id="Popularity"
                  name="by-popularity"
                  onChange={handleSortParameterInputChange}
                  checked={isSortingByPopularity}
                />
                <span>по популярности</span>
              </label>
            </div>
            <div className="sort-form__wrapper-importance">
              <label className="sort-form__importance-description" htmlFor="High to low">
                <input
                  className="sort-form__by-importance"
                  id="High to low"
                  type="radio"
                  name="High-to-low"
                  onChange={handleSortParameterInputChange}
                  checked={isSortingHighToLow}
                />
                <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.583008 10.667H13.4163L6.99968 0.583659L0.583008 10.667Z" fill="#6C6C6C"/>
                </svg>
              </label>
              <label className="sort-form__importance-description" htmlFor="Low to high">
                <input
                  className="sort-form__by-importance"
                  id="Low to high"
                  type="radio"
                  name="Low-to-high"
                  onChange={handleSortParameterInputChange}
                  checked={isSortingLowToHigh}
                />
                <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.417 0.333008L0.583657 0.333008L7.00032 10.4163L13.417 0.333008Z" fill="#6C6C6C"/>
                </svg>
              </label>
            </div>
          </form>
        </div>
        <Guitars
          guitars={guitars}
          currentPage={currentPage}
          onModalAddProductStateSet={onModalAddProductStateSet}
        />
        <Pagination
          pageCount={pageCount}
          currentPage={currentPage}
          setNewPageNumber={setNewPageNumber}
        />
      </section>
      {isModalAddProductOpen &&
        <AddProductModal
          onModalAddProductStateSet={onModalAddProductStateSet}
          onModalSuccessfulAdditionStateSet={onModalSuccessfulAdditionStateSet}
          popupBasketGuitar={popupBasketGuitar}
        />}
      {isModalSuccessfulAdditionOpen &&
        <SuccessfulAdditionModal
          onModalSuccessfulAdditionStateCloseSet={onModalSuccessfulAdditionStateCloseSet}
        />}
    </main>
  );
}

export default MainCatalog;
