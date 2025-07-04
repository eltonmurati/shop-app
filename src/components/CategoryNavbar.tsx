"use client"

import Link from "next/link";
import SubcategoryMenu from "./SubcategoryMenu";
import { useState } from "react";

const CategoryNavbar = () => {

    const [tabId, setTabId] = useState(0);

    const highlighted = "w-[7.14285714286%] h-full px-2 flex items-center justify-center text-center bg-white text-blue-700 leading-tight z-50 transition-colors linear duration-200";
    const notHighlighted = "w-[7.14285714286%] h-full px-2 flex items-center justify-center text-center leading-tight transition-colors linear duration-200";

    return (
        <div className="relative" onMouseLeave={()=>setTabId(0)}>
            {/* BIGGER SCREENS */}
            <div className="hidden xl:flex h-16 bg-blue-700 font-medium text-white">
                <Link href="/shop?cat=1&stock=true" className={tabId === 1 ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(1)}>
                    <div className="inline text-ellipsis overflow-hidden">Boilers</div>
                </Link>
                <Link
                    href="/shop?cat=101&stock=true" 
                    className="w-[7.14285714286%] h-full px-2 flex items-center justify-center text-center leading-tight hover:text-blue-700 hover:bg-white transition-colors linear duration-200" 
                    onMouseEnter={()=>setTabId(0)}
                >
                    <div className="inline text-ellipsis overflow-hidden">Boiler Spares</div>
                </Link>
                <Link href="/shop?cat=6&stock=true"  className={tabId === 2  ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(2) }>
                    <div className="inline text-ellipsis overflow-hidden">Flues & Accessories</div>
                </Link>
                <Link href="/shop?cat=9&stock=true"  className={tabId === 3  ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(3) }>
                    <div className="inline text-ellipsis overflow-hidden">Heating</div>
                </Link>
                <Link href="/shop?cat=99&stock=true" className={tabId === 4  ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(4) }>
                    <div className="inline text-ellipsis overflow-hidden">Radiators</div>
                </Link>
                <Link href="/shop?cat=29&stock=true" className={tabId === 5  ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(5) }>
                    <div className="inline text-ellipsis overflow-hidden">Metal Plumbing</div>
                </Link>
                <Link href="/shop?cat=41&stock=true" className={tabId === 6  ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(6) }>
                    <div className="inline text-ellipsis overflow-hidden">Plastic Plumbing</div>
                </Link>
                <Link href="/shop?cat=47&stock=true" className={tabId === 7  ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(7) }>
                    <div className="inline text-ellipsis overflow-hidden">Packaged Plumbing</div>
                </Link>
                <Link href="/shop?cat=58&stock=true" className={tabId === 8  ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(8) }>
                    <div className="inline text-ellipsis overflow-hidden">Bathroom & Kitchen</div>
                </Link>
                <Link href="/shop?cat=72&stock=true" className={tabId === 9  ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(9) }>
                    <div className="inline text-ellipsis overflow-hidden">Fires</div>
                </Link>
                <Link href="/shop?cat=77&stock=true" className={tabId === 10 ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(10)}>
                    <div className="inline text-ellipsis overflow-hidden">Essentials</div>
                </Link>
                <Link href="/shop?cat=87&stock=true" className={tabId === 11 ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(11)}>
                    <div className="inline text-ellipsis overflow-hidden">Renewables</div>
                </Link>
                <Link 
                    href="/shop?cat=100&stock=true" 
                    className="w-[7.14285714286%] h-full px-2 flex items-center justify-center text-center leading-tight hover:text-blue-700 hover:bg-white transition-colors linear duration-200" 
                    onMouseEnter={()=>setTabId(0)}
                >
                    <div className="inline text-ellipsis overflow-hidden">Refurbished</div>
                </Link>
                <Link 
                    href="/shop?cat=104&stock=true" 
                    className="w-[7.14285714286%] h-full px-2 flex items-center justify-center text-center leading-tight hover:text-blue-700 hover:bg-white transition-colors linear duration-200" 
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