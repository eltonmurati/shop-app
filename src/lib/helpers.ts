export const getPriceText = (price: number) => {
    let priceText = price.toLocaleString();
    if (priceText.split(".")[1]) {
        if (priceText.split(".")[1].length === 1) {
            priceText += "0";
        }
    }
    return priceText;
}