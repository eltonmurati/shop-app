import Link from "next/link"

const menus = [
    [
        {title: "All", link: "/shop?&cat=1", id: 1}, {title: "Combi", link: "/shop?&cat=2", id: 2}, {title: "System", link: "/shop?&cat=3", id: 3},
        {title: "Electric", link: "/shop?&cat=4", id: 4}, {title: "Heat Only", link: "/shop?&cat=5", id: 5}, {title: "Baxi", link: "/shop?&cat=1&brand=1", id: 6}, 
        {title: "Bosch", link: "/shop?&cat=1&brand=2", id: 7}, {title: "Glowworm", link: "/shop?&cat=1&brand=3", id: 8}, {title: "Grant", link: "/shop?&cat=1&brand=4", id: 9}, 
        {title: "Heatrae Sadia", link: "/shop?&cat=1&brand=5", id: 10}, {title: "Ideal Heating", link: "/shop?&cat=1&brand=6", id: 11}, 
        {title: "Main", link: "/shop?&cat=1&brand=7", id: 12}, {title: "Vaillant", link: "/shop?&cat=1&brand=8", id: 13}, {title: "Viessmann", link: "/shop?&cat=1&brand=9", id: 14}, 
        {title: "Worcester Bosch", link: "/shop?&cat=1&brand=10", id: 15}
    ],
    [
        {title: "All", link: "/shop?&cat=6", id: 1}, {title: "Flues", link: "/shop?&cat=7", id: 2}, {title: "Accessories", link: "/shop?&cat=8", id: 3}, 
        {title: "Ariston", link: "/shop?&cat=6&brand=11", id: 4}, {title: "Baxi", link: "/shop?&cat=6&brand=1", id: 5}, {title: "Bosch", link: "/shop?&cat=6&brand=2", id: 6}, 
        {title: "Glowworm", link: "/shop?&cat=6&brand=3", id: 7}, {title: "Grant", link: "/shop?&cat=6&brand=4", id: 8}, {title: "Heatline", link: "/shop?&cat=6&brand=12", id: 9}, 
        {title: "Heatrae Sadia", link: "/shop?&cat=6&brand=5", id: 10}, {title: "Ideal Heating", link: "/shop?&cat=6&brand=6", id: 11}, 
        {title: "Keston", link: "/shop?&cat=6&brand=13", id: 12}, {title: "Vaillant", link: "/shop?&cat=6&brand=8", id: 13}, {title: "Viessmann", link: "/shop?&cat=6&brand=9", id: 14}, 
        {title: "Worcester Bosch", link: "/shop?&cat=6&brand=10", id: 15}
    ],
    [
        {title: "All", link: "/shop?&cat=9", id: 1}, {title: "Heating Controls", link: "/shop?&cat=10", id: 2}, {title: "Cylinders", link: "/shop?&cat=11", id: 3}, 
        {title: "Pumps", link: "/shop?&cat=12", id: 4}, {title: "Radiator Valves & TRVs", link: "/shop?&cat=13", id: 5}, {title: "Smart Home", link: "/shop?&cat=14", id: 6}, 
        {title: "Water Heaters", link: "/shop?&cat=15", id: 7}, {title: "Water Treatment", link: "/shop?&cat=16", id: 8}, {title: "Motorised Valves", link: "/shop?&cat=17", id: 9}, 
        {title: "Thermostats", link: "/shop?&cat=18", id: 10}, {title: "Valves & Fittings", link: "/shop?&cat=19", id: 11}, {title: "Safety Devices", link: "/shop?&cat=20", id: 12}, 
        {title: "Spares & Accessories", link: "/shop?&cat=21", id: 13}
    ],
    [
        {title: "All", link: "/shop?&cat=99", id: 1}, {title: "Compact", link: "/shop?&cat=22", id: 2}, {title: "Decorative", link: "/shop?&cat=23", id: 3}, 
        {title: "Column", link: "/shop?&cat=24", id: 4}, {title: "Electric", link: "/shop?&cat=25", id: 5}, {title: "Fan Convectors", link: "/shop?&cat=26", id: 6}, 
        {title: "Henrad", link: "/shop?&cat=99&brand=20", id: 7}, {title: "Prorad", link: "/shop?&cat=99&brand=21", id: 8}, {title: "Stelrad", link: "/shop?&cat=99&brand=22", id: 9}, 
        {title: "Atlantic", link: "/shop?&cat=99&brand=23", id: 10}, {title: "Type 11", link: "/shop?&cat=27", id: 11}, {title: "Type 22", link: "/shop?&cat=28", id: 12}
    ],
    [
        {title: "All", link: "/shop?&cat=29", id: 1}, {title: "Brass Fittings & Accessories", link: "/shop?&cat=30", id: 2}, {title: "Brassware", link: "/shop?&cat=31", id: 3}, 
        {title: "Clips & Fixings", link: "/shop?&cat=32", id: 4}, {title: "Compression", link: "/shop?&cat=33", id: 5}, {title: "Copper Tube", link: "/shop?&cat=34", id: 6}, 
        {title: "Endfeed", link: "/endfeed", id: 7}, {title: "Gas Fittings & Accessories", link: "/shop?&cat=36", id: 8}, {title: "Malleable Iron", link: "/shop?&cat=37", id: 9}, 
        {title: "Oil Line Components", link: "/shop?&cat=38", id: 10}, {title: "Press Fit", link: "/shop?&cat=39", id: 11}, {title: "Solder Ring", link: "/shop?&cat=40", id: 12}, 
        {title: "Push Fit", link: "/shop?&cat=102", id: 13}
    ],
    [
        {title: "All", link: "/shop?&cat=41", id: 1}, {title: "Pipe", link: "/shop?&cat=42", id: 2}, {title: "Fittings", link: "/shop?&cat=43", id: 3}, 
        {title: "MDPE Fittings", link: "/shop?&cat=44", id: 4}, {title: "Rainwater Fittings", link: "/shop?&cat=45", id: 5}, {title: "Wastes & Traps", link: "/shop?&cat=46", id: 6}, 
        {title: "McAlpine", link: "/shop?&cat=41&brand=14", id: 7}, {title: "JG Speedfit", link: "/shop?&cat=41&brand=15", id: 8}, {title: "Hep20", link: "/shop?&cat=41&brand=16", id: 9}, 
        {title: "FloPlast", link: "/shop?&cat=41&brand=17", id: 10}, {title: "Plasson", link: "/shop?&cat=41&brand=18", id: 11}, {title: "Polypipe", link: "/shop?&cat=41&brand=19", id: 12}
    ],
    [
        {title: "Bathroom", link: "/shop?&cat=59", id: 1}, {title: "Kitchen", link: "/shop?&cat=60", id: 2}, {title: "Baths", link: "/shop?&cat=61", id: 3}, 
        {title: "Bath Panels & Screens", link: "/shop?&cat=62", id: 4}, {title: "Shower Enclosures", link: "/shop?&cat=63", id: 5}, {title: "Furniture", link: "/shop?&cat=64", id: 6},
        {title: "Macerators", link: "/shop?&cat=65", id: 7}, {title: "Sanitaryware", link: "/shop?&cat=66", id: 8}, {title: "Showers", link: "/shop?&cat=67", id: 9}, 
        {title: "Shower Trays", link: "/shop?&cat=68", id: 10}, {title: "Taps", link: "/shop?&cat=69", id: 11}, {title: "Towel Rails & Decorative Heating", link: "/shop?&cat=70", id: 12}, 
        {title: "Wastes, Traps & Connectors", link: "/shop?&cat=71", id: 13}, {title: "Spares & Accessories", link: "/shop?&cat=103", id: 14}, {title: "Grohe", link: "/shop?&cat=58&brand=24", id: 15}, 
        {title: "Mira", link: "/shop?&cat=58&brand=25", id: 16}, {title: "Roca", link: "/shop?&cat=58&brand=26", id: 17}
    ],
    [
        {title: "All", link: "/shop?&cat=77", id: 1}, {title: "Tools", link: "/shop?&cat=78", id: 2}, {title: "Sealants & Additives", link: "/shop?&cat=79", id: 3}, 
        {title: "Insulation", link: "/shop?&cat=80", id: 4}, {title: "Clips & Fixings", link: "/shop?&cat=82", id: 5}, {title: "Electrical Fittings", link: "/shop?&cat=83", id: 6}, 
        {title: "Cable & Clips", link: "/shop?&cat=84", id: 7}, {title: "Sockets & Switches", link: "/shop?&cat=85", id: 8}, {title: "Ventilation", link: "/shop?&cat=86", id: 9}, 
        {title: "Talon", link: "/shop?&cat=77&brand=27", id: 10}, {title: "Fernox", link: "/shop?&cat=77&brand=28", id: 11}, {title: "Primaflow", link: "/shop?&cat=77&brand=29", id: 12}, 
        {title: "Arctic Hayes", link: "/shop?&cat=77&brand=30", id: 13}, {title: "Rothenberger", link: "/shop?&cat=77&brand=31", id: 14}, 
        {title: "Everbuild", link: "/shop?&cat=77&brand=32", id: 15}, {title: "Manrose", link: "/shop?&cat=77&brand=33", id: 16}
    ],
    [
        {title: "All", link: "/shop?&cat=87", id: 1}, {title: "Cylinders", link: "/shop?&cat=88", id: 2}, {title: "Heat Pumps", link: "/shop?&cat=89", id: 3}, 
        {title: "Heat Recovery", link: "/shop?&cat=90", id: 4}, {title: "Heating Controls", link: "/shop?&cat=91", id: 5}, {title: "Solar", link: "/shop?&cat=92", id: 6}, 
        {title: "Water Treatment", link: "/shop?&cat=93", id: 7}, {title: "Baxi", link: "/shop?&cat=87&brand=1", id: 8}, {title: "Grant", link: "/shop?&cat=87&brand=4", id: 9}, 
        {title: "Vaillant", link: "/shop?&cat=87&brand=8", id: 10}, {title: "Viessmann", link: "/shop?&cat=87&brand=9", id: 11}, 
        {title: "Worcester Bosch", link: "/shop?&cat=87&brand=10", id: 12}
    ]
]

const SubcategoryMenu = ({tabId}:{tabId:number}) => {
    return (
        <div className="absolute z-40 bg-white flex flex-wrap w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            {menus[tabId-1].map((option)=>(
                <Link href={option.link} key={option.id} className="w-1/12 px-2 h-16 bg-white hover:bg-gray-100 flex items-center justify-center text-center leading-tight">
                    <div className="line-clamp-3 text-ellipsis">{option.title}</div>
                </Link>
            ))}
        </div>
    )
}

export default SubcategoryMenu