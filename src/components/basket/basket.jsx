import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';
import MainBasket from '../main-basket/main-basket';

function Basket({basketGuitars}) {
  return (
    <>
      <Header basketGuitars={basketGuitars}/>
      <MainBasket basketGuitars={basketGuitars}/>
      <Footer/>
    </>
  );
}

Basket.propTypes = {
  basketGuitars: PropTypes.array.isRequired,
};

export default Basket;
