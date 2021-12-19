import React, {useState} from 'react';
import Header from '../header/header';
import AddProductModal from '../add-product-modal/add-product-modal';
import Main from '../main';
import Footer from '../footer/footer';
import SuccessfulAdditionModal from '../successful-addition-modal/successful-addition-modal';
import DeleteProductModal from '../delete-product-modal/delete-product-modal';

function Catalog() {
  const [isModalAddProductOpen, setModalAddProductState] = useState(false);
  const [isModalSuccessfulAdditionOpen, setModalSuccessfulAdditionState] = useState(false);
  const [isModalDeleteProductOpen, setModalDeleteProductState] = useState(false);

  const onModalAddProductStateSet = () => {
    setModalAddProductState(!isModalAddProductOpen);
    document.body.style.overflow = isModalAddProductOpen ? 'visible' : 'hidden';
  };

  const onModalSuccessfulAdditionStateSet = () => {
    setModalAddProductState(false);
    setModalSuccessfulAdditionState(!isModalSuccessfulAdditionOpen);
    document.body.style.overflow = isModalSuccessfulAdditionOpen ? 'visible' : 'hidden';
  };

  const onModalDeleteProductStateSet = () => {
    setModalDeleteProductState(!isModalDeleteProductOpen);
    document.body.style.overflow = isModalDeleteProductOpen ? 'visible' : 'hidden';
  };

  return (
    <>
      <Header/>
      <Main/>
      {isModalAddProductOpen && <AddProductModal onModalAddProductStateSet={onModalAddProductStateSet} onModalSuccessfulAdditionStateSet={onModalSuccessfulAdditionStateSet}/>}
      {isModalSuccessfulAdditionOpen && <SuccessfulAdditionModal onModalSuccessfulAdditionStateSet={onModalSuccessfulAdditionStateSet}/>}
      {isModalDeleteProductOpen && <DeleteProductModal onModalDeleteProductStateSet={onModalDeleteProductStateSet}/>}
      <Footer/>
    </>
  );
}

export default Catalog;
