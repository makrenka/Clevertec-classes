import React from 'react';
import ReactDOM from 'react-dom/client';
import { Legasy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';

import { App } from './counter/App';
import { reducer } from './store/reducer';

import './index.css';

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
