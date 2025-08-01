import CategoryGrid from "@/components/categoryGrid";

const categories = [
    {
        name: "All",
        link: "/shop?cat=77",
        css: "bg-slate-500 hover:bg-slate-600",
    },
    {
        name: "Tools",
        link: "/shop?cat=78",
        css: "bg-red-500 hover:bg-red-600",
    },
    {
        name: "Sealants & Additives",
        link: "/shop?cat=79",
        css: "bg-sky-500 hover:bg-sky-600",
    },
    {
        name: "Insulation",
        link: "/shop?cat=80",
        css: "bg-yellow-500 hover:bg-yellow-600",
    },
    {
        name: "Clips & Fixings",
        link: "/shop?cat=81",
        css: "bg-blue-500 hover:bg-blue-600",
    },
    {
        name: "Electrical Fittings",
        link: "/shop?&cat=82",
        css: "bg-purple-500 hover:bg-purple-600",
    },
    {
        name: "Cable & Clips",
        link: "/shop?&cat=83",
        css: "bg-orange-500 hover:bg-orange-600",
    },
    {
        name: "Sockets & Switches",
        link: "/shop?&cat=84",
        css: "bg-emerald-500 hover:bg-emerald-600",
    },
    {
        name: "Ventilation",
        link: "/shop?&cat=85",
        css: "bg-fuchsia-500 hover:bg-fuchsia-600",
    },
    {
        name: "Talon",
        link: "/shop?&cat=77&brand=27",
        css: "bg-teal-500 hover:bg-teal-600",
    },
    {
        name: "Fernox",
        link: "/shop?&cat=77&brand=28",
        css: "bg-indigo-500 hover:bg-indigo-600",
    },
    {
        name: "Primaflow",
        link: "/shop?&cat=77&brand=29",
        css: "bg-pink-500 hover:bg-pink-600",
    },
    {
        name: "Arctic Hayes",
        link: "/shop?&cat=77&brand=30",
        css: "bg-lime-500 hover:bg-lime-600",
    },
    {
        name: "Rothenberger",
        link: "/shop?&cat=77&brand=31",
        css: "bg-amber-500 hover:bg-amber-600",
    },
    {
        name: "Everbuild",
        link: "/shop?&cat=77&brand=32",
        css: "bg-rose-500 hover:bg-rose-600",
    },
    {
        name: "Manrose",
        link: "/shop?&cat=77&brand=33",
        css: "bg-cyan-500 hover:bg-cyan-600",
    },
]

const EssentialsPage = () => {
    return(
        <CategoryGrid title="Essentials" categories={categories} />
    );
}

export default EssentialsPage;