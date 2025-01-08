import Link from "next/link"

const menus = [
    [
        {title: "All", link: "/list?cat=1", id: 1}, {title: "Combi", link: "/list?cat=2", id: 2}, {title: "System", link: "/list?cat=3", id: 3},
        {title: "Electric", link: "/list?cat=4", id: 4}, {title: "Heat Only", link: "/list?cat=5", id: 5}, {title: "Baxi", link: "/list?cat=1", id: 6}, 
        {title: "Bosch", link: "/list?cat=1", id: 7}, {title: "Glowworm", link: "/list?cat=1", id: 8}, {title: "Grant", link: "/list?cat=1", id: 9}, 
        {title: "Heatrae Sadia", link: "/list?cat=1", id: 10}, {title: "Ideal Heating", link: "/list?cat=1", id: 11}, {title: "Main", link: "/list?cat=1", id: 12}, 
        {title: "Vaillant", link: "/list?cat=1", id: 13}, {title: "Viessmann", link: "/list?cat=1", id: 14}, {title: "Worcester Bosch", link: "/list?cat=1", id: 15}
    ],
    [
        {title: "All", link: "/list?cat=6", id: 1}, {title: "Flues", link: "/list?cat=7", id: 2}, {title: "Accessories", link: "/list?cat=8", id: 3}, 
        {title: "Ariston", link: "/list?cat=6", id: 4}, {title: "Baxi", link: "/list?cat=6", id: 5}, {title: "Bosch", link: "/list?cat=6", id: 6}, 
        {title: "Glowworm", link: "/list?cat=6", id: 7}, {title: "Grant", link: "/list?cat=6", id: 8}, {title: "Heatline", link: "/list?cat=6", id: 9}, 
        {title: "Heatrae Sadia", link: "/list?cat=6", id: 10}, {title: "Ideal Heating", link: "/list?cat=6", id: 11}, {title: "Keston", link: "/list?cat=6", id: 12},
        {title: "Vaillant", link: "/list?cat=6", id: 13}, {title: "Viessmann", link: "/list?cat=6", id: 14}, {title: "Worcester Bosch", link: "/list?cat=6", id: 15}
    ],
    [
        {title: "All", link: "/list?cat=9", id: 1}, {title: "Heating Controls", link: "/list?cat=10", id: 2}, {title: "Cylinders", link: "/list?cat=11", id: 3}, 
        {title: "Pumps", link: "/list?cat=12", id: 4}, {title: "Radiator Valves & TRVs", link: "/list?cat=13", id: 5}, {title: "Smart Home", link: "/list?cat=14", id: 6}, 
        {title: "Water Heaters", link: "/list?cat=15", id: 7}, {title: "Water Treatment", link: "/list?cat=16", id: 8}, {title: "Motorised Valves", link: "/list?cat=17", id: 9}, 
        {title: "Thermostats", link: "/list?cat=18", id: 10}, {title: "Valves & Fittings", link: "/list?cat=19", id: 11}, {title: "Safety Devices", link: "/list?cat=20", id: 12}, 
        {title: "Spares & Accessories", link: "/list?cat=21", id: 13}
    ],
    [
        {title: "All", link: "/list?cat=99", id: 1}, {title: "Compact", link: "/list?cat=22", id: 2}, {title: "Decorative", link: "/list?cat=23", id: 3}, 
        {title: "Column", link: "/list?cat=24", id: 4}, {title: "Electric", link: "/list?cat=25", id: 5}, {title: "Fan Convectors", link: "/list?cat=26", id: 6}, 
        {title: "Henrad", link: "/list?cat=99", id: 7}, {title: "Prorad", link: "/list?cat=99", id: 8}, {title: "Stelrad", link: "/list?cat=99", id: 9}, 
        {title: "Atlantic", link: "/list?cat=99", id: 10}, {title: "Type 11", link: "/list?cat=27", id: 11}, {title: "Type 22", link: "/list?cat=28", id: 12}
    ],
    [
        {title: "All", link: "/list?cat=29", id: 1}, {title: "Brass Fittings & Accessories", link: "/list?cat=30", id: 2}, {title: "Brassware", link: "/list?cat=31", id: 3}, 
        {title: "Clips & Fixings", link: "/list?cat=32", id: 4}, {title: "Compression", link: "/list?cat=33", id: 5}, {title: "Copper Tube", link: "/list?cat=34", id: 6}, 
        {title: "Endfeed", link: "/list?cat=35", id: 7}, {title: "Gas Fittings & Accessories", link: "/list?cat=36", id: 8}, {title: "Malleable Iron", link: "/list?cat=37", id: 9}, 
        {title: "Oil Line Components", link: "/list?cat=38", id: 10}, {title: "Press Fit", link: "/list?cat=39", id: 11}, {title: "Solder Ring", link: "/list?cat=40", id: 12}
    ],
    [
        {title: "All", link: "/list?cat=41", id: 1}, {title: "Pipe", link: "/list?cat=42", id: 2}, {title: "Fittings", link: "/list?cat=43", id: 3}, 
        {title: "MDPE Fittings", link: "/list?cat=44", id: 4}, {title: "Rainwater Fittings", link: "/list?cat=45", id: 5}, {title: "Wastes & Traps", link: "/list?cat=46", id: 6}, 
        {title: "McAlpine", link: "/list?cat=41", id: 7}, {title: "JG Speedfit", link: "/list?cat=41", id: 8}, {title: "Hep20", link: "/list?cat=41", id: 9}, 
        {title: "FloPlast", link: "/list?cat=41", id: 10}, {title: "Plasson", link: "/list?cat=41", id: 11}, {title: "Polypipe", link: "/list?cat=41", id: 12}
    ],
    [
        {title: "All", link: "/list?cat=47", id: 1}, {title: "Bathroom Accessories", link: "/list?cat=48", id: 2}, {title: "Metal Plumbing", link: "/list?cat=49", id: 3}, 
        {title: "Wastes", link: "/list?cat=50", id: 4}, {title: "WC & Cistern Parts", link: "/list?cat=51", id: 5}, {title: "Radiator Valves", link: "/list?cat=52", id: 6}, 
        {title: "Clips, Sundries & Tools", link: "/list?cat=53", id: 7}, {title: "Merchandise", link: "/list?cat=54", id: 8}, {title: "Rainwater", link: "/list?cat=55", id: 9}, 
        {title: "Plastic Plumbing", link: "/list?cat=56", id: 10}, {title: "Ventilation", link: "/list?cat=57", id: 11}
    ],
    [
        {title: "Bathroom", link: "/list?cat=59", id: 1}, {title: "Kitchen", link: "/list?cat=60", id: 2}, {title: "Baths", link: "/list?cat=61", id: 3}, 
        {title: "Bath Panels & Screens", link: "/list?cat=62", id: 4}, {title: "Shower Enclosures", link: "/list?cat=63", id: 5}, {title: "Furniture", link: "/list?cat=64", id: 6},
        {title: "Macerators", link: "/list?cat=65", id: 7}, {title: "Sanitaryware", link: "/list?cat=66", id: 8}, {title: "Showers", link: "/list?cat=67", id: 9}, 
        {title: "Shower Trays", link: "/list?cat=68", id: 10}, {title: "Taps", link: "/list?cat=69", id: 11}, {title: "Towel Rails & Decorative Heating", link: "/list?cat=70", id: 12}, 
        {title: "Wastes, Traps & Connectors", link: "/list?cat=71", id: 13}, {title: "Grohe", link: "/list?cat=58", id: 14}, {title: "Mira", link: "/list?cat=58", id: 15}, 
        {title: "Roca", link: "/list?cat=58", id: 16}
    ],
    [
        {title: "All", link: "/list?cat=72", id: 1}, {title: "Electric Fires", link: "/list?cat=73", id: 2}, {title: "Gas Fires", link: "/list?cat=74", id: 3}, 
        {title: "Stoves", link: "/list?cat=75", id: 4}, {title: "Suites & Surroundings", link: "/list?cat=76", id: 5}, {title: "Crystal Fires", link: "/list?cat=72", id: 6}, 
        {title: "Dimplex", link: "/list?cat=72", id: 7}, {title: "Flavel", link: "/list?cat=72", id: 8}, {title: "Valor", link: "/list?cat=72", id: 9}, 
        {title: "Be Modern", link: "/list?cat=72", id: 10}, {title: "Broseley", link: "/list?cat=72", id: 11}, {title: "Burley", link: "/list?cat=72", id: 12},
        {title: "AGA", link: "/list?cat=72", id: 13}, {title: "Adam", link: "/list?cat=72", id: 14}, {title: "Aurora", link: "/list?cat=72", id: 15}
    ],
    [
        {title: "All", link: "/list?cat=77", id: 1}, {title: "Tools", link: "/list?cat=78", id: 2}, {title: "Sealants & Additives", link: "/list?cat=79", id: 3}, 
        {title: "Insulation", link: "/list?cat=80", id: 4}, {title: "Clips & Fixings", link: "/list?cat=82", id: 5}, {title: "Electrical Fittings", link: "/list?cat=83", id: 6}, 
        {title: "Cable & Clips", link: "/list?cat=84", id: 7}, {title: "Sockets & Switches", link: "/list?cat=85", id: 8}, {title: "Ventilation", link: "/list?cat=86", id: 9}, 
        {title: "Talon", link: "/list?cat=77", id: 10}, {title: "Fernox", link: "/list?cat=77", id: 11}, {title: "Primaflow", link: "/list?cat=77", id: 12}, 
        {title: "Arctic Hayes", link: "/list?cat=77", id: 13}, {title: "Rothenberger", link: "/list?cat=77", id: 14}, {title: "Everbuild", link: "/list?cat=77", id: 15}, 
        {title: "Manrose", link: "/list?cat=77", id: 16}
    ],
    [
        {title: "All", link: "/list?cat=87", id: 1}, {title: "Cylinders", link: "/list?cat=88", id: 2}, {title: "Heat Pumps", link: "/list?cat=89", id: 3}, 
        {title: "Heat Recovery", link: "/list?cat=90", id: 4}, {title: "Heating Controls", link: "/list?cat=91", id: 5}, {title: "Solar", link: "/list?cat=92", id: 6}, 
        {title: "Water Treatment", link: "/list?cat=93", id: 7}, {title: "Baxi", link: "/list?cat=87", id: 8}, {title: "Grant", link: "/list?cat=87", id: 9}, 
        {title: "Vaillant", link: "/list?cat=87", id: 10}, {title: "Viessmann", link: "/list?cat=87", id: 11}, {title: "Worcester Bosch", link: "/list?cat=87", id: 12}
    ]
]

const SubcategoryMenu = ({tabId} : any) => {
    return (
        <div className="absolute z-10 bg-white flex flex-wrap w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            {menus[tabId-1].map((option)=>(
                <Link href={option.link} key={option.id} className="w-1/12 h-16 px-1 hover:bg-gray-100 flex items-center justify-center text-center leading-tight">{option.title}</Link>
            ))}
        </div>
    )
}

export default SubcategoryMenu