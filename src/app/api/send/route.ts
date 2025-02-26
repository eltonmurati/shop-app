import CustomerEmail from "@/components/CustomerEmail";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_SECRET);

export async function POST(req:NextRequest) {
    try {
        const {data, error} = await resend.emails.send({
            from: 'BWC Merchants <orders@bwcmerchants.co.uk>',
            to: 'eltonmurati99@gmail.com',
            subject: 'Order Summary',
            react: CustomerEmail({orderId: 'blah53478256', subtotal: 1400, shippingAddress: {lineOne: "58 Keppel Road", postCode: "RM9 5LX", city: "Dagenham"}, items: [{id: 1, quantity: 1}], shippingFee: 0, totalAmount: 1400}),
        });

        if (error) {
            console.log("1st fail");
            return NextResponse.json({error}, {status:500});
        }

        return Response.json(data);
    } catch (error) {
        console.log("2nd fail");
        return NextResponse.json({error}, {status:500});
    }
}