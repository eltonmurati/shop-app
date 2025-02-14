"use client";

import { useState, useEffect } from "react";
import { Appearance, loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "@/components/CheckoutForm";
import CompletePage from "@/components/CompletePage";
import { useCartStore } from "@/hooks/useCartStore";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC!);

const CheckoutPage = () => {
    const [clientSecret, setClientSecret] = useState("");
    const [confirmed, setConfirmed] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const {cart, getCart} = useCartStore();

    useEffect(()=>{
        setConfirmed(new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        ) ? true : false);
    });

    useEffect(()=>{
        getCart();
        fetch("/api/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "cart": cart }),
        }).then((res)=>res.json()).then((data)=>{
            setClientSecret(data.clientSecret);
            setIsLoading(false);
        });
    },[]);

    const appearance:Appearance = {
        theme: "flat",
        variables: {
            colorPrimary: "#1d4ed8",
            colorBackground: "#ffffff",
            colorText: "#000000",
            colorTextPlaceholder: "#9ca3af",
            colorDanger: "#ef4444",
            fontFamily: "Inter",
            borderRadius: "0.375rem",
            tabSpacing: "1rem",
            gridRowSpacing: "2rem",
            gridColumnSpacing: "2rem",
        },
        rules: {
            '.Tab': {
                backgroundColor: "#f3f4f6",
                boxShadow: "",
                padding: "1rem",
            },
            '.Tab:focus': {
                boxShadow: "none",
            },
            '.Tab--selected:focus': {
                boxShadow: "none",
            },
            '.TabLabel': {
                fontWeight: "600",
                paddingTop: "0.5rem",
            },
            '.Label': {
                color: "#374151",
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                marginBottom: "0.5rem",
            },
            '.Input': {
                padding: "1rem",
                fontSize: "1rem",
                lineHeight: "1.5rem",
                boxShadow: "inset 0 0 0 2px #d1d5db",
            },
            '.Input--invalid': {
                boxShadow: "inset 0 0 0 2px #ef4444",
            },
            '.Input:focus': {
                boxShadow: "",
            },
            '.Error': {
                marginTop: "0.5rem",
            },
            '.Block': {
                boxShadow: "none",
            }
        },
    }
    const options:StripeElementsOptions = {
        clientSecret,
        appearance,
        fonts: [{cssSrc: 'https://fonts.googleapis.com/css?family=Inter'}]
    }

    if (isLoading) {
        return(
            <div className="flex justify-center items-center min-h-max h-[calc(100vh-80px)] xl:h-[calc(100vh-144px)] text-gray-400 text-2xl">Loading...</div>
        );
    }

    return(
        <div className="App">
            {clientSecret && (
                <div className="flex justify-center items-center min-h-max h-[calc(100vh-80px)] xl:h-[calc(100vh-144px)]">
                    <div className="py-8 px-4 w-[35rem]">
                        <Elements options={options} stripe={stripePromise}>
                            {confirmed ? <CompletePage /> : <CheckoutForm />}
                        </Elements>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CheckoutPage;