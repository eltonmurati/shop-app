import CategoryGrid from "@/components/categoryGrid";

const categories = [
    {
        name: "All",
        link: "/shop?cat=41",
        css: "bg-slate-500 hover:bg-slate-600",
    },
    {
        name: "Pipe",
        link: "/shop?cat=42",
        css: "bg-red-500 hover:bg-red-600",
    },
    {
        name: "Fittings",
        link: "/shop?cat=43",
        css: "bg-sky-500 hover:bg-sky-600",
    },
    {
        name: "MDPE Fittings",
        link: "/shop?cat=44",
        css: "bg-yellow-500 hover:bg-yellow-600",
    },
    {
        name: "Rainwater Fittings",
        link: "/shop?cat=45",
        css: "bg-blue-500 hover:bg-blue-600",
    },
    {
        name: "Wastes & Traps",
        link: "/shop?&cat=46",
        css: "bg-purple-500 hover:bg-purple-600",
    },
    {
        name: "McAlpine",
        link: "/shop?&cat=41&brand=14",
        css: "bg-orange-500 hover:bg-orange-600",
    },
    {
        name: "JG Speedfit",
        link: "/shop?&cat=41&brand=15",
        css: "bg-emerald-500 hover:bg-emerald-600",
    },
    {
        name: "Hep2O",
        link: "/shop?&cat=41&brand=16",
        css: "bg-fuchsia-500 hover:bg-fuchsia-600",
    },
    {
        name: "FloPlast",
        link: "/shop?&cat=41&brand=17",
        css: "bg-teal-500 hover:bg-teal-600",
    },
    {
        name: "Plasson",
        link: "/shop?&cat=41&brand=18",
        css: "bg-indigo-500 hover:bg-indigo-600",
    },
    {
        name: "Polypipe",
        link: "/shop?&cat=41&brand=19",
        css: "bg-pink-500 hover:bg-pink-600",
    },
]

const PlasticPage = () => {
    return(
        <CategoryGrid title="Plastic Plumbing" categories={categories} />
    );
}

export default PlasticPage;