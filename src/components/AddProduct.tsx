"use client"

import { postgres } from "@/lib/postgresClient";
import { useEffect, useState } from "react";
import AddProductSpecs from "./AddProductSpecs";

const AddProduct = ({open, onClose}:{open:boolean; onClose:()=>void;}) => {
    const [brands, setBrands] = useState([] as { id: number; name: string; }[])

    const getBrands = async () => {
        const { data: brands } = await postgres.from("brand").select().order("name", { ascending: true });
        if (brands) { setBrands(brands); }
    }

    useEffect(()=>{
        getBrands();
    })

    if (!open) { return(null); }

    return(
        <div className="absolute top-0 left-0 h-full w-full p-4 flex justify-center items-center">
            <div className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 rounded-md flex flex-col h-max gap-4 max-w-[800px]">
                <h1 className="text-2xl">Add a Product</h1>
                <form className="flex flex-col gap-4 justify-between">
                    <div className="flex flex-wrap gap-4">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm text-gray-700">ID</label>
                            <input type="number" name="id" placeholder="Leave blank" className="ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm text-gray-700">Name</label>
                            <input required type="text" name="name" placeholder="ENDFEED 6mm Elbow" className="ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm text-gray-700">Price</label>
                            <input required type="number" name="price" placeholder="34.99" className="ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm text-gray-700">Stock</label>
                            <input required type="number" name="stock" placeholder="100" className="ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm text-gray-700">Our Code</label>
                            <input required type="text" name="sku" placeholder="BWC.ZZZ123" className="ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm text-gray-700">Manufacturer Code</label>
                            <input type="text" name="mpn" placeholder="Optional" className="ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm text-gray-700">On Sale</label>
                            <input type="checkbox" name="sale" className="h-14"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm text-gray-700">Original Price</label>
                            <input type="number" name="ogprice" placeholder="39.99" className="ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm text-gray-700">Brand</label>
                            <select name="brand" className="ring-2 h-14 ring-inset ring-gray-300 rounded-md p-4 outline-none cursor-pointer">
                                <option value="">None</option>
                                {brands.map(brand=>(
                                    <option key={brand.id} value={brand.id}>{brand.name}</option>
                                ))}
                            </select>
                        </div>
                        <AddProductSpecs />
                    </div>
                    <div className="flex gap-4 md:justify-end">
                        <button className="py-2 px-4 ring-1 ring-inset ring-blue-700 text-blue-700 rounded-md hover:bg-blue-700 hover:text-white w-full md:w-max">Submit</button>
                        <button 
                            className="py-2 px-4 ring-1 ring-inset ring-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white w-full md:w-max"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddProduct;