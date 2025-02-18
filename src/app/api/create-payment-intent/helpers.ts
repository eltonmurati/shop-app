"use server"

import { postgres } from "@/lib/postgresClient";

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
    return {"cart": verifiedCart, "totalAmount": totalAmount,}
}