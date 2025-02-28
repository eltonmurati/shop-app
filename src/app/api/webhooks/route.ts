import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'

import { stripe } from '@/lib/stripe'
import { postgres } from '@/lib/postgresClient'
import Stripe from 'stripe'

const handleSuccess = async(payment: Stripe.PaymentIntent) => {
  const items: {id: number, quantity: number}[] = JSON.parse(payment.metadata["items"]);
  const products = await getItems(items);
  if (products){
    let orderItems = [];
    for (const product of products) {
      for (const item of items) {
        if (item["id"] === product["id"]) {
          orderItems.push({sku: product["sku"], price: product["price"], name: product["name"], quantity: item["quantity"]});
        }
      }
    }
    createOrder(orderItems, payment.amount / 100, {
      city: payment.shipping?.address?.city, 
      country: payment.shipping?.address?.country,
      line1: payment.shipping?.address?.line1,
      line2: payment.shipping?.address?.line2,
      postal_code: payment.shipping?.address?.postal_code,
      state: payment.shipping?.address?.state,
    }, 0, payment.id, payment.metadata["email"]);
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

const createOrder = async(
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
  email:string
) => {
  const { error } = await postgres.from("order").insert({
    products: products, 
    total_amount: totalAmount, 
    shipping_address: shippingAddress, 
    shipping_amount: shippingAmount,
    payment_id: paymentId,
    email: email
  });

  if (error) {
    console.log("Error: Could not create order.");
  }
}

export async function POST(req:NextRequest) {
  let event

  try {
    event = stripe.webhooks.constructEvent(
      await req.text(),
      (await headers()).get('stripe-signature')!,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    const errorMessage = (err as Error).message
    // On error, log and return the error message.
    if (err) console.log(err)
    console.log(`Error message: ${errorMessage}`)
    return NextResponse.json(
      { message: `Webhook Error: ${errorMessage}` },
      { status: 400 }
    )
  }

  const permittedEvents = ['payment_intent.succeeded']

  if (permittedEvents.includes(event.type)) {
    let data

    try {
      switch (event.type) {
        case 'payment_intent.succeeded':
          data = event.data.object
          console.log(`Payment status: ${data.status}`)
          handleSuccess(data);
          break
        default:
          throw new Error(`Unhandled event: ${event.type}`)
      }
    } catch (error) {
      console.log(error)
      return NextResponse.json(
        { message: 'Webhook handler failed' },
        { status: 500 }
      )
    }
  }
  // Return a response to acknowledge receipt of the event.
  return NextResponse.json({ message: 'Received' }, { status: 200 })
}