"use client";

import Image from "next/image";
import { useState } from "react";

const ProductImages = ({images}:{images:string[]}) => {

    const [index, setIndex] = useState(0);

    return (
        <div className="">
            <div className="h-[500px] relative">
                <Image 
                    src={images[index]}
                    alt="" 
                    fill
                    sizes="50vw" 
                    className="object-cover rounded-md"
                />
            </div>
            <div className="flex justify-between gap-4 mt-4">
                {images.map((img,i)=>(
                    <div className="w-1/4 h-32 relative gap-4 cursor-pointer" key={i} onClick={()=>setIndex(i)}>
                        <Image 
                            src={img}
                            alt="" 
                            fill 
                            sizes="30vw" 
                            className="object-cover rounded-md"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductImages;