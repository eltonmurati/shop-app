"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

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
                <div className="flex flex-wrap gap-4">
                    {tags.map((tag,i)=>(
                        <div className="rounded-full px-3 h-6 ring-1 ring-gray-400 text-xs text-gray-500 flex gap-2 items-center text-gray-400" key={i}>
                            <div className="flex gap-1">
                                <p className="font-semibold">{renameTag(tag.split(": ")[0])}:</p>
                                <p className="">{tag.split(": ")[1]}</p>
                            </div>
                            <button className="text-bwcred font-semibold text-md" onClick={()=>removeFilter(tag)}>X</button>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default FilterTags;