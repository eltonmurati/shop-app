import { postgres } from "@/lib/postgresClient";
import Image from "next/image";
import Link from "next/link";
import Pagination from "./Pagination";
import QuickAdd from "./QuickAdd";
import { getPriceText } from "@/lib/helpers";

const ProductList = async ({searchParams, limit}:{searchParams?:any; limit?:number;}) => {

    if (!limit) { limit = 20; }
    let page = 1;
    if (searchParams["page"]) { page = searchParams["page"]; }
    const start = limit * (page - 1)
    const end = limit * page - 1;

    let productQuery = postgres.from('product').select('*', {count: "estimated"});

    if (searchParams["cat"]) { 
        const { data: productIds } = await postgres
            .from("product_category")
            .select("product_id")
            .in("category_id", Array.isArray(searchParams["cat"]) ? searchParams["cat"] : [searchParams["cat"]]);

        productQuery = productQuery.in('id', productIds?.map(item => item.product_id)!);
    }

    if (searchParams["search"]) { productQuery = productQuery.textSearch('name', searchParams["search"], {type: "websearch"}); }
    if (searchParams["brand"]) { productQuery = productQuery.in("brand", Array.isArray(searchParams["brand"]) ? searchParams["brand"] : [searchParams["brand"]] ); }
    if (searchParams["stock"]) { productQuery = productQuery.gt("quantity", 0); }
    if (searchParams["sale"]) { productQuery = productQuery.eq("on_sale", true); }
    if (searchParams["minprice"]) { productQuery = productQuery.gte("price", searchParams["minprice"]); }
    if (searchParams["maxprice"]) { productQuery = productQuery.lte("price", searchParams["maxprice"]); }

    if (searchParams["sort"]) { 
        switch (searchParams["sort"]) {
            case "asc":
                productQuery = productQuery.order("price", { ascending: true });
                break;
            case "desc":
                productQuery = productQuery.order("price", { ascending: false });
                break;
        }
    }

    productQuery = productQuery.range(start, end);

    let { data: products, count } = await productQuery;

    let found = true;
    if (!products || products.length < 1) { found = false; }

    return (
        <>
            {found ? (
                <>
                    <div className="flex gap-x-8 gap-y-16 flex-wrap">
                        {products!.map((product)=>(
                            <Link href={"/product/"+product.id} 
                                className="w-full flex flex-col gap-4 sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] relative" 
                                key={product.id}
                            >
                                <div className="relative w-full h-80">
                                    <Image 
                                        src={product.image_urls?.at(0) || "/noImage.jpg"} 
                                        //src="/noImage.jpg"
                                        alt="" 
                                        fill 
                                        sizes="25vw" 
                                        className="absolute object-contain rounded-md z-10"
                                    />
                                </div>
                                <div className="flex justify-between min-h-12 gap-4">
                                    <h2 className="font-medium line-clamp-2">{product.name}</h2>
                                    {product.on_sale ? (
                                        <div className="flex flex-col text-end">
                                            <div className="text-gray-400 line-through">£{getPriceText(product.original_price)}</div>
                                            <div className="font-medium text-black ring-1 ring-gray-400 px-1 rounded-md h-max">£{getPriceText(product.price)}</div>
                                        </div>
                                    ) : (
                                        <div className="font-medium text-black ring-1 ring-gray-400 px-1 rounded-md h-max">£{getPriceText(product.price)}</div>
                                    )}
                                </div>
                                <div className="flex justify-between items-center">
                                    <h3 className="text-sm text-gray-400 font-normal">{product.sku}</h3>
                                    {product.quantity > 0 ? (
                                        <div className="text-sm text-green-500 font-medium">{product.quantity + " In Stock"}</div>
                                    ) : (
                                        <div className="text-sm text-red-500 font-medium">Out Of Stock</div>
                                    )}
                                </div>
                                <QuickAdd product={product} />
                                {product.on_sale && (
                                    <div className="text-sm rounded-md bg-blue-700 px-2 py-1 text-white font-medium tracking-wider absolute top-3 left-3 z-10">SALE</div>
                                )}
                            </Link>
                        ))}
                    </div>
                    <Pagination length={count!} limit={limit} page={page} />
                </>
            ) : (
                <div className="text-gray-700 text-center text-xl font-medium">No products found</div>
            )}
        </>
    )
};

export default ProductList;