"use client"

import { postgres } from "@/app/lib/postgresClient";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const DoubleRange = ({title, measurement, column}:{title:string; measurement:string; column:"price"|"height"|"depth"|"width"|"weight";}) => {

    const [open, setOpen] = useState(false);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(1);
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [minText, setMinText] = useState("");
    const [maxText, setMaxText] = useState("");

    const searchParams = useSearchParams();
    const {replace} = useRouter();
    const params = new URLSearchParams(searchParams);

    // (min - minValue) / (maxValue - minValue) * 100
    // 100 - ((max - minValue) / (maxValue - minValue) * 100)

    useEffect(()=>{
        const getValues = async () => {
            await postgres.from("product").select("*").order(column, {ascending: false}).then(({data: products})=>{
                if (products && products.length > 0) {
                    if (products[0][column] !== products[products.length - 1][column]) {
                        setMinValue(products[products.length - 1][column]);
                        setMaxValue(products[0][column]);
                        if (params.has("min"+column)) { 
                            setMin(Number(params.get("min"+column)) || products[products.length - 1][column]);
                            setMinText(params.get("min"+column) || "");
                        } else { 
                            setMin(products[products.length - 1][column]);
                            setMinText(products[products.length - 1][column].toString());
                        }
                        if (params.has("max"+column)) { 
                            setMax(Number(params.get("max"+column)) || products[0][column]);
                            setMaxText(params.get("max"+column) || "");
                        } else { 
                            setMax(products[0][column]);
                            setMaxText(products[0][column].toString());
                        }
                    } else { setError(true); }
                } else { setError(true); }
                setLoading(false);
            });
        }
        getValues();
    },[searchParams]);

    const handleSlide = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name,valueAsNumber} = e.target;
        if (name === "min") { 
            if (valueAsNumber > max) { 
                setMin(max);
                setMinText(max.toString());
            } else { 
                setMin(valueAsNumber);
                setMinText(valueAsNumber.toString());
            }
        } else { 
            if (valueAsNumber < min) { 
                setMax(min);
                setMaxText(min.toString());
            } else { 
                setMax(valueAsNumber);
                setMaxText(valueAsNumber.toString());
            }
        }
    }

    const handleRange = (e:React.PointerEvent<HTMLInputElement> | React.TouchEvent<HTMLInputElement>) => {
        const {name,value} = e.currentTarget;
        if (name === "min") {
            if (value !== minValue.toString() && value !== "") { 
                params.set(name+column, value); 
                setMin(Number(value));
            } else { 
                params.delete(name+column); 
                setMin(minValue);
            }
        } else {
            if (value !== maxValue.toString() && value !== "") { 
                params.set(name+column, value); 
                setMax(Number(value));
            } else { 
                params.delete(name+column); 
                setMax(maxValue);
            }
        }
        replace(`shop?${params}`);
    }

    const handleTextEnter = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            const {name,value} = e.currentTarget;
            console.log(value);
            if (name === "min") {
                if (value !== minValue.toString() && value !== "") { 
                    params.set(name+column, value); 
                    setMin(Number(value) || minValue);
                } else { 
                    params.delete(name+column); 
                    setMin(minValue);
                    setMinText(minValue.toString());
                }
            } else {
                if (value !== maxValue.toString() && value !== "") { 
                    params.set(name+column, value); 
                    setMax(Number(value) || maxValue);
                } else { 
                    params.delete(name+column);
                    setMax(maxValue);
                    setMaxText(maxValue.toString());
                }
            }
            replace(`shop?${params}`);
        }
    }

    if (loading) { return(null); }
    if (error) { return(null); }

    return (
        <div className="flex flex-col gap-3 bg-bwcgray rounded-2xl py-2 px-2 h-max cursor-pointer items-center" onClick={()=>setOpen(!open)}>
            {open ? (
                <p className="text-xs font-medium px-2 w-max relative">
                    {title}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 absolute top-0 -right-4">
                        <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                    </svg>
                </p>
            ) : (
                <div className="flex">
                    <p className="text-xs font-medium px-2 w-max relative">{title}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                        <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                    </svg>
                </div>
            )}
            {open && (
                <div className="flex flex-col gap-4 cursor-default" onClick={(e)=>e.stopPropagation()}>
                    <div className="w-full bg-white h-1.5 relative rounded-full">
                        {/* <span className={`h-full absolute bg-bwcblue max-w-full`} /> */}
                        <input type="range" name="min" min={minValue} max={maxValue} value={min} onChange={handleSlide} onPointerUp={handleRange} onTouchEnd={handleRange} 
                            className="absolute w-full pr-[21px] top-1/2 transform -translate-y-1/2 pointer-events-none appearance-none bg-transparent 
                                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full 
                                [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:ring-1
                                [&::-webkit-slider-thumb]:ring-gray-400 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:ring-1 [&::-moz-range-thumb]:ring-gray-400 
                                [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white 
                                [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:cursor-pointer
                            " 
                        />
                        <input type="range" name="max" min={minValue} max={maxValue} value={max} onChange={handleSlide} onPointerUp={handleRange} onTouchEnd={handleRange} 
                            className="absolute w-full pl-[21px] top-1/2 transform -translate-y-1/2 pointer-events-none appearance-none bg-transparent
                                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full 
                                [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:ring-1
                                [&::-webkit-slider-thumb]:ring-gray-400 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:ring-1 [&::-moz-range-thumb]:ring-gray-400 
                                [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white 
                                [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:cursor-pointer
                            " 
                        />
                    </div>
                    <div className="flex justify-between gap-2">
                        <div className="flex w-20">
                            <div className="bg-bwcgray rounded-l-full py-1 pl-2 pr-2 text-xs font-medium ring-1 ring-gray-400">{measurement}</div>
                            <input type="text" placeholder="min" name="min" value={minText} className="w-full rounded-r-full outline-none text-xs px-1 ring-1 ring-gray-400" 
                                onChange={(e)=>setMinText(e.target.value)} onKeyDown={handleTextEnter}
                            />
                        </div>
                        <div className="flex w-20">
                            <div className="bg-bwcgray rounded-l-full py-1 pl-2 pr-2 text-xs font-medium ring-1 ring-gray-400">{measurement}</div>
                            <input type="text" placeholder="max" name="max" value={maxText} className="w-full rounded-r-full outline-none text-xs px-1 ring-1 ring-gray-400" 
                                onChange={(e)=>setMaxText(e.target.value)} onKeyDown={handleTextEnter}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DoubleRange