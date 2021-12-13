import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header/header';

const ONE_STAR_PERCENT_PART = 20;

function Catalog() {
  return (
    <>
      <Header/>
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
        <section className="filter-section">
          <h2 className="filter-section__tittle">Фильтр</h2>
          <form className="filter-form" action="https://echo.htmlacademy.ru/" target="_blank" method="post">
            <fieldset className="filter filter-price">
              <legend className="filter__tittle filter-price__tittle">Цена, ₽</legend>
              <div className="filter-price__range">
                <label className="filter-price__price">
                  <input type="number" name="min-price" value="0"/>
                </label>
                <svg width="14" height="1" viewBox="0 0 14 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line y1="0.5" x2="14" y2="0.5" stroke="#585757"/>
                </svg>
                <label className="filter-price__price">
                  <input type="number" name="max-price" value="30000"/>
                </label>
              </div>
            </fieldset>
            <fieldset className="filter">
              <legend className="filter__tittle">Тип гитар</legend>
              <ul className="filter__list">
                <li className="filter__item">
                  <label className='filter__parameter' htmlFor="acoustics">
                    <input
                      className="visually-hidden"
                      type="checkbox"
                      id="acoustics"
                      name="acoustics"
                    />
                    <svg className="filter__checkbox-arrow" width="24" height="24" viewBox="-4 -4 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.28267 9.19107L0.383456 5.31373C0.360969 5.29137 0.343123 5.26478 0.330946 5.2355C0.318769 5.20622 0.3125 5.17482 0.3125 5.1431C0.3125 5.11139 0.318769 5.07999 0.330946 5.05071C0.343123 5.02143 0.360969 4.99484 0.383456 4.97248L1.36783 3.98701C1.46189 3.89295 1.61392 3.89295 1.70799 3.98701L4.27502 6.53873C4.36908 6.63279 4.52221 6.6317 4.61627 6.53764L10.2885 0.810762C10.3825 0.715606 10.5356 0.715606 10.6308 0.809669L11.6163 1.79514C11.7103 1.8892 11.7103 2.04123 11.6174 2.13529L5.43767 8.37076L5.43877 8.37185L4.62392 9.19107C4.52986 9.28514 4.37674 9.28514 4.28267 9.19107Z" fill="#585757"/>
                    </svg>
                    <span>Акустические гитары</span>
                  </label>
                </li>
                <li className="filter__item">
                  <label className='filter__parameter' htmlFor="electric-guitar">
                    <input
                      className="visually-hidden"
                      type="checkbox"
                      id="electric-guitar"
                      name="electric-guitar"
                    />
                    <svg className="filter__checkbox-arrow" width="24" height="24" viewBox="-4 -4 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.28267 9.19107L0.383456 5.31373C0.360969 5.29137 0.343123 5.26478 0.330946 5.2355C0.318769 5.20622 0.3125 5.17482 0.3125 5.1431C0.3125 5.11139 0.318769 5.07999 0.330946 5.05071C0.343123 5.02143 0.360969 4.99484 0.383456 4.97248L1.36783 3.98701C1.46189 3.89295 1.61392 3.89295 1.70799 3.98701L4.27502 6.53873C4.36908 6.63279 4.52221 6.6317 4.61627 6.53764L10.2885 0.810762C10.3825 0.715606 10.5356 0.715606 10.6308 0.809669L11.6163 1.79514C11.7103 1.8892 11.7103 2.04123 11.6174 2.13529L5.43767 8.37076L5.43877 8.37185L4.62392 9.19107C4.52986 9.28514 4.37674 9.28514 4.28267 9.19107Z" fill="#585757"/>
                    </svg>
                    <span>Электрогитары</span>
                  </label>
                </li>
                <li className="filter__item">
                  <label className='filter__parameter' htmlFor="ukulele">
                    <input
                      className="visually-hidden"
                      type="checkbox"
                      id="ukulele"
                      name="ukulele"
                    />
                    <svg className="filter__checkbox-arrow" width="24" height="24" viewBox="-4 -4 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.28267 9.19107L0.383456 5.31373C0.360969 5.29137 0.343123 5.26478 0.330946 5.2355C0.318769 5.20622 0.3125 5.17482 0.3125 5.1431C0.3125 5.11139 0.318769 5.07999 0.330946 5.05071C0.343123 5.02143 0.360969 4.99484 0.383456 4.97248L1.36783 3.98701C1.46189 3.89295 1.61392 3.89295 1.70799 3.98701L4.27502 6.53873C4.36908 6.63279 4.52221 6.6317 4.61627 6.53764L10.2885 0.810762C10.3825 0.715606 10.5356 0.715606 10.6308 0.809669L11.6163 1.79514C11.7103 1.8892 11.7103 2.04123 11.6174 2.13529L5.43767 8.37076L5.43877 8.37185L4.62392 9.19107C4.52986 9.28514 4.37674 9.28514 4.28267 9.19107Z" fill="#585757"/>
                    </svg>
                    <span>Укулеле</span>
                  </label>
                </li>
              </ul>
            </fieldset>
            <fieldset className="filter">
              <legend className="filter__tittle">Количество струн</legend>
              <ul className="filter__list">
                <li className="filter__item">
                  <label className='filter__parameter' htmlFor="four-strings">
                    <input
                      className="visually-hidden"
                      type="checkbox"
                      id="four-strings"
                      name="four-strings"
                    />
                    <svg className="filter__checkbox-arrow" width="24" height="24" viewBox="-4 -4 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.28267 9.19107L0.383456 5.31373C0.360969 5.29137 0.343123 5.26478 0.330946 5.2355C0.318769 5.20622 0.3125 5.17482 0.3125 5.1431C0.3125 5.11139 0.318769 5.07999 0.330946 5.05071C0.343123 5.02143 0.360969 4.99484 0.383456 4.97248L1.36783 3.98701C1.46189 3.89295 1.61392 3.89295 1.70799 3.98701L4.27502 6.53873C4.36908 6.63279 4.52221 6.6317 4.61627 6.53764L10.2885 0.810762C10.3825 0.715606 10.5356 0.715606 10.6308 0.809669L11.6163 1.79514C11.7103 1.8892 11.7103 2.04123 11.6174 2.13529L5.43767 8.37076L5.43877 8.37185L4.62392 9.19107C4.52986 9.28514 4.37674 9.28514 4.28267 9.19107Z" fill="#585757"/>
                    </svg>
                    <span>4</span>
                  </label>
                </li>
                <li className="filter__item">
                  <label className='filter__parameter' htmlFor="six-strings">
                    <input
                      className="visually-hidden"
                      type="checkbox"
                      id="six-strings"
                      name="six-strings"
                    />
                    <svg className="filter__checkbox-arrow" width="24" height="24" viewBox="-4 -4 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.28267 9.19107L0.383456 5.31373C0.360969 5.29137 0.343123 5.26478 0.330946 5.2355C0.318769 5.20622 0.3125 5.17482 0.3125 5.1431C0.3125 5.11139 0.318769 5.07999 0.330946 5.05071C0.343123 5.02143 0.360969 4.99484 0.383456 4.97248L1.36783 3.98701C1.46189 3.89295 1.61392 3.89295 1.70799 3.98701L4.27502 6.53873C4.36908 6.63279 4.52221 6.6317 4.61627 6.53764L10.2885 0.810762C10.3825 0.715606 10.5356 0.715606 10.6308 0.809669L11.6163 1.79514C11.7103 1.8892 11.7103 2.04123 11.6174 2.13529L5.43767 8.37076L5.43877 8.37185L4.62392 9.19107C4.52986 9.28514 4.37674 9.28514 4.28267 9.19107Z" fill="#585757"/>
                    </svg>
                    <span>6</span>
                  </label>
                </li>
                <li className="filter__item">
                  <label className='filter__parameter' htmlFor="seven-strings">
                    <input
                      className="visually-hidden"
                      type="checkbox"
                      id="seven-strings"
                      name="seven-strings"
                    />
                    <svg className="filter__checkbox-arrow" width="24" height="24" viewBox="-4 -4 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.28267 9.19107L0.383456 5.31373C0.360969 5.29137 0.343123 5.26478 0.330946 5.2355C0.318769 5.20622 0.3125 5.17482 0.3125 5.1431C0.3125 5.11139 0.318769 5.07999 0.330946 5.05071C0.343123 5.02143 0.360969 4.99484 0.383456 4.97248L1.36783 3.98701C1.46189 3.89295 1.61392 3.89295 1.70799 3.98701L4.27502 6.53873C4.36908 6.63279 4.52221 6.6317 4.61627 6.53764L10.2885 0.810762C10.3825 0.715606 10.5356 0.715606 10.6308 0.809669L11.6163 1.79514C11.7103 1.8892 11.7103 2.04123 11.6174 2.13529L5.43767 8.37076L5.43877 8.37185L4.62392 9.19107C4.52986 9.28514 4.37674 9.28514 4.28267 9.19107Z" fill="#585757"/>
                    </svg>
                    <span>7</span>
                  </label>
                </li>
                <li className="filter__item">
                  <label className='filter__parameter' htmlFor="twelve-strings">
                    <input
                      className="visually-hidden"
                      type="checkbox"
                      id="twelve-strings"
                      name="twelve-strings"
                      disabled
                    />
                    <svg className="filter__checkbox-arrow" width="24" height="24" viewBox="-4 -4 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.28267 9.19107L0.383456 5.31373C0.360969 5.29137 0.343123 5.26478 0.330946 5.2355C0.318769 5.20622 0.3125 5.17482 0.3125 5.1431C0.3125 5.11139 0.318769 5.07999 0.330946 5.05071C0.343123 5.02143 0.360969 4.99484 0.383456 4.97248L1.36783 3.98701C1.46189 3.89295 1.61392 3.89295 1.70799 3.98701L4.27502 6.53873C4.36908 6.63279 4.52221 6.6317 4.61627 6.53764L10.2885 0.810762C10.3825 0.715606 10.5356 0.715606 10.6308 0.809669L11.6163 1.79514C11.7103 1.8892 11.7103 2.04123 11.6174 2.13529L5.43767 8.37076L5.43877 8.37185L4.62392 9.19107C4.52986 9.28514 4.37674 9.28514 4.28267 9.19107Z" fill="#585757"/>
                    </svg>
                    <span>12</span>
                  </label>
                </li>
              </ul>
            </fieldset>
            <button className="filter-form__button" type="submit" formAction="https://echo.htmlacademy.ru/">Показать
            </button>
          </form>
        </section>
        <section className="sort-section">
          <div className="sort-section__wrapper">
            <h2 className="sort-section__tittle">Сортировать:</h2>
            <form className="sort-form">
              <div className="sort-form__wrapper-parameter">
                <label className="sort-form__parameter-description" htmlFor="by-price">
                  <input className="v" type="checkbox" id="by-price" name="by-price"/>
                  <span>по цене</span>
                </label>
                <label className="sort-form__parameter-description" htmlFor="by-popularity">
                  <input className="sort-form__parameter" type="checkbox" id="by-popularity" name="by-popularity"/>
                  <span>по популярности</span>
                </label>
              </div>
              <div className="sort-form__wrapper-importance">
                <label className="sort-form__importance-description">
                  <input className="sort-form__by-importance" type="radio" name="sort" value="ascending"/>
                  <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.583008 10.667H13.4163L6.99968 0.583659L0.583008 10.667Z" fill="#6C6C6C"/>
                  </svg>
                </label>
                <label className="sort-form__importance-description">
                  <input className="sort-form__by-importance" type="radio" name="sort" value="descending"/>
                  <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.417 0.333008L0.583657 0.333008L7.00032 10.4163L13.417 0.333008Z" fill="#6C6C6C"/>
                  </svg>
                </label>
              </div>
            </form>
          </div>
          <ul className="guitars">
            <li className="guitars__item">
              <img className="guitars__image" src={'img/chester-bass.jpg'} width="78" height="190" alt=""/>
              <div className="guitars__wrapper-rating rating">
                <div className="rating__stars">
                  <span style={{width: `${4.3 * ONE_STAR_PERCENT_PART}%`}}/>
                  <span className="visually-hidden">Рейтинг</span>
                </div>
                <span>15</span>
              </div>
              <div className="guitars__wrapper-description">
                <p className="guitars__tittle">Честер Bass</p>
                <p className="guitars__price">17 500 ₽</p>
              </div>
              <div className="guitars__wrapper-button">
                <button className="guitars__button-detail" type="button">Подробнее</button>
                <button className="guitars__button-buy" type="button">
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 4H8.969L9.219 3H3V2H9.86C9.936 2 10.011 2.01733 10.0793 2.05067C10.1476 2.08401 10.2074 2.13248 10.2542 2.19239C10.3009 2.25231 10.3334 2.3221 10.3491 2.39645C10.3649 2.47081 10.3635 2.54778 10.345 2.6215L9.095 7.6215C9.06791 7.72962 9.00548 7.8256 8.9176 7.89417C8.82973 7.96275 8.72146 8 8.61 8H1.5C1.36739 8 1.24021 7.94732 1.14645 7.85355C1.05268 7.75978 1 7.63261 1 7.5V1.5H0V0.5H1.5C1.63261 0.5 1.75978 0.552678 1.85355 0.646447C1.94732 0.740215 2 0.867392 2 1V4ZM2 11C1.73478 11 1.48043 10.8946 1.29289 10.7071C1.10536 10.5196 1 10.2652 1 10C1 9.73478 1.10536 9.48043 1.29289 9.29289C1.48043 9.10536 1.73478 9 2 9C2.26522 9 2.51957 9.10536 2.70711 9.29289C2.89464 9.48043 3 9.73478 3 10C3 10.2652 2.89464 10.5196 2.70711 10.7071C2.51957 10.8946 2.26522 11 2 11ZM8 11C7.73478 11 7.48043 10.8946 7.29289 10.7071C7.10536 10.5196 7 10.2652 7 10C7 9.73478 7.10536 9.48043 7.29289 9.29289C7.48043 9.10536 7.73478 9 8 9C8.26522 9 8.51957 9.10536 8.70711 9.29289C8.89464 9.48043 9 9.73478 9 10C9 10.2652 8.89464 10.5196 8.70711 10.7071C8.51957 10.8946 8.26522 11 8 11Z" fill="white"/>
                  </svg>
                  <span>Купить</span>
                </button>
              </div>
            </li>
            <li className="guitars__item">
              <img className="guitars__image" src={'img/chester-bass.jpg'} width="78" height="190" alt=""/>
              <div className="guitars__wrapper-rating rating">
                <div className="rating__stars">
                  <span style={{width: `${4.3 * ONE_STAR_PERCENT_PART}%`}}/>
                  <span className="visually-hidden">Рейтинг</span>
                </div>
                <span>15</span>
              </div>
              <div className="guitars__wrapper-description">
                <p className="guitars__tittle">Честер Bass</p>
                <p className="guitars__price">17 500 ₽</p>
              </div>
              <div className="guitars__wrapper-button">
                <button className="guitars__button-detail" type="button">Подробнее</button>
                <button className="guitars__button-buy" type="button">Купить</button>
              </div>
            </li>
            <li className="guitars__item">
              <img className="guitars__image" src={'img/chester-bass.jpg'} width="78" height="190" alt=""/>
              <div className="guitars__wrapper-rating rating">
                <div className="rating__stars">
                  <span style={{width: `${4.3 * ONE_STAR_PERCENT_PART}%`}}/>
                  <span className="visually-hidden">Рейтинг</span>
                </div>
                <span>15</span>
              </div>
              <div className="guitars__wrapper-description">
                <p className="guitars__tittle">Честер Bass</p>
                <p className="guitars__price">17 500 ₽</p>
              </div>
              <div className="guitars__wrapper-button">
                <button className="guitars__button-detail" type="button">Подробнее</button>
                <button className="guitars__button-buy" type="button">Купить</button>
              </div>
            </li>
            <li className="guitars__item">
              <img className="guitars__image" src={'img/chester-bass.jpg'} width="78" height="190" alt=""/>
              <div className="guitars__wrapper-rating rating">
                <div className="rating__stars">
                  <span style={{width: `${4.3 * ONE_STAR_PERCENT_PART}%`}}/>
                  <span className="visually-hidden">Рейтинг</span>
                </div>
                <span>15</span>
              </div>
              <div className="guitars__wrapper-description">
                <p className="guitars__tittle">Честер Bass</p>
                <p className="guitars__price">17 500 ₽</p>
              </div>
              <div className="guitars__wrapper-button">
                <button className="guitars__button-detail" type="button">Подробнее</button>
                <button className="guitars__button-buy" type="button">Купить</button>
              </div>
            </li>
            <li className="guitars__item">
              <img className="guitars__image" src={'img/chester-bass.jpg'} width="78" height="190" alt=""/>
              <div className="guitars__wrapper-rating rating">
                <div className="rating__stars">
                  <span style={{width: `${4.3 * ONE_STAR_PERCENT_PART}%`}}/>
                  <span className="visually-hidden">Рейтинг</span>
                </div>
                <span>15</span>
              </div>
              <div className="guitars__wrapper-description">
                <p className="guitars__tittle">Честер Bass</p>
                <p className="guitars__price">17 500 ₽</p>
              </div>
              <div className="guitars__wrapper-button">
                <button className="guitars__button-detail" type="button">Подробнее</button>
                <button className="guitars__button-buy" type="button">Купить</button>
              </div>
            </li>
            <li className="guitars__item">
              <img className="guitars__image" src={'img/chester-bass.jpg'} width="78" height="190" alt=""/>
              <div className="guitars__wrapper-rating rating">
                <div className="rating__stars">
                  <span style={{width: `${4.3 * ONE_STAR_PERCENT_PART}%`}}/>
                  <span className="visually-hidden">Рейтинг</span>
                </div>
                <span>15</span>
              </div>
              <div className="guitars__wrapper-description">
                <p className="guitars__tittle">Честер Bass</p>
                <p className="guitars__price">17 500 ₽</p>
              </div>
              <div className="guitars__wrapper-button">
                <button className="guitars__button-detail" type="button">Подробнее</button>
                <button className="guitars__button-buy" type="button">Купить</button>
              </div>
            </li>
            <li className="guitars__item">
              <img className="guitars__image" src={'img/chester-bass.jpg'} width="78" height="190" alt=""/>
              <div className="guitars__wrapper-rating rating">
                <div className="rating__stars">
                  <span style={{width: `${4.3 * ONE_STAR_PERCENT_PART}%`}}/>
                  <span className="visually-hidden">Рейтинг</span>
                </div>
                <span>15</span>
              </div>
              <div className="guitars__wrapper-description">
                <p className="guitars__tittle">Честер Bass</p>
                <p className="guitars__price">17 500 ₽</p>
              </div>
              <div className="guitars__wrapper-button">
                <button className="guitars__button-detail" type="button">Подробнее</button>
                <button className="guitars__button-buy" type="button">Купить</button>
              </div>
            </li>
            <li className="guitars__item">
              <img className="guitars__image" src={'img/chester-bass.jpg'} width="78" height="190" alt=""/>
              <div className="guitars__wrapper-rating rating">
                <div className="rating__stars">
                  <span style={{width: `${4.3 * ONE_STAR_PERCENT_PART}%`}}/>
                  <span className="visually-hidden">Рейтинг</span>
                </div>
                <span>15</span>
              </div>
              <div className="guitars__wrapper-description">
                <p className="guitars__tittle">Честер Bass</p>
                <p className="guitars__price">17 500 ₽</p>
              </div>
              <div className="guitars__wrapper-button">
                <button className="guitars__button-detail" type="button">Подробнее</button>
                <button className="guitars__button-buy" type="button">Купить</button>
              </div>
            </li>
            <li className="guitars__item">
              <img className="guitars__image" src={'img/chester-bass.jpg'} width="78" height="190" alt=""/>
              <div className="guitars__wrapper-rating rating">
                <div className="rating__stars">
                  <span style={{width: `${4.3 * ONE_STAR_PERCENT_PART}%`}}/>
                  <span className="visually-hidden">Рейтинг</span>
                </div>
                <span>15</span>
              </div>
              <div className="guitars__wrapper-description">
                <p className="guitars__tittle">Честер Bass</p>
                <p className="guitars__price">17 500 ₽</p>
              </div>
              <div className="guitars__wrapper-button">
                <button className="guitars__button-detail" type="button">Подробнее</button>
                <button className="guitars__button-buy" type="button">Купить</button>
              </div>
            </li>
          </ul>
          <ul className="pagination">
            <li>
              <button className="pagination__page pagination__page--current" type="button">1</button>
            </li>
            <li>
              <button className="pagination__page" type="button">2</button>
            </li>
            <li>
              <button className="pagination__page pagination__page--averaged" type="button">...</button>
            </li>
            <li>
              <button className="pagination__page" type="button">7</button>
            </li>
            <li>
              <button className="pagination__page pagination__page--next" type="button">Далее</button>
            </li>
          </ul>
        </section>
      </main>
      <footer>

      </footer>
    </>
  );
}

export default Catalog;
