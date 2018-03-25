import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistentStore } from 'redux-pouchdb';
import PouchDB from 'pouchdb';
import thunkMiddleware from 'redux-thunk';
import reducers from 'redux/reducers';
import App from './App';

const changeHandler = (doc) => {
  console.log(doc);
};

const db = new PouchDB('pokemon');
const store = createStore(
  reducers,
  {},
  composeWithDevTools(
    applyMiddleware(thunkMiddleware),
    persistentStore(db, changeHandler),
  ),
);

render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('app'),
);
