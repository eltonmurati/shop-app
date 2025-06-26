"use client";

import CheckoutForm from "@/components/CheckoutForm";
import { useCartStore } from "@/hooks/useCartStore";
import { useEffect, useState } from "react";
import { verifyCart } from "../api/webhooks/helpers";
import CartCard from "@/components/CartCard";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getPriceText } from "@/lib/helpers";

const CheckoutPage = () => {
    const [clientSecret, setClientSecret] = useState<string|null>();
    const [isLoading, setIsLoading] = useState(true);
    const [items, SetItems] = useState<{id:number,quantity:number}[]>([]);
    const [price, setPrice] = useState<number>(0);
    const [shippingFee, setShippingFee] = useState(0);
    const [delivery, setDelivery] = useState(true);
    const [error, setError] = useState<string|null>();

    const { getCart } = useCartStore();

    useEffect(()=>{
        const setupCheckout = async () => {
            setIsLoading(true);
            setError(null);
            await verifyCart(getCart(), delivery).then((verifiedCart)=>{
                if (verifiedCart) {
                    SetItems(verifiedCart["cart"]);
                    setPrice(verifiedCart["totalAmount"]);
                    setClientSecret(verifiedCart["clientSecret"]);
                    setShippingFee(verifiedCart["shippingFee"]);
                } else {
                    setError("Minimum spending amount of £0.50 required.");
                }
                setIsLoading(false);
            });
        }
        setupCheckout();
    },[delivery, getCart]);

    if (isLoading) {
        return(
            <div className="min-h-max h-[calc(100vh-80px)] xl:h-[calc(100vh-144px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex justify-center items-center py-4">
                <h1 className="text-4xl font-medium text-gray-400">Loading...</h1>
            </div>
        );
    }

    if (items.length === 0) { redirect("/"); }

    if (!clientSecret || error) {
        return(
            <div className="min-h-max h-[calc(100vh-80px)] xl:h-[calc(100vh-144px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex justify-center items-center py-4">
                <div className="flex flex-col items-center gap-8">
                    <h1 className="text-4xl font-medium text-gray-400">Error</h1>
                    <h2 className="text-gray-400">{error || "Unexpected error: please try again later."}</h2>
                    <Link href="/" className="text-blue-700">Back to homepage</Link>
                </div>
            </div>
        );
    }

    return(
        <div className="h-max min-h-[calc(100vh-80px)] xl:min-h-[calc(100vh-144px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-16 flex flex-col justify-center">
            <div className="flex flex-col lg:flex-row gap-8 justify-center w-full">
                <div className="flex flex-col gap-8 lg:w-1/3">
                    <div className="flex gap-8">
                        <button 
                            className="rounded-md ring-1 ring-inset ring-blue-700 bg-white w-full p-3.5 text-blue-700 disabled:bg-blue-700 disabled:text-white"
                            disabled={delivery}
                            onClick={()=>setDelivery(true)}
                        >
                            Delivery
                        </button>
                        <button 
                            className="rounded-md ring-1 ring-inset ring-blue-700 bg-white w-full p-3.5 text-blue-700 disabled:bg-blue-700 disabled:text-white"
                            disabled={!delivery}
                            onClick={()=>setDelivery(false)}
                        >
                            Collection
                        </button>
                    </div>
                    <div className="h-max w-full flex flex-col gap-8 p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md">
                        <h1 className="text-xl">Shopping Cart</h1>
                        <div className="flex flex-col gap-8">
                            {items.map((item)=>(
                                <CartCard id={item["id"]} quantity={item["quantity"]} key={item["id"]} verified={true} />
                            ))}
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between font-medium">
                                <span className="">Subtotal</span>
                                <span className="">£{getPriceText(price-shippingFee)}</span>
                            </div>
                            <div className="flex items-center justify-between text-gray-400 text-sm">
                                <span className="">{delivery ? "Shipping" : "Collection"}</span>
                                <span className="">{shippingFee > 0 ? "£" + getPriceText(shippingFee) : "FREE"}</span>
                            </div>
                            {delivery && (
                                <div className="text-xs text-gray-400">Next day delivery</div>
                            )}
                            <div className="flex items-center justify-between font-medium text-xl">
                                <span className="">Total</span>
                                <span className="">£{getPriceText(price)}</span>
                            </div>
                            <div className="text-xs text-gray-400">All prices include VAT.</div>
                        </div>
                    </div>
                    
                </div>
                <div id="checkout" className="h-max w-full lg:w-2/3">
                    <CheckoutForm clientSecret={clientSecret!} delivery={delivery} />
                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;