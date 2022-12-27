import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cryptocurrencies from './pages/Cryptocurrencies/Cryptocurrencies';
import Candles from './pages/Candles/Candles';
import Order from './pages/Order/Order';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/cryptocurrencies" element={<Cryptocurrencies />}></Route>
        <Route path="/candles" element={<Candles />}></Route>
        <Route path="/order" element={<Order />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);