import { postgres } from "@/app/lib/postgresClient";

export const stripe = require("stripe")(process.env.STRIPE_SECRET!);

const calculateOrderAmount = async (items:{id:number, quantity:number}[]) => {
    let total = 0;
    for (const item of items) {
        await postgres.from("product").select("price").eq("id", item["id"]).limit(1).single().then(({data: product})=>{
            if (product) { total += product.price * item["quantity"]; }
        });
    }
    // Add shipping fees
    return total;
}

export default async function handler(req:any, res:any) {
    const { items } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: await calculateOrderAmount(items),
        currency: "gbp",
        automatic_payment_methods: {
            enabled: true,
        },
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
    });
}