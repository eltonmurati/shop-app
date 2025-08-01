import CategoryGrid from "@/components/categoryGrid";

const categories = [
    {
        name: "All",
        link: "/shop?cat=29",
        css: "bg-slate-500 hover:bg-slate-600",
    },
    {
        name: "Brass Fittings & Accessories",
        link: "/shop?cat=30",
        css: "bg-red-500 hover:bg-red-600",
    },
    {
        name: "Brassware",
        link: "/shop?cat=31",
        css: "bg-sky-500 hover:bg-sky-600",
    },
    {
        name: "Clips & Fixings",
        link: "/shop?cat=32",
        css: "bg-yellow-500 hover:bg-yellow-600",
    },
    {
        name: "Compression",
        link: "/shop?cat=33",
        css: "bg-blue-500 hover:bg-blue-600",
    },
    {
        name: "Copper Tube",
        link: "/shop?cat=34",
        css: "bg-purple-500 hover:bg-purple-600",
    },
    {
        name: "Endfeed",
        link: "/endfeed",
        css: "bg-orange-500 hover:bg-orange-600",
    },
    {
        name: "Gas Fittings & Accessroies",
        link: "/shop?cat=36",
        css: "bg-emerald-500 hover:bg-emerald-600",
    },
    {
        name: "Malleable Iron",
        link: "/shop?cat=37",
        css: "bg-fuchsia-500 hover:bg-fuchsia-600",
    },
    {
        name: "Oil Line Components",
        link: "/shop?cat=38",
        css: "bg-teal-500 hover:bg-teal-600",
    },
    {
        name: "Press Fit",
        link: "/shop?cat=39",
        css: "bg-indigo-500 hover:bg-indigo-600",
    },
    {
        name: "Solder Ring",
        link: "/shop?cat=40",
        css: "bg-pink-500 hover:bg-pink-600",
    },
    {
        name: "Push Fit",
        link: "/shop?cat=102",
        css: "bg-lime-500 hover:bg-lime-600",
    },
]

const MetalPage = () => {
    return(
        <CategoryGrid title="Metal Plumbing" categories={categories} />
    );
}

export default MetalPage;