import CategoryGrid from "@/components/categoryGrid";

const categories = [
    {
        name: "All",
        link: "/shop?cat=58",
        css: "bg-slate-500 hover:bg-slate-600",
    },
    {
        name: "Bathroom",
        link: "/shop?cat=59",
        css: "bg-red-500 hover:bg-red-600",
    },
    {
        name: "Kitchen",
        link: "/shop?cat=60",
        css: "bg-sky-500 hover:bg-sky-600",
    },
    {
        name: "Baths",
        link: "/shop?cat=61",
        css: "bg-yellow-500 hover:bg-yellow-600",
    },
    {
        name: "Bath Panels & Screens",
        link: "/shop?cat=62",
        css: "bg-blue-500 hover:bg-blue-600",
    },
    {
        name: "Shower Enclosures",
        link: "/shop?&cat=63",
        css: "bg-purple-500 hover:bg-purple-600",
    },
    {
        name: "Furniture",
        link: "/shop?&cat=64",
        css: "bg-orange-500 hover:bg-orange-600",
    },
    {
        name: "Macerators",
        link: "/shop?&cat=65",
        css: "bg-emerald-500 hover:bg-emerald-600",
    },
    {
        name: "Sanitaryware",
        link: "/shop?&cat=66",
        css: "bg-fuchsia-500 hover:bg-fuchsia-600",
    },
    {
        name: "Showers",
        link: "/shop?&cat=67",
        css: "bg-teal-500 hover:bg-teal-600",
    },
    {
        name: "Shower Trays",
        link: "/shop?&cat=68",
        css: "bg-indigo-500 hover:bg-indigo-600",
    },
    {
        name: "Taps",
        link: "/shop?&cat=69",
        css: "bg-pink-500 hover:bg-pink-600",
    },
    {
        name: "Towel Rails & Decorative Heating",
        link: "/shop?&cat=70",
        css: "bg-lime-500 hover:bg-lime-600",
    },
    {
        name: "Wastes, Traps & Connectors",
        link: "/shop?&cat=71",
        css: "bg-amber-500 hover:bg-amber-600",
    },
    {
        name: "Spares & Accessories",
        link: "/shop?&cat=103",
        css: "bg-rose-500 hover:bg-rose-600",
    },
    {
        name: "Grohe",
        link: "/shop?&cat=58&brand=24",
        css: "bg-cyan-500 hover:bg-cyan-600",
    },
    {
        name: "Mira",
        link: "/shop?&cat=58&brand=25",
        css: "bg-violet-500 hover:bg-violet-600",
    },
    {
        name: "Roca",
        link: "/shop?&cat=58&brand=26",
        css: "bg-stone-500 hover:bg-stone-600",
    },
]

const BathroomPage = () => {
    return(
        <CategoryGrid title="Bathroom & Kitchen" categories={categories} />
    );
}

export default BathroomPage;