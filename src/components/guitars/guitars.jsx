import React from 'react';
import PropTypes from 'prop-types';
import Guitar from '../guitar/guitar';

const SCREEN_GUITARS_COUNT = 9;

function Guitars({guitars, currentPage, onModalAddProductStateSet}) {
  const endGuitarCount = currentPage * SCREEN_GUITARS_COUNT;
  const startGuitarCount = endGuitarCount - SCREEN_GUITARS_COUNT;
  const cutGuitarsList = guitars.slice(startGuitarCount, endGuitarCount);

  return (
    <ul className="guitars">
      {cutGuitarsList.map((guitar) => <Guitar guitar={guitar} onModalAddProductStateSet={onModalAddProductStateSet} key={guitar.number}/>)}
    </ul>
  );
}

Guitars.propTypes = {
  onModalAddProductStateSet: PropTypes.func.isRequired,
  guitars: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Guitars;
