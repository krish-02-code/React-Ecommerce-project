import './HomePage.css'
import { Header } from '../../Components/Header';
import { useSearchParams} from 'react-router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ProductsGrid } from './ProductsGrid';


export function HomePage({ cart,loadCart }) {
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search');

    // fetch('http://localhost:3000/api/products')
    // .then((response)=>{
    //    return response.json();
    // }).then((data)=>
    //     {console.log(data)}
    // );


    const [products, SetProducts] = useState([]);

    useEffect(() => {
        const getHomeData = async () => {
            const urlPath = search ?`/api/products/?search=${search}` :'/api/products';
            const response = await axios.get(urlPath);
            SetProducts(response.data);
        };
        getHomeData();
    }, [search]);

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