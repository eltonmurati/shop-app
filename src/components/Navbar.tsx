import Link from "next/link"
import Menu from "./Menu"
import SearchBar from "./SearchBar"
import NavIcons from "./NavIcons"
import { Suspense } from "react"

const Navbar = () => {
    return (
        <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
            {/* MOBILE */}
            <div className="h-full flex items-center justify-between md:hidden">
                <Link href="/">
                    <div className="text-2xl tracking-wide whitespace-nowarp">BWC Merchants</div>
                </Link>
                <Menu/>
            </div>
            {/* BIGGER SCREENS */}
            <div className="hidden md:flex items-center justify-between gap-8 h-full">
                {/* LEFT */}
                <div className="flex items-center gap-12">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="text-2xl tracking-wide whitespace-nowrap">BWC Merchants</div>
                    </Link>
                    <div className="hidden xl:flex gap-4">
                        <Link href="/" className="hover:text-blue-700 transition-colors duration-200">Homepage</Link>
                        <Link href="/categories" className="hover:text-blue-700 transition-colors duration-200">Shop</Link>
                        <Link href="/about" className="hover:text-blue-700 transition-colors duration-200">About</Link>
                        <Link href="/contact" className="hover:text-blue-700 transition-colors duration-200">Contact</Link>
                    </div>
                </div>
                {/* RIGHT */}
                <div className="w-full flex items-center justify-between gap-8">
                    <Suspense fallback="Loading...">
                        <SearchBar/>
                    </Suspense>
                    <NavIcons/>
                    <div className="xl:hidden">
                        <Menu/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar