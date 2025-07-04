"use client";

import CartCard from "./CartCard";
import { postgres } from "@/lib/postgresClient";
import { useEffect, useState } from "react";
import { useCartStore } from "@/hooks/useCartStore";
import Link from "next/link";
import { getPriceText } from "@/lib/helpers";

const CartModel = ({open, onClose}:{open:boolean; onClose: ()=>void;}) => {
    
    const [subtotal, setSubtotal] = useState(0);
    const {cart, clearCart} = useCartStore();

    let cartItems = false;
    if (cart.length > 0) { cartItems = true; }

    useEffect(()=>{
        const getSubtotal =async()=>{
            let total = 0;
            for (const item of cart) {
                await postgres.from("product").select("price").eq("id", item["id"]).limit(1).single().then(({data: product})=>{
                    if (product) {
                        total += product.price * item["quantity"];
                    }
                });
            }
            setSubtotal(total);
        }
        getSubtotal();
    },[cart]);

    if (!open) { return null; }

    return (
        <>
            <div className="fixed top-0 left-0 right-0 bottom-0 z-50" onClick={onClose}></div>
            <div className="max-w-[27rem] w-max absolute rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-50">
                {!cartItems ? (
                    <div className="p-4 font-medium flex flex-col items-center gap-4">
                        Cart is empty
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-32">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                        </svg>
                    </div>
                ) : (
                    <>
                        <h2 className="text-xl px-4 pt-4">Shopping Cart</h2>
                        {/* LIST */}
                        <div className="flex flex-col gap-8 overflow-y-auto px-4">
                            {/* ITEM */}
                            {cart.map((item)=>(
                                <CartCard id={item["id"]} quantity={item["quantity"]} key={item["id"]} verified={false} />
                            ))}
                        </div>
                        {/* BOTTOM */}
                        <div className="pb-4 px-4">
                            <div className="flex items-center justify-between font-medium">
                                <span className="">Subtotal</span>
                                <span className="">£{getPriceText(subtotal)}</span>
                            </div>
                            <p className="text-gray-400 text-sm mt-2 mb-4">
                                Shipping calculated at checkout.<br/>
                                All prices include VAT.
                            </p>
                            <div className="flex justify-between text-sm">
                                <button 
                                    className="rounded-md py-3 px-4 ring-1 ring-inset ring-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors linear duration-200" 
                                    onClick={()=>{clearCart(); onClose();}}
                                >
                                    Clear Cart
                                </button>
                                <Link 
                                    className="rounded-md py-3 px-4 ring-1 ring-inset ring-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition-colors linear duration-200" 
                                    href="/checkout" 
                                    onClick={onClose}
                                >
                                    Checkout
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default CartModel