import CategoryGrid from "@/components/categoryGrid";

const categories = [
    {
        name: "All",
        link: "/shop?cat=99",
        css: "bg-slate-500 hover:bg-slate-600",
    },
    {
        name: "Compact",
        link: "/shop?cat=22",
        css: "bg-red-500 hover:bg-red-600",
    },
    {
        name: "Decorative",
        link: "/shop?cat=23",
        css: "bg-sky-500 hover:bg-sky-600",
    },
    {
        name: "Column",
        link: "/shop?cat=24",
        css: "bg-yellow-500 hover:bg-yellow-600",
    },
    {
        name: "Electric",
        link: "/shop?cat=25",
        css: "bg-blue-500 hover:bg-blue-600",
    },
    {
        name: "Fan Convectors",
        link: "/shop?&cat=26",
        css: "bg-purple-500 hover:bg-purple-600",
    },
    {
        name: "Henrad",
        link: "/shop?&cat=99&brand=20",
        css: "bg-orange-500 hover:bg-orange-600",
    },
    {
        name: "Prorad",
        link: "/shop?&cat=99&brand=21",
        css: "bg-emerald-500 hover:bg-emerald-600",
    },
    {
        name: "Stelrad",
        link: "/shop?&cat=99&brand=22",
        css: "bg-fuchsia-500 hover:bg-fuchsia-600",
    },
    {
        name: "Atlantic",
        link: "/shop?&cat=99&brand=23",
        css: "bg-teal-500 hover:bg-teal-600",
    },
    {
        name: "Type 11",
        link: "/shop?&cat=27",
        css: "bg-indigo-500 hover:bg-indigo-600",
    },
    {
        name: "Type 22",
        link: "/shop?&cat=28",
        css: "bg-pink-500 hover:bg-pink-600",
    },
]

const RadiatorsPage = () => {
    return(
        <CategoryGrid title="Radiators" categories={categories} />
    );
}

export default RadiatorsPage;