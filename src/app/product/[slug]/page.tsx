import { postgres } from "@/app/lib/postgresClient";
import Add from "@/components/Add"
import CustomizeProducts from "@/components/CustomizeProducts"
import ProductImages from "@/components/ProductImages"
import { notFound } from "next/navigation";

const SinglePage = async ({params}:{params:{slug:string}}) => {

    const {slug} = await params;

    let { data: product } = await postgres.from('product').select(`*, brand(*)`).eq('id', slug).limit(1).single();

    if (!product) {
        return notFound();
    }

    let discountPrice = product.discounted_price ? product.discounted_price.toLocaleString() : null;
    let images = product.image_urls ? product.image_urls : [];
    let specEntries = product.specifications ? Object.entries(product.specifications) : null;
    
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col lg:flex-row gap-8 xl:gap-16 md:mt-4 lg:mt-8">
                {/* IMAGES */}
                <div className="w-full lg:w-1/2 lg:sticky top-4 h-max">
                    <ProductImages images={images}/>
                </div>
                {/* TEXTS */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                    <h1 className="text-4xl font-medium">{product.name}</h1>
                    <p className="">{product.sku}</p>
                    {product.description && (<p className="text-gray-500">{product.description}</p>)}
                    <div className="h-[2px] bg-gray-100"/>
                    {discountPrice ? (
                        <div className="flex items-center gap-4">
                            <h3 className="text-xl text-gray-500 line-through">£{product.price.toLocaleString()}</h3>
                            <h2 className="font-medium text-2xl">£{discountPrice}</h2>
                        </div>
                    ) : (
                        <h2 className="font-medium text-2xl">£{product.price.toLocaleString()}</h2>
                    )}
                    <div className="h-[2px] bg-gray-100"/>
                    <CustomizeProducts variants={product.variants} id={product.id}/>
                    <Add stock={product.quantity} />
                    <div>
                        <h2 className="text-2xl pt-8 pb-2 font-medium">Specifications</h2>
                        <div className="h-[2px] bg-gray-100"/>
                        <div className="text-sm">
                            <div className="flex flec-col justify-between py-2">
                                <h3 className="text-lg">Brand</h3>
                                <h3 className="text-lg">{product.brand["name" as keyof (Number & { id: number; name: string; })] as string}</h3>
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
                                <h3 className="text-lg">{product.width.toString() + "mm"}</h3>
                            </div>
                            <div className="h-[2px] bg-gray-100"/>
                        </div>
                        <div className="text-sm">
                            <div className="flex flec-col justify-between py-2">
                                <h3 className="text-lg">Height</h3>
                                <h3 className="text-lg">{product.height.toString() + "mm"}</h3>
                            </div>
                            <div className="h-[2px] bg-gray-100"/>
                        </div>
                        <div className="text-sm">
                            <div className="flex flec-col justify-between py-2">
                                <h3 className="text-lg">Depth</h3>
                                <h3 className="text-lg">{product.depth.toString() + "mm"}</h3>
                            </div>
                            <div className="h-[2px] bg-gray-100"/>
                        </div>
                        <div className="text-sm">
                            <div className="flex flec-col justify-between py-2">
                                <h3 className="text-lg">Weight</h3>
                                <h3 className="text-lg">{product.weight.toString() + "kg"}</h3>
                            </div>
                            <div className="h-[2px] bg-gray-100"/>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default SinglePage