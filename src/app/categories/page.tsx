import CategoryGrid from "@/components/categoryGrid";

const categories = [
    {
        name: "All",
        link: "/shop",
        css: "bg-slate-500 hover:bg-slate-600",
    },
    {
        name: "Boilers",
        link: "/boilers",
        css: "bg-red-500 hover:bg-red-600",
    },
    {
        name: "Boiler Spares",
        link: "/spares",
        css: "bg-sky-500 hover:bg-sky-600",
    },
    {
        name: "Flues & Accessories",
        link: "/flues",
        css: "bg-yellow-500 hover:bg-yellow-600",
    },
    {
        name: "Heating",
        link: "/heating",
        css: "bg-blue-500 hover:bg-blue-600",
    },
    {
        name: "Radiators",
        link: "/radiators",
        css: "bg-purple-500 hover:bg-purple-600",
    },
    {
        name: "Metal Plumbing",
        link: "/metal",
        css: "bg-orange-500 hover:bg-orange-600",
    },
    {
        name: "Plastic Plumbing",
        link: "/plastic",
        css: "bg-emerald-500 hover:bg-emerald-600",
    },
    {
        name: "Bathroom & Kitchen",
        link: "/bathroom",
        css: "bg-fuchsia-500 hover:bg-fuchsia-600",
    },
    {
        name: "Essentials",
        link: "/essentials",
        css: "bg-teal-500 hover:bg-teal-600",
    },
    {
        name: "Renewables",
        link: "/renewables",
        css: "bg-indigo-500 hover:bg-indigo-600",
    },
    {
        name: "Refurbished",
        link: "/refurbished",
        css: "bg-pink-500 hover:bg-pink-600",
    },
    {
        name: "Used & Tested",
        link: "/used",
        css: "bg-lime-500 hover:bg-lime-600",
    },
]

const CategoriesPage = () => {
    return(
        <CategoryGrid title="Categories" categories={categories} />
    );
}

export default CategoriesPage;