import Link from "next/link";

const categories = [
    {
        name: "All",
        link: "/shop?cat=9",
        css: "bg-slate-500 hover:bg-slate-600",
    },
    {
        name: "Heating Controls",
        link: "/shop?cat=10",
        css: "bg-red-500 hover:bg-red-600",
    },
    {
        name: "Cylinders",
        link: "/shop?cat=11",
        css: "bg-sky-500 hover:bg-sky-600",
    },
    {
        name: "Pumps",
        link: "/shop?cat=12",
        css: "bg-yellow-500 hover:bg-yellow-600",
    },
    {
        name: "Radiator Valves & TRVs",
        link: "/shop?cat=13",
        css: "bg-blue-500 hover:bg-blue-600",
    },
    {
        name: "Smart Home",
        link: "/shop?&cat=14",
        css: "bg-purple-500 hover:bg-purple-600",
    },
    {
        name: "Water Heaters",
        link: "/shop?&cat=15",
        css: "bg-orange-500 hover:bg-orange-600",
    },
    {
        name: "Water Treatment",
        link: "/shop?&cat=16",
        css: "bg-emerald-500 hover:bg-emerald-600",
    },
    {
        name: "Motorised Valves",
        link: "/shop?&cat=17",
        css: "bg-fuchsia-500 hover:bg-fuchsia-600",
    },
    {
        name: "Thermostats",
        link: "/shop?&cat=18",
        css: "bg-teal-500 hover:bg-teal-600",
    },
    {
        name: "Valves & Fittings",
        link: "/shop?&cat=19",
        css: "bg-indigo-500 hover:bg-indigo-600",
    },
    {
        name: "Safety Devices",
        link: "/shop?&cat=20",
        css: "bg-pink-500 hover:bg-pink-600",
    },
    {
        name: "Spares & Accessories",
        link: "/shop?&cat=21",
        css: "bg-lime-500 hover:bg-lime-600",
    },
]

const HeatingPage = () => {
    return(
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
            <h1 className="text-2xl font-medium py-8">Heating</h1>
            <div className="flex gap-2 flex-wrap pb-16">
                {categories.map(category=>(
                    <Link key={category.name} href={category.link} className={`w-[calc(25%-0.4rem)] transition-colors duration-200 p-4 text-center h-36 flex items-center justify-center text-white text-2xl font-medium ${category.css}`}>
                        {category.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default HeatingPage;