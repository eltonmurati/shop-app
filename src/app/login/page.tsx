"use client";

import { useState } from "react";
import { authenticate } from "@/app/api/auth/[...nextauth]/helpers";
import { useActionState } from "react";
import { redirect } from "next/navigation";

enum MODE {
    LOGIN="LOGIN",
    REGISTER="REGISTER",
    RESET_PASSWORD="RESET_PASSWORD",
    EMAIL_VERIFICATION="EMAIL_VERIFICATION"
};

const LoginPage = () => {

    redirect("/");

    const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);

    const [mode,setMode] = useState(MODE.LOGIN);
    const [isCompany,setIsCompany] = useState(false);

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [emailCode,setEmailCode] = useState("");
    const [message,setMessage] = useState("");

    const formTitle = mode===MODE.LOGIN ? "Log In" : mode===MODE.REGISTER ? "Register" : mode===MODE.RESET_PASSWORD ? "Reset Your Password" : "Verify Your Email";

    const buttonTitle = mode===MODE.LOGIN ? "Login" : mode===MODE.REGISTER ? "Register" : mode===MODE.RESET_PASSWORD ? "Reset" : "Verify";

    return (
        <div className='min-h-max h-[calc(100vh-80px)] xl:h-[calc(100vh-144px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center'>
            <form className="flex flex-col gap-8 py-8" action={formAction}>
                <h1 className="text-2xl font-medium">{formTitle}</h1>
                {mode !== MODE.REGISTER ? (
                    <>
                        {errorMessage && <div className="text-red-500">{errorMessage}</div>}
                        {mode !== MODE.EMAIL_VERIFICATION ? (
                            <div className="flex flex-col gap-2">
                                <label className="text-sm text-gray-700">E-mail</label>
                                <input type="email" name="email" placeholder="example@domain.com" className="ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none"/>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-2">
                                <label className="text-sm text-gray-700">Verification Code</label>
                                <input type="text" name="verify" placeholder="" className="ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none"/>
                            </div>
                        )}
                        {mode === MODE.LOGIN ? (
                            <div className="flex flex-col gap-2">
                                <label className="text-sm text-gray-700">Password</label>
                                <input type="password" name="password" placeholder="••••••••" className="ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none"/>
                            </div>
                        ) : null}
                        <button 
                            className="bg-blue-700 text-white p-2 rounded-md disabled:bg-indigo-200" 
                            disabled={isPending}
                        >
                            {isPending ? "Loading..." : buttonTitle}
                        </button>
                        {mode === MODE.LOGIN && (
                            <div className="flex flex-col gap-2">
                                <div className="text-sm underline cursor-pointer" onClick={()=>setMode(MODE.RESET_PASSWORD)}>Forgot password?</div>
                                <div className="text-sm underline cursor-pointer" onClick={()=>setMode(MODE.REGISTER)}>{"Don't"} have an account?</div>
                            </div>
                        )}
                        {mode === MODE.RESET_PASSWORD && (
                            <div className="text-sm underline cursor-pointer" onClick={()=>setMode(MODE.LOGIN)}>Go back to Login</div>
                        )}
                        {message && <div className="text-green-600 text-sm">{message}</div>}
                    </>
                ) : (
                    <>
                        <div className="flex flex-row gap-8">
                            <button 
                                className="rounded-md ring-1 ring-inset ring-blue-700 bg-white w-full p-3.5 text-blue-700 disabled:bg-blue-700 disabled:text-white hover:bg-blue-700 hover:text-white transition-colors linear duration-200" 
                                disabled={isCompany ? false : true}
                                onClick={()=>setIsCompany(false)}
                            >
                                Personal
                            </button>
                            <button 
                                className="rounded-md ring-1 ring-inset ring-blue-700 bg-white w-full p-3.5 text-blue-700 disabled:bg-blue-700 disabled:text-white hover:bg-blue-700 hover:text-white transition-colors linear duration-200" 
                                disabled={isCompany ? true : false}
                                onClick={()=>setIsCompany(true)}
                            >
                                Company
                            </button>
                        </div>
                        {isCompany ? (
                            <div className="flex flex-col gap-2">
                                <label className="text-sm text-gray-700">Company name</label>
                                <input type="text" name="company" placeholder="BWC Merchants" className="ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none"/>
                            </div>
                        ) : (
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm text-gray-700">First name</label>
                                    <input type="text" name="first" placeholder="John" className="ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none"/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm text-gray-700">Last name</label>
                                    <input type="text" name="last" placeholder="Smith" className="ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none"/>
                                </div>
                            </div>
                        )}
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm text-gray-700">E-mail</label>
                                <input type="email" name="email" placeholder="example@domain.com" className="ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm text-gray-700">Phone number</label>
                                <input type="tel" name="number" placeholder="07469285005" className="ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none"/>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm text-gray-700">Password</label>
                                <input type="password" name="password" placeholder="••••••••" className="ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm text-gray-700">Confirm password</label>
                                <input type="password" name="confirm" placeholder="••••••••" className="ring-2 ring-inset ring-gray-300 rounded-md p-4 outline-none"/>
                            </div>
                        </div>
                        <button className="bg-blue-700 text-white p-2 rounded-md disabled:bg-indigo-200" disabled={isPending}>
                            {isPending ? "Loading..." : buttonTitle}
                        </button>
                        <div className="text-sm underline cursor-pointer" onClick={()=>setMode(MODE.LOGIN)}>Already have an account?</div>
                    </>
                )}
            </form>
        </div>
    );
};

export default LoginPage;