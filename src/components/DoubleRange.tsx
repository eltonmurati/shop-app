"use client"

import { postgres } from "@/app/lib/postgresClient";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const DoubleRange = ({title, measurement, column}:{title:string; measurement:string; column:"price"|"height"|"depth"|"width"|"weight";}) => {

    // https://www.youtube.com/watch?v=ujncLU2bt4k

    const [open, setOpen] = useState(false);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(1400);
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(100);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const searchParams = useSearchParams();
    const {replace} = useRouter();
    const params = new URLSearchParams(searchParams);

    useEffect(()=>{
        const getValues = async () => {
            await postgres.from("product").select("*").order(column, {ascending: false}).then(({data: products})=>{
                if (products && products.length > 0) {
                    setMinValue(products[products.length - 1][column]);
                    setMaxValue(products[0][column]);
                    setMin(products[products.length - 1][column]);
                    setMax(products[0][column]);
                } else { setError(true); }
                setLoading(false);
            });
        }
        getValues();
    },[]);

    if (loading) { return(<div className="bg-bwcgray rounded-full text-xs font-medium px-4 py-2 h-max">{title}</div>); }
    if (error) { return(<div className="bg-bwcgray rounded-full text-xs font-medium px-4 py-2 h-max">{title}</div>); }

    return (
        <div className="flex flex-col gap-3 bg-bwcgray rounded-2xl py-2 px-2 h-max cursor-pointer" onClick={()=>setOpen(!open)}>
            <h3 className="text-xs font-medium text-center px-2">{title}</h3>
            {open && (
                <div className="flex flex-col gap-4" onClick={(e)=>e.stopPropagation()}>
                    <div className="w-full bg-white h-1.5 relative rounded-full">
                        <span className="h-full absolute bg-orange-500"></span>
                        <input type="range" name="min" min={minValue} max={maxValue} value={min} onChange={(e)=>setMin(e.target.valueAsNumber)} onMouseUp={()=>console.log("DONE!")}
                            className="absolute w-full top-1/2 transform -translate-y-1/2 pointer-events-none appearance-none bg-transparent [&::-webkit-slider-thumb]:appearance-none 
                                [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white 
                                [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:ring-1 [&::-webkit-slider-thumb]:ring-gray-400
                                [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:ring-1 [&::-moz-range-thumb]:ring-gray-400 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 
                                [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:cursor-pointer
                            " 
                        />
                        <input type="range" name="max" min={minValue} max={maxValue} value={max} onChange={(e)=>setMin(e.target.valueAsNumber)} onMouseUp={()=>console.log("DONE!")}
                            className="absolute w-full top-1/2 transform -translate-y-1/2 pointer-events-none appearance-none bg-transparent [&::-webkit-slider-thumb]:appearance-none 
                                [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white 
                                [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:ring-1 [&::-webkit-slider-thumb]:ring-gray-400
                                [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:ring-1 [&::-moz-range-thumb]:ring-gray-400 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 
                                [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:cursor-pointer
                            " 
                        />
                    </div>
                    <div className="flex justify-between gap-2">
                        <div className="flex w-20">
                            <div className="bg-bwcgray rounded-l-full py-1 pl-2 pr-2 text-xs font-medium ring-1 ring-gray-400">{measurement}</div>
                            <input type="text" placeholder="min" name="min" className="w-full rounded-r-full outline-none text-xs px-1 ring-1 ring-gray-400" />
                        </div>
                        <div className="flex w-20">
                            <div className="bg-bwcgray rounded-l-full py-1 pl-2 pr-2 text-xs font-medium ring-1 ring-gray-400">{measurement}</div>
                            <input type="text" placeholder="max" name="max" className="w-full rounded-r-full outline-none text-xs px-1 ring-1 ring-gray-400" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DoubleRange