import './CheckoutPage.css'
import './checkout-header.css'
import { CheckoutHeader } from './Checkout-Header';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { OrderSummary } from './OrderSummary';
import { PaymentSummary } from './PaymentSummary';

export function CheckoutPage({ cart,loadCart }) {
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSumarry] = useState(null);

    useEffect(() => {
        
        const fetchCheckOutData = async ()=>{
         let response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime');
         setDeliveryOptions(response.data);
         
         response = await axios.get('/api/payment-summary');
         setPaymentSumarry(response.data);
        } 

        fetchCheckOutData();
    }, [cart])

    return (
        <>
            <title>Checkout</title>
            <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />
            <CheckoutHeader />

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary deliveryOptions={deliveryOptions} cart={cart} loadCart={loadCart}/>
                    <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart}/>

                </div>
            </div>
        </>

    );
}