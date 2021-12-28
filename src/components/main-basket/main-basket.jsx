import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {AppRoute} from '../../const';
import DeleteProductModal from '../delete-product-modal/delete-product-modal';
import BasketGuitar from '../basket-guitar/basket-guitar';
import {
  selectIsModalDeleteProductOpen,
  selectPopupDeleteFromBasketGuitar,
  selectPromoCode, selectTotalAmount
} from '../../store/selectors';
import {
  addGuitarInBasketList, deleteGuitarFromBasketList, calculateAmount,
  setModalDeleteProductState, setPromoCode, calculateByPromoCode
} from '../../store/action';

function MainBasket({basketGuitars}) {
  const isModalDeleteProductOpen = useSelector(selectIsModalDeleteProductOpen);
  const promoCode = useSelector(selectPromoCode);
  const totalAmount = useSelector(selectTotalAmount);
  const popupDeleteFromBasketGuitar = useSelector(selectPopupDeleteFromBasketGuitar);

  const dispatch = useDispatch();

  if (basketGuitars.length === 0) {
    return <Redirect to={AppRoute.MAIN}/>;
  }

  const onStartDeleteProductButtonClick = (guitarNumber) => {
    dispatch(setModalDeleteProductState(!isModalDeleteProductOpen, guitarNumber));
    document.body.style.overflow = isModalDeleteProductOpen ? 'visible' : 'hidden';
  };

  const onAddProductButtonClick = (additionGuitar) => {
    dispatch(addGuitarInBasketList(additionGuitar));
    dispatch(calculateAmount());
  };

  const onDeleteProductButtonClick = () => {
    dispatch(setModalDeleteProductState(!isModalDeleteProductOpen));
    dispatch(deleteGuitarFromBasketList(popupDeleteFromBasketGuitar));
    dispatch(calculateAmount());
    document.body.style.overflow = isModalDeleteProductOpen ? 'visible' : 'hidden';
  };

  const onModalDeleteProductCloseStateSet = () => {
    dispatch(setModalDeleteProductState(!isModalDeleteProductOpen));
    document.body.style.overflow = isModalDeleteProductOpen ? 'visible' : 'hidden';
  };

  const handlePromoCodeInputChange = (evt) => {
    dispatch(setPromoCode(evt.target.value));
  };

  const handleCalculateByPromoCodeButtonClick = () => {
    dispatch(calculateByPromoCode());
  };

  return (
    <main className="page-main-basket">
      <h1 className="page-main-basket__tittle">Корзина</h1>
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
        <li className="breadcrumbs__item">
          <Link className="breadcrumbs__link" to="">
            <span className="breadcrumbs__description">Каталог</span>
            <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.14689 0.645917C8.19334 0.599354 8.24852 0.562411 8.30926 0.537204C8.37001 0.511998 8.43513 0.499023 8.50089 0.499023C8.56666 0.499023 8.63178 0.511998 8.69253 0.537204C8.75327 0.562411 8.80845 0.599354 8.85489 0.645917L11.8549 3.64592C11.9015 3.69236 11.9384 3.74754 11.9636 3.80828C11.9888 3.86903 12.0018 3.93415 12.0018 3.99992C12.0018 4.06568 11.9888 4.13081 11.9636 4.19155C11.9384 4.2523 11.9015 4.30747 11.8549 4.35392L8.85489 7.35392C8.76101 7.4478 8.63367 7.50055 8.50089 7.50055C8.36812 7.50055 8.24078 7.4478 8.14689 7.35392C8.05301 7.26003 8.00026 7.13269 8.00026 6.99992C8.00026 6.86714 8.05301 6.7398 8.14689 6.64592L10.7939 3.99992L8.14689 1.35392C8.10033 1.30747 8.06339 1.2523 8.03818 1.19155C8.01297 1.13081 8 1.06568 8 0.999917C8 0.93415 8.01297 0.869028 8.03818 0.808283C8.06339 0.747538 8.10033 0.692363 8.14689 0.645917Z" fill="black"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M0 4C0 3.86739 0.0526785 3.74021 0.146447 3.64645C0.240215 3.55268 0.367392 3.5 0.5 3.5H11C11.1326 3.5 11.2598 3.55268 11.3536 3.64645C11.4473 3.74021 11.5 3.86739 11.5 4C11.5 4.13261 11.4473 4.25979 11.3536 4.35355C11.2598 4.44732 11.1326 4.5 11 4.5H0.5C0.367392 4.5 0.240215 4.44732 0.146447 4.35355C0.0526785 4.25979 0 4.13261 0 4Z" fill="black"/>
            </svg>
          </Link>
        </li>
        <li className="breadcrumbs-item">
          <Link className="breadcrumbs__link" to="">Оформляем</Link>
        </li>
      </ul>
      <section className="basket-section">
        <h2 className="visually-hidden">Список товаров в корзине</h2>
        <ul className="basket">
          {basketGuitars.map((basketGuitar) => (
            <BasketGuitar
              basketGuitar={basketGuitar}
              onStartDeleteProductButtonClick={onStartDeleteProductButtonClick}
              onAddProductButtonClick={onAddProductButtonClick}
              key={basketGuitar.number}
            />
          ))}
        </ul>
        <div className="basket__wrapper-checkout">
          <div className="basket__discount discount">
            <p className="discount__tittle">Промокод на скидку</p>
            <span className="discount__description">Введите свой промокод, если он у вас есть.</span>
            <div className="discount__wrapper-button">
              <label className="discount__promo-code">
                <input className="discount__promo-code-input" type="text" onChange={handlePromoCodeInputChange} value={promoCode}/>
              </label>
              <button
                className="discount__button-apply"
                type="button"
                onClick={handleCalculateByPromoCodeButtonClick}
              >
                Применить купон
              </button>
            </div>
          </div>
          <div className="basket__checkout">
            <p className="basket__checkout-tittle">Всего: {totalAmount} ₽ </p>
            <button className="basket__button-checkout" type="button">Оформить заказ</button>
          </div>
        </div>
      </section>
      {isModalDeleteProductOpen &&
        <DeleteProductModal
          onModalDeleteProductCloseStateSet={onModalDeleteProductCloseStateSet}
          onDeleteProductButtonClick={onDeleteProductButtonClick}
          popupDeleteFromBasketGuitar={popupDeleteFromBasketGuitar}
        />}
    </main>
  );
}

MainBasket.propTypes = {
  basketGuitars: PropTypes.array.isRequired,
};

export default MainBasket;
