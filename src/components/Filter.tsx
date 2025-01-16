"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import DoubleRange from "./DoubleRange";

const Filter = () => {

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const {replace} = useRouter();

    const handleFilterChange = (e:React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const {name,value} = e.target;
        const params = new URLSearchParams(searchParams);

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

        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="py-8 flex justify-between">
            <div className="flex gap-6 flex-wrap">
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
                    <input type="checkbox" name="stock" onChange={handleFilterChange} />
                    <label htmlFor="stock" className="text-xs font-medium">In Stock</label>
                </div>
                <div className="flex gap-2 items-center bg-bwcgray rounded-full px-4 h-max py-2">
                    <input type="checkbox" name="sale" onChange={handleFilterChange} />
                    <label htmlFor="sale" className="text-xs font-medium">On Sale</label>
                </div>
                <DoubleRange title={"Price"} measurement={"£"} />
                <DoubleRange title={"Height"} measurement={"mm"} />
                <DoubleRange title={"Width"} measurement={"mm"} />
                <DoubleRange title={"Depth"} measurement={"mm"} />
                <DoubleRange title={"Weight"} measurement={"kg"} />
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
    );
}

export default Filter;