
import { DeliveryOption } from "./DeliveryOption";
import { CartItemDetails } from "./CartItemDetails";
import { DeliveryDate } from "./DeliveryDate";

export function OrderSummary({ deliveryOptions, cart }) {
    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 && cart.map((cartItems) => {
                return (
                    <div key={cartItems.id} className="cart-item-container">
                        <DeliveryDate cartItems={cartItems} deliveryOptions={deliveryOptions} />
                        <div className="cart-item-details-grid">
                            <CartItemDetails cartItems={cartItems} />
                            <DeliveryOption cartItems={cartItems} deliveryOptions={deliveryOptions} />
                        </div>
                    </div>);
            })}
        </div>
    )
}