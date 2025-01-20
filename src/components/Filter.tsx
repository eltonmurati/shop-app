"use client";

import { useRouter, useSearchParams } from "next/navigation";
import DoubleRange from "./DoubleRange";
import FilterTags from "./FilterTags";
import FilterDropdown from "./FilterDropdown";
import { useState } from "react";

const Filter = () => {

    const [categoryOpen, setCategoryOpen] = useState(false);
    const [brandOpen, setBrandOpen] = useState(false);

    const searchParams = useSearchParams();
    const {replace} = useRouter();
    const params = new URLSearchParams(searchParams);

    const handleFilterChange = (e:React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const {name,value} = e.target;
        
        if (e.target.type === "checkbox") {
            if (e.target.checked) { params.set(name, "true"); } 
            else { params.delete(name); }
        } else {
            if (value === "false") { params.delete(name); }
            else if (name === "sort") { params.set(name, value); } 
            else {
                if (!params.has(name, value)) { params.append(name, value); }
            }
        }

        replace(`/shop?${params.toString()}`);
    }

    const clearFilters = () => {
        if (params.get("sort")) { replace(`shop?sort=${params.get("sort")}`); }
        else { replace("/shop"); }
    }

    return (
        <div className="py-8 flex flex-col gap-4">
            <div className="flex justify-between">
                <div className="flex gap-5 flex-wrap">
                    <div className="py-2 px-4 rounded-full text-xs font-medium bg-bwcgray h-max outline-none cursor-pointer relative" onClick={()=>setCategoryOpen(!categoryOpen)}>
                        <p>Category</p>
                        {categoryOpen && (
                            <FilterDropdown table={"category"} name={"cat"} />
                        )}
                    </div>
                    <div className="py-2 px-4 rounded-full text-xs font-medium bg-bwcgray h-max outline-none cursor-pointer relative" onClick={()=>setBrandOpen(!brandOpen)}>
                        <p>Brand</p>
                        {brandOpen && (
                            <FilterDropdown table={"brand"} name={"brand"} />
                        )}
                    </div>
                    <DoubleRange title={"Price"} measurement={"£"} />
                    <DoubleRange title={"Height"} measurement={"mm"} />
                    <DoubleRange title={"Width"} measurement={"mm"} />
                    <DoubleRange title={"Depth"} measurement={"mm"} />
                    <DoubleRange title={"Weight"} measurement={"kg"} />
                    <div className="flex gap-2 items-center bg-bwcgray rounded-full px-4 h-max py-2">
                        <input type="checkbox" name="stock" className="accent-bwcblue" checked={params.has("stock")} onChange={handleFilterChange} />
                        <label htmlFor="stock" className="text-xs font-medium">In Stock</label>
                    </div>
                    <div className="flex gap-2 items-center bg-bwcgray rounded-full px-4 h-max py-2">
                        <input type="checkbox" name="sale" className="accent-bwcblue" checked={params.has("sale")} onChange={handleFilterChange} />
                        <label htmlFor="sale" className="text-xs font-medium">On Sale</label>
                    </div>
                    {params.size > 0 && !(params.size === 1 && params.get("sort")) && (
                        <button className="rounded-full px-4 py-2 text-xs font-medium bg-bwcblue h-max text-white" onClick={clearFilters}>Clear Filters</button>
                    )}
                </div>
                <div className="pl-6">
                    <select name="sort" className="py-2 px-4 rounded-full text-xs font-medium outline-none cursor-pointer ring-1 ring-gray-400 ring-inset" onChange={handleFilterChange}>
                        <option value="false">Sort By</option>
                        <option value="pop">Popularity</option>
                        <option value="asc">Price (low to high)</option>
                        <option value="desc">Price (high to low)</option>
                    </select>
                </div>
            </div>
            <FilterTags />
        </div>
    );
}

export default Filter;