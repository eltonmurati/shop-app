import { postgres } from "@/app/lib/postgresClient";
import Image from "next/image";
import Link from "next/link";
import Pagination from "./Pagination";

const ProductList = async ({searchParams, limit}:{searchParams?:any; limit?:number;}) => {

    if (!limit) { limit = 20; }
    let page = 1;
    if (searchParams["page"]) { page = searchParams["page"]; }
    const start = limit * (page - 1)
    const end = limit * page - 1;

    let productQuery = postgres.from('product').select('*, category!inner(*), brand!inner(*)');

    if (searchParams["search"]) { productQuery = productQuery.or(`name.ilike.%${searchParams["search"]}%, sku.ilike.%${searchParams["search"]}%`); }
    if (searchParams["cat"]) { productQuery = productQuery.in("category.id", Array.isArray(searchParams["cat"]) ? searchParams["cat"] : [searchParams["cat"]] ); }
    if (searchParams["brand"]) { productQuery = productQuery.in("brand.id", Array.isArray(searchParams["brand"]) ? searchParams["brand"] : [searchParams["brand"]] ); }
    if (searchParams["stock"]) { productQuery = productQuery.gt("quantity", 0); }
    if (searchParams["sale"]) { productQuery = productQuery.eq("on_sale", true); }
    if (searchParams["minprice"]) { productQuery = productQuery.gte("price", searchParams["minprice"]); }
    if (searchParams["maxprice"]) { productQuery = productQuery.lte("price", searchParams["maxprice"]); }
    if (searchParams["minheight"]) { productQuery = productQuery.gte("height", searchParams["minheight"]); }
    if (searchParams["maxheight"]) { productQuery = productQuery.lte("height", searchParams["maxheight"]); }
    if (searchParams["minwidth"]) { productQuery = productQuery.gte("width", searchParams["minwidth"]); }
    if (searchParams["maxwidth"]) { productQuery = productQuery.lte("width", searchParams["maxwidth"]); }
    if (searchParams["mindepth"]) { productQuery = productQuery.gte("depth", searchParams["mindepth"]); }
    if (searchParams["maxdepth"]) { productQuery = productQuery.lte("depth", searchParams["maxdepth"]); }
    if (searchParams["minweight"]) { productQuery = productQuery.gte("weight", searchParams["minweight"]); }
    if (searchParams["maxweight"]) { productQuery = productQuery.lte("weight", searchParams["maxweight"]); }

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

    let {data: temp} = await productQuery;
    const length = temp?.length;

    productQuery = productQuery.range(start, end);
    let { data: products } = await productQuery;
    let found = true;
    if (!products || products.length < 1) { found = false; }

    return (
        <>
            {found ? (
                <>
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
                                        className="rounded-2xl ring-1 ring-bwcblue text-bwcblue w-max py-2 px-4 text-xs whitespace-nowrap hover:bg-bwcblue hover:text-white 
                                            disabled:text-white disabled:bg-bwcblue_disabled disabled:ring-bwcblue_disabled disabled:cursor-not-allowed" 
                                        disabled={!(product.quantity > 0)}
                                    >
                                        Add to Cart
                                    </button>
                                    {product.on_sale && (
                                        <div className="flex gap-2 items-center">
                                            <div className="text-xs rounded-md bg-bwcred px-2 py-1 text-white font-medium">SALE</div>
                                            <div className="text-xs rounded-md ring-1 ring-bwcred px-2 py-1 text-bwcred ring-inset font-medium whitespace-nowrap">
                                                {Math.round(100-(product.price/product.original_price)*100)}% OFF
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>
                    <Pagination length={length!} limit={limit} page={page} />
                </>
            ) : (
                <div className="text-gray-700 text-center my-8 text-xl font-medium">No products found</div>
            )}
        </>
    )
};

export default ProductList;