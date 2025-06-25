"use client"

import { useState } from "react";
import AddProductVariant from "./AddProductVariant";

const AddProductVariants = () => {
    const [count, setCount] = useState(0);
    const [variants, setVariants] = useState([] as number[]);

    const addVariant = (variant:number) => {
        const newVariants = [...variants];
        newVariants.push(variant);
        setVariants(newVariants);
    }

    const removeVariant = (variant:number) => {
        const i = variants.indexOf(variant);
        const newVariants = [...variants];
        newVariants.splice(i, 1);
        setVariants(newVariants);
    }

    return(
        <div className="flex flex-col gap-2 w-full max-w-[20rem]">
            <label className="text-sm text-gray-700">Variants</label>
            {variants.length > 0 && (
                <div className="flex flex-col gap-2 max-h-[10.5rem] overflow-y-auto">
                    {variants.map(variant=>(
                        <AddProductVariant key={variant} id={variant} onDelete={()=>removeVariant(variant)} />
                    ))}
                </div>
            )}
            <button type="button" className={"hover:text-blue-700 text-gray-400 w-max flex gap-1 " + (!(variants.length > 0) && "my-4")} onClick={()=>{setCount(count+1); addVariant(count)}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                Add variant
            </button>
        </div>
    );
}

export default AddProductVariants;