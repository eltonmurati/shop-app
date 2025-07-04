"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const AdminProductSearch = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const search = formData.get("search") as string;
        const params = new URLSearchParams(searchParams);

        if(search){
            if (pathname === "/admin/products") {
                params.set("search", search);
            } else {
                router.push(`/admin/products?search=${search}`);
                return;
            }
        } else {
            params.delete("search");
        }

        router.replace(`${pathname}?${params}`);
    }

    return(
        <form className="flex items-center justify-between ring-2 ring-gray-300 ring-inset pr-2 rounded-md" onSubmit={handleSearch}>
            <input type="text" name="search" placeholder="Search products" className="p-2 w-full h-full bg-transparent outline-none"/>
            <button className="cursor-pointer text-gray-400 hover:text-blue-700 transition-colors linear duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                    <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clipRule="evenodd" />
                </svg>
            </button>
        </form>
    );
}

export default AdminProductSearch;