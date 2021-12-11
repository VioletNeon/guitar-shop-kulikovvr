import React from 'react';
import Catalog from '../catalog/catalog';
import {Switch, BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route>
          <Catalog exact path="/"/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
