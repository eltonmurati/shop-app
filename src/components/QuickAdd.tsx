"use client";

import { Tables } from "@/app/lib/types";
import { useCartStore } from "@/hooks/useCartStore";

const QuickAdd = ({product}:{product:Tables<"product">}) => {

    const {addItem} = useCartStore();

    const addToCart = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addItem(product.id.toString(), 1, product.quantity);
    }

    return(
        <button 
            className="rounded-2xl ring-1 ring-blue-600 text-blue-600 w-max py-2 px-4 text-xs whitespace-nowrap hover:bg-blue-600 hover:text-white 
                disabled:text-white disabled:bg-blue-100 disabled:ring-blue-100 disabled:cursor-not-allowed" 
            disabled={!(product.quantity > 0)}
            onClick={addToCart}
        >
            Add to Cart
        </button>
    );
}

export default QuickAdd;