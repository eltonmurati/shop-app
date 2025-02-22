import { CustomerEmail } from "@/components/CustomerEmail";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_SECRET);

export async function POST() {
    try {
        const {data, error} = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'eltonmurati99@gmail.com',
            subject: 'Test',
            react: CustomerEmail({fullName: 'Elton Murati'}),
        });

        if (error) {
            return Response.json({error}, {status:500});
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({error}, {status:500});
    }
}