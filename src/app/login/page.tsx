"use client";

import { useState } from "react";

enum MODE {
    LOGIN="LOGIN",
    REGISTER="REGISTER",
    RESET_PASSWORD="RESET_PASSWORD",
    EMAIL_VERIFICATION="EMAIL_VERIFICATION"
};

const LoginPage = () => {

    const [mode,setMode] = useState(MODE.LOGIN);

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [emailCode,setEmailCode] = useState("");
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState("");
    const [message,setMessage] = useState("");

    const formTitle = mode===MODE.LOGIN ? "Log In" : mode===MODE.REGISTER ? "Register" : mode===MODE.RESET_PASSWORD ? "Reset Your Password" : "Verify Your Email";

    const buttonTitle = mode===MODE.LOGIN ? "Login" : mode===MODE.REGISTER ? "Register" : mode===MODE.RESET_PASSWORD ? "Reset" : "Verify";

    return (
        <div className='min-h-max h-[calc(100vh-80px)] xl:h-[calc(100vh-144px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center'>
            <form className="flex flex-col gap-8 py-8">
                <h1 className="text-2xl font-semibold">{formTitle}</h1>
                {mode === MODE.REGISTER ? (
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-700">Name</label>
                        <input type="text" name="name" placeholder="Enter your name" className="ring-2 ring-gray-300 rounded-md p-4"/>
                    </div>
                ) : null}
                {mode !== MODE.EMAIL_VERIFICATION ? (
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-700">E-mail</label>
                        <input type="email" name="email" placeholder="example@domain.com" className="ring-2 ring-gray-300 rounded-md p-4"/>
                    </div>
                ) : (
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-700">Verification Code</label>
                        <input type="text" name="emailCode" placeholder="Code" className="ring-2 ring-gray-300 rounded-md p-4"/>
                    </div>
                )}
                {mode === MODE.LOGIN || mode === MODE.REGISTER ? (
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-700">Password</label>
                        <input type="password" name="password" placeholder="Enter your password" className="ring-2 ring-gray-300 rounded-md p-4"/>
                    </div>
                ) : null}
                {mode === MODE.REGISTER ? (
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-700">Re-enter password</label>
                        <input type="password" name="password2" placeholder="Re-enter your password" className="ring-2 ring-gray-300 rounded-md p-4"/>
                    </div>
                ) : null}
                {mode === MODE.LOGIN && <div className="text-sm underline cursor-pointer" onClick={()=>setMode(MODE.RESET_PASSWORD)}>Forgot password?</div>}
                <button className="bg-primary text-white p-2 rounded-md disabled:bg-pink-200 disabled:cursor-not-allowed" disabled={isLoading}>
                    {isLoading ? "Loading..." : buttonTitle}
                </button>
                {error && <div className="text-red-600">{error}</div>}
                {mode === MODE.LOGIN && (
                    <div className="text-sm underline cursor-pointer" onClick={()=>setMode(MODE.REGISTER)}>{"Don't"} have an account?</div>
                )}
                {mode === MODE.REGISTER && (
                    <div className="text-sm underline cursor-pointer" onClick={()=>setMode(MODE.LOGIN)}>Already have an account?</div>
                )}
                {mode === MODE.RESET_PASSWORD && (
                    <div className="text-sm underline cursor-pointer" onClick={()=>setMode(MODE.LOGIN)}>Go back to Login</div>
                )}
                {message && <div className="text-green-600 text-sm">{message}</div>}
            </form>
        </div>
    );
};

export default LoginPage;