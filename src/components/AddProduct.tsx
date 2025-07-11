"use client"

import { postgres } from "@/lib/postgresClient";
import { useEffect, useState } from "react";
import AddProductSpecs from "./AddProductSpecs";
import AddProductVariants from "./AddProductVariants";
import AddProductCategories from "./AddProductCategories";
import { AddProductToDB } from "@/lib/adminHelpers";
import AddProductImages from "./AddProductImages";
import FadeInOut from "./FadeInOut";
import ScaleInOut from "./ScaleInOut";

const AddProduct = ({open, onClose}:{open:boolean; onClose:()=>void;}) => {
    const [brands, setBrands] = useState([] as { id: number; name: string; }[]);
    
    const [error, setError] = useState(false);
    const [loadingBrands, setLoadingBrands] = useState(true);
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const [success, setSuccess] = useState(false);

    const [images, setImages] = useState<{ [k:number]: File } | undefined>();
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [sku, setSku] = useState("");
    const [mpn, setMpn] = useState<string|undefined>();
    const [brand, setBrand] = useState<number|undefined>();
    const [sale, setSale] = useState(false);
    const [ogprice, setOgprice] = useState<number|undefined>();
    const [categories, setCategories] = useState<{ [k:number]: number } | undefined>();
    const [variants, setVariants] = useState<{ [k:number]: { [type:string]: { [key:string]: number | undefined | null } } } | undefined>();
    const [specs, setSpecs] = useState<{[k:string]: {key:string, value:string}} | undefined>();

    const getBrands = async () => {
        setLoadingBrands(true);

        const { data: brands } = await postgres.from("brand").select().order("name", { ascending: true });

        if (brands) { setBrands(brands); } 
        else { setError(true); }

        setLoadingBrands(false);
    }

    useEffect(()=>{
        if (open) getBrands();
    },[open]);

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoadingSubmit(true);

        let err;

        try {
            err = await AddProductToDB(name, price, stock, sku, sale, mpn, brand, ogprice, specs, variants, categories, images);
        } catch (e) {
            err = true;
        }

        setLoadingSubmit(false);
        setError(err);

        if (!err) { 
            setSuccess(true);
            handleCancel(); 
        }
    }

    const handleCancel = () => {
        onClose();

        setError(false);
        setSuccess(false);
        setLoadingSubmit(false);
        setLoadingBrands(true);
        setCategories(undefined);
        setVariants(undefined);
        setSpecs(undefined);
        setBrand(undefined);
        setSale(false);
        setMpn(undefined);
        setImages(undefined);
        setOgprice(undefined);
    }

    if (error) { 
        return(
            <div className="fixed top-0 left-0 h-full w-full p-4 flex justify-center items-center bg-[rgb(0_0_0_/_var(--tw-bg-opacity,0.1))]">
                <div className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-8 rounded-lg flex flex-col h-max gap-8 max-w-[68rem] max-h-full items-center">
                    <h1 className="text-2xl">Something went wrong</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-32">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                    </svg>
                    <button 
                        className="py-4 px-8 ring-1 ring-inset ring-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white w-full transition-colors linear duration-200"
                        onClick={handleCancel}
                        type="button"
                    >
                        Close
                    </button>
                </div>
            </div>
        ); 
    }

    return(
        <FadeInOut mount={open} initialState={open}>
            <div className="fixed top-0 left-0 h-full w-full p-4 flex justify-center items-center">
                <div className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-8 rounded-lg flex flex-col h-max gap-8 max-w-[68rem] max-h-full">
                    <h1 className="text-2xl">Add a Product</h1>
                    <form className="flex flex-col gap-8 justify-between max-h-full overflow-hidden" onSubmit={handleSubmit}>
                        <div className="flex flex-wrap gap-8 max-h-full overflow-auto">
                            <div className="flex flex-col gap-2 w-full">
                                <label className="text-sm text-gray-700">Images</label>
                                <AddProductImages updateImages={setImages} />
                            </div>
                            <div className="flex flex-col gap-2 sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.3334rem)] w-full">
                                <label className="text-sm text-gray-700">Name</label>
                                <input required type="text" className="ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none" onChange={e=>setName(e.target.value)} />
                            </div>
                            <div className="flex flex-col gap-2 sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.3334rem)] w-full">
                                <label className="text-sm text-gray-700">Price</label>
                                <input required type="number" className="ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none" onChange={e=>setPrice(e.target.valueAsNumber)} />
                            </div>
                            <div className="flex flex-col gap-2 sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.3334rem)] w-full">
                                <label className="text-sm text-gray-700">Stock</label>
                                <input required type="number" className="ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none" onChange={e=>setStock(e.target.valueAsNumber)} />
                            </div>
                            <div className="flex flex-col gap-2 sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.3334rem)] w-full">
                                <label className="text-sm text-gray-700">Our Code</label>
                                <input required type="text" className="ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none" onChange={e=>setSku(e.target.value)} />
                            </div>
                            <div className="flex flex-col gap-2 sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.3334rem)] w-full">
                                <label className="text-sm text-gray-700">Manufacturer Code</label>
                                <input type="text" placeholder="Optional" className="ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none" onChange={e=>setMpn(e.target.value)} />
                            </div>
                            <div className="flex flex-col gap-2 sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.3334rem)] w-full">
                                <label className="text-sm text-gray-700">Brand</label>
                                {loadingBrands ? (
                                    <div className="">Loading...</div>
                                ) : (
                                    <select className="ring-2 h-14 ring-inset ring-gray-300 rounded-md p-4 outline-none cursor-pointer" onChange={e=>setBrand(Number(e.target.value))}>
                                        <option value={undefined}>None</option>
                                        {brands.map(b=>(
                                            <option key={b.id} value={b.id}>{b.name}</option>
                                        ))}
                                    </select>
                                )}
                            </div>
                            <div className="flex gap-8 sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.3334rem)] w-full">
                                <div className="flex flex-col gap-2 relative">
                                    <label className="text-sm text-gray-700 whitespace-nowrap">On Sale</label>
                                    <input type="checkbox" id="sale" className="transition-colors linear duration-200 appearance-none checked:bg-blue-700 h-14 w-14 cursor-pointer ring-2 ring-inset ring-gray-300 rounded-md accent-blue-700" onChange={e=>setSale(e.target.checked)} />
                                    <label htmlFor="sale" className="text-white absolute top-8 left-1 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                    </label>
                                </div>
                                <ScaleInOut mount={sale} initialState={false}>
                                    <div className="flex flex-col gap-2 w-full">
                                        <label className="text-sm text-gray-700">Original Price</label>
                                        <input type="number" className="w-full ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none" onChange={e=>setOgprice(e.target.valueAsNumber)} />
                                    </div>
                                </ScaleInOut>
                            </div>
                            <AddProductCategories updateCategories={setCategories} />
                            <AddProductSpecs updateSpecs={setSpecs} />
                            <AddProductVariants updateVariants={setVariants} />
                        </div>
                        <div className="flex gap-8 md:justify-end">
                            <button 
                                className="disabled:bg-indigo-200 disabled:ring-indigo-200 disabled:text-white py-4 px-8 ring-1 ring-inset ring-blue-700 text-blue-700 rounded-md hover:bg-blue-700 hover:text-white w-full md:w-max transition-colors linear duration-200"
                                disabled={loadingSubmit}
                            >
                                {loadingSubmit ? "Loading..." : "Submit"}
                            </button>
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
        </FadeInOut>
    );
}

export default AddProduct;