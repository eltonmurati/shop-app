import { postgres } from "@/app/lib/postgresClient";
import Add from "@/components/Add"
import CustomizeProducts from "@/components/CustomizeProducts"
import ProductImages from "@/components/ProductImages"
import { notFound } from "next/navigation";

const SinglePage = async ({params}:{params:{slug:string}}) => {

    const {slug} = await params;

    let { data: product } = await postgres.from('product').select('*, brand(*)').eq('id', slug).limit(1).single();

    if (!product) {
        return notFound();
    }

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
                    <h4 className="">{product.sku}</h4>
                    {product.description && (<p className="text-gray-400">{product.description}</p>)}
                    <div className="h-[2px] bg-gray-100"/>
                    {product.on_sale ? (
                        <div className="flex items-center gap-4">
                            <h2 className="text-xl text-gray-400 line-through">£{product.original_price.toLocaleString()}</h2>
                            <h2 className="font-medium text-2xl">£{product.price.toLocaleString()}</h2>
                            <div className="text-xs rounded-md bg-red-500 px-2 py-1 text-white font-medium">SALE</div>
                        </div>
                    ) : (
                        <h2 className="font-medium text-2xl">£{product.price.toLocaleString()}</h2>
                    )}
                    <div className="h-[2px] bg-gray-100"/>
                    {product.variants && (
                        <CustomizeProducts variants={product.variants} productId={product.id} />
                    )}
                    <Add stock={product.quantity} productId={product.id}/>
                    <div className="h-[2px] bg-gray-100"/>
                    <div className="">
                        <h2 className="font-medium mb-4">Specifications</h2>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm whitespace-nowrap text-gray-400">
                            <div className="flex flec-col justify-between items-center gap-4">
                                <p className="w-max">Brand</p>
                                <p className="w-max">{product.brand["name" as keyof (Number & { id: number; name: string; })] as string}</p>
                            </div>
                            {specEntries && (
                                <>
                                    {specEntries.map((entry)=>(
                                        <div className="flex flec-col justify-between items-center gap-4" key={entry[0]}>
                                            <p className="">{entry[0]}</p>
                                            <p className="">{entry[1]}</p>
                                        </div>
                                    ))}
                                </>
                            )}
                            <div className="flex flec-col justify-between items-center gap-4">
                                <p className="">Width</p>
                                <p className="">{product.width.toString() + "mm"}</p>
                            </div>
                            <div className="flex flec-col justify-between items-center gap-4">
                                <p className="">Height</p>
                                <p className="">{product.height.toString() + "mm"}</p>
                            </div>
                            <div className="flex flec-col justify-between items-center gap-4">
                                <p className="">Depth</p>
                                <p className="">{product.depth.toString() + "mm"}</p>
                            </div>
                            <div className="flex flec-col justify-between items-center gap-4">
                                <p className="">Weight</p>
                                <p className="">{product.weight.toString() + "kg"}</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default SinglePage