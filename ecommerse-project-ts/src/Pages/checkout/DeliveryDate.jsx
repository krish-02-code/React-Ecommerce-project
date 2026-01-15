import dayjs from "dayjs";

export function DeliveryDate({ deliveryOptions, cartItems }) {
    const selectedDeliveryOption = deliveryOptions.find((deliveryOption) => {
        return (deliveryOption.id === cartItems.deliveryOptionId);
    })
    return (
        <>
            < div className="delivery-date" >
                Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format("dddd, MMMM D")}
            </div>
        </>
    );

}