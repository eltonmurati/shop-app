"use client";

import { useRouter, useSearchParams } from "next/navigation";
import DoubleRange from "./DoubleRange";
import FilterTags from "./FilterTags";
import FilterDropdown from "./FilterDropdown";

const Filter = () => {

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
                <div className="flex gap-6 flex-wrap">
                    <div className="py-2 px-4 rounded-full text-xs font-medium bg-bwcgray h-max outline-none cursor-pointer relative">
                        <p>TEST</p>
                        <FilterDropdown />
                    </div>
                    <select name="cat" className="py-2 px-4 rounded-full text-xs font-medium bg-bwcgray h-max outline-none cursor-pointer" onChange={handleFilterChange}>
                        <option>Category</option>
                        <option value="cat1">Category 1</option>
                        <option value="cat2">Category 2</option>
                    </select>
                    <select name="brand" className="py-2 px-4 rounded-full text-xs font-medium bg-bwcgray h-max outline-none cursor-pointer" onChange={handleFilterChange}>
                        <option>Brand</option>
                        <option value="type1">Brand 1</option>
                        <option value="type2">Brand 2</option>
                    </select>
                    <div className="flex gap-2 items-center bg-bwcgray rounded-full px-4 h-max py-2">
                        <input type="checkbox" name="stock" className="accent-bwcblue" checked={params.has("stock")} onChange={handleFilterChange} />
                        <label htmlFor="stock" className="text-xs font-medium">In Stock</label>
                    </div>
                    <div className="flex gap-2 items-center bg-bwcgray rounded-full px-4 h-max py-2">
                        <input type="checkbox" name="sale" className="accent-bwcred" checked={params.has("sale")} onChange={handleFilterChange} />
                        <label htmlFor="sale" className="text-xs font-medium">On Sale</label>
                    </div>
                    <DoubleRange title={"Price"} measurement={"£"} />
                    <DoubleRange title={"Height"} measurement={"mm"} />
                    <DoubleRange title={"Width"} measurement={"mm"} />
                    <DoubleRange title={"Depth"} measurement={"mm"} />
                    <DoubleRange title={"Weight"} measurement={"kg"} />
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