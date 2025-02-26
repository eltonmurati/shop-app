"use client";

import { useState } from "react";

const TestPage = () => {

    const [loading, setLoading] = useState(false);

    const handleTest = () => {
        setLoading(true);
        fetch('/api/send', {method:'POST'}).then(()=>{
            setLoading(false);
        });
    }

    return(
        <div className="flex items-center justify-center p-16 gap-4">
            <button className="rounded-md p-2 bg-blue-700 text-white disabled:bg-indigo-200" 
                disabled={loading} 
                onClick={handleTest}
            >
                {loading ? "Loading..." : "Test"}
            </button>
            
        </div>
    );
}

export default TestPage;