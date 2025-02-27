"use client";

import { postgres } from "@/lib/postgresClient";
import { useEffect, useState } from "react";

const TestPage = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState<{sku:string, name:string, price:number, quantity:number, imageUrl:string|undefined}|null>();

    useEffect(()=>{
        const getProduct = async() => {
            await postgres.from("product").select("*").eq("id", 1).limit(1).single().then(({data: product})=>{
                if (product) {
                    setProduct({sku: product.sku, name: product.name, price: product.price, quantity: 1, imageUrl: product.image_urls ? product.image_urls[0] : undefined});
                    setIsLoading(false);
                }
            });
        }
        getProduct();
    },[]);

    const handleTest = () => {
        setLoading(true);
        fetch('/api/send', {method:'POST', body:JSON.stringify({items: [product], email: 'eltonmurati99@gmail.com'})}).then(()=>{
            setLoading(false);
        });
    }

    if (isLoading) {return(<div>Loading...</div>);}

    return(
        <div className="flex items-center justify-center p-16 gap-4">
            <button className="rounded-md p-2 bg-blue-700 text-white disabled:bg-indigo-200" 
                disabled={loading} 
                onClick={handleTest}
            >
                {loading ? "Loading..." : "Test"}
            </button>
        </div>
    );
}

export default TestPage;
