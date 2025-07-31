import Link from "next/link";

const categories = [
    {
        name: "All",
        link: "/shop?cat=1",
        css: "bg-slate-500 hover:bg-slate-600",
    },
    {
        name: "Combi",
        link: "/shop?cat=2",
        css: "bg-red-500 hover:bg-red-600",
    },
    {
        name: "System",
        link: "/shop?cat=3",
        css: "bg-sky-500 hover:bg-sky-600",
    },
    {
        name: "Electric",
        link: "/shop?cat=4",
        css: "bg-yellow-500 hover:bg-yellow-600",
    },
    {
        name: "Heat Only",
        link: "/shop?cat=5",
        css: "bg-blue-500 hover:bg-blue-600",
    },
    {
        name: "Baxi",
        link: "/shop?&cat=1&brand=1",
        css: "bg-purple-500 hover:bg-purple-600",
    },
    {
        name: "Bosch",
        link: "/shop?&cat=1&brand=2",
        css: "bg-orange-500 hover:bg-orange-600",
    },
    {
        name: "Glowworm",
        link: "/shop?&cat=1&brand=3",
        css: "bg-emerald-500 hover:bg-emerald-600",
    },
    {
        name: "Grant",
        link: "/shop?&cat=1&brand=4",
        css: "bg-fuchsia-500 hover:bg-fuchsia-600",
    },
    {
        name: "Heatrae Sadia",
        link: "/shop?&cat=1&brand=5",
        css: "bg-teal-500 hover:bg-teal-600",
    },
    {
        name: "Ideal Heating",
        link: "/shop?&cat=1&brand=6",
        css: "bg-indigo-500 hover:bg-indigo-600",
    },
    {
        name: "Main",
        link: "/shop?&cat=1&brand=7",
        css: "bg-pink-500 hover:bg-pink-600",
    },
    {
        name: "Vaillant",
        link: "/shop?&cat=1&brand=8",
        css: "bg-lime-500 hover:bg-lime-600",
    },
    {
        name: "Viessmann",
        link: "/shop?&cat=1&brand=9",
        css: "bg-amber-500 hover:bg-amber-600",
    },
    {
        name: "Worcester Bosch",
        link: "/shop?&cat=1&brand=10",
        css: "bg-rose-500 hover:bg-rose-600",
    },
]

const RadiatorsPage = () => {
    return(
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
            <h1 className="text-2xl font-medium py-8">Radiators</h1>
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

export default RadiatorsPage;