"use client";

import { useState } from "react";
import { useCartStore } from "@/hooks/useCartStore";

const Add = ({stock, productId}:{stock:number; productId:number;}) => {

    const [quantity,setQuantity] = useState(1);

    const {addItem} = useCartStore();

    const handleQuantity = (type: "i" | "d") => {
        if (type === "d" && quantity > 1) {
            setQuantity( (prev) => prev - 1 );
        };
        if (type === "i" && quantity < stock) {
            setQuantity( (prev) => prev + 1 );
        };
    };

    return (
        <div className="flex flex-col gap-4">
            <h4 className="font-medium">Choose a quantity</h4>
            {stock > 0 ? (
                <div className="flex justify-between">
                    <div className="flex items-center gap-4">
                        <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
                            <button className="cursor-pointer text-xl" onClick={()=>handleQuantity("d")}>-</button>
                            {quantity}
                            <button className="cursor-pointer text-xl" onClick={()=>handleQuantity("i")}>+</button>
                        </div>
                        <div className="text-sm text-green-500 font-medium">
                            {stock} In Stock
                        </div>
                    </div>
                    <button 
                        className="w-36 text-sm rounded-3xl ring-1 ring-blue-700 text-blue-700 py-2 px-4 hover:bg-blue-700 hover:text-white 
                            disabled:cursor-not-allowed disabled:bg-indigo-200 disabled:text-white disabled:ring-indigo-200"
                        onClick={()=>addItem(productId, quantity, stock)}
                    >
                        Add to Cart
                    </button>
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