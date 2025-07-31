"use client";

import { useRouter, useSearchParams } from "next/navigation";
import DoubleRange from "./DoubleRange";
import FilterTags from "./FilterTags";
import FilterDropdown from "./FilterDropdown";
import { Suspense, useState } from "react";

const Filter = () => {
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [brandOpen, setBrandOpen] = useState(false);

    const searchParams = useSearchParams();
    const {replace} = useRouter();
    const params = new URLSearchParams(searchParams);

    const handleFilterChange = (e:React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const {name,value} = e.target;
        
        if (e.target.type === "checkbox") {
            if ((e.target as HTMLInputElement).checked) { params.set(name, "true"); }
            else { params.delete(name); }
        } else {
            if (value === "false") { params.delete(name); }
            else if (name === "sort") { params.set(name, value); }
            else {
                if (!params.has(name, value)) { params.append(name, value); }
            }
        }

        params.delete("page");
        replace(`/shop?${params}`);
    }

    const clearFilters = () => {
        if (params.get("sort")) { replace(`shop?sort=${params.get("sort")}`); }
        else { replace("/shop"); }
    }

    return (
        <div className="pt-8 pb-10 flex flex-col gap-4">
            <div className="flex justify-between flex-col-reverse md:flex-row gap-4">
                <div className="flex gap-4 flex-wrap">
                    <div className="py-2 pl-4 pr-2 rounded-full text-sm font-medium bg-gray-100 h-max outline-none cursor-pointer relative flex gap-2" onClick={()=>setCategoryOpen(!categoryOpen)}>
                        <p>Category</p>
                        {categoryOpen ? (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-5">
                                    <path fillRule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
                                </svg>
                                <Suspense fallback="Loading...">
                                    <FilterDropdown table={"category"} name={"cat"} open={categoryOpen} onClose={()=>setCategoryOpen(false)} />
                                </Suspense>
                            </>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-5">
                                <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        )}
                    </div>
                    <div className="py-2 pl-4 pr-2 rounded-full text-sm font-medium bg-gray-100 h-max outline-none cursor-pointer relative flex gap-2" onClick={()=>setBrandOpen(!brandOpen)}>
                        <p>Brand</p>
                        {brandOpen ? (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-5">
                                    <path fillRule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
                                </svg>
                                <Suspense fallback="Loading...">
                                    <FilterDropdown table={"brand"} name={"brand"} open={brandOpen} onClose={()=>setBrandOpen} />
                                </Suspense>
                            </>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-5">
                                <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        )}
                    </div>
                    <Suspense fallback="Loading...">
                        <DoubleRange title={"Price"} measurement={"£"} column="price" />
                    </Suspense>
                    <div className="flex gap-2 items-center bg-gray-100 rounded-full px-4 h-max py-2">
                        <input type="checkbox" id="stock" name="stock" className="accent-blue-700 cursor-pointer" checked={params.has("stock")} onChange={handleFilterChange} />
                        <label htmlFor="stock" className="text-sm font-medium cursor-pointer">In Stock</label>
                    </div>
                    <div className="flex gap-2 items-center bg-gray-100 rounded-full px-4 h-max py-2">
                        <input type="checkbox" id="sale" name="sale" className="accent-blue-700 cursor-pointer" checked={params.has("sale")} onChange={handleFilterChange} />
                        <label htmlFor="sale" className="text-sm font-medium cursor-pointer">On Sale</label>
                    </div>
                    {params.size > 0 && !(params.size === 1 && params.get("sort")) && !(params.size === 1 && params.get("page")) && 
                        !(params.size === 2 && params.get("sort") && params.get("page")) && (
                        <button 
                            className="rounded-full px-4 py-2 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700 transition-colors duration-200 hover:bg-blue-700 h-max hover:text-white" 
                            onClick={clearFilters}
                        >
                            Clear Filters
                        </button>
                    )}
                </div>
                <div className="">
                    <select name="sort" className="py-2 px-4 rounded-full text-sm font-medium outline-none cursor-pointer ring-1 ring-gray-400 ring-inset" onChange={handleFilterChange}>
                        <option value="false">Sort By</option>
                        <option value="asc">Price (low to high)</option>
                        <option value="desc">Price (high to low)</option>
                    </select>
                </div>
            </div>
            <Suspense fallback="Loading...">
                <FilterTags />
            </Suspense>
        </div>
    );
}

export default Filter;