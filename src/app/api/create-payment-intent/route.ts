import { verifyCart } from "./helpers";

export const stripe = require("stripe")(process.env.STRIPE_SECRET!);

export async function POST(req:Request) {
    const cart = (await req.json())["cart"];
    const verifiedCart = await verifyCart(cart);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: verifiedCart["totalAmount"] * 100,
        currency: "gbp",
        automatic_payment_methods: {
            enabled: true,
        },
    });

    return(Response.json({
        clientSecret: paymentIntent.client_secret,
    }));
}