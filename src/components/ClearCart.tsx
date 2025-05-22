"use client"

import { useCartStore } from "@/hooks/useCartStore";
import { useEffect } from "react";

const ClearCart = ({status}:{status:string}) => {

    const { clearCart } = useCartStore();

    useEffect(()=>{
        if (status === "succeeded") {
            clearCart();
        }
    });

    return(null);
}

export default ClearCart;