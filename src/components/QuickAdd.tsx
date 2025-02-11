"use client";

import { Tables } from "@/app/lib/types";
import { useCartStore } from "@/hooks/useCartStore";

const QuickAdd = ({product}:{product:Tables<"product">}) => {

    const {addItem} = useCartStore();

    const addToCart = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addItem(product.id, 1, product.quantity);
    }

    return(
        <button 
            className="rounded-2xl ring-1 ring-blue-700 text-blue-700 w-max py-2 px-4 text-xs whitespace-nowrap hover:bg-blue-700 hover:text-white 
                disabled:text-white disabled:bg-indigo-200 disabled:ring-indigo-200 disabled:cursor-not-allowed" 
            disabled={!(product.quantity > 0)}
            onClick={addToCart}
        >
            Add to Cart
        </button>
    );
}

export default QuickAdd;