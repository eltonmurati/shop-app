"use server";

import { postgres } from "./postgresClient";

export async function AddProductToDB(name:string, price:number, stock:number, sku:string, sale:boolean, mpn?:string, brand?:number, ogprice?:number) {
    let err = false;

    let id = 0;

    const {data, error } = await postgres.from('product').select('id').order('id', { ascending: false }).limit(1).single();

    if (error) { 
        err = true; console.log(error); 
    } else if (data) { 
        id = data.id + 1; 
    } else { 
        err = true; 
    }

    if (price < 0.01) { err = true; }
    if (!Number.isInteger(stock)) { err = true; }
    if (ogprice && ogprice < 0.01) { err = true;}
}