import './Orders.css'
import axios from 'axios';
import { useState, useEffect, Fragment } from 'react';
import { Header } from '../../Components/Header';
// import logoWhite from '../assets/images/logo-white.png';
import MobileLogoWhite from '../../assets/images/mobile-logo-white.png'
import CartIcon from '../../assets/images/icons/cart-icon.png'
import SearchIcon from '../../assets/images/icons/search-icon.png';
import { OrdersGrid } from './OrdersGrid';

export function Orders({ cart,loadCart }) {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function getOrdersData(){
        const response =  await axios.get('/api/orders?expand=products');
        setOrders(response.data);
        }

        getOrdersData();
    }, [])

    return (
        <>
            <title>Orders</title>
            <link rel="icon" type="image/svg+xml" href="orders-favicon.png" />
            <Header cart={cart} />

            <div className="orders-page">
                <div className="page-title">Your Orders</div>
                 {<OrdersGrid orders={orders} loadCart={loadCart}/>}
            </div>
        </>
    );
}