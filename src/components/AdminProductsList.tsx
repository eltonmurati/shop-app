import { postgres } from "@/lib/postgresClient";
import Pagination from "./Pagination";
import { getPriceText } from "@/lib/helpers";

const AdminProductsList = async ({searchParams}:{searchParams?:any}) => {

    let page = 1;
    if (searchParams["page"]) { page = searchParams["page"]; }

    const limit = 100;
    const start = limit * (page - 1);
    const end = limit * page - 1;

    let productQuery = postgres.from('product').select('*, brand(*), category(*)', {count: "exact"});

    if (searchParams["search"]) {
        productQuery = productQuery.or(`sku.eq.${searchParams["search"]},manufacturer_code.eq.${searchParams["search"]},fts_name.wfts.${searchParams["search"]}`
            + (Number.isInteger(Number(searchParams["search"])) ? `,id.eq.${searchParams["search"]}` : ""));
    }

    productQuery = productQuery.order("id", { ascending: true }).range(start, end);

    const { data: products, count } = await productQuery;

    return(
        <>
            <div className="rounded-md ring-1 ring-gray-300 h-full w-full overflow-auto">
                <div className="w-max">
                    {/* HEADER */}
                    <div className="flex font-semibold sticky top-0 bg-white/75 backdrop-blur-sm">
                        <div className="p-2 w-24">ID</div>
                        <div className="p-2 w-96">Name</div>
                        <div className="p-2 w-24">Price</div>
                        <div className="p-2 w-24">Stock</div>
                        <div className="p-2 w-48">Brand</div>
                        <div className="p-2 w-64">Our Code</div>
                        <div className="p-2 w-64">Manufacturer Code</div>
                        <div className="p-2 w-24">On Sale</div>
                        <div className="p-2 w-96">Categories</div>
                    </div>
                    {/* ITEMS */}
                    {products?.map((product, i)=>(
                        <div key={product.id} className={"flex hover:bg-blue-100 " + (i % 2 === 0 && "bg-gray-50")}>
                            <div className="p-2 w-24 line-clamp-1 truncate">{product.id}</div>
                            <div className="p-2 w-96 line-clamp-1 truncate">{product.name}</div>
                            <div className="p-2 w-24 line-clamp-1 truncate">£{getPriceText(product.price)}</div>
                            <div className={"p-2 w-24 line-clamp-1 truncate " + (product.quantity > 0 ? "text-green-500" : "text-red-500")}>{product.quantity}</div>
                            <div className="p-2 w-48 line-clamp-1 truncate">{product.brand ? product.brand.name : (<span className="text-gray-400">Null</span>)}</div>
                            <div className="p-2 w-64 line-clamp-1 truncate">{product.sku}</div>
                            <div className="p-2 w-64 line-clamp-1 truncate">{product.manufacturer_code ? product.manufacturer_code : (<span className="text-gray-400">Null</span>)}</div>
                            <div className={"p-2 w-24 line-clamp-1 truncate " + (product.on_sale ? "text-green-500" : "text-red-500")}>{product.on_sale ? "True" : "False"}</div>
                            <div className="p-2 w-96 line-clamp-1 truncate">
                                {product.category.length > 0 ? (
                                    product.category.map((category, j)=>(
                                        category.name + (j === product.category.length - 1 ? "" : ", ")
                                    ))
                                ) : (<span className="text-gray-400">Null</span>)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Pagination length={count!} limit={limit} page={page} />
        </>
    );
}

export default AdminProductsList;