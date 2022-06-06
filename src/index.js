import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MainComponets from './components/frontend/mainComponents';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
      <MainComponets/>
  </React.StrictMode>
);
reportWebVitals();