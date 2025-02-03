"use client";

import CartCard from "./CartCard";
import { postgres } from "@/app/lib/postgresClient";
import { useEffect, useState } from "react";
import { useCartStore } from "@/hooks/useCartStore";

const CartModel = () => {

    const [subtotal, setSubtotal] = useState(0);

    const {cart, isLoading} = useCartStore();

    let cartItems = false;
    if (Object.entries(cart).length > 0) { cartItems = true; }

    useEffect(()=>{
        const getSubtotal =async()=>{
            let total = 0;
            for (const [key, value] of Object.entries(cart)) { 
                let postgresQuery = postgres.from('product').select('price');
                const {data: product} = await postgresQuery.eq('id', key).limit(1).single();
                console.log([key, value]);
                if (product) {
                    total += product.price * (value as number);
                }
            }
            setSubtotal(total);
        }
        getSubtotal();
    },[cart]);

    return (
        <div className="max-w-96 w-max absolute rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-30">
            {isLoading ? ("Loading...") : !cartItems ? (
                <div className="p-4">Cart is empty</div>
            ) : (
                <>
                    <h2 className="text-xl px-4 pt-4">Shopping Cart</h2>
                    {/* LIST */}
                    <div className="flex flex-col gap-8 overflow-y-auto max-h-[30rem] px-4">
                        {/* ITEM */}
                        {Object.entries(cart).map(([key, value])=>(
                            <CartCard id={Number(key)} quantity={value as number} key={key} />
                        ))}
                    </div>
                    {/* BOTTOM */}
                    <div className="pb-4 px-4">
                        <div className="flex items-center justify-between font-semibold">
                            <span className="">Subtotal</span>
                            <span className="">£{subtotal.toLocaleString()}</span>
                        </div>
                        <p className="text-gray-400 text-sm mt-2 mb-4">
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