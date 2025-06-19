"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SearchBar = () => {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const search = formData.get("search") as string;
        const params = new URLSearchParams(searchParams);

        if(search){
            if (pathname === "/shop") {
                params.set("search", search);
            } else {
                router.push(`/shop?search=${search}`);
                return;
            }
        } else {
            params.delete("search");
        }

        router.replace(`${pathname}?search=${params.get("search")}`);
    }

    return (
        <form className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1" onSubmit={handleSearch}>
            <input type="text" name="search" placeholder="Search" className="flex-1 bg-transparent outline-none"/>
            <button className="cursor-pointer">
                <Image src="/search.png" alt="" width={16} height={16}/>
            </button>
        </form>
    );
}

export default SearchBar;