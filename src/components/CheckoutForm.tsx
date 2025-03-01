"use client";

import { useState } from "react";
import { PaymentElement, useStripe, useElements, Elements, AddressElement } from "@stripe/react-stripe-js";
import { Appearance, loadStripe, StripeAddressElementOptions, StripeElementsOptions } from "@stripe/stripe-js";
import { StripePaymentElementOptions } from "@stripe/stripe-js";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC!)

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState<string | null | undefined>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        setIsLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: process.env.NEXT_PUBLIC_BASE_URL + "/success",
                receipt_email: email,
            },
        });

        // This point will only be reached if there is an immediate error when
        // confirming the payment. Otherwise, your customer will be redirected to
        // your `return_url`. For some payment methods like iDEAL, your customer will
        // be redirected to an intermediate site first to authorize the payment, then
        // redirected to the `return_url`.
        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message);
        } else {
            setMessage("An unexpected error occurred.");
        }

        setIsLoading(false);
    }

    const paymentElementOptions:StripePaymentElementOptions = { 
        layout: "tabs",
    }

    const addressElementOptions:StripeAddressElementOptions = {
        mode: "shipping",
    }

    return(
        <form id="payment-form" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2 md:sticky md:top-8 h-max">
                    <h1 className="pb-8 text-xl">Shipping Details</h1>
                    <div className="flex flex-col gap-2 pb-8">
                        <label className="text-sm text-gray-700">E-mail</label>
                        <input id="email" type="email" name="email" placeholder="example@domain.com" onChange={(e)=>setEmail(e.target.value)}
                            className="ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none" />
                    </div>
                    <AddressElement id="address-element" options={addressElementOptions} />
                </div>
                <div className="w-full md:w-1/2 md:sticky md:top-8 h-max">
                    <h1 className="pb-8 text-xl">Payment Details</h1>
                    <PaymentElement id="payment-element" options={paymentElementOptions} />
                    <button disabled={isLoading || !stripe || !elements} id="submit" className="w-full bg-blue-700 text-white p-2 rounded-md mt-8 disabled:bg-indigo-200">
                        <span id="button-text">
                            {isLoading ? "Loading..." : "Pay now"}
                        </span>
                    </button>
                    {/* Show any error or success messages */}
                    {message && <div id="payment-message" className="pt-4 text-red-500 flex justify-center">{message}</div>}
                </div>
            </div>
        </form>
    );
}

export default function CheckoutForm({clientSecret}:{clientSecret:string}) {
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
            },
            '.CheckboxInput': {
                boxShadow: "inset 0 0 0 2px #d1d5db",
            },
            '.CheckboxInput--checked': {
                boxShadow: "none",
            },
            '.CheckboxInput:focus': {
                boxShadow: "",
            },
            '.CheckboxLabel': {
                color: "#374151",
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
            },
        },
    }

    const options:StripeElementsOptions = {
        clientSecret,
        appearance,
        fonts: [{cssSrc: 'https://fonts.googleapis.com/css?family=Inter'}],
    }

    return(
        <Elements stripe={stripePromise} options={options}>
            <PaymentForm />
        </Elements>
    );
}