"use client"

import Link from "next/link";
import { useState } from "react";

const AdminNav = () => {
    const [selected, setSelected] = useState("home");

    return(
        <div className="px-2 md:p-4 md:bg-gray-100 w-full overflow-auto md:w-max md:overflow-visible scrollbar-hide">
            <div className="w-max">
                <h1 className="hidden md:block text-2xl pb-4 whitespace-nowrap font-medium">Admin Dashboard</h1>
                <ul className="flex md:flex-col gap-2">
                    <li><Link 
                        href={"/admin"} 
                        className={`${selected === "home" && "bg-gray-100 md:bg-gray-200"} flex gap-2 p-2 font-medium rounded-md hover:text-blue-700 transition-colors linear duration-200`} 
                        onClick={()=>setSelected("home")}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        <div className="">Home</div>
                    </Link></li>
                    <li><Link 
                        href={"/admin/products"} 
                        className={`${selected === "products" && "bg-gray-100 md:bg-gray-200"} flex gap-2 p-2 font-medium rounded-md hover:text-blue-700 transition-colors linear duration-200`} 
                        onClick={()=>setSelected("products")}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                        </svg>
                        <div className="">Products</div>
                    </Link></li>
                    <li><Link 
                        href={"/admin/orders"} 
                        className={`${selected === "orders" && "bg-gray-100 md:bg-gray-200"} flex gap-2 p-2 font-medium rounded-md hover:text-blue-700 transition-colors linear duration-200`} 
                        onClick={()=>setSelected("orders")}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                        </svg>
                        <div className="">Orders</div>
                    </Link></li>
                    <li><Link 
                        href={"/admin/categories"} 
                        className={`${selected === "categories" && "bg-gray-100 md:bg-gray-200"} flex gap-2 p-2 font-medium rounded-md hover:text-blue-700 transition-colors linear duration-200`} 
                        onClick={()=>setSelected("categories")}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                        </svg>
                        <div className="">Categories</div>
                    </Link></li>
                    <li><Link 
                        href={"/admin/brands"} 
                        className={`${selected === "brands" && "bg-gray-100 md:bg-gray-200"} flex gap-2 p-2 font-medium rounded-md hover:text-blue-700 transition-colors linear duration-200`} 
                        onClick={()=>setSelected("brands")}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                        </svg>
                        <div className="">Brands</div>
                    </Link></li>
                    <li><Link 
                        href={"/admin/users"} 
                        className={`${selected === "users" && "bg-gray-100 md:bg-gray-200"} flex gap-2 p-2 font-medium rounded-md hover:text-blue-700 transition-colors linear duration-200`} 
                        onClick={()=>setSelected("users")}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <div className="">Users</div>
                    </Link></li>
                </ul>
            </div>
        </div>
    );
}

export default AdminNav;