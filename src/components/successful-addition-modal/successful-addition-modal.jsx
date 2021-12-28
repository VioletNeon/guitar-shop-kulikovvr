import React, {useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {trapFocus} from '../../utils';
import {MODAL_CLASS_NAME, KEY_ESCAPE_CODE, AppRoute} from '../../const';

function SuccessfulAdditionModal({onModalSuccessfulAdditionStateCloseSet}) {
  const modalMessage = useRef(null);

  const onEscKeyDown = (evt) => {
    if (evt.keyCode === KEY_ESCAPE_CODE) {
      evt.preventDefault();
      onModalSuccessfulAdditionStateCloseSet();
    }
  };

  const onOverlayModalClick = (evt) => {
    if (evt.target.className === MODAL_CLASS_NAME) {
      onModalSuccessfulAdditionStateCloseSet();
    }
  };

  const handleToBasketLinkClick = () => {
    onModalSuccessfulAdditionStateCloseSet();
  };

  useEffect(() => {
    trapFocus(modalMessage.current);
    document.addEventListener('keydown', onEscKeyDown);
    return () => document.removeEventListener('keydown', onEscKeyDown);
  });

  return (
    <div className={MODAL_CLASS_NAME} onClick={onOverlayModalClick} ref={modalMessage}>
      <div className="modal__wrapper">
        <p className="modal__tittle-text">Товар успешно добавлен в корзину</p>
        <div className="modal__wrapper-button modal__wrapper-button--position">
          <Link
            className="modal__basket-button"
            tabIndex="0"
            to={AppRoute.BASKET}
            onClick={handleToBasketLinkClick}
          >
            Перейти в корзину
          </Link>
          <button
            className="modal__continue-button"
            type="button"
            tabIndex="0"
            onClick={onModalSuccessfulAdditionStateCloseSet}
          >
            Продолжить покупки
          </button>
        </div>
        <button
          className="modal__close-button"
          type="button"
          aria-label="Закрыть"
          tabIndex="0"
          onClick={onModalSuccessfulAdditionStateCloseSet}
        >
        </button>
      </div>
    </div>
  );
}

SuccessfulAdditionModal.propTypes = {
  onModalSuccessfulAdditionStateCloseSet: PropTypes.func.isRequired,
};

export default SuccessfulAdditionModal;
