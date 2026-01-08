import './CheckoutPage.css'
import './checkout-header.css'
import { CheckoutHeader } from './Checkout-Header';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { OrderSummary } from './OrderSummary';
import { PaymentSummary } from './PaymentSummary';

export function CheckoutPage({ cart }) {
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSumarry] = useState(null);

    useEffect(() => {
        axios.get('/api/payment-summary').then((response) => {
            setPaymentSumarry(response.data);
        })
    }, [])

    useEffect(() => {
        axios.get('/api/delivery-options?expand=estimatedDeliveryTime').then((response) => {
            setDeliveryOptions(response.data);
        })
    }, []);

    return (
        <>
            <title>Checkout</title>
            <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />
            <CheckoutHeader />

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary deliveryOptions={deliveryOptions} cart={cart} />
                    <PaymentSummary paymentSummary={paymentSummary} />

                </div>
            </div>
        </>

    );
}