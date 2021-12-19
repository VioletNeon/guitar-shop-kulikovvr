import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {trapFocus} from '../../utils';
import {MODAL_CLASS_NAME, KEY_ESCAPE_CODE} from '../../const';

function SuccessfulAdditionModal({onModalSuccessfulAdditionStateSet}) {
  const modalMessage = useRef(null);

  const onEscKeyDown = (evt) => {
    if (evt.keyCode === KEY_ESCAPE_CODE) {
      evt.preventDefault();
      onModalSuccessfulAdditionStateSet();
    }
  };

  const onOverlayModalClick = (evt) => {
    if (evt.target.className === MODAL_CLASS_NAME) {
      onModalSuccessfulAdditionStateSet();
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
        <p className="modal__tittle-text">Товар успешно добавлен в корзину</p>
        <div className="modal__wrapper-button modal__wrapper-button--position">
          <button
            className="modal__basket-button"
            type="button"
            tabIndex="0"
          >
            Перейти в корзину
          </button>
          <button
            className="modal__continue-button"
            type="button"
            tabIndex="0"
            onClick={onModalSuccessfulAdditionStateSet}
          >
            Продолжить покупки
          </button>
        </div>
        <button
          className="modal__close-button"
          type="button"
          aria-label="Закрыть"
          tabIndex="0"
          onClick={onModalSuccessfulAdditionStateSet}
        >
        </button>
      </div>
    </div>
  );
}

SuccessfulAdditionModal.propTypes = {
  onModalSuccessfulAdditionStateSet: PropTypes.func.isRequired,
};

export default SuccessfulAdditionModal;
