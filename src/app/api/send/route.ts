import { CompanyEmail } from "@/components/CompanyEmail";
import CustomerEmail from "@/components/CustomerEmail";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_SECRET);

export async function POST(req:NextRequest) {
    const body = await req.json();

    try {
        const {data: companyData, error: companyError} = await resend.emails.send({
            from: 'BWC Merchants <orders@bwcmerchants.co.uk>',
            to: 'eltonmurati99@gmail.com',
            subject: 'New Order',
            react: CompanyEmail({
                fullName: body["fullName"],
                orderId: body["orderId"], 
                subtotal: body["subtotal"], 
                shippingAddress: body["shippingAddress"], 
                items: body["items"], 
                shippingFee: body["shippingFee"], 
                totalAmount: body["totalAmount"],
                email: body["email"],
            }),
        });

        if (companyError) {
            return NextResponse.json({error: companyError}, {status:500});
        }

        const {data: customerData, error: customerError} = await resend.emails.send({
            from: 'BWC Merchants <orders@bwcmerchants.co.uk>',
            to: body["email"],
            subject: 'Order Summary',
            react: CustomerEmail({
                fullName: body["fullName"],
                orderId: body["orderId"], 
                subtotal: body["subtotal"], 
                shippingAddress: body["shippingAddress"], 
                items: body["items"], 
                shippingFee: body["shippingFee"], 
                totalAmount: body["totalAmount"]
            }),
        });

        return Response.json({company: companyData, customer: customerData ?? customerError});
    } catch (error) {
        return NextResponse.json({error}, {status:500});
    }
}