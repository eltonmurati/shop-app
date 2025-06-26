"use client"

import { postgres } from "@/lib/postgresClient";
import { useEffect, useState } from "react";
import AddProductSpecs from "./AddProductSpecs";
import AddProductVariants from "./AddProductVariants";
import AddProductCategories from "./AddProductCategories";
import { AddProductToDB } from "@/lib/adminHelpers";

const AddProduct = ({open, onClose}:{open:boolean; onClose:()=>void;}) => {
    const [brands, setBrands] = useState([] as { id: number; name: string; }[])
    const [fadeout, setFadeout] = useState(false);

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [sku, setSku] = useState("");
    const [mpn, setMpn] = useState<string|undefined>();
    const [brand, setBrand] = useState<number|undefined>();
    const [sale, setSale] = useState(false);
    const [ogprice, setOgprice] = useState<number|undefined>();
    const [categories, setCategories] = useState();
    const [variants, setVariants] = useState();
    const [specs, setSpecs] = useState();

    const getBrands = async () => {
        const { data: brands } = await postgres.from("brand").select().order("name", { ascending: true });
        if (brands) { setBrands(brands); }
    }

    useEffect(()=>{
        getBrands();
    },[]);

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        AddProductToDB(name, price, stock, sku, sale, mpn, brand, ogprice);
    }

    const handleCancel = () => {
        setFadeout(true);
        setTimeout(()=>{
            onClose();
            setFadeout(false);
        }, 200);
    }

    if (!open) { return(null); }

    return(
        <div className={"fixed top-0 left-0 h-full w-full p-4 flex justify-center items-center bg-[rgb(0_0_0_/_var(--tw-bg-opacity,0.1))] " + (fadeout ? "opacity-0 animate-[fadeout_200ms_linear]" : "animate-[fadein_200ms_linear]")}>
            <div className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-8 rounded-lg flex flex-col h-max gap-8 max-w-[68rem] max-h-full">
                <h1 className="text-2xl">Add a Product</h1>
                <form className="flex flex-col gap-8 justify-between max-h-full overflow-hidden" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap gap-8 max-h-full overflow-auto">
                        <div className="flex flex-col gap-2 w-full max-w-[20rem]">
                            <label htmlFor="name" className="text-sm text-gray-700">Name</label>
                            <input required type="text" name="name" className="ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none" onChange={e=>setName(e.target.value)} />
                        </div>
                        <div className="flex flex-col gap-2 w-full max-w-[20rem]">
                            <label htmlFor="price" className="text-sm text-gray-700">Price</label>
                            <input required type="number" name="price" className="ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none" onChange={e=>setPrice(e.target.valueAsNumber)} />
                        </div>
                        <div className="flex flex-col gap-2 w-full max-w-[20rem]">
                            <label htmlFor="stock" className="text-sm text-gray-700">Stock</label>
                            <input required type="number" name="stock" className="ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none" onChange={e=>setStock(e.target.valueAsNumber)} />
                        </div>
                        <div className="flex flex-col gap-2 w-full max-w-[20rem]">
                            <label htmlFor="sku" className="text-sm text-gray-700">Our Code</label>
                            <input required type="text" name="sku" className="ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none" onChange={e=>setSku(e.target.value)} />
                        </div>
                        <div className="flex flex-col gap-2 w-full max-w-[20rem]">
                            <label htmlFor="mpn" className="text-sm text-gray-700">Manufacturer Code</label>
                            <input type="text" name="mpn" placeholder="Optional" className="ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none" onChange={e=>setMpn(e.target.value)} />
                        </div>
                        <div className="flex flex-col gap-2 w-full max-w-[20rem]">
                            <label htmlFor="brand" className="text-sm text-gray-700">Brand</label>
                            <select name="brand" className="ring-2 h-14 ring-inset ring-gray-300 rounded-md p-4 outline-none cursor-pointer"  onChange={e=>setBrand(Number(e.target.value))}>
                                <option value={undefined}>None</option>
                                {brands.map(b=>(
                                    <option key={b.id} value={b.id}>{b.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex gap-8 w-full max-w-[20rem]">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="sale" className="text-sm text-gray-700 whitespace-nowrap">On Sale</label>
                                <input type="checkbox" name="sale" className="h-14 accent-blue-700 cursor-pointer" onChange={e=>setSale(e.target.checked)} />
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="ogprice" className="text-sm text-gray-700">Original Price</label>
                                <input type="number" name="ogprice" className="w-full ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none" onChange={e=>setOgprice(e.target.valueAsNumber)} />
                            </div>
                        </div>
                        <AddProductCategories />
                        <AddProductSpecs />
                        <AddProductVariants />
                    </div>
                    <div className="flex gap-8 md:justify-end">
                        <button className="py-4 px-8 ring-1 ring-inset ring-blue-700 text-blue-700 rounded-md hover:bg-blue-700 hover:text-white w-full md:w-max transition-colors linear duration-200">Submit</button>
                        <button 
                            className="py-4 px-8 ring-1 ring-inset ring-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white w-full md:w-max transition-colors linear duration-200"
                            onClick={handleCancel}
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