"use client"

import { useState } from "react";

const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>();
    const [error, setError] = useState<string | null>();

    const handleSubmit = () => {
        setLoading(true);
        fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/inquiry', {method: 'POST', body: JSON.stringify({
            email: "",
            inquiry: ""
        })});
        setMessage("Thank you for contacting us. We will be in touch shortly.");
        setLoading(false);
    }

    return(
        <form className="flex flex-col gap-8" action={handleSubmit}>
            <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-700">E-mail</label>
                <input type="email" name="email" placeholder="example@domain.com" className="ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none"/>
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-700">Inquiry</label>
                <textarea name="inquiry" rows={5} className="ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none" />
            </div>
            <button className="p-2 bg-blue-700 text-white rounded-md relative disabled:bg-indigo-200" disabled={loading}>
                {loading ? "Loading..." : "Submit"}
                {message && (
                    <div className="hidden md:block absolute text-gray-400 left-0 top-16 flex justify-center w-full hover:cursor-default" onClick={(e)=>e.stopPropagation()}>
                        {message}
                    </div>
                )}
                {error && (
                    <div className="hidden md:block absolute text-red-500 left-0 top-16 flex justify-center w-full hover:cursor-default" onClick={(e)=>e.stopPropagation()}>
                        {error}
                    </div>
                )}
            </button>
            <div className="md:hidden text-gray-400 left-0 top-16 flex justify-center w-full">{message}</div>
            <div className="md:hidden text-red-500 left-0 top-16 flex justify-center w-full">{error}</div>
        </form>
    );
}

export default ContactForm;