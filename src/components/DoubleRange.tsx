const DoubleRange = ({title, measurement}:{title:string; measurement:string;}) => {
    // https://www.youtube.com/watch?v=ujncLU2bt4k
    return (
        <div className="flex flex-col gap-4 bg-bwcgray rounded-2xl py-2 px-2">
            <h3 className="text-xs font-medium text-center">{title}</h3>
            <div className="w-44 bg-white h-2 relative rounded-full">
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
            </div>
            <div className="flex justify-between">
                <div className="flex w-20">
                    <div className="bg-bwcgray rounded-l-full py-1 pl-2 pr-2 text-xs font-medium ring-1 ring-gray-400">{measurement}</div>
                    <input type="text" placeholder="min" name="min" className="w-full rounded-r-full outline-none text-xs px-1 ring-1 ring-gray-400" />
                </div>
                <div className="flex w-20">
                    <div className="bg-bwcgray rounded-l-full py-1 pl-2 pr-2 text-xs font-medium ring-1 ring-gray-400">{measurement}</div>
                    <input type="text" placeholder="max" name="max" className="w-full rounded-r-full outline-none text-xs px-1 ring-1 ring-gray-400" />
                </div>
            </div>
        </div>
    )
}

export default DoubleRange