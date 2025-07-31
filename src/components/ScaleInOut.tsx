"use client";

import { ReactNode, useEffect, useState } from "react";

const ScaleInOut = ({children, mount, initialState}:{children: ReactNode; mount: boolean; initialState: boolean;}) => {
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
        <div className={"transition-all duration-200 "  + (visible ? "opacity-100 max-h-[9999px]" : "opacity-0 max-h-0")}>
            {children}
        </div>
    );
}

export default ScaleInOut;