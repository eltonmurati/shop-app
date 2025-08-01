import CategoryGrid from "@/components/categoryGrid";

const categories = [
    {
        name: "All",
        link: "/shop?cat=87",
        css: "bg-slate-500 hover:bg-slate-600",
    },
    {
        name: "Cylinders",
        link: "/shop?cat=88",
        css: "bg-red-500 hover:bg-red-600",
    },
    {
        name: "Heat Pumps",
        link: "/shop?cat=89",
        css: "bg-sky-500 hover:bg-sky-600",
    },
    {
        name: "Heat Recovery",
        link: "/shop?cat=90",
        css: "bg-yellow-500 hover:bg-yellow-600",
    },
    {
        name: "Heating Controls",
        link: "/shop?cat=91",
        css: "bg-blue-500 hover:bg-blue-600",
    },
    {
        name: "Solar",
        link: "/shop?&cat=92",
        css: "bg-purple-500 hover:bg-purple-600",
    },
    {
        name: "Water Treatment",
        link: "/shop?&cat=93",
        css: "bg-orange-500 hover:bg-orange-600",
    },
    {
        name: "Baxi",
        link: "/shop?&cat=87&brand=1",
        css: "bg-emerald-500 hover:bg-emerald-600",
    },
    {
        name: "Grant",
        link: "/shop?&cat=87&brand=4",
        css: "bg-fuchsia-500 hover:bg-fuchsia-600",
    },
    {
        name: "Vaillant",
        link: "/shop?&cat=87&brand=8",
        css: "bg-teal-500 hover:bg-teal-600",
    },
    {
        name: "Viessmann",
        link: "/shop?&cat=87&brand=9",
        css: "bg-indigo-500 hover:bg-indigo-600",
    },
    {
        name: "Worcester Bosch",
        link: "/shop?&cat=87&brand=10",
        css: "bg-pink-500 hover:bg-pink-600",
    },
]

const RenewablesPage = () => {
    return(
        <CategoryGrid title="Renewables" categories={categories} />
    );
}

export default RenewablesPage;