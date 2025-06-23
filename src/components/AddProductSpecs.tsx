"use client"

import { useState } from "react";

const AddProductSpecs = () => {
    const [count, setCount] = useState(4);
    
    return(
        <div className="">
            <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-700">Specifications</label>
                {[...Array(count)].map((_, i)=>(
                    <div key={i}>
                        <input type="text" name="" placeholder=""></input>
                    </div>
                ))}
                <button className="hover:text-blue-700 text-gray-400 w-max flex gap-1 mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    Add new specification
                </button>
            </div>
        </div>
    );
}

export default AddProductSpecs