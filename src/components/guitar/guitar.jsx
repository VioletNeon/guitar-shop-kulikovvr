import React from 'react';
import PropTypes from 'prop-types';
import {getTernaryItem} from '../../utils';

const ONE_STAR_PERCENT_PART = 20;

function Guitar({guitar, onModalAddProductStateSet}) {
  const {
    name, popularity, number,
    price, rating, src,
  } = guitar;

  const handleAddProductButtonClick = () => {
    onModalAddProductStateSet(number);
  };

  return (
    <li className="guitars__item">
      <div className="guitars__wrapper-image">
        <img className="guitars__image" src={src} width="68" height="190" alt={name}/>
      </div>
      <div className="guitars__wrapper-rating rating">
        <div className="rating__stars">
          <span style={{width: `${rating * ONE_STAR_PERCENT_PART}%`}}/>
          <span className="visually-hidden">Рейтинг</span>
        </div>
        <span>{popularity}</span>
      </div>
      <div className="guitars__wrapper-description">
        <p className="guitars__tittle">{name}</p>
        <p className="guitars__price">{getTernaryItem(price)} ₽</p>
      </div>
      <div className="guitars__wrapper-button">
        <button className="guitars__button-detail" type="button">Подробнее</button>
        <button className="guitars__button-buy" type="button" onClick={handleAddProductButtonClick}>
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 4H8.969L9.219 3H3V2H9.86C9.936 2 10.011 2.01733 10.0793 2.05067C10.1476 2.08401 10.2074 2.13248 10.2542 2.19239C10.3009 2.25231 10.3334 2.3221 10.3491 2.39645C10.3649 2.47081 10.3635 2.54778 10.345 2.6215L9.095 7.6215C9.06791 7.72962 9.00548 7.8256 8.9176 7.89417C8.82973 7.96275 8.72146 8 8.61 8H1.5C1.36739 8 1.24021 7.94732 1.14645 7.85355C1.05268 7.75978 1 7.63261 1 7.5V1.5H0V0.5H1.5C1.63261 0.5 1.75978 0.552678 1.85355 0.646447C1.94732 0.740215 2 0.867392 2 1V4ZM2 11C1.73478 11 1.48043 10.8946 1.29289 10.7071C1.10536 10.5196 1 10.2652 1 10C1 9.73478 1.10536 9.48043 1.29289 9.29289C1.48043 9.10536 1.73478 9 2 9C2.26522 9 2.51957 9.10536 2.70711 9.29289C2.89464 9.48043 3 9.73478 3 10C3 10.2652 2.89464 10.5196 2.70711 10.7071C2.51957 10.8946 2.26522 11 2 11ZM8 11C7.73478 11 7.48043 10.8946 7.29289 10.7071C7.10536 10.5196 7 10.2652 7 10C7 9.73478 7.10536 9.48043 7.29289 9.29289C7.48043 9.10536 7.73478 9 8 9C8.26522 9 8.51957 9.10536 8.70711 9.29289C8.89464 9.48043 9 9.73478 9 10C9 10.2652 8.89464 10.5196 8.70711 10.7071C8.51957 10.8946 8.26522 11 8 11Z" fill="white"/>
          </svg>
          <span>Купить</span>
        </button>
      </div>
    </li>
  );
}

Guitar.propTypes = {
  onModalAddProductStateSet: PropTypes.func.isRequired,
  guitar: PropTypes.shape({
    name: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
    number: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
};

export default Guitar;
