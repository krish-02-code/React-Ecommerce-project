import './TrackingPage.css';
import { Header } from '../../Components/Header';
import MobileLogoWhite from '../../assets/images/mobile-logo-white.png';
import CartIcon from '../../assets/images/icons/cart-icon.png';
import SearchIcon from '../../assets/images/icons/search-icon.png'
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';

export function TrackingPage({ cart }) {
    const { orderId, productId } = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        async function fetchTrackingData() {
            const response = await axios.get(`/api/orders/${orderId}?expand=products`);
            setOrder(response.data);
        };

        fetchTrackingData();
    }, [orderId]);

    if (!order) return null;

    const orderProduct = order.products.find((orderProduct) => {
        return orderProduct.productId === productId;
    });

    const totalDeliveryTimeMs = orderProduct.estimatedDeliveryTimeMs - order.orderTimeMs;

    const timePassedMs = dayjs().valueOf() - order.orderTimeMs;

    let deliveryPercent = (timePassedMs / totalDeliveryTimeMs) * 100;
    console.log(deliveryPercent);


    if (deliveryPercent > 100) {
        deliveryPercent = 100;
    }

    const isPreparing = deliveryPercent < 33;
    const isShipping = deliveryPercent >= 33 && deliveryPercent < 100;
    const isDeliverd = deliveryPercent === 100;
    return (
        <>
            <title>Tracking</title>
            <link rel="icon" type="image/png" href="images/tracking-favicon.png" />
            <Header cart={cart} />

            <div className="tracking-page">
                <div className="order-tracking">
                    <a className="back-to-orders-link link-primary" href="/orders">
                        View all orders
                    </a>

                    <div className="delivery-date">
                        {deliveryPercent >= 100 ? 'Delivered on' : 'Arriving on'} {dayjs(orderProduct.estimatedDeliveryTimeMs).format('dddd,MMMM D')}
                    </div>

                    <div className="product-info">
                        {orderProduct.product.name}
                    </div>

                    <div className="product-info">
                        Quantity: {orderProduct.product.quantity}
                    </div>

                    <img className="product-image" src={orderProduct.product.image} />

                    <div className="progress-labels-container">
                        <div className={`progress-label ${isPreparing && 'current-status'}`}>
                            Preparing
                        </div>
                        <div className={`progress-label ${isShipping && 'current-status'}`}>
                            Shipped
                        </div>
                        <div className={`progress-label ${isDeliverd && 'current-status'}`}>
                            Delivered
                        </div>
                    </div>

                    <div className="progress-bar-container">
                        <div className="progress-bar" style={{ width: `${deliveryPercent}%` }}></div>
                    </div>
                </div>
            </div>
        </>
    );
}