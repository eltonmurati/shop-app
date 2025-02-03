"use client"

import { postgres } from "@/app/lib/postgresClient";
import { Database } from "@/app/lib/types";
import { useCartStore } from "@/hooks/useCartStore";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const CartCard = ({id, quantity}:{id:number; quantity:number;}) => {

    const {deleteItem, addItem, removeItem} = useCartStore();

    const [product, setProduct] = useState<Database['public']['Tables']['product']['Row'] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [hovering, setHovering] = useState(false);

    useEffect(()=>{
        const getProduct = async () => {
            await postgres.from('product').select('*').eq('id', id).limit(1).single().then(({data:p})=>{
                if (p) { setProduct(p); }
                else { setError(true); }
                setIsLoading(false);
            });
        }
        getProduct();
    },[]);

    if (isLoading) { return( <div className="">Loading...</div> ); }
    if (error) { return(<div className="">Error</div>); }

    const deleteCard = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        deleteItem(product!.id.toString());
    }

    const addOne = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addItem(product!.id.toString(), 1, product!.quantity);
    }

    const removeOne = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        removeItem(product!.id.toString(), 1);
    }

    return(
        <>
            {product && (
                <Link href={`/product/${product.id}`} className={`flex gap-4 ${!hovering && "hover:text-blue-600"}`}>
                    <Image 
                        src={product.image_urls?.at(0) || "/noImage.jpg"} 
                        alt="" 
                        width={72} 
                        height={96} 
                        className="object-cover rounded-md"
                    />
                    <div className="flex flex-col justify-between w-full">
                        {/* TOP */}
                        <div className="">
                            {/* TITLE */}
                            <div className="flex justify-between gap-4">
                                <h3 className="font-semibold line-clamp-2">{product.name}</h3>
                                {product.on_sale ? (
                                    <div className="flex flex-col gap-1 text-end">
                                        <div className="text-gray-400 line-through text-sm">£{product.original_price.toLocaleString()}</div>
                                        <div className="text-black">£{product.price.toLocaleString()}</div>
                                    </div>
                                ) : (
                                    <div className="text-black">£{product.price.toLocaleString()}</div>
                                )}
                            </div>
                            {/* DESCRIPTION */}
                            <div className="text-sm text-gray-400">
                                {product.sku}
                            </div>
                        </div>
                        {/* BOTTOM */}
                        <div className="flex justify-between text-sm">
                            <div className="flex items-center gap-1">
                                <span className="text-gray-400">Qty. {quantity}</span>
                                <button className="text-gray-400 hover:text-blue-600" onClick={removeOne} onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                        <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                                    </svg>
                                </button>
                                <button className="text-gray-400 hover:text-blue-600" onClick={addOne} onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                        <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                                    </svg>
                                </button>
                            </div>
                            <button className="text-red-500 hover:underline" onClick={deleteCard} onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)}>Remove</button>
                        </div>
                    </div>
                </Link>
            )}
        </>
    );
}

export default CartCard;