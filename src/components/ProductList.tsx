import { postgres } from "@/app/lib/postgresClient";
import Image from "next/image";
import Link from "next/link";

const ProductList = async ({searchParams, limit}:{searchParams?:any; limit?:number;}) => {

    let productQuery = postgres
        .from('product')
        .select('*, category!inner(*), brand!inner(*)');

    if (searchParams["search"]) { productQuery = productQuery.or(`name.ilike.%${searchParams["search"]}%, sku.ilike.%${searchParams["search"]}%`); }

    if (searchParams["cat"]) { productQuery = productQuery.in("category.id", Array.isArray(searchParams["cat"]) ? searchParams["cat"] : [searchParams["cat"]] ); }

    if (searchParams["brand"]) { productQuery = productQuery.eq("brand.id", searchParams["brand"]); }

    if (searchParams["stock"]) { productQuery = productQuery.gt("quantity", 0); }

    if (searchParams["sale"]) { productQuery = productQuery.eq("on_sale", true); }

    if (searchParams["sort"]) { 
        switch (searchParams["sort"]) {
            case "pop":
                productQuery = productQuery.order("amount_purchased", { ascending: false });
                break;
            case "asc":
                productQuery = productQuery.order("price", { ascending: true });
                break;
            case "desc":
                productQuery = productQuery.order("price", { ascending: false });
                break;
        }
    }

    productQuery = productQuery.limit(limit || 20);

    let { data: products } = await productQuery;

    let found = true;
    if (!products || products.length < 1) { found = false; }

    return (
        <>
            {found ? (
                <div className="flex gap-x-8 gap-y-16 flex-wrap">
                    {products!.map((product)=>(
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
                            <div className="flex justify-between min-h-12">
                                <h2 className="font-medium line-clamp-2">{product.name}</h2>
                                {product.on_sale ? (
                                    <div className="flex flex-col text-end">
                                        <div className="text-gray-500 line-through pl-4">£{product.original_price.toLocaleString()}</div>
                                        <div className="font-semibold pl-4">£{product.price.toLocaleString()}</div>
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
                            <div className="flex items-center justify-between">
                                <button 
                                    className="rounded-2xl ring-1 ring-bwcblue text-bwcblue w-max py-2 px-4 text-xs hover:bg-bwcblue hover:text-white 
                                        disabled:text-white disabled:bg-bwcblue_disabled disabled:ring-bwcblue_disabled disabled:cursor-not-allowed" 
                                    disabled={!(product.quantity > 0)}
                                >
                                    Add to Cart
                                </button>
                                {product.on_sale && (
                                    <div className="flex gap-2 items-center">
                                        <div className="text-xs rounded-md bg-bwcred px-2 py-1 text-white font-medium">SALE</div>
                                        <div className="text-xs rounded-md ring-1 ring-bwcred px-2 py-1 text-bwcred ring-inset font-medium">
                                            {Math.round(100-(product.price/product.original_price)*100)}% OFF
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="text-gray-500 text-center my-8 text-xl font-medium">No products found</div>
            )}
        </>
    )
};

export default ProductList;