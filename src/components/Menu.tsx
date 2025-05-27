"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Menu = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className=''>
            <Image src="/menu.png" alt="" width={28} height={28} className="cursor-pointer" onClick={()=>setOpen((prev) => !prev)}/>
            {open && (
                <div className="absolute bg-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-20 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <Link href="/" onClick={()=>setOpen(false)}>Homepage</Link>
                    <Link href="/shop" onClick={()=>setOpen(false)}>Shop</Link>
                    <Link href="/about" onClick={()=>setOpen(false)}>About</Link>
                    <Link href="/contact" onClick={()=>setOpen(false)}>Contact</Link>
                    <Link href="/" className="md:hidden" onClick={()=>setOpen(false)}>Profile</Link>
                    <Link href="/" className="md:hidden" onClick={()=>setOpen(false)}>Notifications</Link>
                    <Link href="/cart" className="md:hidden" onClick={()=>setOpen(false)}>Cart</Link>
                </div>
            )}
        </div>
    )
}

export default Menu