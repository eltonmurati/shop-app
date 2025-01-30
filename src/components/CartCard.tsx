"use client"

import { postgres } from "@/app/lib/postgresClient";
import { Database } from "@/app/lib/types";
import { useCartStore } from "@/hooks/useCartStore";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const CartCard = ({id, quantity}:{id:number; quantity:number;}) => {

    const {removeItem} = useCartStore();

    const [product, setProduct] = useState<Database['public']['Tables']['product']['Row'] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

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

    const remove = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        removeItem(product!.id.toString());
    }

    return(
        <>
            {product && (
                <Link href={`/product/${product.id}`} className="flex gap-4">
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
                                <div className="">£{product.price.toLocaleString()}</div>
                            </div>
                            {/* DESCRIPTION */}
                            <div className="text-sm text-gray-500">
                                {product.sku}
                            </div>
                        </div>
                        {/* BOTTOM */}
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Qty. {quantity}</span>
                            <button className="text-bwcred" onClick={remove}>Remove</button>
                        </div>
                    </div>
                </Link>
            )}
        </>
    );
}

export default CartCard;