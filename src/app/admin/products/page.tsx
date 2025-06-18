import { postgres } from "@/lib/postgresClient";
import { redirect } from "next/navigation";

const AdminProductsPage = async () => {

    //redirect("/");

    const { data: products } = await postgres.from('product').select();
    
    return(
        <div className="p-4 flex flex-col gap-4 w-full h-[calc(100vh-80px)] xl:h-[calc(100vh-144px)] overflow-hidden">
            <h1 className="text-2xl font-medium">Products</h1>
            <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-8">
                <input placeholder="Search products" className="ring-2 ring-gray-200 ring-inset px-4 py-3 rounded-md outline-none" />
                <button className="flex w-max gap-2 rounded-full p-3 pr-4 text-blue-700 ring-1 ring-blue-700 ring-inset hover:bg-blue-700 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <div className="whitespace-nowrap">Add a new product</div>
                </button>
            </div>
            <div className="rounded-md ring-1 ring-gray-200 h-full w-full overflow-auto">
                <div className="w-max">
                    {/* HEADER */}
                    <div className="flex font-semibold sticky top-0 bg-white">
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
                    {products?.map(product=>(
                        <div key={product.id} className="flex hover:bg-gray-100">
                            <div className="p-2 w-24 line-clamp-1 truncate">{product.id}</div>
                            <div className="p-2 w-96 line-clamp-1 truncate">{product.name}</div>
                            <div className="p-2 w-24 line-clamp-1 truncate">£{product.price}</div>
                            <div className="p-2 w-24 line-clamp-1 truncate">{product.quantity}</div>
                            <div className="p-2 w-48 line-clamp-1 truncate">Brand</div>
                            <div className="p-2 w-64 line-clamp-1 truncate">{product.sku}</div>
                            <div className="p-2 w-64 line-clamp-1 truncate">{product.manufacturer_code}</div>
                            <div className="p-2 w-24 line-clamp-1 truncate">{product.on_sale ? "True" : "False"}</div>
                            <div className="p-2 w-96 line-clamp-1 truncate">Categories</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-green-200 h-20"></div>
        </div>
    );
}

export default AdminProductsPage;