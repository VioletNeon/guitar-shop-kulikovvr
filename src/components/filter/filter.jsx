import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectPriceFrom,
  selectPriceTo,
  selectIsAcousticParameterSet,
  selectIsElectricGuitarParameterSet,
  selectIsUkuleleParameterSet,
  selectIsFourStringsParameterSet,
  selectIsSixStringsParameterSet,
  selectIsSevenStringsParameterSet,
  selectIsTwelveStringsParameterSet
} from '../../store/selectors';
import {
  setPriceFromParameter,
  setPriceToParameter,
  setGuitarAcousticTypeParameter,
  setGuitarElectricTypeParameter,
  setGuitarUkuleleTypeParameter,
  setGuitarFourStringsParameter,
  setGuitarSixStringsParameter,
  setGuitarSevenStringsParameter,
  setGuitarTwelveStringsParameter,
  filterGuitars
} from '../../store/action';

const INPUT_NAME_MIN_PRICE = 'min-price';

const GuitarsTypes = {
  ACOUSTICS: 'acoustics',
  ELECTRIC_GUITAR: 'electric-guitar',
  UKULELE: 'ukulele',
  FOUR_STRINGS: 'four-strings',
  SIX_STRINGS: 'six-strings',
  SEVEN_STRINGS: 'seven-strings',
  TWELVE_STRINGS: 'twelve-strings',
};

function Filter() {
  const priceFrom = useSelector(selectPriceFrom);
  const priceTo = useSelector(selectPriceTo);
  const isAcousticParameterSet = useSelector(selectIsAcousticParameterSet);
  const isElectricGuitarParameterSet = useSelector(selectIsElectricGuitarParameterSet);
  const isUkuleleParameterSet = useSelector(selectIsUkuleleParameterSet);
  const isFourStringsParameterSet = useSelector(selectIsFourStringsParameterSet);
  const isSixStringsParameterSet = useSelector(selectIsSixStringsParameterSet);
  const isSevenStringsParameterSet = useSelector(selectIsSevenStringsParameterSet);
  const isTwelveStringsParameterSet = useSelector(selectIsTwelveStringsParameterSet);

  const dispatch = useDispatch();

  const handleParameterInputClick = (evt) => {
    if (evt.target.tagName !== 'INPUT') {return;}

    const targetID = evt.target.id;
    const targetName = evt.target.name;
    const targetIsChecked = evt.target.checked;

    switch (targetID) {
      case GuitarsTypes.ACOUSTICS: return dispatch(setGuitarAcousticTypeParameter(targetName, targetIsChecked));
      case GuitarsTypes.ELECTRIC_GUITAR: return dispatch(setGuitarElectricTypeParameter(targetName, targetIsChecked));
      case GuitarsTypes.UKULELE: return dispatch(setGuitarUkuleleTypeParameter(targetName, targetIsChecked));
      case GuitarsTypes.FOUR_STRINGS: return dispatch(setGuitarFourStringsParameter(targetName, targetIsChecked));
      case GuitarsTypes.SIX_STRINGS: return dispatch(setGuitarSixStringsParameter(targetName, targetIsChecked));
      case GuitarsTypes.SEVEN_STRINGS: return dispatch(setGuitarSevenStringsParameter(targetName, targetIsChecked));
      case GuitarsTypes.TWELVE_STRINGS: return dispatch(setGuitarTwelveStringsParameter(targetName, targetIsChecked));
      default:
    }
  };

  const handleFilterByPriceInputChange = (evt) => {
    if (evt.target.name === INPUT_NAME_MIN_PRICE) {
      dispatch(setPriceFromParameter(evt.target.value));
      return;
    }

    dispatch(setPriceToParameter(evt.target.value));
  };

  const handleApplyFilterButtonClick = (evt) => {
    evt.preventDefault();
    dispatch(filterGuitars());
  };

  return (
    <section className="filter-section">
      <h2 className="filter-section__tittle">Фильтр</h2>
      <form className="filter-form" action="https://echo.htmlacademy.ru/" target="_blank" method="post">
        <fieldset className="filter filter-price">
          <legend className="filter__tittle filter-price__tittle">Цена, ₽</legend>
          <div className="filter-price__range">
            <label className="filter-price__price">
              <input type="number" name="min-price" value={priceFrom} onChange={handleFilterByPriceInputChange}/>
            </label>
            <svg width="14" height="1" viewBox="0 0 14 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="14" y2="0.5" stroke="#585757"/>
            </svg>
            <label className="filter-price__price">
              <input type="number" name="max-price" value={priceTo} onChange={handleFilterByPriceInputChange}/>
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
                  name="Акустическая гитара"
                  checked={isAcousticParameterSet}
                  onChange={handleParameterInputClick}
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
                  name="Электрогитара"
                  onChange={handleParameterInputClick}
                  checked={isElectricGuitarParameterSet}
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
                  name="Укулеле"
                  onChange={handleParameterInputClick}
                  checked={isUkuleleParameterSet}
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
                  name="4"
                  onChange={handleParameterInputClick}
                  checked={isFourStringsParameterSet}
                  disabled={isAcousticParameterSet && !isElectricGuitarParameterSet && !isUkuleleParameterSet}
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
                  name="6"
                  onChange={handleParameterInputClick}
                  checked={isSixStringsParameterSet}
                  disabled={isUkuleleParameterSet && !isAcousticParameterSet && !isElectricGuitarParameterSet}
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
                  name="7"
                  onChange={handleParameterInputClick}
                  checked={isSevenStringsParameterSet}
                  disabled={isUkuleleParameterSet && !isAcousticParameterSet && !isElectricGuitarParameterSet}
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
                  name="12"
                  onChange={handleParameterInputClick}
                  checked={isTwelveStringsParameterSet}
                  disabled={!isAcousticParameterSet && !(!isElectricGuitarParameterSet && !isUkuleleParameterSet) }
                />
                <svg className="filter__checkbox-arrow" width="24" height="24" viewBox="-4 -4 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.28267 9.19107L0.383456 5.31373C0.360969 5.29137 0.343123 5.26478 0.330946 5.2355C0.318769 5.20622 0.3125 5.17482 0.3125 5.1431C0.3125 5.11139 0.318769 5.07999 0.330946 5.05071C0.343123 5.02143 0.360969 4.99484 0.383456 4.97248L1.36783 3.98701C1.46189 3.89295 1.61392 3.89295 1.70799 3.98701L4.27502 6.53873C4.36908 6.63279 4.52221 6.6317 4.61627 6.53764L10.2885 0.810762C10.3825 0.715606 10.5356 0.715606 10.6308 0.809669L11.6163 1.79514C11.7103 1.8892 11.7103 2.04123 11.6174 2.13529L5.43767 8.37076L5.43877 8.37185L4.62392 9.19107C4.52986 9.28514 4.37674 9.28514 4.28267 9.19107Z" fill="#585757"/>
                </svg>
                <span>12</span>
              </label>
            </li>
          </ul>
        </fieldset>
        <button
          className="filter-form__button"
          type="submit"
          formAction="https://echo.htmlacademy.ru/"
          onClick={handleApplyFilterButtonClick}
        >
          Показать
        </button>
      </form>
    </section>
  );
}

export default Filter;
