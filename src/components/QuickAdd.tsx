"use client";

import { Tables } from "@/lib/types";
import { useCartStore } from "@/hooks/useCartStore";
import { useEffect, useState } from "react";

const QuickAdd = ({product}:{product:Tables<"product">}) => {
    const [added, setAdded] = useState(false);

    const {addItem} = useCartStore();

    const addToCart = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addItem(product.id, 1, product.quantity);
    }

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setAdded(false);
        }, 1500);

        return () => clearTimeout(timeout);
    },[added]);

    return(
        <div className="relative">
            <button 
                className="absolute transition-colors duration-200 rounded-2xl ring-1 ring-blue-700 text-blue-700 bg-white w-max py-2 px-4 text-xs whitespace-nowrap hover:bg-blue-700 hover:text-white 
                    disabled:text-white disabled:bg-indigo-200 disabled:ring-indigo-200 disabled:cursor-not-allowed z-20" 
                disabled={!(product.quantity > 0)}
                onClick={(e)=>{addToCart(e); setAdded(true)}}
            >
                Add to Cart
            </button>
            <div className="absolute -left-4 h-8 w-8 bg-white z-10"></div>
            <div className={"absolute top-2 text-xs text-blue-700 z-0 transition-all duration-500 flex gap-1 " + (added ? "left-[6.5rem] ease-out" : "-left-1 ease-in")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                Added to Cart
            </div>
        </div>
    );
}

export default QuickAdd;