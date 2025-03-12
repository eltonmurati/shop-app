export const getPriceText = (price: number) => {
    let priceText = price.toLocaleString();
    console.log("1")
    if (priceText.split(".")[1]) {
        console.log("2")
        if (priceText.split(".")[1].length === 1) {
            console.log("3")
            priceText += "0";
        }
    }
    return priceText;
}