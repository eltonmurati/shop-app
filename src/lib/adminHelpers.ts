"use server";

import { createClient } from "@supabase/supabase-js";
import { Database } from "@/lib/types";

const postgres = createClient<Database> (
  process.env.NEXT_PUBLIC_POSTGRES_URL!,
  process.env.POSTGRES_SECRET!,
);

export async function AddProductToDB(
    name:string, 
    price:number, 
    stock:number, 
    sku:string, 
    sale:boolean, 
    mpn?:string, 
    brand?:number, 
    ogprice?:number, 
    specs?:{[k:string]: {key:string, value:string}}, 
    vars?:{ [k:number]: { [type:string]: { [key:string]: number|undefined} } }, 
    cats?:[]
) {
    let err = false;
    let id = 0;

    const {data, error } = await postgres.from('product').select('id').order('id', { ascending: false }).limit(1).single();

    if (error) { err = true; console.log(error); } 
    else if (data) { id = data.id + 1; } 
    else { err = true; }

    if (price < 0.01) { err = true; }
    if (!Number.isInteger(stock)) { err = true; }
    if (ogprice && ogprice < 0.01) { err = true;}
    if (!ogprice) { ogprice = price; }

    let specifications: {key:string, value:string}[];
    let finalSpecs: {[key:string]: string} | undefined = undefined;

    if (specs && Object.keys(specs).length > 0) { 
        specifications = Object.values(specs);
        finalSpecs = {};
        specifications.forEach(s => {
            finalSpecs![s.key as keyof typeof finalSpecs] = s.value;
        });
    }

    if (!err) {
        const { data, error } = await postgres.from('product').select('sku').eq("sku", sku);

        if (error) { err = true; console.log(error); } 
        else if (data) { if (data.length > 0) { err = true; } } 
        else { err = true; }
    }

    if (!err && mpn) {
        const { data, error } = await postgres.from('product').select('manufacturer_code').eq("manufacturer_code", mpn);

        if (error) { err = true; console.log(error); } 
        else if (data) { if (data.length > 0) { err = true; } } 
        else { err = true; }
    }

    if (!err) {
        let newProduct: {
            id:number, 
            name:string, 
            price:number, 
            quantity:number, 
            sku:string, 
            original_price:number, 
            on_sale:boolean, 
            manufacturer_code?:string, 
            brand?:number, 
            specifications?:{}, 
            variants?:{}
        } = { 
            id: id, 
            name: name, 
            quantity: stock, 
            price: price, 
            sku: sku, 
            original_price: ogprice, 
            on_sale: sale, 
        }

        if (mpn) { newProduct["manufacturer_code"] = mpn; }
        if (brand) { newProduct["brand"] = brand; }
        if (finalSpecs) { newProduct["specifications"] = finalSpecs; }

        const { error } = await postgres.from("product").insert(newProduct);

        if (error) { err = true; console.log(error); }
        else { return false; }
    }

    return true;
}