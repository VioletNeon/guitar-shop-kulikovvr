import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import MainCatalog from '../main-catalog/main-catalog';
import Footer from '../footer/footer';

function Catalog({basketGuitars}) {
  return (
    <>
      <Header basketGuitars={basketGuitars}/>
      <MainCatalog/>
      <Footer/>
    </>
  );
}

Catalog.propTypes = {
  basketGuitars: PropTypes.array.isRequired,
};

export default Catalog;
