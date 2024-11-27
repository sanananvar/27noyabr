function calculateDelivery(orderAmount, isPremium) {
    let deliveryTime;
    let shippingCost;

    if (isPremium) {
        deliveryTime = "1 gün";
        shippingCost = 0;
    } else if (orderAmount > 150) {
        deliveryTime = "2 gün";
        shippingCost = 0;
    } else if (orderAmount >= 100 && orderAmount <= 150) {
        deliveryTime = "3 gün";
        shippingCost = 20;
    } else {
        deliveryTime = "5 gün";
        shippingCost = 30;
    }

    return {
        deliveryTime: deliveryTime,
        shippingCost: shippingCost
    };
}

console.log(calculateDelivery(160, true));
