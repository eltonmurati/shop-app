"use client"

import { useState } from "react";
import AddProduct from "./AddProduct";

const AddProductModal = () => {
    const [open, setOpen] = useState(false);

    return(
        <>
            <button className="flex w-max gap-2 rounded-full p-2 pr-3 text-blue-700 ring-1 ring-blue-700 ring-inset transition-colors linear duration-200 hover:bg-blue-700 hover:text-white" onClick={()=>setOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <div className="text-sm">Add a new product</div>
            </button>
            <AddProduct open={open} onClose={()=>setOpen(false)} />
        </>
    );
}

export default AddProductModal;