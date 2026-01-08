import './HomePage.css'
import { Header } from '../../Components/Header';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { ProductsGrid } from './ProductsGrid';

export function HomePage({ cart }) {
    // fetch('http://localhost:3000/api/products')
    // .then((response)=>{
    //    return response.json();
    // }).then((data)=>
    //     {console.log(data)}
    // );

    const [products, SetProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/products')
            .then((response) => {
                SetProducts(response.data);
            });

    }, []);

    return (
        <>
            <title>Ecommerce project</title>
            <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
            <Header cart={cart} />
            <div className="home-page">
                 <ProductsGrid products={products}/>
            </div>
        </>
    );
}