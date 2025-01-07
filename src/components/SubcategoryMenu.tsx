import Link from "next/link"

const menus = [
    [
        {title: "All", link: "/", id: 1}, {title: "Combi", link: "/", id: 2}, {title: "System", link: "/", id: 3}, {title: "Electric", link: "/", id: 4},
        {title: "Heat Only", link: "/", id: 5}, {title: "Baxi", link: "/", id: 6}, {title: "Bosch", link: "/", id: 7}, {title: "Glowworm", link: "/", id: 8},
        {title: "Grant", link: "/", id: 9}, {title: "Heatrae Sadia", link: "/", id: 10}, {title: "Ideal Heating", link: "/", id: 11}, {title: "Main", link: "/", id: 12},
        {title: "Vaillant", link: "/", id: 13}, {title: "Viessmann", link: "/", id: 14}, {title: "Worcester Bosch", link: "/", id: 15}
    ],
    [
        {title: "All", link: "/", id: 1}, {title: "Flues", link: "/", id: 2}, {title: "Accessories", link: "/", id: 3}, {title: "Ariston", link: "/", id: 4},
        {title: "Baxi", link: "/", id: 5}, {title: "Bosch", link: "/", id: 6}, {title: "Glowworm", link: "/", id: 7}, {title: "Grant", link: "/", id: 8},
        {title: "Heatline", link: "/", id: 9}, {title: "Heatrae Sadia", link: "/", id: 10}, {title: "Ideal Heating", link: "/", id: 11}, {title: "Keston", link: "/", id: 12},
        {title: "Vaillant", link: "/", id: 13}, {title: "Viessmann", link: "/", id: 14}, {title: "Worcester Bosch", link: "/", id: 15}
    ],
    [
        {title: "All", link: "/", id: 1}, {title: "Heating Controls", link: "/", id: 2}, {title: "Cylinders", link: "/", id: 3}, {title: "Pumps", link: "/", id: 4}, 
        {title: "Radiator Valves & TRVs", link: "/", id: 5}, {title: "Smart Home", link: "/", id: 6}, {title: "Water Heaters", link: "/", id: 7}, 
        {title: "Water Treatment", link: "/", id: 8}, {title: "Motorised Valves", link: "/", id: 9}, {title: "Thermostats", link: "/", id: 10}, 
        {title: "Valves & Fittings", link: "/", id: 11}, {title: "Safety Devices", link: "/", id: 12}, {title: "Spares & Accessories", link: "/", id: 13}
    ],
    [
        {title: "All", link: "/", id: 1}, {title: "Compact", link: "/", id: 2}, {title: "Decorative", link: "/", id: 3}, {title: "Column", link: "/", id: 4},
        {title: "Electric", link: "/", id: 5}, {title: "Fan Convectors", link: "/", id: 6}, {title: "Henrad", link: "/", id: 7}, {title: "Prorad", link: "/", id: 8},
        {title: "Stelrad", link: "/", id: 9}, {title: "Atlantic", link: "/", id: 10}, {title: "Type 11", link: "/", id: 11}, {title: "Type 22", link: "/", id: 12}
    ],
    [
        {title: "All", link: "/", id: 1}, {title: "Brass Fittings & Accessories", link: "/", id: 2}, {title: "Brassware", link: "/", id: 3}, {title: "Clips & Fixings", link: "/", id: 4},
        {title: "Compression", link: "/", id: 5}, {title: "Copper Tube", link: "/", id: 6}, {title: "Endfeed", link: "/", id: 7}, {title: "Gas Fittings & Accessories", link: "/", id: 8},
        {title: "Malleable Iron", link: "/", id: 9}, {title: "Oil Line Components", link: "/", id: 10}, {title: "Press Fit", link: "/", id: 11}, {title: "Solder Ring", link: "/", id: 12}
    ],
    [
        {title: "All", link: "/", id: 1}, {title: "Pipe", link: "/", id: 2}, {title: "Fittings", link: "/", id: 3}, {title: "MDPE Fittings", link: "/", id: 4},
        {title: "Rainwater Fittings", link: "/", id: 5}, {title: "Wastes & Traps", link: "/", id: 6}, {title: "McAlpine", link: "/", id: 7}, {title: "JG Speedfit", link: "/", id: 8},
        {title: "Hep20", link: "/", id: 9}, {title: "FloPlast", link: "/", id: 10}, {title: "Plasson", link: "/", id: 11}, {title: "Polypipe", link: "/", id: 12}
    ],
    [
        {title: "All", link: "/", id: 1}, {title: "Bathroom Accessories", link: "/", id: 2}, {title: "Metal Plumbing", link: "/", id: 3}, {title: "Wastes", link: "/", id: 4},
        {title: "WC & Cistern Parts", link: "/", id: 5}, {title: "Radiator Valves", link: "/", id: 6}, {title: "Clips, Sundries & Tools", link: "/", id: 7}, 
        {title: "Merchandise", link: "/", id: 8}, {title: "Rainwater", link: "/", id: 9}, {title: "Plastic Plumbing", link: "/", id: 10}, {title: "Ventilation", link: "/", id: 11}
    ],
    [
        {title: "Bathroom", link: "/", id: 1}, {title: "Kitchen", link: "/", id: 2}, {title: "Baths", link: "/", id: 3}, {title: "Bath Panels & Screens", link: "/", id: 4}, 
        {title: "Shower Enclosures", link: "/", id: 5}, {title: "Furniture", link: "/", id: 6}, {title: "Macerators", link: "/", id: 7}, {title: "Sanitaryware", link: "/", id: 8}, 
        {title: "Showers", link: "/", id: 9}, {title: "Shower Trays", link: "/", id: 10}, {title: "Taps", link: "/", id: 11}, 
        {title: "Towel Rails & Decorative Heating", link: "/", id: 12}, {title: "Wastes, Traps & Connectors", link: "/", id: 13}, {title: "Grohe", link: "/", id: 14}, 
        {title: "Mira", link: "/", id: 15}, {title: "Roca", link: "/", id: 16}
    ],
    [
        {title: "All", link: "/", id: 1}, {title: "Electric Fires", link: "/", id: 2}, {title: "Gas Fires", link: "/", id: 3}, {title: "Stoves", link: "/", id: 4},
        {title: "Suites & Surroundings", link: "/", id: 5}, {title: "Crystal Fires", link: "/", id: 6}, {title: "Dimplex", link: "/", id: 7}, {title: "Flavel", link: "/", id: 8},
        {title: "Valor", link: "/", id: 9}, {title: "Be Modern", link: "/", id: 10}, {title: "Broseley", link: "/", id: 11}, {title: "Burley", link: "/", id: 12},
        {title: "AGA", link: "/", id: 13}, {title: "Adam", link: "/", id: 14}, {title: "Aurora", link: "/", id: 15}
    ],
    [
        {title: "All", link: "/", id: 1}, {title: "Tools", link: "/", id: 2}, {title: "Sealants & Additives", link: "/", id: 3}, {title: "Insulation", link: "/", id: 4},
        {title: "Clips & Fixings", link: "/", id: 5}, {title: "Electrical Fittings", link: "/", id: 6}, {title: "Cable & Clips", link: "/", id: 7}, 
        {title: "Sockets & Switches", link: "/", id: 8}, {title: "Ventilation", link: "/", id: 9}, {title: "Talon", link: "/", id: 10}, {title: "Fernox", link: "/", id: 11}, 
        {title: "Primaflow", link: "/", id: 12}, {title: "Arctic Hayes", link: "/", id: 13}, {title: "Rothenberger", link: "/", id: 14}, {title: "Everbuild", link: "/", id: 15}, 
        {title: "Manrose", link: "/", id: 16}
    ],
    [
        {title: "All", link: "/", id: 1}, {title: "Cylinders", link: "/", id: 2}, {title: "Heat Pumps", link: "/", id: 3}, {title: "Heat Recovery", link: "/", id: 4},
        {title: "Heating Controls", link: "/", id: 5}, {title: "Solar", link: "/", id: 6}, {title: "Water Treatment", link: "/", id: 7}, {title: "Baxi", link: "/", id: 8},
        {title: "Grant", link: "/", id: 9}, {title: "Vaillant", link: "/", id: 10}, {title: "Viessmann", link: "/", id: 11}, {title: "Worcester Bosch", link: "/", id: 12}
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