import React from 'react';
import Products from './components/Products';
import Header from './components/Header';
import Cart from './components/Cart';
import PurchaseList from './components/PurchaseList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PurchaseDetail from './components/PurchaseDetail';


function App(props) {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/purchase" element={<PurchaseList />} />
          <Route path="/purchase/:purchaseId" element={<PurchaseDetail />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;