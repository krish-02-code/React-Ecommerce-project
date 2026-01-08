import dayjs from "dayjs";
import { formatmoney } from "../../utils/money";
import { DeliveryOption } from "./DeliveryOption";
export function OrderSummary({deliveryOptions,cart}) {
    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 && cart.map((cartItems) => {
                const selectedDeliveryOption = deliveryOptions.find((deliveryOption) => {
                    return (deliveryOption.id === cartItems.deliveryOptionId);
                })

                return (<div key={cartItems.id} className="cart-item-container">
                    <div className="delivery-date">
                        Delivery date:{dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format("dddd, MMMM D")}
                    </div>

                    <div className="cart-item-details-grid">
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
                                <span className="delete-quantity-link link-primary">
                                    Delete
                                </span>
                            </div>
                        </div>

                        <DeliveryOption cartItems={cartItems} deliveryOptions={deliveryOptions}/>
                   

                    </div>
                </div>);
            })}
        </div>
    )
}