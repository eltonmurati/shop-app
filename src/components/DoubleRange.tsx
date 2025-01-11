const DoubleRange = () => {
    return (
        <div className="flex items-center gap-4">
            <div className="flex w-24">
                <div className="bg-bwcgray rounded-l-full py-2 pl-3 pr-2 text-xs font-medium ring-1 ring-gray-400 text-gray-500">£</div>
                <input type="text" placeholder="min" name="min" className="w-full rounded-r-full outline-none text-xs px-2 ring-1 ring-gray-400" />
            </div>
            <div className="w-40 bg-bwcgray h-2 relative rounded-full">
                <input type="range" name="min_val" min="0" max="100" value="0" 
                    className="absolute w-full top-1/2 transform -translate-y-1/2 pointer-events-none appearance-none bg-transparent [&::-webkit-slider-thumb]:appearance-none 
                        [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white 
                        [&::-webkit-slider-thumb]:pointer-events-none [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:ring-1 [&::-webkit-slider-thumb]:ring-gray-400
                        [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:ring-1 [&::-moz-range-thumb]:ring-gray-400 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 
                        [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:pointer-events-none [&::-moz-range-thumb]:cursor-pointer
                    " 
                />
                <input type="range" name="max_val" min="0" max="100" value="100" 
                    className="absolute w-full top-1/2 transform -translate-y-1/2 pointer-events-none appearance-none bg-transparent [&::-webkit-slider-thumb]:appearance-none 
                        [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white 
                        [&::-webkit-slider-thumb]:pointer-events-none [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:ring-1 [&::-webkit-slider-thumb]:ring-gray-400
                        [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:ring-1 [&::-moz-range-thumb]:ring-gray-400 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 
                        [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:pointer-events-none [&::-moz-range-thumb]:cursor-pointer
                    " 
                />
                <div className=""></div>
                <div className=""></div>
            </div>
            <div className="flex w-24">
                <div className="bg-bwcgray rounded-l-full py-2 pl-3 pr-2 text-xs font-medium ring-1 ring-gray-400 text-gray-500">£</div>
                <input type="text" placeholder="max" name="max" className="w-full rounded-r-full outline-none text-xs px-2 ring-1 ring-gray-400" />
            </div>
        </div>
        // <div className="w-max">
        //     <h3 className="text-center">Price</h3>
        //     <div className="w-full bg-gray-200 h-2 relative mb-6 mt-4 rounded-full">
        //         <input type="range" name="min_val" min="0" max="100" value="10" 
        //             className="absolute w-full top-1/2 transform -translate-y-1/2 pointer-events-none appearance-none bg-transparent [&::-webkit-slider-thumb]:appearance-none 
        //                 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white 
        //                 [&::-webkit-slider-thumb]:pointer-events-none [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-[0_3px_10px_rgb(0,0,0,0.2)]
        //                 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:shadow-[0_3px_10px_rgb(0,0,0,0.2)] [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 
        //                 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:pointer-events-none [&::-moz-range-thumb]:cursor-pointer
        //             " 
        //         />
        //         <input type="range" name="max_val" min="0" max="100" value="90" 
        //             className="absolute w-full top-1/2 transform -translate-y-1/2 pointer-events-none appearance-none bg-transparent [&::-webkit-slider-thumb]:appearance-none 
        //                 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white 
        //                 [&::-webkit-slider-thumb]:pointer-events-none [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-[0_3px_10px_rgb(0,0,0,0.2)]
        //                 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:shadow-[0_3px_10px_rgb(0,0,0,0.2)] [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 
        //                 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:pointer-events-none [&::-moz-range-thumb]:cursor-pointer
        //             " 
        //         />
        //         <div className=""></div>
        //         <div className=""></div>
        //     </div>
        //     <div className="flex justify-between gap-8">
        //         <div className="">
        //             <div className="flex">
        //                 <span className="ring-1 ring-gray-400 rounded-l-md text-gray-500 px-3 py-2 content-center text-center text-sm font-medium bg-gray-100">£</span>
        //                 <input type="text" placeholder="min" name="min_input" className="ring-1 ring-gray-400 rounded-r-md w-16 text-sm outline-none px-2" />
        //             </div>
        //         </div>
        //         <div className="">
        //             <div className="flex">
        //                 <span className="ring-1 ring-gray-400 rounded-l-md text-gray-500 px-3 py-2 content-center text-center text-sm font-medium bg-gray-100">£</span>
        //                 <input type="text" placeholder="max" name="max_input" className="ring-1 ring-gray-400 rounded-r-md w-16 text-sm outline-none px-2" />
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default DoubleRange