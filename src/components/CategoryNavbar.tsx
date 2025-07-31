"use client"

import Link from "next/link";
import SubcategoryMenu from "./SubcategoryMenu";
import { useState } from "react";

const CategoryNavbar = () => {

    const [tabId, setTabId] = useState(0);

    const highlighted = "w-1/12 h-full px-2 flex items-center justify-center text-center bg-white text-blue-700 leading-tight z-50";
    const notHighlighted = "w-1/12 h-full px-2 flex items-center justify-center text-center leading-tight";

    return (
        <div className="relative" onMouseLeave={()=>setTabId(0)}>
            {/* BIGGER SCREENS */}
            <div className="hidden xl:flex h-16 bg-blue-700 font-medium text-white">
                <Link href="/boilers" className={tabId === 1 ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(1)}>
                    <div className="inline text-ellipsis overflow-hidden">Boilers</div>
                </Link>
                <Link
                    href="/spares" 
                    className="w-1/12 h-full px-2 flex items-center justify-center text-center leading-tight hover:text-blue-700 hover:bg-white" 
                    onMouseEnter={()=>setTabId(0)}
                >
                    <div className="inline text-ellipsis overflow-hidden">Boiler Spares</div>
                </Link>
                <Link href="/flues"  className={tabId === 2  ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(2) }>
                    <div className="inline text-ellipsis overflow-hidden">Flues & Accessories</div>
                </Link>
                <Link href="/heating"  className={tabId === 3  ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(3) }>
                    <div className="inline text-ellipsis overflow-hidden">Heating</div>
                </Link>
                <Link href="/radiators" className={tabId === 4  ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(4) }>
                    <div className="inline text-ellipsis overflow-hidden">Radiators</div>
                </Link>
                <Link href="/metal" className={tabId === 5  ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(5) }>
                    <div className="inline text-ellipsis overflow-hidden">Metal Plumbing</div>
                </Link>
                <Link href="/plastic" className={tabId === 6  ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(6) }>
                    <div className="inline text-ellipsis overflow-hidden">Plastic Plumbing</div>
                </Link>
                <Link href="/bathroom" className={tabId === 7  ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(7) }>
                    <div className="inline text-ellipsis overflow-hidden">Bathroom & Kitchen</div>
                </Link>
                <Link href="/essentials" className={tabId === 8 ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(8)}>
                    <div className="inline text-ellipsis overflow-hidden">Essentials</div>
                </Link>
                <Link href="/renewables" className={tabId === 9 ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(9)}>
                    <div className="inline text-ellipsis overflow-hidden">Renewables</div>
                </Link>
                <Link 
                    href="/refurbished" 
                    className="w-1/12 h-full px-2 flex items-center justify-center text-center leading-tight hover:text-blue-700 hover:bg-white" 
                    onMouseEnter={()=>setTabId(0)}
                >
                    <div className="inline text-ellipsis overflow-hidden">Refurbished</div>
                </Link>
                <Link 
                    href="/used" 
                    className="w-1/12 h-full px-2 flex items-center justify-center text-center leading-tight hover:text-blue-700 hover:bg-white" 
                    onMouseEnter={()=>setTabId(0)}
                >
                    <div className="inline text-ellipsis overflow-hidden">Used & Tested</div>
                </Link>
            </div>
            {tabId > 0 && (<SubcategoryMenu tabId={tabId}/>)}
        </div>
    );
};

export default CategoryNavbar;