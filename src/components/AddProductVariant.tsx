"use client"

import { useState } from "react";

const AddProductVariant = ({id, onDelete}:{id:number; onDelete:()=>void;}) => {
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
        <div className="rounded-lg flex flex-col gap-2">
            <div className="flex gap-1 justify-between">
                <input required type="text" name={"varname"+id} placeholder="Variant Type" className="text-sm h-6 w-full ring-2 ring-inset ring-gray-300 rounded-md px-2 outline-none"></input>
                <button type="button" className="text-gray-400 hover:text-red-500" onClick={onDelete}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </button>
            </div>
            {variants.length > 0 && (
                <div className="flex flex-col gap-2 max-h-[5.5rem] overflow-y-auto">
                    {variants.map((variant)=>(
                        <div key={variant} className="flex gap-1">
                            <div className="flex gap-2 w-full">
                                <input required type="text" name={"varkey"+variant+id} placeholder="Variant" className="text-sm h-6 w-1/2 ring-2 ring-inset ring-gray-300 rounded-md px-2 outline-none"></input>
                                <input type="number" name={"varvalue"+variant+id} placeholder="ID" className="text-sm h-6 w-1/2 ring-2 ring-inset ring-gray-300 rounded-md px-2 outline-none"></input>
                            </div>
                            <button type="button" className="text-gray-400 hover:text-red-500" onClick={()=>removeVariant(variant)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                    <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            )}
            <div className="flex gap-2">
                <button type="button" className="transition-colors linear duration-200 text-gray-400 hover:text-blue-700 w-max flex gap-1 items-center" onClick={()=>{setCount(count+1); addVariant(count);}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                        <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clipRule="evenodd" />
                    </svg>
                    Add Variant
                </button>
                {variants.length > 1 && (
                    <button type="button" className="text-red-200 flex gap-1 items-center hover:text-red-500 transition-colors linear duration-200" onClick={()=>setVariants([])}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                            <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z" clipRule="evenodd" />
                        </svg>
                        Clear
                    </button>
                )}
            </div>
        </div>
    );
}

export default AddProductVariant;