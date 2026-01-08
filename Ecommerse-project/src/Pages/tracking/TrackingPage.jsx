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
    console.log(order);
    
     const orderProduct = order.products.find((orderProduct) => {
        return orderProduct.productId === productId;
    });

    return (
        <>
            <title>Tracking</title>
            <link rel="icon" type="image/svg+xml" href="tracking-favicon.png" />
            <Header cart={cart} />

            <div className="tracking-page">
                <div className="order-tracking">
                    <a className="back-to-orders-link link-primary" href="/orders">
                        View all orders
                    </a>

                    <div className="delivery-date">
                         Arriving on {dayjs(orderProduct.estimatedDeliveryTimeMs).format('dddd,MMMM D')} 
                    </div>

                    <div className="product-info">
                        {orderProduct.product.name}
                    </div>

                    <div className="product-info">
                        Quantity: {orderProduct.product.quantity}
                    </div>

                    <img className="product-image" src={orderProduct.product.image} />

                    <div className="progress-labels-container">
                        <div className="progress-label">
                            Preparing
                        </div>
                        <div className="progress-label current-status">
                            Shipped
                        </div>
                        <div className="progress-label">
                            Delivered
                        </div>
                    </div>

                    <div className="progress-bar-container">
                        <div className="progress-bar"></div>
                    </div>
                </div>
            </div>
        </>
    );
}