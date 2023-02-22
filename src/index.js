import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './counter/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App counter={0} />
  </React.StrictMode>
);
