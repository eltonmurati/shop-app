import Link from "next/link"

const menus = [
    [
        {title: "All", link: "/shop?stock=true&cat=1", id: 1}, {title: "Combi", link: "/shop?stock=true&cat=2", id: 2}, {title: "System", link: "/shop?stock=true&cat=3", id: 3},
        {title: "Electric", link: "/shop?stock=true&cat=4", id: 4}, {title: "Heat Only", link: "/shop?stock=true&cat=5", id: 5}, {title: "Baxi", link: "/shop?stock=true&cat=1&brand=1", id: 6}, 
        {title: "Bosch", link: "/shop?stock=true&cat=1&brand=2", id: 7}, {title: "Glowworm", link: "/shop?stock=true&cat=1&brand=3", id: 8}, {title: "Grant", link: "/shop?stock=true&cat=1&brand=4", id: 9}, 
        {title: "Heatrae Sadia", link: "/shop?stock=true&cat=1&brand=5", id: 10}, {title: "Ideal Heating", link: "/shop?stock=true&cat=1&brand=6", id: 11}, 
        {title: "Main", link: "/shop?stock=true&cat=1&brand=7", id: 12}, {title: "Vaillant", link: "/shop?stock=true&cat=1&brand=8", id: 13}, {title: "Viessmann", link: "/shop?stock=true&cat=1&brand=9", id: 14}, 
        {title: "Worcester Bosch", link: "/shop?stock=true&cat=1&brand=10", id: 15}
    ],
    [
        {title: "All", link: "/shop?stock=true&cat=6", id: 1}, {title: "Flues", link: "/shop?stock=true&cat=7", id: 2}, {title: "Accessories", link: "/shop?stock=true&cat=8", id: 3}, 
        {title: "Ariston", link: "/shop?stock=true&cat=6&brand=11", id: 4}, {title: "Baxi", link: "/shop?stock=true&cat=6&brand=1", id: 5}, {title: "Bosch", link: "/shop?stock=true&cat=6&brand=2", id: 6}, 
        {title: "Glowworm", link: "/shop?stock=true&cat=6&brand=3", id: 7}, {title: "Grant", link: "/shop?stock=true&cat=6&brand=4", id: 8}, {title: "Heatline", link: "/shop?stock=true&cat=6&brand=12", id: 9}, 
        {title: "Heatrae Sadia", link: "/shop?stock=true&cat=6&brand=5", id: 10}, {title: "Ideal Heating", link: "/shop?stock=true&cat=6&brand=6", id: 11}, 
        {title: "Keston", link: "/shop?stock=true&cat=6&brand=13", id: 12}, {title: "Vaillant", link: "/shop?stock=true&cat=6&brand=8", id: 13}, {title: "Viessmann", link: "/shop?stock=true&cat=6&brand=9", id: 14}, 
        {title: "Worcester Bosch", link: "/shop?stock=true&cat=6&brand=10", id: 15}
    ],
    [
        {title: "All", link: "/shop?stock=true&cat=9", id: 1}, {title: "Heating Controls", link: "/shop?stock=true&cat=10", id: 2}, {title: "Cylinders", link: "/shop?stock=true&cat=11", id: 3}, 
        {title: "Pumps", link: "/shop?stock=true&cat=12", id: 4}, {title: "Radiator Valves & TRVs", link: "/shop?stock=true&cat=13", id: 5}, {title: "Smart Home", link: "/shop?stock=true&cat=14", id: 6}, 
        {title: "Water Heaters", link: "/shop?stock=true&cat=15", id: 7}, {title: "Water Treatment", link: "/shop?stock=true&cat=16", id: 8}, {title: "Motorised Valves", link: "/shop?stock=true&cat=17", id: 9}, 
        {title: "Thermostats", link: "/shop?stock=true&cat=18", id: 10}, {title: "Valves & Fittings", link: "/shop?stock=true&cat=19", id: 11}, {title: "Safety Devices", link: "/shop?stock=true&cat=20", id: 12}, 
        {title: "Spares & Accessories", link: "/shop?stock=true&cat=21", id: 13}
    ],
    [
        {title: "All", link: "/shop?stock=true&cat=99", id: 1}, {title: "Compact", link: "/shop?stock=true&cat=22", id: 2}, {title: "Decorative", link: "/shop?stock=true&cat=23", id: 3}, 
        {title: "Column", link: "/shop?stock=true&cat=24", id: 4}, {title: "Electric", link: "/shop?stock=true&cat=25", id: 5}, {title: "Fan Convectors", link: "/shop?stock=true&cat=26", id: 6}, 
        {title: "Henrad", link: "/shop?stock=true&cat=99&brand=20", id: 7}, {title: "Prorad", link: "/shop?stock=true&cat=99&brand=21", id: 8}, {title: "Stelrad", link: "/shop?stock=true&cat=99&brand=22", id: 9}, 
        {title: "Atlantic", link: "/shop?stock=true&cat=99&brand=23", id: 10}, {title: "Type 11", link: "/shop?stock=true&cat=27", id: 11}, {title: "Type 22", link: "/shop?stock=true&cat=28", id: 12}
    ],
    [
        {title: "All", link: "/shop?stock=true&cat=29", id: 1}, {title: "Brass Fittings & Accessories", link: "/shop?stock=true&cat=30", id: 2}, {title: "Brassware", link: "/shop?stock=true&cat=31", id: 3}, 
        {title: "Clips & Fixings", link: "/shop?stock=true&cat=32", id: 4}, {title: "Compression", link: "/shop?stock=true&cat=33", id: 5}, {title: "Copper Tube", link: "/shop?stock=true&cat=34", id: 6}, 
        {title: "Endfeed", link: "/shop?stock=true&cat=35", id: 7}, {title: "Gas Fittings & Accessories", link: "/shop?stock=true&cat=36", id: 8}, {title: "Malleable Iron", link: "/shop?stock=true&cat=37", id: 9}, 
        {title: "Oil Line Components", link: "/shop?stock=true&cat=38", id: 10}, {title: "Press Fit", link: "/shop?stock=true&cat=39", id: 11}, {title: "Solder Ring", link: "/shop?stock=true&cat=40", id: 12}, 
        {title: "Push Fit", link: "/shop?stock=true&cat=102", id: 13}
    ],
    [
        {title: "All", link: "/shop?stock=true&cat=41", id: 1}, {title: "Pipe", link: "/shop?stock=true&cat=42", id: 2}, {title: "Fittings", link: "/shop?stock=true&cat=43", id: 3}, 
        {title: "MDPE Fittings", link: "/shop?stock=true&cat=44", id: 4}, {title: "Rainwater Fittings", link: "/shop?stock=true&cat=45", id: 5}, {title: "Wastes & Traps", link: "/shop?stock=true&cat=46", id: 6}, 
        {title: "McAlpine", link: "/shop?stock=true&cat=41&brand=14", id: 7}, {title: "JG Speedfit", link: "/shop?stock=true&cat=41&brand=15", id: 8}, {title: "Hep20", link: "/shop?stock=true&cat=41&brand=16", id: 9}, 
        {title: "FloPlast", link: "/shop?stock=true&cat=41&brand=17", id: 10}, {title: "Plasson", link: "/shop?stock=true&cat=41&brand=18", id: 11}, {title: "Polypipe", link: "/shop?stock=true&cat=41&brand=19", id: 12}
    ],
    [
        {title: "All", link: "/shop?stock=true&cat=47", id: 1}, {title: "Bathroom Accessories", link: "/shop?stock=true&cat=48", id: 2}, {title: "Metal Plumbing", link: "/shop?stock=true&cat=49", id: 3}, 
        {title: "Wastes", link: "/shop?stock=true&cat=50", id: 4}, {title: "WC & Cistern Parts", link: "/shop?stock=true&cat=51", id: 5}, {title: "Radiator Valves", link: "/shop?stock=true&cat=52", id: 6}, 
        {title: "Clips, Sundries & Tools", link: "/shop?stock=true&cat=53", id: 7}, {title: "Merchandise", link: "/shop?stock=true&cat=54", id: 8}, {title: "Rainwater", link: "/shop?stock=true&cat=55", id: 9}, 
        {title: "Plastic Plumbing", link: "/shop?stock=true&cat=56", id: 10}, {title: "Ventilation", link: "/shop?stock=true&cat=57", id: 11}
    ],
    [
        {title: "Bathroom", link: "/shop?stock=true&cat=59", id: 1}, {title: "Kitchen", link: "/shop?stock=true&cat=60", id: 2}, {title: "Baths", link: "/shop?stock=true&cat=61", id: 3}, 
        {title: "Bath Panels & Screens", link: "/shop?stock=true&cat=62", id: 4}, {title: "Shower Enclosures", link: "/shop?stock=true&cat=63", id: 5}, {title: "Furniture", link: "/shop?stock=true&cat=64", id: 6},
        {title: "Macerators", link: "/shop?stock=true&cat=65", id: 7}, {title: "Sanitaryware", link: "/shop?stock=true&cat=66", id: 8}, {title: "Showers", link: "/shop?stock=true&cat=67", id: 9}, 
        {title: "Shower Trays", link: "/shop?stock=true&cat=68", id: 10}, {title: "Taps", link: "/shop?stock=true&cat=69", id: 11}, {title: "Towel Rails & Decorative Heating", link: "/shop?stock=true&cat=70", id: 12}, 
        {title: "Wastes, Traps & Connectors", link: "/shop?stock=true&cat=71", id: 13}, {title: "Spares & Accessories", link: "/shop?stock=true&cat=103", id: 14}, {title: "Grohe", link: "/shop?stock=true&cat=58&brand=24", id: 15}, 
        {title: "Mira", link: "/shop?stock=true&cat=58&brand=25", id: 16}, {title: "Roca", link: "/shop?stock=true&cat=58&brand=26", id: 17}
    ],
    [
        {title: "All", link: "/shop?stock=true&cat=72", id: 1}, {title: "Electric Fires", link: "/shop?stock=true&cat=73", id: 2}, {title: "Gas Fires", link: "/shop?stock=true&cat=74", id: 3}, 
        {title: "Stoves", link: "/shop?stock=true&cat=75", id: 4}, {title: "Suites & Surroundings", link: "/shop?stock=true&cat=76", id: 5}, {title: "Crystal Fires", link: "/shop?stock=true&cat=72&brand=34", id: 6}, 
        {title: "Dimplex", link: "/shop?stock=true&cat=72&brand=35", id: 7}, {title: "Flavel", link: "/shop?stock=true&cat=72&brand=36", id: 8}, {title: "Valor", link: "/shop?stock=true&cat=72&brand=37", id: 9}, 
        {title: "Be Modern", link: "/shop?stock=true&cat=72&brand=38", id: 10}, {title: "Broseley", link: "/shop?stock=true&cat=72&brand=39", id: 11}, {title: "Burley", link: "/shop?stock=true&cat=72&brand=40", id: 12},
        {title: "AGA", link: "/shop?stock=true&cat=72&brand=41", id: 13}, {title: "Adam", link: "/shop?stock=true&cat=72&brand=42", id: 14}, {title: "Aurora", link: "/shop?stock=true&cat=72&brand=43", id: 15}
    ],
    [
        {title: "All", link: "/shop?stock=true&cat=77", id: 1}, {title: "Tools", link: "/shop?stock=true&cat=78", id: 2}, {title: "Sealants & Additives", link: "/shop?stock=true&cat=79", id: 3}, 
        {title: "Insulation", link: "/shop?stock=true&cat=80", id: 4}, {title: "Clips & Fixings", link: "/shop?stock=true&cat=82", id: 5}, {title: "Electrical Fittings", link: "/shop?stock=true&cat=83", id: 6}, 
        {title: "Cable & Clips", link: "/shop?stock=true&cat=84", id: 7}, {title: "Sockets & Switches", link: "/shop?stock=true&cat=85", id: 8}, {title: "Ventilation", link: "/shop?stock=true&cat=86", id: 9}, 
        {title: "Talon", link: "/shop?stock=true&cat=77&brand=27", id: 10}, {title: "Fernox", link: "/shop?stock=true&cat=77&brand=28", id: 11}, {title: "Primaflow", link: "/shop?stock=true&cat=77&brand=29", id: 12}, 
        {title: "Arctic Hayes", link: "/shop?stock=true&cat=77&brand=30", id: 13}, {title: "Rothenberger", link: "/shop?stock=true&cat=77&brand=31", id: 14}, 
        {title: "Everbuild", link: "/shop?stock=true&cat=77&brand=32", id: 15}, {title: "Manrose", link: "/shop?stock=true&cat=77&brand=33", id: 16}
    ],
    [
        {title: "All", link: "/shop?stock=true&cat=87", id: 1}, {title: "Cylinders", link: "/shop?stock=true&cat=88", id: 2}, {title: "Heat Pumps", link: "/shop?stock=true&cat=89", id: 3}, 
        {title: "Heat Recovery", link: "/shop?stock=true&cat=90", id: 4}, {title: "Heating Controls", link: "/shop?stock=true&cat=91", id: 5}, {title: "Solar", link: "/shop?stock=true&cat=92", id: 6}, 
        {title: "Water Treatment", link: "/shop?stock=true&cat=93", id: 7}, {title: "Baxi", link: "/shop?stock=true&cat=87&brand=1", id: 8}, {title: "Grant", link: "/shop?stock=true&cat=87&brand=4", id: 9}, 
        {title: "Vaillant", link: "/shop?stock=true&cat=87&brand=8", id: 10}, {title: "Viessmann", link: "/shop?stock=true&cat=87&brand=9", id: 11}, 
        {title: "Worcester Bosch", link: "/shop?stock=true&cat=87&brand=10", id: 12}
    ]
]

const SubcategoryMenu = ({tabId} : any) => {
    return (
        <div className="absolute z-10 bg-white flex flex-wrap w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            {menus[tabId-1].map((option)=>(
                <Link href={option.link} key={option.id} className="w-[7.14285714286%] px-2 h-16 hover:bg-gray-100 flex items-center justify-center text-center leading-tight">
                    <div className="line-clamp-3 inline text-ellipsis">{option.title}</div>
                </Link>
            ))}
        </div>
    )
}

export default SubcategoryMenu