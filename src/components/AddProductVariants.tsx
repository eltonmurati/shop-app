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
            <div className="flex gap-2">
                <label className="text-sm text-gray-700 ">Variants</label>
                {variants.length > 1 && (
                    <button type="button" className="text-sm text-red-200 flex gap-1 items-center hover:text-red-500 transition-colors linear duration-200" onClick={()=>setVariants([])}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                            <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.78-4.22a.75.75 0 0 1-1.06 0L8 9.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L6.94 8 5.22 6.28a.75.75 0 0 1 1.06-1.06L8 6.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L9.06 8l1.72 1.72a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
                        </svg>
                        Clear
                    </button>
                )}
            </div>
            {variants.length > 0 && (
                <div className="flex flex-col gap-2 max-h-[9.5rem] overflow-y-auto">
                    {variants.map(variant=>(
                        <AddProductVariant key={variant} id={variant} onDelete={()=>removeVariant(variant)} />
                    ))}
                </div>
            )}
            <button type="button" className={"transition-colors linear duration-200 hover:text-blue-700 text-gray-400 w-max flex gap-1 " + (!(variants.length > 0) && "my-4")} onClick={()=>{setCount(count+1); addVariant(count)}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                Add Variant Type
            </button>
        </div>
    );
}

export default AddProductVariants;