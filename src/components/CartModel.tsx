"use client";

import Cookies from "js-cookie";
import CartCard from "./CartCard";
import { postgres } from "@/app/lib/postgresClient";
import { useEffect, useState } from "react";

const CartModel = () => {

    const [subtotal, setSubtotal] = useState(0);

    let cart = JSON.parse(Cookies.get("cart") || '{}');

    let cartItems = false;
    if (Object.entries(cart).length > 0) { cartItems = true; }

    let postgresQuery = postgres.from('product').select('price');
    useEffect(()=>{
        const getSubtotal =async()=>{
            for (const [key, value] of Object.entries(cart)) { 
                const {data: product} = await postgresQuery.eq('id', key).limit(1).single();
                if (product) {
                    setSubtotal(subtotal + product.price * (value as number));
                }
            }
        }
        getSubtotal();
    },[]);

    return (
        <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-30">
            {!cartItems ? (
                <div className="">Cart is empty</div>
            ) : (
                <>
                    <h2 className="text-xl">Shopping Cart</h2>
                    {/* LIST */}
                    <div className="flex flex-col gap-8">
                        {/* ITEM */}
                        {Object.entries(cart).map(([key, value])=>(
                            <CartCard id={Number(key)} quantity={value as number} key={key} />
                        ))}
                    </div>
                    {/* BOTTOM */}
                    <div className="">
                        <div className="flex items-center justify-between font-semibold">
                            <span className="">Subtotal</span>
                            <span className="">£{subtotal.toLocaleString()}</span>
                        </div>
                        <p className="text-gray-500 text-sm mt-2 mb-4">
                            Shipping calculated at checkout.<br/>
                            All prices are VAT inclusive.
                        </p>
                        <div className="flex justify-between text-sm">
                            <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">View Cart</button>
                            <button className="rounded-md py-3 px-4 bg-black text-white">Checkout</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default CartModel