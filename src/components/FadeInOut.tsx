"use client"

import { ReactNode, useEffect, useState } from "react";

const FadeInOut = ({children, mount, initialState}:{children: ReactNode; mount: boolean; initialState: boolean;}) => {
    const [mounted, setMounted] = useState(initialState);
    const [trigger, setTrigger] = useState(initialState);
    const [visible, setVisible] = useState(initialState);

    useEffect(()=>{
        if (mount) {
            setTrigger(true);
            setMounted(true);
        } else {
            setTrigger(false);
            const timeout = setTimeout(()=>{
                setMounted(false);
            }, 200);

            return () => clearTimeout(timeout);
        }
    },[mount]);

    useEffect(()=>{
        setVisible(trigger);
    },[trigger]);

    if (!mounted) return null;

    return(
        <div className={"transition-opacity linear duration-200 "  + (visible ? "opacity-100" : "opacity-0")}>
            {children}
        </div>
    );
}

export default FadeInOut;