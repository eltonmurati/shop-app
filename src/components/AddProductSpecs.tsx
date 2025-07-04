"use client"

import { useState } from "react";

const AddProductSpecs = ({updateSpecs}:{updateSpecs: React.Dispatch<React.SetStateAction<{[k:string]: {key:string, value:string}} | undefined>>;}) => {
    const [count, setCount] = useState(0);
    const [specs, setSpecs] = useState([] as number[]);

    const [final, setFinal] = useState<{ [k:number]: { key:string, value:string } } | undefined>();

    const removeSpec = (spec:number) => {
        const i = specs.indexOf(spec);
        const newSpecs = [...specs];
        newSpecs.splice(i, 1);
        setSpecs(newSpecs);

        let newFinal = {...final};
        delete newFinal[spec as keyof typeof newFinal];
        setFinal(newFinal);
        updateSpecs(newFinal);
    }

    const addSpec = (spec:number) => {
        const newSpecs = [...specs];
        newSpecs.push(spec);
        setSpecs(newSpecs);

        let newFinal = {...final};
        newFinal[spec as keyof typeof newFinal] = { key: "", value: "" };
        setFinal(newFinal);
        updateSpecs(newFinal);
    }

    const changeKey = (e:React.ChangeEvent<HTMLInputElement>, spec:number) => {
        let newFinal = {...final};
        newFinal[spec].key = e.target.value;
        setFinal(newFinal);
        updateSpecs(newFinal);
    }

    const changeValue = (e:React.ChangeEvent<HTMLInputElement>, spec:number) => {
        let newFinal = {...final};
        newFinal[spec].value = e.target.value;
        setFinal(newFinal);
        updateSpecs(newFinal);
    }
    
    return(
        <div className="flex flex-col gap-2 w-full max-w-[20rem]">
            <label className="text-sm text-gray-700 ">Specifications</label>
            {specs.length > 0 && (
                <div className="flex flex-col gap-2 max-h-[5.5rem] overflow-y-auto">
                    {specs.map((spec)=>(
                        <div key={spec} className="flex gap-1">
                            <div className="flex gap-2">
                                <input required onChange={(e)=>changeKey(e, spec)} type="text" placeholder="Type" className="text-sm h-6 w-1/2 ring-2 ring-inset ring-gray-300 rounded-md px-2 outline-none"></input>
                                <input required onChange={(e)=>changeValue(e, spec)} type="text" placeholder="Value" className="text-sm h-6 w-1/2 ring-2 ring-inset ring-gray-300 rounded-md px-2 outline-none"></input>
                            </div>
                            <button type="button" className="text-gray-400 hover:text-red-500 transition-colors linear duration-200" onClick={()=>removeSpec(spec)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            )}
            <div className="flex gap-2">
                <button type="button" className={"transition-colors linear duration-200 hover:text-blue-700 text-gray-400 w-max flex gap-1 " + (!(specs.length > 0) && "my-4")} onClick={()=>{setCount(count+1); addSpec(count);}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    Add Specification
                </button>
                {specs.length > 3 && (
                    <button type="button" className="text-red-200 flex gap-1 items-center hover:text-red-500 transition-colors linear duration-200" onClick={()=>{setSpecs([]); updateSpecs(undefined);}}>
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

export default AddProductSpecs;