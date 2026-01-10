import { Routes, Route } from 'react-router';
import { HomePage } from './Pages/home/HomePage';
import { CheckoutPage } from './Pages/checkout/CheckoutPage';
import { Orders } from './Pages/orders/Orders';
import { TrackingPage } from './Pages/tracking/TrackingPage';
import { PageNotFound } from './Pages/pageNotFound/PageNotFound';
import './App.css'
import { useEffect, useState } from 'react';
import axios from "axios";

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const response = await axios.get('/api/cart-items?expand=product');
    setCart(response.data);
  }

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} loadCart={loadCart}/>} />
        <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
        <Route path="orders" element={<Orders cart={cart} loadCart={loadCart}/>} />
        <Route path='tracking/:orderId/:productId' element={<TrackingPage cart={cart} />} />
        <Route path="*" element={<PageNotFound cart={cart} />} />
      </Routes>
    </>
  )
}

export default App
