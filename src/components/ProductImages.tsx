"use client";

import Image from "next/image";
import { useState } from "react";

const ProductImages = ({images}:{images:string[]}) => {

    const [index, setIndex] = useState(0);

    if (images.length === 0) { 
        return(
            <div className="h-[600px] relative">
                <Image 
                    src={"/noImage.jpg"}
                    alt="" 
                    fill
                    className="object-contain rounded-md"
                />
            </div>
        );
    }

    return (
        <div className="">
            <div className="h-[600px] flex justify-center relative">
                <Image 
                    src={process.env.NEXT_PUBLIC_POSTGRES_URL + "/storage/v1/object/public/product-images" + images[index]}
                    alt="" 
                    fill
                    sizes="50vw"
                    className="object-contain rounded-md"
                />
            </div>
            {images.length > 1 && (
                <div className="flex gap-4 mt-4">
                    {images.map((img,i)=>(
                        <div className="w-1/4 h-32 relative gap-4 cursor-pointer" key={i} onClick={()=>setIndex(i)}>
                            <Image 
                                src={process.env.NEXT_PUBLIC_POSTGRES_URL + "/storage/v1/object/public/product-images" + img}
                                alt="" 
                                fill
                                className="object-contain rounded-md"
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductImages;