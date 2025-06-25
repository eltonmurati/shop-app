"use client"

import { postgres } from "@/lib/postgresClient";
import { useEffect, useState } from "react";
import AddProductSpecs from "./AddProductSpecs";
import AddProductVariants from "./AddProductVariants";
import AddProductCategories from "./AddProductCategories";

const AddProduct = ({open, onClose}:{open:boolean; onClose:()=>void;}) => {
    const [brands, setBrands] = useState([] as { id: number; name: string; }[])

    const getBrands = async () => {
        const { data: brands } = await postgres.from("brand").select().order("name", { ascending: true });
        if (brands) { setBrands(brands); }
    }

    useEffect(()=>{
        getBrands();
    });

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        
    }

    if (!open) { return(null); }

    return(
        <div className="absolute top-0 left-0 h-full w-full p-4 flex justify-center items-center bg-[rgb(0_0_0_/_var(--tw-bg-opacity,0.1))]">
            <div className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-8 rounded-lg flex flex-col h-max gap-8 max-w-[68rem] max-h-full">
                <h1 className="text-2xl">Add a Product</h1>
                <form className="flex flex-col gap-8 justify-between max-h-full overflow-hidden" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap gap-8 max-h-full overflow-auto">
                        <div className="flex flex-col gap-2 w-full max-w-[20rem]">
                            <label className="text-sm text-gray-700">ID</label>
                            <input type="text" name="id" placeholder="Auto Generated" className="ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none"/>
                        </div>
                        <div className="flex flex-col gap-2 w-full max-w-[20rem]">
                            <label className="text-sm text-gray-700">Name</label>
                            <input required type="text" name="name" placeholder="" className="ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none"/>
                        </div>
                        <div className="flex flex-col gap-2 w-full max-w-[20rem]">
                            <label className="text-sm text-gray-700">Price</label>
                            <input required type="number" name="price" placeholder="" className="ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none"/>
                        </div>
                        <div className="flex flex-col gap-2 w-full max-w-[20rem]">
                            <label className="text-sm text-gray-700">Stock</label>
                            <input required type="number" name="stock" placeholder="" className="ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none"/>
                        </div>
                        <div className="flex flex-col gap-2 w-full max-w-[20rem]">
                            <label className="text-sm text-gray-700">Our Code</label>
                            <input required type="text" name="sku" placeholder="" className="ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none"/>
                        </div>
                        <div className="flex flex-col gap-2 w-full max-w-[20rem]">
                            <label className="text-sm text-gray-700">Manufacturer Code</label>
                            <input type="text" name="mpn" placeholder="Optional" className="ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none"/>
                        </div>
                        <div className="flex gap-8 w-full max-w-[20rem]">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm text-gray-700 whitespace-nowrap">On Sale</label>
                                <input type="checkbox" name="sale" className="h-14"/>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label className="text-sm text-gray-700">Original Price</label>
                                <input type="number" name="ogprice" placeholder="" className="w-full ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none"/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full max-w-[20rem]">
                            <label className="text-sm text-gray-700">Brand</label>
                            <select name="brand" className="ring-2 h-14 ring-inset ring-gray-300 rounded-md p-4 outline-none cursor-pointer">
                                <option value="">None</option>
                                {brands.map(brand=>(
                                    <option key={brand.id} value={brand.id}>{brand.name}</option>
                                ))}
                            </select>
                        </div>
                        <AddProductCategories />
                        <AddProductVariants />
                        <AddProductSpecs />
                    </div>
                    <div className="flex gap-8 md:justify-end">
                        <button className="py-4 px-8 ring-1 ring-inset ring-blue-700 text-blue-700 rounded-md hover:bg-blue-700 hover:text-white w-full md:w-max">Submit</button>
                        <button 
                            className="py-4 px-8 ring-1 ring-inset ring-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white w-full md:w-max"
                            onClick={onClose}
                            type="button"
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