import './HomePage.css'
import { Header } from '../../Components/Header';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { ProductsGrid } from './ProductsGrid';

export function HomePage({ cart,loadCart }) {
    // fetch('http://localhost:3000/api/products')
    // .then((response)=>{
    //    return response.json();
    // }).then((data)=>
    //     {console.log(data)}
    // );

    const [products, SetProducts] = useState([]);

    useEffect(() => {
        const getHomeData = async () => {
            const response = await axios.get('/api/products')
            SetProducts(response.data);
        };
        getHomeData();
    }, []);

    return (
        <>
            <title>Ecommerce project</title>
            <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
            <Header cart={cart} />
            <div className="home-page">
                <ProductsGrid products={products} loadCart={loadCart}/>
            </div>
        </>
    );
}