const FilterDropdown = () => {
    return(
        <div className="absolute top-10 left-0 bg-white z-20 rounded-2xl flex flex-col whitespace-nowrap shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="px-4 pb-1 pt-2 rounded-t-2xl hover:bg-gray-100">
                Option 1
            </div>
            <div className="px-4 py-1 hover:bg-gray-100">
                Option 2
            </div>
            <div className="px-4 pt-1 pb-2 rounded-b-2xl hover:bg-gray-100">
                Option 3
            </div>
        </div>
    );
}

export default FilterDropdown;