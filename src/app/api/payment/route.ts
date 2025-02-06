import { Tables } from "@/app/lib/types";
import Stripe from "stripe";
export const stripe = new Stripe(process.env.STRIPE_SECRET!);

const calculateOrderAmount = (items:Tables<"product">[]) => {
    let total = 0;
    for (const item of items) {
        total += item.price;
    }
    // Add shipping fees
    return total;
}

export default async function handler(req, res) {
    const { items } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: "gbp",
        automatic_payment_methods: {
            enabled: true,
        },
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
    });
}