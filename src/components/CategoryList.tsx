import Image from "next/image"
import Link from "next/link"

const categories = [
    {id: 98, name: "All Products",        image: ""},
    {id: 95, name: "Featured Products",   image: ""},
    {id: 96, name: "New Products",        image: ""},
    {id: 97, name: "On-Sale Products",    image: ""},
    {id: 0,  name: "Popular Products",    image: ""},
    {id: 1,  name: "Boilers",             image: ""},
    {id: 6,  name: "Flues & Accessories", image: ""},
    {id: 9,  name: "Heating",             image: ""},
    {id: 99, name: "Radiators",           image: ""},
    {id: 29, name: "Metal Plumbing",      image: ""},
    {id: 41, name: "Plastic Plumbing",    image: ""},
    {id: 47, name: "Packaged Plumbing",   image: ""},
    {id: 58, name: "Bathroom & Kitchen",  image: ""},
    {id: 72, name: "Fires",               image: ""},
    {id: 77, name: "Essentials",          image: ""},
    {id: 87, name: "Renewables",          image: ""}
]

const CategoryList = () => {

    const getLink = (id:number) => {
        switch (id) {
            case 98:
                return "/list";
            case 97:
                return "/list?sale=true";
            case 0:
                return "/list?sort=pop";
            default:
                return "/list?cat=" + id;
        }
    }

    return (
        <div className="flex px-4 md:px-8 gap-4 md:gap-8 overflow-x-auto pb-8 [&::-webkit-scrollbar]:h-4 [&::-webkit-scrollbar-button:end:increment]:w-4 
            md:[&::-webkit-scrollbar-button:end:increment]:w-8 [&::-webkit-scrollbar-button:start:decrement]:w-4 [&::-webkit-scrollbar-track]:bg-gray-100 
            md:[&::-webkit-scrollbar-button:start:decrement]:w-8 [&::-webkit-scrollbar-thumb]:bg-gray-300"
        >
            {categories.map((category)=>(
                <Link href={getLink(category.id)} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6" key={category.id}>
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image 
                            src={category.image === "" ? "/noImage.jpg" : category.image} 
                            alt = "" 
                            fill 
                            sizes="20vw" 
                            className="object-cover" 
                        />
                    </div>
                    <h1 className="mt-8 font-light text-xl tracking-wide">{category.name}</h1>
                </Link>
            ))}
        </div>
    )
}

export default CategoryList