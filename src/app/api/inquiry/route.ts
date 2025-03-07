import InquiryEmail from "@/components/InquiryEmail";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_SECRET);

export async function POST(req:NextRequest) {
    const body = await req.json();
    
    try {
        const {data, error} = await resend.emails.send({
            from: 'BWC Merchants <orders@bwcmerchants.co.uk>',
            to: 'orders@bwcmerchants.co.uk',
            subject: 'New Inquiry',
            text: InquiryEmail(
                body["fullName"],
                body["email"], 
                body["inquiry"], 
            ),
        });

        if (error) {
            return NextResponse.json({error}, {status:500});
        }

        return Response.json({data});
    } catch (error) {
        return NextResponse.json({error}, {status:500});
    }
}