import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {trapFocus} from '../../utils';
import {MODAL_CLASS_NAME, KEY_ESCAPE_CODE} from '../../const';

function DeleteProductModal(props) {
  const {onModalDeleteProductCloseStateSet, onDeleteProductButtonClick, popupDeleteFromBasketGuitar} = props;
  const modalMessage = useRef(null);

  const onEscKeyDown = (evt) => {
    if (evt.keyCode === KEY_ESCAPE_CODE) {
      evt.preventDefault();
      onModalDeleteProductCloseStateSet();
    }
  };

  const onOverlayModalClick = (evt) => {
    if (evt.target.className === MODAL_CLASS_NAME) {
      onModalDeleteProductCloseStateSet();
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
        <p className="modal__tittle-text">Удалить этот товар? </p>
        <img
          className="modal__image"
          src={popupDeleteFromBasketGuitar.src}
          width="56"
          height="128"
          alt={`Гитара ${popupDeleteFromBasketGuitar.name}`}
        />
        <div className="modal__text-wrapper">
          <p className="modal__text-name">Гитара {popupDeleteFromBasketGuitar.name}</p>
          <p className="modal__text">Артикул: {popupDeleteFromBasketGuitar.number}</p>
          <p className="modal__text">{popupDeleteFromBasketGuitar.type}, {popupDeleteFromBasketGuitar.strings} струнная</p>
          <p className="modal__text-price">Цена: {popupDeleteFromBasketGuitar.price} ₽</p>
        </div>
        <div className="modal__wrapper-button">
          <button
            className="modal__basket-button"
            type="button"
            tabIndex="0"
            onClick={onDeleteProductButtonClick}
          >
            Удалить товар
          </button>
          <button
            className="modal__continue-button"
            type="button"
            tabIndex="0"
            onClick={onModalDeleteProductCloseStateSet}
          >
            Продолжить покупки
          </button>
        </div>
        <button
          className="modal__close-button"
          type="button"
          aria-label="Закрыть"
          tabIndex="0"
          onClick={onModalDeleteProductCloseStateSet}
        >
        </button>
      </div>
    </div>
  );
}

DeleteProductModal.propTypes = {
  onDeleteProductButtonClick: PropTypes.func.isRequired,
  onModalDeleteProductCloseStateSet: PropTypes.func.isRequired,
  popupDeleteFromBasketGuitar: PropTypes.shape({
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    strings: PropTypes.string.isRequired,
  }),
};

export default DeleteProductModal;
