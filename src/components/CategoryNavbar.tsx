"use client"

import Link from "next/link";
import SubcategoryMenu from "./SubcategoryMenu";
import { useState } from "react";

const CategoryNavbar = () => {

    const [tabId, setTabId] = useState(0);

    const highlighted = "w-full h-full px-1 flex items-center justify-center text-center bg-white text-bwcblue leading-tight z-20";
    const notHighlighted = "w-full h-full px-1 flex items-center justify-center text-center leading-tight";

    return (
        <div className="relative" onMouseLeave={()=>setTabId(0)}>
            {/* BIGGER SCREENS */}
            <div className="hidden xl:flex h-16 bg-bwcblue font-medium text-white">
                <Link href="/list?cat=1" className={tabId === 1 ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(1)}>Boilers</Link>
                <Link href="/list?cat=6" className={tabId === 2 ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(2)}>Flues & Accessories</Link>
                <Link href="/list?cat=9" className={tabId === 3 ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(3)}>Heating</Link>
                <Link href="/list?cat=99" className={tabId === 4 ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(4)}>Radiators</Link>
                <Link href="/list?cat=29" className={tabId === 5 ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(5)}>Metal Plumbing</Link>
                <Link href="/list?cat=41" className={tabId === 6 ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(6)}>Plastic Plumbing</Link>
                <Link href="/list?cat=47" className={tabId === 7 ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(7)}>Packaged Plumbing</Link>
                <Link href="/list?cat=58" className={tabId === 8 ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(8)}>Bathroom & Kitchen</Link>
                <Link href="/list?cat=72" className={tabId === 9 ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(9)}>Fires</Link>
                <Link href="/list?cat=77" className={tabId === 10 ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(10)}>Essentials</Link>
                <Link href="/list?cat=87" className={tabId === 11 ? highlighted : notHighlighted} onMouseEnter={()=>setTabId(11)}>Renewables</Link>
                <Link href="/list?cat=94" className="w-full h-full px-1 flex items-center justify-center text-center leading-tight hover:bg-white hover:text-bwcblue" 
                    onMouseEnter={()=>setTabId(0)}
                >
                    Clearance
                </Link>
            </div>
            {tabId > 0 && (<SubcategoryMenu tabId={tabId}/>)}
        </div>
    );
};

export default CategoryNavbar;