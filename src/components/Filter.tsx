"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

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
                <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-bwcgray" onChange={handleFilterChange}>
                    <option>Type</option>
                    <option value="type1">Type 1</option>
                    <option value="type2">Type 2</option>
                </select>
                <input type="text" name="min" placeholder="min price" className="text-xs rounded-2xl pl-2 w-24 py-2 ring-1 ring-gray-400"/>
                <input type="text" name="max" placeholder="max price" className="text-xs rounded-2xl pl-2 w-24 py-2 ring-1 ring-gray-400"/>
                <select name="" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-bwcgray" onChange={handleFilterChange}>
                    <option>Size</option>
                    <option value="">Size</option>
                </select>
                <select name="" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-bwcgray" onChange={handleFilterChange}>
                    <option>Colour</option>
                    <option value="">Colour</option>
                </select>
                <select name="" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-bwcgray" onChange={handleFilterChange}>
                    <option>Category</option>
                    <option value="">Category</option>
                </select>
                <select name="" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-bwcgray" onChange={handleFilterChange}>
                    <option>All Filters</option>
                    <option value="">All Filters</option>
                </select>
            </div>
            <div className="">
            <select name="" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-bwcgray" onChange={handleFilterChange}>
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