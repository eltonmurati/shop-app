import CustomerEmail from "@/components/CustomerEmail";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_SECRET);

export async function POST(req:NextRequest) {
    const body = await req.json();

    try {
        const {data, error} = await resend.emails.send({
            from: 'BWC Merchants <orders@bwcmerchants.co.uk>',
            to: body["email"],
            subject: 'Order Summary',
            react: CustomerEmail({
                orderId: body["orderId"], 
                subtotal: body["subtotal"], 
                shippingAddress: body["shippingAddress"], 
                items: body["items"], 
                shippingFee: body["shippingFee"], 
                totalAmount: body["totalAmount"]
            }),
        });

        if (error) {
            return NextResponse.json({error}, {status:500});
        }

        return Response.json(data);
    } catch (error) {
        return NextResponse.json({error}, {status:500});
    }
}