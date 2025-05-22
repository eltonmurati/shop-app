import { postgres } from "@/lib/postgresClient";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const FilterDropdown = ({table, name, open, onClose}:{table:"category"|"brand"; name:string; open: boolean; onClose: ()=>void;}) => {
    
    const [entries, setEntries] = useState([] as { id: number; name: string; }[]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const searchParams = useSearchParams();
    const {replace} = useRouter();
    const params = new URLSearchParams(searchParams);

    const handleClick = (value:string) => {
        if (!params.has(name, value)) { params.append(name, value); }
        replace(`/shop?${params}`);
    }

    const getTable = async (search?:string) => {
        setLoading(true);
        setError(false);
        let postgresQuery = postgres.from(table).select("*");
        if (search) { postgresQuery = postgresQuery.ilike("name", `%${search}%`); }
        postgresQuery = postgresQuery.order("name", { ascending: true });
        await postgresQuery.then(({data: tableEntries})=>{
            if (tableEntries && tableEntries.length > 0) { setEntries(tableEntries); }
            else { setError(true); }
            setLoading(false);
        });
    }

    useEffect(()=>{
        getTable();
    });

    if (!open) { return null; }

    if (loading) {
        return(
            <>
                <div className="fixed top-0 left-0 right-0 bottom-0 z-20 hover:cursor-default" onClick={onClose}></div>
                <div 
                    className="absolute top-10 left-0 bg-white z-20 rounded-md flex flex-col whitespace-nowrap shadow-[0_3px_10px_rgb(0,0,0,0.2)] max-h-96 overflow-y-auto font-normal 
                        min-w-48 overflow-x-hidden max-w-96" 
                    onClick={(e)=>(e.stopPropagation())}
                >
                    <div className="px-2 pb-1 pt-2 rounded-t-md">
                        <input type="text" placeholder="Search" className="gap-4 bg-gray-100 p-2 rounded-md outline-none w-full" onChange={(e)=>getTable(e.target.value)}/>
                    </div>
                    <div className="px-4 pt-1 pb-2 rounded-b-md text-start">
                        Loading...
                    </div>
                </div>
            </>
        );
    }

    if (error) {
        return(
            <>
                <div className="fixed top-0 left-0 right-0 bottom-0 z-20 hover:cursor-default" onClick={onClose}></div>
                <div 
                    className="absolute top-10 left-0 bg-white z-20 rounded-md flex flex-col whitespace-nowrap shadow-[0_3px_10px_rgb(0,0,0,0.2)] max-h-96 overflow-y-auto font-normal 
                        min-w-48 overflow-x-hidden max-w-96" 
                    onClick={(e)=>(e.stopPropagation())}
                >
                    <div className="px-2 pb-1 pt-2 rounded-t-md">
                        <input type="text" placeholder="Search" className="gap-4 bg-gray-100 p-2 rounded-md outline-none w-full" onChange={(e)=>getTable(e.target.value)}/>
                    </div>
                    <div className="px-4 pt-1 pb-2 rounded-b-md text-start">
                        No results found
                    </div>
                </div>
            </>
        );
    }

    return(
        <>
            <div className="fixed top-0 left-0 right-0 bottom-0 z-20 hover:cursor-default" onClick={onClose}></div>
            <div 
                className="absolute top-10 left-0 bg-white z-20 rounded-md flex flex-col whitespace-nowrap shadow-[0_3px_10px_rgb(0,0,0,0.2)] max-h-96 overflow-y-auto font-normal min-w-48
                    overflow-x-hidden max-w-96" 
            >
                <div className="px-2 pb-1 pt-2 rounded-t-md" onClick={(e)=>(e.stopPropagation())}>
                    <input type="text" placeholder="Search" className="gap-4 bg-gray-100 p-2 rounded-md outline-none w-full" onChange={(e)=>getTable(e.target.value)}/>
                </div>
                {entries.map((entry, i)=>{
                    if (i === entries.length - 1) {
                        return(
                            <button className="px-4 pt-1 pb-2 rounded-b-md hover:bg-gray-100 text-start" key={i} onClick={()=>handleClick(entry.id.toString())}>
                                <p className="truncate">{entry.name}</p>
                            </button>
                        );
                    } else { 
                        return(
                            <button className="px-4 py-1 hover:bg-gray-100 text-start" key={i} onClick={()=>handleClick(entry.id.toString())}>
                                <p className="truncate">{entry.name}</p>
                            </button>
                        );
                    }
                })}
            </div>
        </>
    );
}

export default FilterDropdown;