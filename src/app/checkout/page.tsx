"use client";

import CheckoutForm from "@/components/CheckoutForm";
import { useCartStore } from "@/hooks/useCartStore";
import { useEffect, useState } from "react";
import { verifyCart } from "../api/webhooks/helpers";
import CartCard from "@/components/CartCard";
import Link from "next/link";

const CheckoutPage = () => {
    const [clientSecret, setClientSecret] = useState<string|null>();
    const [isLoading, setIsLoading] = useState(true);
    const [items, SetItems] = useState<{id:number,quantity:number}[]>([]);
    const [price, setPrice] = useState<number>(0);

    const {cart, getCart } = useCartStore();

    useEffect(()=>{
        getCart();
        const setupCheckout = async () => {
            await verifyCart(cart).then((verifiedCart)=>{
                if (verifiedCart["totalAmount"] * 100 >= 50) {
                    SetItems(verifiedCart["cart"]);
                    setPrice(verifiedCart["totalAmount"]);
                    setClientSecret(verifiedCart["clientSecret"]);
                }
                setIsLoading(false);
            });
        }
        setupCheckout();
    },[]);

    if (isLoading) {
        return(
            <div className="min-h-max h-[calc(100vh-80px)] xl:h-[calc(100vh-144px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex justify-center items-center py-4">
                <h1 className="text-4xl font-semibold text-gray-400">Loading...</h1>
            </div>
        );
    }

    if (!clientSecret) {
        return(
            <div className="min-h-max h-[calc(100vh-80px)] xl:h-[calc(100vh-144px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex justify-center items-center py-4">
                <div className="flex flex-col items-center gap-8">
                    <h1 className="text-4xl font-semibold text-gray-400">Error</h1>
                    <Link href="/" className="text-blue-700">Back to homepage</Link>
                </div>
            </div>
        );
    }

    return(
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 md:pt-4 lg:pt-8 pb-16">
            <h1 className="text-2xl pb-8 font-semibold">Checkout</h1>
            <div className="flex flex-col lg:flex-row gap-8 justify-center w-full">
                <div className="lg:sticky lg:top-8 h-max w-full lg:w-1/3 flex flex-col gap-8 p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md">
                    <h1 className="text-xl">Shopping Cart</h1>
                    <div className="flex flex-col gap-8">
                        {items.map((item)=>(
                            <CartCard id={item["id"]} quantity={item["quantity"]} key={item["id"]} verified={true} />
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between font-semibold">
                            <span className="">Subtotal</span>
                            <span className="">£{price.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center justify-between text-gray-400 text-sm">
                            <span className="">Shipping</span>
                            <span className="">FREE</span>
                        </div>
                        <div className="flex items-center justify-between font-semibold text-xl">
                            <span className="">Total</span>
                            <span className="">£{price.toLocaleString()}</span>
                        </div>
                    </div>
                </div>
                <div id="checkout" className="lg:sticky lg:top-8 h-max w-full lg:w-2/3">
                    <CheckoutForm clientSecret={clientSecret!} />
                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;