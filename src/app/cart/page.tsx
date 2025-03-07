"use client";

import { postgres } from "@/lib/postgresClient";
import { useEffect, useState } from "react";
import { useCartStore } from "@/hooks/useCartStore";
import CartCard from "@/components/CartCard";

const CartPage = () => {

    const [subtotal, setSubtotal] = useState(0);
    
    const {cart, clearCart} = useCartStore();

    let cartItems = false;
    if (cart.length > 0) { cartItems = true; }

    useEffect(()=>{
        const getSubtotal =async()=>{
            let total = 0;
            for (const item of cart) { 
                let postgresQuery = postgres.from('product').select('price');
                const {data: product} = await postgresQuery.eq('id', item["id"]).limit(1).single();
                if (product) {
                    total += product.price * item["quantity"];
                }
            }
            setSubtotal(total);
        }
        getSubtotal();
    },[cart]);

    return(
        <div className="w-full flex pb-16 pt-4 justify-center">
            <div className="flex flex-col gap-8">
                {!cartItems ? (
                    <div className="my-4 font-medium">Cart is empty</div>
                ) : (
                    <>
                        <h2 className="text-2xl px-4 font-medium">Shopping Cart</h2>
                        {/* LIST */}
                        <div className="flex flex-col gap-8 px-4">
                            {/* ITEM */}
                            {cart.map((item)=>(
                                <CartCard id={item["id"]} quantity={item["quantity"]} key={item["id"]} />
                            ))}
                        </div>
                        {/* BOTTOM */}
                        <div className="px-4">
                            <div className="flex items-center justify-between font-medium">
                                <span className="">Subtotal</span>
                                <span className="">£{subtotal.toLocaleString()}</span>
                            </div>
                            <p className="text-gray-400 text-sm mt-3 mb-5">
                                Shipping calculated at checkout.<br/>
                                All prices are VAT inclusive.
                            </p>
                            <div className="flex justify-between text-sm">
                                <button className="rounded-md py-3 px-4 ring-1 ring-inset ring-red-500 text-red-500" onClick={()=>clearCart()}>Clear Cart</button>
                                <button className="rounded-md py-3 px-4 bg-black text-white">Checkout</button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default CartPage;