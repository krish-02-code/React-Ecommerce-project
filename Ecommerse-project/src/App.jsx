import { Routes,Route } from 'react-router';
import { HomePage } from './Pages/HomePage';
import { CheckoutPage } from './Pages/checkout/CheckoutPage';
import { Orders } from './Pages/Orders';
import { TrackingPage } from './Pages/TrackingPage';
import { PageNotFound } from './Pages/PageNotFound';
import './App.css'

function App() {
  return (
    <>
     <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="checkout" element={<CheckoutPage/>}/>
      <Route path="orders" element={<Orders/>}/>
      <Route path='tracking' element={<TrackingPage/>}/>
      <Route path="*" element={<PageNotFound/>}/>
     </Routes>
    </>
     )
}

export default App
