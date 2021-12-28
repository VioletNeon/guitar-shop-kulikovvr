import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {trapFocus} from '../../utils';
import {MODAL_CLASS_NAME, KEY_ESCAPE_CODE} from '../../const';

function AddProductModal(props) {
  const {onModalAddProductStateSet, onModalSuccessfulAdditionStateSet, popupBasketGuitar} = props;
  const modalMessage = useRef(null);

  const onEscKeyDown = (evt) => {
    if (evt.keyCode === KEY_ESCAPE_CODE) {
      evt.preventDefault();
      onModalAddProductStateSet();
    }
  };

  const onOverlayModalClick = (evt) => {
    if (evt.target.className === MODAL_CLASS_NAME) {
      onModalAddProductStateSet();
    }
  };

  useEffect(() => {
    trapFocus(modalMessage.current);
    document.addEventListener('keydown', onEscKeyDown);
    return () => document.removeEventListener('keydown', onEscKeyDown);
  });

  return (
    <div className={MODAL_CLASS_NAME} onClick={onOverlayModalClick} ref={modalMessage}>
      <div className="modal__wrapper">
        <p className="modal__tittle-text">Добавить товар в корзину</p>
        <img className="modal__image" src={popupBasketGuitar.src} width="56" height="128" alt={`Гитара ${popupBasketGuitar.name}`}/>
        <div className="modal__text-wrapper">
          <p className="modal__text-name">Гитара {popupBasketGuitar.name}</p>
          <p className="modal__text">Артикул: {popupBasketGuitar.number}</p>
          <p className="modal__text">{popupBasketGuitar.type}, {popupBasketGuitar.strings} струнная</p>
          <p className="modal__text-price">Цена: {popupBasketGuitar.price} ₽</p>
        </div>
        <div className="modal__wrapper-button">
          <button
            className="modal__basket-button"
            type="button"
            tabIndex="0"
            onClick={onModalSuccessfulAdditionStateSet}
          >
            Добавить в корзину
          </button>
        </div>
        <button
          className="modal__close-button"
          type="button"
          aria-label="Закрыть"
          tabIndex="0"
          onClick={onModalAddProductStateSet}
        >
        </button>
      </div>
    </div>
  );
}

AddProductModal.propTypes = {
  onModalAddProductStateSet: PropTypes.func.isRequired,
  onModalSuccessfulAdditionStateSet: PropTypes.func.isRequired,
  popupBasketGuitar: PropTypes.shape({
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    strings: PropTypes.string.isRequired,
  },
  ).isRequired,
};

export default AddProductModal;
