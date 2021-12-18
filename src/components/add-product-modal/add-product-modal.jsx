import React, {useEffect, useRef} from 'react';
import {trapFocus} from '../../utils';
import {MODAL_CLASS_NAME, KEY_ESCAPE_CODE} from '../../const';

function AddProductModal({onModalAddProductStateSet, onModalSuccessfulAdditionStateSet}) {
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
        <img className="modal__image" src={'img/chester-bass.jpg'} width="56" height="128" alt="Гитара Chester Bass"/>
        <div className="modal__text-wrapper">
          <p className="modal__text-name">Гитара Честер bass</p>
          <p className="modal__text">Артикул: SO757575</p>
          <p className="modal__text">Электрогитара, 6 струнная</p>
          <p className="modal__text-price">Цена: 17 500 ₽</p>
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

export default AddProductModal;
