import { postgres } from "@/app/lib/postgresClient";
import Add from "@/components/Add"
import CustomizeProducts from "@/components/CustomizeProducts"
import ProductImages from "@/components/ProductImages"
import { notFound } from "next/navigation";

const SinglePage = async ({params}:{params:{slug:string}}) => {

    const {slug} = await params;

    let { data: product, error } = await postgres.from('product').select(`*, brand(*)`).eq('id', slug);

    if (!product) { return notFound(); }

    let id = null;
    let name = "Product Name";
    let desc = null
    let price = "0";
    let discountPrice = null;
    let stock = 0;
    let sku = "SKU";
    let specs = null;
    let width = "0";
    let height = "0";
    let depth = "0";
    let weight = "0";
    let images: string[] = [];
    let brand = null;
    let variants = null;
    let category = null;

    if (product) {

        if (!product[0]) { return notFound(); }

        id = product[0].id;
        name = product[0].name;
        desc = product[0].description;
        price = product[0].price.toLocaleString();
        discountPrice = product[0].discounted_price ? product[0].discounted_price.toLocaleString() : null;
        stock = product[0].quantity;
        sku = product[0].sku;
        specs = product[0].specifications;
        width = product[0].width.toString() + "mm";
        height = product[0].height.toString() + "mm";
        depth = product[0].depth.toString() + "mm";
        weight = product[0].weight.toString() + "kg";
        images = product[0].image_urls ? product[0].image_urls : [];
        brand = product[0].brand["name" as keyof typeof brand];
        variants = product[0].variants;
    }

    let specEntries = specs ? Object.entries(specs) : null;

    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col lg:flex-row gap-8 xl:gap-16 md:mt-4 lg:mt-8">
                {/* IMAGES */}
                <div className="w-full lg:w-1/2 lg:sticky top-4 h-max">
                    <ProductImages images={images}/>
                </div>
                {/* TEXTS */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                    <h1 className="text-4xl font-medium">{name}</h1>
                    <p className="">{sku}</p>
                    {desc && (<p className="text-gray-500">{desc}</p>)}
                    <div className="h-[2px] bg-gray-100"/>
                    {discountPrice ? (
                        <div className="flex items-center gap-4">
                            <h3 className="text-xl text-gray-500 line-through">£{price}</h3>
                            <h2 className="font-medium text-2xl">£{discountPrice}</h2>
                        </div>
                    ) : (
                        <h2 className="font-medium text-2xl">£{price}</h2>
                    )}
                    <div className="h-[2px] bg-gray-100"/>
                    <CustomizeProducts variants={variants} id={id}/>
                    <Add stock={stock} />
                    <div>
                        <h2 className="text-2xl pt-8 pb-2 font-medium">Specifications</h2>
                        <div className="h-[2px] bg-gray-100"/>
                        <div className="text-sm">
                            <div className="flex flec-col justify-between py-2">
                                <h3 className="text-lg">Brand</h3>
                                <h3 className="text-lg">{brand as unknown as string}</h3>
                            </div>
                            <div className="h-[2px] bg-gray-100"/>
                        </div>
                        {specEntries && (
                            <>
                                {specEntries.map((entry,i)=>(
                                    <div className="text-sm" key={i}>
                                        <div className="flex flec-col justify-between py-2">
                                            <h3 className="text-lg">{entry[0]}</h3>
                                            <h3 className="text-lg">{entry[1]}</h3>
                                        </div>
                                        <div className="h-[2px] bg-gray-100"/>
                                    </div>
                                ))}
                            </>
                        )}
                        <div className="text-sm">
                            <div className="flex flec-col justify-between py-2">
                                <h3 className="text-lg">Width</h3>
                                <h3 className="text-lg">{width}</h3>
                            </div>
                            <div className="h-[2px] bg-gray-100"/>
                        </div>
                        <div className="text-sm">
                            <div className="flex flec-col justify-between py-2">
                                <h3 className="text-lg">Height</h3>
                                <h3 className="text-lg">{height}</h3>
                            </div>
                            <div className="h-[2px] bg-gray-100"/>
                        </div>
                        <div className="text-sm">
                            <div className="flex flec-col justify-between py-2">
                                <h3 className="text-lg">Depth</h3>
                                <h3 className="text-lg">{depth}</h3>
                            </div>
                            <div className="h-[2px] bg-gray-100"/>
                        </div>
                        <div className="text-sm">
                            <div className="flex flec-col justify-between py-2">
                                <h3 className="text-lg">Weight</h3>
                                <h3 className="text-lg">{weight}</h3>
                            </div>
                            <div className="h-[2px] bg-gray-100"/>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default SinglePage