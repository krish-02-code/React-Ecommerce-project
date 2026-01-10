import { useState } from "react";
import { formatmoney } from "../../utils/money";
import ChechMark from '../../assets/images/icons/checkmark.png'
import axios from "axios";
export function Product({ product, loadCart }) {
    const [quantity, setQuantity] = useState(1);
    const [seen,setSeen] = useState(false);

    const addToCart = async () => {
        updateSeen();
        await axios.post('/api/cart-items', {
            productId: product.id,
            quantity: quantity
        });
        
        await loadCart();
    }
    
     function updateSeen(){
        setSeen(true);
        
        setTimeout(()=>{
            setSeen(false);
        },2000);
     };


    const selectQuantity = (event) => {
        const quantitySelected = Number(event.target.value);
        setQuantity(quantitySelected);
    }
    return (
        <div key={product.id} className="product-container">
            <div className="product-image-container">
                <img className="product-image"
                    src={product.image} />
            </div>
            <div className="product-name limit-text-to-2-lines">
                {product.name}
            </div>

            <div className="product-rating-container">
                <img className="product-rating-stars"
                    src={`images/ratings/rating-${product.rating.stars * 10}.png`} />
                <div className="product-rating-count link-primary">
                    {product.rating.count}
                </div>
            </div>

            <div className="product-price">
                {formatmoney(product.priceCents)}
            </div>

            <div className="product-quantity-container">
                <select value={quantity} onChange={ selectQuantity }>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>

            <div className="product-spacer"></div>

            <div className="added-to-cart" style={{opacity : seen ? 1 : 0}}>
                <img src={ChechMark} />
                Added
            </div>

            <button className="add-to-cart-button button-primary"
                onClick={addToCart}>
                Add to Cart
            </button>
        </div>
    );
}