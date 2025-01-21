"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import FilterTagValue from "./FilterTagValue";
import { Suspense } from "react";

const FilterTags = () => {

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const {replace} = useRouter();
    const params = new URLSearchParams(searchParams);

    let tags: string[] = [];
    const createTags = (value:string, key:string) => {
        if (!(["stock","sale", "sort"].includes(key))) {
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
            default:
                return tag;
        }
    }

    const removeFilter = (tag:string) => {
        const name = tag.split(": ")[0];
        const value = tag.split(": ")[1];
        params.delete(name, value);
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <>
            {tags.length > 0 && (
                <div className="flex flex-wrap gap-3">
                    {tags.map((tag)=>(
                        <div className="rounded-full px-2 h-6 ring-1 ring-gray-400 text-xs text-gray-500 flex gap-1 items-center text-gray-400" key={tag}>
                            <div className="flex gap-1">
                                <p className="font-semibold">{renameTag(tag.split(": ")[0])}:</p>
                                <FilterTagValue tag={tag} />
                            </div>
                            <button className="text-bwcred" onClick={()=>removeFilter(tag)}>X</button>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default FilterTags;