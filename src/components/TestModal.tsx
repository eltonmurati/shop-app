"use client"

import { useState } from "react";

const TestModal = () => {
    const [open, setOpen] = useState(false);

    return(
        <>
            {open && (
                <div className="absolute bg-white rounded-md h-96 w-96 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    TestModal
                </div>
            )}
        </>
    );
}

export default TestModal;