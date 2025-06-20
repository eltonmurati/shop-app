"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({length, limit, page}:{length:number; limit:number; page:number;}) => {

    const maxPages = 5;
    const pages = Math.ceil(length / limit);
    let visiblePages = [];

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const {replace} = useRouter();
    const params = new URLSearchParams(searchParams);

    if (pages > maxPages) {
        if (page <= Math.floor(maxPages/2)) {
            for (let i = 1; i <= maxPages; i++) {
                visiblePages.push(i);
            }
        } else if (page > pages - Math.floor(maxPages/2)) {
            for (let i = pages; i > pages-maxPages; i--) {
                visiblePages.unshift(i);
            }
        } else {
            for (let i = maxPages % 2 === 0 ? -Math.floor(maxPages/2)+1 : -Math.floor(maxPages/2); i <= Math.floor(maxPages/2); i++) {
                visiblePages.push(Number(page)+Number(i));
            }
        }
    } else {
        for (let i = 1; i <= pages; i++) {
            visiblePages.push(i);
        }
    }

    const changePage = (p:number) => {
        if (p > 0 && p <= pages) {
            params.set("page", p.toString());
            replace(`${pathname}?${params}`);
        }
    }

    //if (!pathname.startsWith("/shop")) { return null; }

    return(
        <div className="flex justify-center w-full gap-8 text-blue-700">
            <button className={Number(page) === 1 ? "text-indigo-200 cursor-not-allowed" : ""} onClick={()=>changePage(1)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                    <path fillRule="evenodd" d="M4.72 9.47a.75.75 0 0 0 0 1.06l4.25 4.25a.75.75 0 1 0 1.06-1.06L6.31 10l3.72-3.72a.75.75 0 1 0-1.06-1.06L4.72 9.47Zm9.25-4.25L9.72 9.47a.75.75 0 0 0 0 1.06l4.25 4.25a.75.75 0 1 0 1.06-1.06L11.31 10l3.72-3.72a.75.75 0 0 0-1.06-1.06Z" clipRule="evenodd" />
                </svg>
            </button>
            <button className={Number(page) === 1 ? "text-indigo-200 cursor-not-allowed" : ""} onClick={()=>changePage(Number(page)-1)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                    <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                </svg>
            </button>
            {visiblePages.map((p)=>(
                <button className={p === Number(page) ? "underline underline-offset-4 decoration-2" : ""} key={p} onClick={()=>changePage(p)}>{p.toString()}</button>
            ))}
            <button className={Number(page) === pages ? "text-indigo-200 cursor-not-allowed" : ""} onClick={()=>changePage(Number(page)+1)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                    <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
            </button>
            <button className={Number(page) === pages ? "text-indigo-200 cursor-not-allowed" : ""} onClick={()=>changePage(pages)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                    <path fillRule="evenodd" d="M15.28 9.47a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06L13.69 10 9.97 6.28a.75.75 0 0 1 1.06-1.06l4.25 4.25ZM6.03 5.22l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L8.69 10 4.97 6.28a.75.75 0 0 1 1.06-1.06Z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    );
}

export default Pagination;