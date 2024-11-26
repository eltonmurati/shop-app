"use client"

import Link from "next/link";
import SubcategoryMenu from "./SubcategoryMenu";
import { useState } from "react";

const CategoryNavbar = () => {

    const [tabId, setTabId] = useState(0);

    return (
        <div className="" onMouseLeave={()=>setTabId(0)}>
            <div className="hidden xl:flex h-16 bg-bwcred font-semibold text-white">
                <Link href="/" className="w-full h-full px-4 flex items-center justify-center text-center hover:bg-white hover:text-bwcred" onMouseEnter={()=>setTabId(1)}>Boilers</Link>
                <Link href="/" className="w-full h-full px-4 flex items-center justify-center text-center hover:bg-white hover:text-bwcred" onMouseEnter={()=>setTabId(2)}>Flues & Accessories</Link>
                <Link href="/" className="w-full h-full px-4 flex items-center justify-center text-center hover:bg-white hover:text-bwcred" onMouseEnter={()=>setTabId(3)}>Heating</Link>
                <Link href="/" className="w-full h-full px-4 flex items-center justify-center text-center hover:bg-white hover:text-bwcred" onMouseEnter={()=>setTabId(4)}>Radiators</Link>
                <Link href="/" className="w-full h-full px-4 flex items-center justify-center text-center hover:bg-white hover:text-bwcred" onMouseEnter={()=>setTabId(5)}>Metal Plumbing</Link>
                <Link href="/" className="w-full h-full px-4 flex items-center justify-center text-center hover:bg-white hover:text-bwcred" onMouseEnter={()=>setTabId(6)}>Plastic Plumbing</Link>
                <Link href="/" className="w-full h-full px-4 flex items-center justify-center text-center hover:bg-white hover:text-bwcred" onMouseEnter={()=>setTabId(7)}>Packaged Plumbing</Link>
                <Link href="/" className="w-full h-full px-4 flex items-center justify-center text-center hover:bg-white hover:text-bwcred" onMouseEnter={()=>setTabId(8)}>Bathroom & Kitchen</Link>
                <Link href="/" className="w-full h-full px-4 flex items-center justify-center text-center hover:bg-white hover:text-bwcred" onMouseEnter={()=>setTabId(9)}>Fires</Link>
                <Link href="/" className="w-full h-full px-4 flex items-center justify-center text-center hover:bg-white hover:text-bwcred" onMouseEnter={()=>setTabId(10)}>Essentials</Link>
                <Link href="/" className="w-full h-full px-4 flex items-center justify-center text-center hover:bg-white hover:text-bwcred" onMouseEnter={()=>setTabId(11)}>Renewables</Link>
                <Link href="/" className="w-full h-full px-4 flex items-center justify-center text-center hover:bg-white hover:text-bwcred" onMouseEnter={()=>setTabId(0)}>Clearance</Link>
            </div>
            {tabId > 0 && (<SubcategoryMenu tabId={tabId}/>)}
        </div>
    );
};

export default CategoryNavbar;