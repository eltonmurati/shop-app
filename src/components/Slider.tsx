"use client"

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
    {
        id: 1,
        title: "Title 1",
        description: "Description 1",
        img: "https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        url: "/",
        bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    },
    {
        id: 2,
        title: "Title 2",
        description: "Description 2",
        img: "https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        url: "/",
        bg: "bg-gradient-to-r from-pink-50 to-blue-50",
    },
    {
        id: 3,
        title: "Title 3",
        description: "Description 3",
        img: "https://images.pexels.com/photos/3755021/pexels-photo-3755021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        url: "/",
        bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    },
];

const Slider = () => {

    const [current, setCurrent] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrent(prev=>((prev) === slides.length-1 ? 0 : prev+1))
        },5000);

        return () => clearInterval(interval);
    },[]);

    return (
        <div className="h-[calc(100vh-80px)] xl:h-[calc(100vh-144px)] overflow-hidden relative">
            <div className="w-max h-full flex transition-all ease-in-out duration-1000" style={{transform:`translateX(-${current * 100}vw)`}}>
                {slides.map(slide=>(
                    <div className={`${slide.bg} w-screen h-full flex flex-col xl:flex-row`} key={slide.id}>
                        {/* TEXT CONTAINER */}
                        <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
                            <h2 className="text-xl lg:text-3xl 2xl:text-5xl">{slide.description}</h2>
                            <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">{slide.title}</h1>
                            <Link href={slide.url}>
                                <button className="rounded-md bg-black text-white py-3 px-4">SHOP NOW</button>
                            </Link>
                        </div>
                        {/* IMAGE CONTAINER */}
                        <div className="h-1/2 xl:w-1/2 xl:h-full relative">
                            <Image src={slide.img} alt="" fill sizes="100%" className="object-cover"/>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute m-auto bottom-8 left-1/2 flex transform -translate-x-1/2 gap-4">
                {slides.map((slide,index)=>(
                    <div 
                        className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${current === index ? "scale-150" : ""}`} 
                        key={slide.id}
                        onClick={()=>setCurrent(index)}
                    >
                        { current === index && (<div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>)}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;