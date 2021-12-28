import React from 'react';
import PropTypes from 'prop-types';

function BasketGuitar(props) {
  const {basketGuitar, onStartDeleteProductButtonClick, onAddProductButtonClick} = props;

  const handleDeleteProductButtonClick = () => {
    onStartDeleteProductButtonClick(basketGuitar.number);
  };

  const handleAddProductButtonClick = () => {
    onAddProductButtonClick(basketGuitar);
  };

  return (
    <li className="basket__item">
      <button
        className="basket__close-button"
        type="button"
        aria-label="Закрыть"
        tabIndex="0"
        onClick={handleDeleteProductButtonClick}
      >
      </button>
      <img className="basket__image" src={basketGuitar.src} width="48" height="124" alt="Гитара Chester Bass"/>
      <div className="basket__text-wrapper">
        <p className="basket__text-name">Гитара {basketGuitar.name}</p>
        <p className="basket__text">Артикул: {basketGuitar.number}</p>
        <p className="basket__text">{basketGuitar.type}, {basketGuitar.strings} струнная</p>
      </div>
      <div className="basket__wrapper-price">
        <p className="basket__text-price">{basketGuitar.price} ₽</p>
        <button
          className="basket__remove-product"
          type="button"
          onClick={handleDeleteProductButtonClick}
        >
        </button>
        <span className="basket__count-item">{basketGuitar.count}</span>
        <button
          className="basket__add-product"
          type="button"
          onClick={handleAddProductButtonClick}
        >
        </button>
        <p className="basket__text-sum-price">{basketGuitar.count * basketGuitar.price} ₽</p>
      </div>
    </li>
  );
}

BasketGuitar.propTypes = {
  onStartDeleteProductButtonClick: PropTypes.func.isRequired,
  onAddProductButtonClick: PropTypes.func.isRequired,
  basketGuitar: PropTypes.shape({
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    strings: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
  },
  ).isRequired,
};

export default BasketGuitar;
