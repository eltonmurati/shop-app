"use client"

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
    {
        id: 1,
        title: "£326.14",
        description: "Vaillant VR 940f + VRT 51f",
        img: "/productImages/703/1.jpg",
        url: "/product/703",
        bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    },
    {
        id: 2,
        title: "£207.36",
        description: "Vaillant 22mm Filter Boiler Protection Kit",
        img: "/productImages/1426/1.jpg",
        url: "/product/1426",
        bg: "bg-gradient-to-r from-pink-50 to-blue-50",
    },
    {
        id: 3,
        title: "£233.24",
        description: "2 PORT 22MM+AUX SWITCH",
        img: "/productImages/765/1.jpg",
        url: "/product/765",
        bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    },
];

const Slider = () => {

    const [current, setCurrent] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrent(prev=>((prev) === slides.length-1 ? 0 : prev+1))
        },3000);

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
                            <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-medium">{slide.title}</h1>
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