"use client"

import { useState } from "react";
import AddProductVariant from "./AddProductVariant";

const AddProductVariants = ({updateVariants}:{updateVariants: React.Dispatch<React.SetStateAction<{ [k:number]: { [type:string]: { [key:string]: number | undefined | null } } } | undefined>>;}) => {
    const [count, setCount] = useState(0);
    const [variants, setVariants] = useState([] as number[]);

    const [final, setFinal] = useState<{ [k:number]: { [type:string]: { [key:string]: number | undefined | null } } } | undefined>();

    const addVariant = (variant:number) => {
        const newVariants = [...variants];
        newVariants.push(variant);
        setVariants(newVariants);

        let newFinal = {...final};
        newFinal[variant] = { "type": { "key": undefined } };
        setFinal(newFinal);
        updateVariants(newFinal);
    }

    const removeVariant = (variant:number) => {
        const i = variants.indexOf(variant);
        const newVariants = [...variants];
        newVariants.splice(i, 1);
        setVariants(newVariants);

        let newFinal = {...final};
        delete newFinal[variant];
        setFinal(newFinal);
        updateVariants(newFinal);
    }

    const changeVariant = (type:string, obj:{ [k:number]: { key:string, value:number | undefined } } | undefined, variant:number) => {
        let newFinal = {...final};

        if (obj) {
            const values = Object.values(obj);
            let newObj: { [key:string]: number | undefined | null } = {};

            values.forEach(v=>{
                newObj[v.key] = v.value === undefined ? null : v.value;
            });

            newFinal[variant] = { [type]: newObj }
        } else {
            delete newFinal[variant];
        }

        setFinal(newFinal);
        updateVariants(newFinal);
    }

    return(
        <div className="flex flex-col gap-2 sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.3334rem)] w-full">
            <label className="text-sm text-gray-700 ">Variants</label>
            {variants.length > 0 && (
                <div className="flex flex-col gap-2 max-h-[9.5rem] overflow-y-auto">
                    {variants.map(variant=>(
                        <AddProductVariant key={variant} variantId={variant} onDelete={()=>removeVariant(variant)} updateVariants={changeVariant} />
                    ))}
                </div>
            )}
            <div className="flex gap-2">
                <button type="button" className={"transition-colors linear duration-200 hover:text-blue-700 text-gray-400 w-max flex gap-1 " + (!(variants.length > 0) && "my-4")} onClick={()=>{setCount(count+1); addVariant(count)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    Add Variant Type
                </button>
                {variants.length > 3 && (
                    <button type="button" className="text-red-200 flex gap-1 items-center hover:text-red-500 transition-colors linear duration-200" onClick={()=>{setVariants([]); setFinal(undefined); updateVariants(undefined);}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                        </svg>
                        Clear
                    </button>
                )}
            </div>
        </div>
    );
}

export default AddProductVariants;