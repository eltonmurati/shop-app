"use client";

import { useEffect, useState } from "react";
import { useCartStore } from "@/hooks/useCartStore";

const Add = ({stock, productId}:{stock:number; productId:number;}) => {
    const [quantity,setQuantity] = useState(1);
    const [qty, setQty] = useState("1");
    const [added, setAdded] = useState(false);

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setAdded(false);
        }, 1500)

        return () => clearTimeout(timeout);
    },[added]);

    const {addItem} = useCartStore();

    const incramentQuantity = (type: "i" | "d") => {
        if (type === "d" && quantity > 1) {
            setQuantity( (prev) => prev - 1 );
            setQty((quantity-1).toString());
            
        } else if (type === "i" && quantity < stock) {
            setQuantity( (prev) => prev + 1 );
            setQty((quantity+1).toString());
        };
    };

    const handleFocus = (e:React.FocusEvent<HTMLInputElement>) => {
        handleQuantity(e.target.value);
    }

    const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleQuantity(e.currentTarget.value);
        }
    }

    const handleQuantity = (value: string) => {
        if (Number(value)) {
            if (Number(value) > stock) { 
                setQuantity(stock); 
                setQty(stock.toString());
            } else if (Number(value) < 1) { 
                setQuantity(1);
                setQty("1");
            } else { 
                setQuantity(Number(value));
            }
        } else {
            setQuantity(1);
            setQty("1");
        }
    }

    return (
        <div className="flex flex-col gap-4">
            <h4 className="font-medium">Choose a quantity</h4>
            {stock > 0 ? (
                <div className="flex justify-between">
                    <div className="flex items-center gap-4">
                        <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
                            <button className="cursor-pointer text-xl" onClick={()=>incramentQuantity("d")}>-</button>
                            <input type="text" placeholder="Qty." name="quantity" value={qty} className="w-12 text-center bg-gray-100" 
                                onChange={(e)=>setQty(e.target.value)} onBlur={handleFocus} onKeyDown={handleKeyDown}
                            />
                            <button className="cursor-pointer text-xl" onClick={()=>incramentQuantity("i")}>+</button>
                        </div>
                        <div className="text-sm text-green-500 font-medium">
                            {stock} In Stock
                        </div>
                    </div>
                    <div className="relative">
                        <button 
                            className="absolute transitions-colors linear duration-200 right-0 w-36 text-sm rounded-3xl ring-1 ring-blue-700 bg-white text-blue-700 py-3 px-4 hover:bg-blue-700 hover:text-white 
                                disabled:cursor-not-allowed disabled:bg-indigo-200 disabled:text-white disabled:ring-indigo-200 z-20"
                            onClick={()=>{addItem(productId, quantity, stock); setAdded(true);}}
                        >
                            Add to Cart
                        </button>
                        <div className={"absolute right-4 text-sm flex gap-1.5 text-blue-700 z-00 w-max transition-all duration-500 " + (added ? "-top-7 ease-out" : "top-3 ease-in")}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                            Added to Cart
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex justify-between">
                    <div className="flex items-center gap-4">
                        <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32 text-gray-400">
                            <div className="text-xl">-</div>
                            <div className="">0</div>
                            <div className="text-xl">+</div>
                        </div>
                        <div className="text-sm text-red-500 font-medium">
                            Out Of Stock
                        </div>
                    </div>
                    <button 
                        className="w-36 text-sm rounded-3xl ring-1 ring-blue-700 text-blue-700 py-2 px-4 hover:bg-blue-700 hover:text-white 
                            disabled:cursor-not-allowed disabled:bg-indigo-200 disabled:text-white disabled:ring-indigo-200" 
                        disabled
                    >
                        Add to Cart
                    </button>
                </div>
            )}
            
        </div>
    );
};

export default Add;