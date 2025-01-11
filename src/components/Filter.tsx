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
        params.set(name, value);
        replace(`${pathname}?${params.toString()}`)
    }

    return (
        <div className="py-8 flex justify-between">
            <div className="flex gap-6 flex-wrap">
                <select name="cat" id="cat" className="py-2 px-4 rounded-2xl text-xs font-medium bg-bwcgray" onChange={handleFilterChange}>
                    <option>Category</option>
                    <option value="cat1">Category 1</option>
                    <option value="cat2">Category 2</option>
                </select>
                <select name="brand" id="brand" className="py-2 px-4 rounded-2xl text-xs font-medium bg-bwcgray" onChange={handleFilterChange}>
                    <option>Brand</option>
                    <option value="type1">Brand 1</option>
                    <option value="type2">Brand 2</option>
                </select>
                <input type="text" name="min" placeholder="min price" className="text-xs rounded-2xl pl-2 w-24 py-2 ring-1 ring-gray-400"/>
                <input type="text" name="max" placeholder="max price" className="text-xs rounded-2xl pl-2 w-24 py-2 ring-1 ring-gray-400"/>
                <div className="flex gap-2 items-center bg-bwcgray rounded-full px-4">
                    <input type="checkbox" id="stock" name="stock" value="true" className="" />
                    <label htmlFor="stock" className="text-xs font-medium">In Stock</label>
                </div>
                <div className="flex gap-2 items-center bg-bwcgray rounded-full px-4">
                    <input type="checkbox" id="sale" name="sale" value="true" className="" />
                    <label htmlFor="sale" className="text-xs font-medium">On Sale</label>
                </div>
            </div>
            <div className="">
                <select name="sort" id="sort" className="py-2 px-4 rounded-2xl text-xs font-medium bg-bwcgray" onChange={handleFilterChange}>
                    <option>Sort By</option>
                    <option value="asc price">Price (low to high)</option>
                    <option value="desc price">Price (high to low)</option>
                    <option value="asc lastUpdated">Newest</option>
                    <option value="desc lastUpdated">Oldest</option>
                </select>
            </div>
        </div>
    );
}

export default Filter;