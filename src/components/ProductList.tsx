import { postgres } from "@/app/lib/postgresClient";
import Image from "next/image";
import Link from "next/link";

const ProductList = async ({searchParams, limit}:{searchParams?:any; limit?:number;}) => {

    let productQuery = postgres
        .from('product')
        .select('*, category!inner(*)')
        //.match(query)
        //.order(sort[0], sort[1])
        //.limit(limit || 20);

    if (searchParams["name"]) {
        productQuery = productQuery.ilike("name", `%${searchParams["name"]}%`)
    }
    
    if (searchParams["cat"]) {
        productQuery = productQuery.in("category.id", searchParams["cat"])
    }
    
    let { data: products } = await productQuery;

    let found = true;

    if (!products || products.length < 1) {
        products = [];
        found = false;
    }

    return (
        <>
            {found ? (
                <div className="flex gap-x-8 gap-y-16 flex-wrap">
                    {products.map((product)=>(
                        <Link href={"/product/"+product.id} className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]" key={product.id}>
                            <div className="relative w-full h-80">
                                <Image 
                                    src={product.image_urls?.at(0) || "/noImage.jpg"} 
                                    alt="" 
                                    fill 
                                    sizes="25vw" 
                                    className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                                />
                                {product.image_urls?.at(1) && (
                                    <Image 
                                        src={product.image_urls[1]} 
                                        alt="" 
                                        fill 
                                        sizes="25vw"
                                        className="absolute object-cover rounded-md"
                                    />
                                )}
                            </div>
                            <div className="flex justify-between">
                                <h2 className="font-medium">{product.name}</h2>
                                {product.discounted_price ? (
                                    <div className="flex flex-col text-end">
                                        <div className="text-gray-500 line-through pl-4">£{product.price.toLocaleString()}</div>
                                        <div className="font-semibold pl-4">£{product.discounted_price.toLocaleString()}</div>
                                    </div>
                                ) : (
                                    <div className="font-semibold pl-4">£{product.price.toLocaleString()}</div>
                                )}
                            </div>
                            <div className="flex justify-between items-center">
                                <h3 className="text-sm text-gray-500 font-normal">{product.sku}</h3>
                                {product.quantity > 0 ? (
                                    <div className="text-sm text-bwcgreen font-medium">{product.quantity + " In Stock"}</div>
                                ) : (
                                    <div className="text-sm text-bwcred font-medium">Out Of Stock</div>
                                )}
                            </div>
                            <button 
                                className="rounded-2xl ring-1 ring-bwcblue text-bwcblue w-max py-2 px-4 text-xs hover:bg-bwcblue hover:text-white 
                                    disabled:text-white disabled:bg-bwcblue_disabled disabled:ring-bwcblue_disabled disabled:cursor-not-allowed" 
                                disabled={!(product.quantity > 0)}
                            >
                                Add to Cart
                            </button>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="text-gray-500 text-center mt-8 text-xl font-medium">No products found</div>
            )}
        </>
    )
};

export default ProductList;