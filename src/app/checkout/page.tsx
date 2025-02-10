"use client";

import { useState, useEffect } from "react";
import { Appearance, loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "@/components/CheckoutForm";
import CompletePage from "@/components/CompletePage";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC!);

const CheckoutPage = () => {
    const [clientSecret, setClientSecret] = useState("");
    const [confirmed, setConfirmed] = useState(false);

    useEffect(()=>{
        setConfirmed(new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        ) ? true : false);
        console.log(new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        ));
    });

    useEffect(()=>{
        fetch("/api/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "1": 2 }),
        })
            .then((res)=>res.json())
            .then((data)=>setClientSecret(data.clientSecret));
    },[]);

    const appearance:Appearance = {
        theme: 'stripe',
    }
    const options:StripeElementsOptions = {
        clientSecret,
        appearance,
    }

    return(
        <div className="App">
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    {confirmed ? <CompletePage /> : <CheckoutForm />}
                </Elements>
            )}
        </div>
    );
}

export default CheckoutPage;