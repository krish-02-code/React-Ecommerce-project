import { useState } from "react";
import { formatmoney } from "../../utils/money";
import axios from "axios";
import './CartItemDetails.css'
export function CartItemDetails({ cartItems, loadCart }) {
    const [isUpdatingQuantity, setIsUpdatingQuantity] = useState(false);
    const [quantity, setQuantity] = useState(cartItems.quantity);

    function updateCartQuantity(event) {
        setQuantity(event.target.value);
    }

    const deleteCartItems = async () => {
        await axios.delete(`/api/cart-items/${cartItems.productId}`);

        await loadCart();
    }

    async function isUpdating() {
        if (isUpdatingQuantity) {
            await axios.put(`/api/cart-items/${cartItems.productId}`, {
                quantity: Number(quantity)
            })
            await loadCart();
            setIsUpdatingQuantity(false);
        } else {
            setIsUpdatingQuantity(true);
        }
    }
    
    function handleQuantityKeyDown(event){
     
        if(event.key === 'Enter'){
            isUpdating();
        }

        if(event.key === 'Escape'){
            setQuantity(cartItems.quantity);
            setIsUpdatingQuantity(false);
        }
    };
    
    return (
        <>
            <img className="product-image"
                src={cartItems.product.image} />

            <div className="cart-item-details">
                <div className="product-name">
                    {cartItems.product.name}
                </div>
                <div className="product-price">
                    {formatmoney(cartItems.product.priceCents)}
                </div>
                <div className="product-quantity">
                    <span>
                        Quantity: {isUpdatingQuantity ? <input type="text" className="update-quantity" value={quantity} onChange={updateCartQuantity} onKeyDown={handleQuantityKeyDown}/> : <span className="quantity-label">{cartItems.quantity}</span>
                        }
                    </span>
                    <span className="update-quantity-link link-primary" onClick={isUpdating}>
                        Update
                    </span>
                    <span className="delete-quantity-link link-primary" onClick={deleteCartItems}>
                        Delete
                    </span>
                </div>
            </div>
        </>
    );
}