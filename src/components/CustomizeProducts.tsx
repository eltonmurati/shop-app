"use client"

import { postgres } from "@/app/lib/postgresClient";
import { Json } from "@/app/lib/types";
import Link from "next/link";

const CustomizeProducts = ({variants, id}:{variants:Json | null, id:number | null}) => {

    const selected = "ring-1 ring-bwcblue text-bwcblue rounded-md py-1 px-4 text-sm cursor-pointer";
    const variant = "ring-1 ring-bwcblue text-white bg-bwcblue rounded-md py-1 px-4 text-sm cursor-pointer";
    const disabled = "ring-1 ring-bwcblue_disabled text-white bg-bwcblue_disabled rounded-md py-1 px-4 text-sm cursor-not-allowed";

    //async function getProduct(id: number) {
    //    let { data: product, error } = await postgres.from('product').select('*').eq('id', id);
    //    if (product) { return product[0]; }
    //    else { return null; }
    //}

    return (
        <>
            {variants && (
                <>
                    {Object.entries(variants).map(([k,v],i)=>(
                        <div className="flex flex-col gap-6" key={i}>
                            <h4 className="font-medium">Choose a {k.toLowerCase()}</h4>
                            <ul className="flex items-center gap-3 flex-wrap">
                                {Object.entries(v).map(([kk,vv],j)=>(
                                    <Link href={`/product/${vv}`} className={vv === id ? selected : variant} key={j}>
                                        {kk}
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    ))}
                </>
            )}

            {/*<h4 className="font-medium">Choose a size</h4>
            <ul className="flex items-center gap-3">
                <li className="ring-1 ring-bwcred text-bwcred rounded-md py-1 px-4 text-sm cursor-pointer">
                    826
                </li>
                <li className="ring-1 ring-bwcred text-white bg-bwcred rounded-md py-1 px-4 text-sm cursor-pointer">
                    832
                </li>
                <li className="ring-1 ring-bwcred_disabled text-white bg-bwcred_disabled rounded-md py-1 px-4 text-sm cursor-not-allowed">
                    840
                </li>
            </ul>
            <h4 className="font-medium">Choose a colour</h4>
            <ul className="flex items-center gap-3">
                <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500">
                    <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
                </li>
                <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500"></li>
                <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-green-500">
                    <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
                </li>
            </ul>*/}
        </>
    );
};

export default CustomizeProducts;