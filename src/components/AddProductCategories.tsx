"use client"

import { postgres } from "@/lib/postgresClient";
import { useEffect, useState } from "react";

const AddProductCategories = ({updateCategories}:{updateCategories:React.Dispatch<React.SetStateAction<{ [k:number]: number } | undefined>>;}) => {
    const [count, setCount] = useState(0);
    const [categories, setCategories] = useState([] as number[]);
    const [cats, setCats] = useState([] as {id:number, name:string}[]);

    const [final, setFinal] = useState<{ [k:number]: number} | undefined>();

    const getCategories = async () => {
        const { data } = await postgres.from("category").select().order("name", {ascending:true});
        if (data) { setCats(data); }
    }

    useEffect(()=>{
        getCategories();
    },[]);

    const removeCategory = (category:number) => {
        const i = categories.indexOf(category);
        const newCategories = [...categories];
        newCategories.splice(i, 1);
        setCategories(newCategories);

        let newFinal = {...final};
        delete newFinal[category];
        setFinal(newFinal);
        updateCategories(newFinal);
    }

    const addCategory = (category:number) => {
        const newCategories = [...categories];
        newCategories.push(category);
        setCategories(newCategories);

        let newFinal = {...final};
        newFinal[category] = 62;
        setFinal(newFinal);
        updateCategories(newFinal);
    }

    const changeCategory = (e:React.ChangeEvent<HTMLSelectElement>, category:number) => {
        let newFinal = {...final};
        newFinal[category] = Number(e.target.value);
        setFinal(newFinal);
        updateCategories(newFinal);
    }

    return(
        <div className="flex flex-col gap-2 w-full max-w-[20rem]">
            <label className="text-sm text-gray-700 ">Categories</label>
            {categories.length > 0 && (
                <div className="flex flex-col gap-2 max-h-[5.5rem] overflow-y-auto">
                    {categories.map((category)=>(
                        <div key={category} className="flex gap-1">
                            <select 
                                name="category" 
                                className="text-sm h-6 ring-2 ring-inset ring-gray-300 rounded-md px-2 outline-none cursor-pointer w-full" 
                                onChange={e=>changeCategory(e, category)}
                            >
                                {cats.map(cat=>(
                                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                                ))}
                            </select>
                            <button type="button" className="text-gray-400 hover:text-red-500 transition-colors linear duration-200" onClick={()=>removeCategory(category)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            )}
            <div className="flex gap-2">
                <button type="button" className={"transition-colors linear duration-200 hover:text-blue-700 text-gray-400 w-max flex gap-1 " + (!(categories.length > 0) && "my-4")} onClick={()=>{setCount(count+1); addCategory(count);}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    Add Category
                </button>
                {categories.length > 3 && (
                    <button type="button" className="text-red-200 flex gap-1 items-center hover:text-red-500 transition-colors linear duration-200" onClick={()=>setCategories([])}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                        </svg>
                        Clear
                    </button>
                )}
            </div>
        </div>
    );
}

export default AddProductCategories;