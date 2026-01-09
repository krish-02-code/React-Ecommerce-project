import { formatmoney } from "../../utils/money";
import axios from "axios";
export function CartItemDetails({ cartItems, loadCart }) {
    const deleteCartItems = async () => {
        await axios.delete(`/api/cart-items/${cartItems.productId}`);

        await loadCart();
    }
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
                        Quantity: <span className="quantity-label">{cartItems.quantity}</span>
                    </span>
                    <span className="update-quantity-link link-primary">
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