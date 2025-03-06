import { NextRequest, NextResponse } from "next/server";
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'

import { createClient } from "@supabase/supabase-js";
import { Database } from "@/lib/types";

export const postgres = createClient<Database> (
    process.env.NEXT_PUBLIC_POSTGRES_URL!,
    process.env.POSTGRES_SECRET!,
  );
  
  const handleSuccess = async(payment: Stripe.PaymentIntent) => {
    const items: {id: number, quantity: number}[] = JSON.parse(payment.metadata["items"]);
    const products = await getItems(items);
  
    if (products) {
      let orderItems = [];
      for (const product of products) {
        for (const item of items) {
          if (item["id"] === product["id"]) {
            orderItems.push({sku: product["sku"], price: product["price"], name: product["name"], quantity: item["quantity"]});
  
            const stock = await postgres.from("product").select("*").eq("id", item["id"]).limit(1).single().then(({data: product})=>{
              if (product) {return product.quantity;}
              else {return 0;}
            });
    
            const {error} = await postgres.from("product").update({quantity: stock - item["quantity"]}).eq("id", item["id"]);
            if (error) {console.log(error);}
          }
        }
      }
  
      const id = await createOrder(payment.shipping?.name, orderItems, payment.amount / 100, {
        city: payment.shipping?.address?.city, 
        country: payment.shipping?.address?.country,
        line1: payment.shipping?.address?.line1,
        line2: payment.shipping?.address?.line2,
        postal_code: payment.shipping?.address?.postal_code,
        state: payment.shipping?.address?.state,
      }, Number(payment.metadata["shippingAmount"]), payment.id, payment.receipt_email, Number(payment.metadata["delivery"]) > 0);
  
      if (id) {
        let metadata = (await stripe.paymentIntents.retrieve(payment.id)).metadata;
        metadata["orderId"] = id;
        const paymentIntent = await stripe.paymentIntents.update(payment.id, {metadata: metadata});
  
        fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/send', {method:'POST', body:JSON.stringify({
          fullName: payment.shipping?.name,
          orderId: id, 
          subtotal: (payment.amount / 100) - Number(payment.metadata["shippingAmount"]), 
          shippingAddress: {
            city: payment.shipping?.address?.city, 
            country: payment.shipping?.address?.country,
            line1: payment.shipping?.address?.line1,
            line2: payment.shipping?.address?.line2,
            postal_code: payment.shipping?.address?.postal_code,
            state: payment.shipping?.address?.state,
          }, 
          items: orderItems, 
          shippingFee: Number(payment.metadata["shippingAmount"]), 
          totalAmount: payment.amount / 100,
          email: payment.receipt_email,
          delivery: Number(payment.metadata["delivery"]) > 0
        })});
      }
    }
  }
    
  const getItems = async(items:{id: number, quantity: number}[]) => {
    let itemIds: number[] = [];
  
    for (const item of items) {
      itemIds.push(item["id"]);
    }
  
    const {data: products} = await postgres.from("product").select("*").in("id", itemIds); 
  
    return products || null;
  }
    
  const generateId = async() => {
    const id = Date.now().toString(36).substring(0,10).padStart(12,"0").toUpperCase() + Math.random().toString(36).substring(2,12).padStart(12,"0").toUpperCase();
    const {data: order} = await postgres.from("order").select("*").eq("id", id).limit(1).single();
  
    if (order) {
      return generateId();
    } else {
      return id;
    }
  }
    
  const createOrder = async(
    fullName: string | undefined | null,
    products: {sku:string, name:string, price:number, quantity:number}[], 
    totalAmount: number, 
    shippingAddress: {
      city: string | undefined | null, 
      country: string | undefined | null, 
      line1: string | undefined | null, 
      line2: string | undefined | null, 
      postal_code: string | undefined | null, 
      state: string | undefined | null
    }, 
    shippingAmount: number, 
    paymentId: string, 
    email:string | null,
    delivery: boolean,
  ) => {
    const id = await generateId();
  
    const { error } = await postgres.from("order").insert({
      id: id,
      products: products, 
      total_amount: totalAmount, 
      shipping_address: shippingAddress, 
      shipping_amount: shippingAmount,
      payment_id: paymentId,
      email: email,
      full_name: fullName,
      delivery: delivery,
    });
  
    if (error) {
      console.log(error);
      return null;
    }
  
    return id;
  }

export async function POST(req:NextRequest) {
    const body = await req.json();

    try {
        handleSuccess(body);
        return NextResponse.json({ message: 'Received' }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: 'Webhook handler failed' },
            { status: 500 }
        );
    }
}