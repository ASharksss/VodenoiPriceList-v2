import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

axios.defaults.baseURL = 'https://market.vodenoi.shop/v1';
// axios.defaults.baseURL = 'http://localhost:5000/v1';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
