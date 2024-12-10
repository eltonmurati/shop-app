"use client"

import Link from "next/link";
import SubcategoryMenu from "./SubcategoryMenu";
import { useState } from "react";

const CategoryNavbar = () => {

    const [tabId, setTabId] = useState(0);

    const highlighted = "w-full h-full px-1 flex items-center justify-center text-center bg-white text-bwcred leading-tight z-20";
    const notHighlighted = "w-full h-full px-1 flex items-center justify-center text-center leading-tight";

    return (
        <div className="relative" onMouseLeave={()=>setTabId(0)}>
            {/* BIGGER SCREENS */}
            <div className="hidden xl:flex h-16 bg-bwcred font-semibold text-white">
                <Link href="/" className={tabId === 1 ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(1)}>Boilers</Link>
                <Link href="/" className={tabId === 2 ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(2)}>Flues & Accessories</Link>
                <Link href="/" className={tabId === 3 ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(3)}>Heating</Link>
                <Link href="/" className={tabId === 4 ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(4)}>Radiators</Link>
                <Link href="/" className={tabId === 5 ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(5)}>Metal Plumbing</Link>
                <Link href="/" className={tabId === 6 ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(6)}>Plastic Plumbing</Link>
                <Link href="/" className={tabId === 7 ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(7)}>Packaged Plumbing</Link>
                <Link href="/" className={tabId === 8 ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(8)}>Bathroom & Kitchen</Link>
                <Link href="/" className={tabId === 9 ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(9)}>Fires</Link>
                <Link href="/" className={tabId === 10 ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(10)}>Essentials</Link>
                <Link href="/" className={tabId === 11 ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(11)}>Renewables</Link>
                <Link href="/" className="w-full h-full px-1 flex items-center justify-center text-center leading-tight hover:bg-white hover:text-bwcred" onMouseEnter={()=>setTabId(0)}>Clearance</Link>
            </div>
            {tabId > 0 && (<SubcategoryMenu tabId={tabId}/>)}
        </div>
    );
};

export default CategoryNavbar;