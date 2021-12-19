import './app.scss';
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {reducer} from './store/reducer';
import {loadGuitars} from './store/action';
import {guitars} from './mocks/mocks';

const store = createStore(reducer);

store.dispatch(loadGuitars(guitars));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
