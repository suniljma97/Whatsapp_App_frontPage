import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MainComponets from './components/mainComponents';
ReactDOM.render(
  <React.StrictMode>
           <MainComponets/>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();