"use server";

import { postgres } from "@/lib/postgresClient";
import { stripe } from "@/lib/stripe";

export const verifyCart = async (cart: { id: number; quantity: number; }[]) => {
    let totalAmount: number = 0;
    let verifiedCart: typeof cart = [];
    for (const item of cart) {
        await postgres.from("product").select("*").eq("id", item["id"]).limit(1).single().then(({data: product})=>{
            if (product) {
                if (product.quantity >= item["quantity"] && item["quantity"] > 0) {
                    verifiedCart.push(item);
                    totalAmount += product.price * item["quantity"];
                } 
            }
        });
    }

    if (totalAmount * 100 >= 50) {
        const clientSecret = await createPaymentIntent(totalAmount * 100, verifiedCart, 0);
        return {"cart": verifiedCart, "totalAmount": totalAmount, "clientSecret": clientSecret}
    }

    return null;
}

export const createPaymentIntent = async (price:number, items: {id: number, quantity: number}[], shippingAmount: number) => {
    const { client_secret: clientSecret} = await stripe.paymentIntents.create({
        amount: price,
        currency: 'gbp',
        automatic_payment_methods: {
            enabled: true,
        },
        metadata: {
            items: JSON.stringify(items),
            shippingAmount: shippingAmount,
        }
    });
    return clientSecret;
}