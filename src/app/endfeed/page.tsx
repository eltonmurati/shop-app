import Image from "next/image";
import Link from "next/link";

const products = [
    {
        name: "All",
        image: undefined,
        link: "/shop?cat=35",
    },
    {
        name: "Straight Coupling",
        image: "/productImages/endfeed/straightCoupling/1.webp",
        link: "/product/454",
    },
    {
        name: "Fittings Reducer",
        image: "/productImages/endfeed/fittingsReducer/1.webp",
        link: "/product/196309",
    },
    {
        name: "Reducing Coupler",
        image: "/productImages/endfeed/reducingCoupler/1.webp",
        link: "/product/63561",
    },
    {
        name: "Equal Tee",
        image: "/productImages/endfeed/equalTee/1.webp",
        link: "/product/204",
    },
    {
        name: "Reducing Tee",
        image: "/productImages/endfeed/reducingTee/1.webp",
        link: "/product/63576",
    },
    {
        name: "90 Degree Elbow",
        image: "/productImages/endfeed/90elbow/1.webp",
        link: "/product/63627",
    },
    {
        name: "45 Degree Elbow",
        image: "/productImages/endfeed/45elbow/1.webp",
        link: "/product/63556",
    },
    {
        name: "90 Degree Street Elbow",
        image: "/productImages/endfeed/90streetElbow/1.webp",
        link: "/product/127",
    },
    {
        name: "45 Degree Street Elbow",
        image: "/productImages/endfeed/45streetElbow/1.jpg",
        link: "/product/187",
    },
    {
        name: "End Cap",
        image: "/productImages/endfeed/endCap/1.webp",
        link: "/product/63628",
    },
]

const EndfeedPage = () => {
    return(
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
            <h1 className="text-2xl font-medium py-8">Endfeed</h1>
            <div className="flex gap-16 flex-wrap pb-16">
                {products.map(product=>(
                    <Link key={product.name} href={product.link} className="w-full flex flex-col gap-4 sm:w-[calc(50%-2rem)] lg:w-[calc(25%-3rem)] transition-colors duration-200 hover:text-blue-700">
                        <div className="h-52 relative">
                            <Image
                                src={product.image ? (process.env.NEXT_PUBLIC_POSTGRES_URL + "/storage/v1/object/public/product-images" + product.image) : "/noImage.jpg"}
                                alt=""
                                fill
                                sizes="25vw"
                                className="absolute object-contain"
                            ></Image>
                        </div>
                        <h1 className="w-full flex justify-center font-medium text-xl pb-4">{product.name}</h1>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default EndfeedPage;