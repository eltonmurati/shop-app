import Link from "next/link"

const menus = [
    [
        {title: "All", link: "/"}, {title: "Combi", link: "/"}, {title: "System", link: "/"}, {title: "Electric", link: "/"},
        {title: "Heat Only", link: "/"}, {title: "Baxi", link: "/"}, {title: "Bosch", link: "/"}, {title: "Glowworm", link: "/"},
        {title: "Grant", link: "/"}, {title: "Heatrae Sadia", link: "/"}, {title: "Ideal Heating", link: "/"}, {title: "Main", link: "/"},
        {title: "Vaillant", link: "/"}, {title: "Viessmann", link: "/"}, {title: "Worcester Bosch", link: "/"}
    ],
    [
        {title: "All", link: "/"}, {title: "Flues", link: "/"}, {title: "Accessories", link: "/"}, {title: "Ariston", link: "/"},
        {title: "Baxi", link: "/"}, {title: "Bosch", link: "/"}, {title: "Glowworm", link: "/"}, {title: "Grant", link: "/"},
        {title: "Heatline", link: "/"}, {title: "Heatrae", link: "/"}, {title: "Ideal Heating", link: "/"}, {title: "Keston", link: "/"},
        {title: "Vaillant", link: "/"}, {title: "Viessmann", link: "/"}, {title: "Worcester Bosch", link: "/"}
    ],
    [
        {title: "All", link: "/"}, {title: "Heating Controls", link: "/"}, {title: "Cylinders", link: "/"}, {title: "Pumps", link: "/"}, {title: "Radiator Valves & TRVs", link: "/"},
        {title: "Smart Home", link: "/"}, {title: "Water Heaters", link: "/"}, {title: "Water Treatment", link: "/"}, {title: "Motorised Valves", link: "/"},
        {title: "Thermostats", link: "/"}, {title: "Valves & Fittings", link: "/"}, {title: "Safety Devices", link: "/"}, {title: "Spares & Accessories", link: "/"}
    ],
    [
        {title: "All", link: "/"}, {title: "Compact", link: "/"}, {title: "Decorative", link: "/"}, {title: "Column", link: "/"},
        {title: "Electric", link: "/"}, {title: "Fan Convectors", link: "/"}, {title: "Henrad", link: "/"}, {title: "Prorad", link: "/"},
        {title: "Stelrad", link: "/"}, {title: "Atlantic", link: "/"}, {title: "Type 11", link: "/"}, {title: "Type 22", link: "/"}
    ],
    [
        {title: "All", link: "/"}, {title: "Brass Fittings & Accessories", link: "/"}, {title: "Brassware", link: "/"}, {title: "Clips & Fixings", link: "/"},
        {title: "Compression", link: "/"}, {title: "Copper Tube", link: "/"}, {title: "Endfeed", link: "/"}, {title: "Gas Fittings & Accessories", link: "/"},
        {title: "Malleable Iron", link: "/"}, {title: "Oil Line Components", link: "/"}, {title: "Press Fit", link: "/"}, {title: "Solder Ring", link: "/"}
    ],
    [
        {title: "All", link: "/"}, {title: "Pipe", link: "/"}, {title: "Fittings", link: "/"}, {title: "MDPE Fittings", link: "/"},
        {title: "Rainwater Fittings", link: "/"}, {title: "Wastes & Traps", link: "/"}, {title: "McAlpine", link: "/"}, {title: "JG Speedfit", link: "/"},
        {title: "Hep20", link: "/"}, {title: "FloPlast", link: "/"}, {title: "Plasson", link: "/"}, {title: "Polypipe", link: "/"}
    ],
    [
        {title: "All", link: "/"}, {title: "Bathroom Accessories", link: "/"}, {title: "Metal Plumbing", link: "/"}, {title: "Wastes", link: "/"},
        {title: "WC & Cistern Parts", link: "/"}, {title: "Radiator Valves", link: "/"}, {title: "Clips, Sundries & Tools", link: "/"}, {title: "Merchandise", link: "/"},
        {title: "Rainwater", link: "/"}, {title: "Plastic Plumbing", link: "/"}, {title: "Ventilation", link: "/"}
    ],
    [
        {title: "Bathroom", link: "/"}, {title: "Kitchen", link: "/"}, {title: "Baths", link: "/"}, {title: "Bath Panels & Screens", link: "/"}, 
        {title: "Shower Enclosures", link: "/"}, {title: "Furniture", link: "/"}, {title: "Macerators", link: "/"}, {title: "Sanitaryware", link: "/"}, 
        {title: "Showers", link: "/"}, {title: "Shower Trays", link: "/"}, {title: "Taps", link: "/"}, {title: "Towel Rails & Decorative Heating", link: "/"}, 
        {title: "Wastes, Traps & Connectors", link: "/"}, {title: "Grohe", link: "/"}, {title: "Mira", link: "/"}, {title: "Roca", link: "/"}
    ],
    [
        {title: "All", link: "/"}, {title: "Electric Fires", link: "/"}, {title: "Gas Fires", link: "/"}, {title: "Stoves", link: "/"},
        {title: "Suites & Surroundings", link: "/"}, {title: "Crystal", link: "/"}, {title: "Dimplex", link: "/"}, {title: "Flavel", link: "/"},
        {title: "Valor", link: "/"}, {title: "Be Modern", link: "/"}, {title: "Broseley", link: "/"}, {title: "Burley", link: "/"},
        {title: "AGA", link: "/"}, {title: "Adam", link: "/"}, {title: "Aurora", link: "/"}
    ],
    [
        {title: "All", link: "/"}, {title: "Tools", link: "/"}, {title: "Sealants & Additives", link: "/"}, {title: "Insulation", link: "/"},
        {title: "Clips & Fixings", link: "/"}, {title: "Electrical Fittings", link: "/"}, {title: "Cable & Clips", link: "/"}, {title: "Sockets & Switches", link: "/"},
        {title: "Ventilation", link: "/"}, {title: "Talon", link: "/"}, {title: "Fernox", link: "/"}, {title: "Primaflow", link: "/"},
        {title: "Arctic Hayes", link: "/"}, {title: "Rothenberger", link: "/"}, {title: "Everbuild", link: "/"}, {title: "Manrose", link: "/"}
    ],
    [
        {title: "All", link: "/"}, {title: "Cylinders", link: "/"}, {title: "Heat Pumps", link: "/"}, {title: "Heat Recovery", link: "/"},
        {title: "Heating Controls", link: "/"}, {title: "Solar", link: "/"}, {title: "Water Treatment", link: "/"}, {title: "Baxi", link: "/"},
        {title: "Grant", link: "/"}, {title: "Vaillant", link: "/"}, {title: "Viessmann", link: "/"}, {title: "Worcester Bosch", link: "/"}
    ]
]

const SubcategoryMenu = ({tabId} : any) => {
    return (
        <div className="absolute z-10 top-36 bg-white flex flex-wrap w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            {menus[tabId-1].map((option,i)=>(
                <Link href={option.link} key={i} className="w-1/12 h-16 px-1 hover:bg-gray-100 flex items-center justify-center text-center">{option.title}</Link>
            ))}
        </div>
    )
}

export default SubcategoryMenu