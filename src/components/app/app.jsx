import React from 'react';
import Catalog from '../catalog/catalog';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppRoute} from '../../const';
import {selectBasketGuitars} from '../../store/selectors';
import Basket from '../basket/basket';

function App() {
  const basketGuitars = useSelector(selectBasketGuitars);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Catalog basketGuitars={basketGuitars}/>
        </Route>
        <Route exact path={AppRoute.BASKET}>
          <Basket basketGuitars={basketGuitars}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
