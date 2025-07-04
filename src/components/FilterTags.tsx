"use client";

import { useRouter, useSearchParams } from "next/navigation";
import FilterTagValue from "./FilterTagValue";

const FilterTags = () => {

    const searchParams = useSearchParams();
    const {replace} = useRouter();
    const params = new URLSearchParams(searchParams);

    let tags: string[] = [];
    const createTags = (value:string, key:string) => {
        if (!(["stock","sale", "sort", "minprice", "maxprice", "page"].includes(key))) {
            tags.push(key + ": " + value);
        }
    }
    params.forEach(createTags);

    const renameTag = (tag:string) => {
        switch (tag) {
            case "cat":
                return "Category";
            case "brand":
                return "Brand";
            case "search":
                return "Search";
            default:
                return tag;
        }
    }

    const removeFilter = (tag:string) => {
        const name = tag.split(": ")[0];
        const value = tag.split(": ")[1];
        params.delete(name, value);
        params.delete("page");
        replace(`shop?${params}`);
    }

    return (
        <>
            {tags.length > 0 && (
                <div className="flex flex-wrap gap-3">
                    {tags.map((tag)=>(
                        <div className="rounded-full pl-2 pr-1 h-6 ring-1 ring-gray-400 text-xs flex gap-1 items-center text-gray-400" key={tag}>
                            <div className="flex gap-1">
                                <p className="font-medium">{renameTag(tag.split(": ")[0])}:</p>
                                <FilterTagValue tag={tag} />
                            </div>
                            <button className="text-red-200 hover:text-red-500 transition-colors linear duration-200" onClick={()=>removeFilter(tag)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                    <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default FilterTags;