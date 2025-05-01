"use client"

import Link from "next/link";
import SubcategoryMenu from "./SubcategoryMenu";
import { useState } from "react";

const CategoryNavbar = () => {

    const [tabId, setTabId] = useState(0);
    const [saleHovered, setSaleHovered] = useState(false);

    const sale = "rounded-md px-2 py-1 bg-white text-blue-700 font-semibold";
    const saleHover = "rounded-md px-2 py-1 bg-blue-700";

    const highlighted = "w-full h-full px-2 flex items-center justify-center text-center bg-white text-blue-700 leading-tight z-20";
    const notHighlighted = "w-full h-full px-2 flex items-center justify-center text-center leading-tight";

    return (
        <div className="relative" onMouseLeave={()=>setTabId(0)}>
            {/* BIGGER SCREENS */}
            <div className="hidden xl:flex h-16 bg-blue-700 font-medium text-white">
                <Link href="/shop?cat=1&stock=true" className={tabId === 1 ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(1)}>Boilers</Link>
                <Link
                    href="/shop?cat=101&stock=true" 
                    className="w-full h-full px-2 flex items-center justify-center text-center leading-tight hover:text-blue-700 hover:bg-white" 
                    onMouseEnter={()=>setTabId(0)}
                >
                    Boiler Spares
                </Link>
                <Link href="/shop?cat=6&stock=true"  className={tabId === 2  ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(2) }>Flues & Accessories</Link>
                <Link href="/shop?cat=9&stock=true"  className={tabId === 3  ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(3) }>Heating</Link>
                <Link href="/shop?cat=99&stock=true" className={tabId === 4  ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(4) }>Radiators</Link>
                <Link href="/shop?cat=29&stock=true" className={tabId === 5  ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(5) }>Metal Plumbing</Link>
                <Link href="/shop?cat=41&stock=true" className={tabId === 6  ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(6) }>Plastic Plumbing</Link>
                <Link href="/shop?cat=47&stock=true" className={tabId === 7  ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(7) }>Packaged Plumbing</Link>
                <Link href="/shop?cat=58&stock=true" className={tabId === 8  ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(8) }>Bathroom & Kitchen</Link>
                <Link href="/shop?cat=72&stock=true" className={tabId === 9  ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(9) }>Fires</Link>
                <Link href="/shop?cat=77&stock=true" className={tabId === 10 ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(10)}>Essentials</Link>
                <Link href="/shop?cat=87&stock=true" className={tabId === 11 ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(11)}>Renewables</Link>
                <Link 
                    href="/shop?cat=100&stock=true" 
                    className="w-full h-full px-2 flex items-center justify-center text-center leading-tight hover:text-blue-700 hover:bg-white" 
                    onMouseEnter={()=>setTabId(0)}
                >
                    Refurbished
                </Link>
                <Link 
                    href="/shop?sale=true&stock=true" 
                    className="w-full h-full px-2 flex items-center justify-center text-center leading-tight hover:bg-white tracking-wider font-medium" 
                    onMouseEnter={()=>{setTabId(0); setSaleHovered(true);}}
                    onMouseLeave={()=>setSaleHovered(false)}
                >
                    <div className={saleHovered ? saleHover : sale}>SALE</div>
                </Link>
            </div>
            {tabId > 0 && (<SubcategoryMenu tabId={tabId}/>)}
        </div>
    );
};

export default CategoryNavbar;