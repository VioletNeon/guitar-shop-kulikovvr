import React from 'react';
import PropTypes from 'prop-types';
import Guitar from '../guitar/guitar';

function Guitars({guitars}) {
  return (
    <ul className="guitars">
      {guitars.map((guitar) => <Guitar guitar={guitar} key={guitar.number}/>)}
    </ul>
  );
}

Guitars.propTypes = {
  guitars: PropTypes.array.isRequired,
};

export default Guitars;
