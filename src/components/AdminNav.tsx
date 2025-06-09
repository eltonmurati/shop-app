"use client"

import Link from "next/link";
import { useState } from "react";

const AdminNav = () => {
    const [selected, setSelected] = useState("home");

    return(
        <div className="p-4 bg-gray-100">
            <h1 className="text-2xl pb-4 whitespace-nowrap font-medium">Admin Dashboard</h1>
            <ul className="flex flex-col gap-2">
                <li><Link 
                    href={"/admin"} 
                    className={`${selected === "home" && "bg-gray-200"} flex p-2 font-medium rounded-md hover:text-blue-700`} 
                    onClick={()=>setSelected("home")}
                >
                    Home
                </Link></li>
                <li><Link 
                    href={"/admin/products"} 
                    className={`${selected === "products" && "bg-gray-200"} flex p-2 font-medium rounded-md hover:text-blue-700`} 
                    onClick={()=>setSelected("products")}
                >
                    Products
                </Link></li>
                <li><Link 
                    href={"/admin/orders"} 
                    className={`${selected === "orders" && "bg-gray-200"} flex p-2 font-medium rounded-md hover:text-blue-700`} 
                    onClick={()=>setSelected("orders")}
                >
                    Orders
                </Link></li>
                <li><Link 
                    href={"/admin/categories"} 
                    className={`${selected === "categories" && "bg-gray-200"} flex p-2 font-medium rounded-md hover:text-blue-700`} 
                    onClick={()=>setSelected("categories")}
                >
                    Categories
                </Link></li>
                <li><Link 
                    href={"/admin/brands"} 
                    className={`${selected === "brands" && "bg-gray-200"} flex p-2 font-medium rounded-md hover:text-blue-700`} 
                    onClick={()=>setSelected("brands")}
                >
                    Brands
                </Link></li>
                <li><Link 
                    href={"/admin/users"} 
                    className={`${selected === "users" && "bg-gray-200"} flex p-2 font-medium rounded-md hover:text-blue-700`} 
                    onClick={()=>setSelected("users")}
                >
                    Users
                </Link></li>
            </ul>
        </div>
    );
}

export default AdminNav;