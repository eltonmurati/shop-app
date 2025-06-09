import { postgres } from "@/lib/postgresClient";

const AdminProductsPage = async () => {

    const { data: products } = await postgres.from('product').select();
    
    return(
        <div className="p-4 flex flex-col gap-4 w-full">
            <h1 className="text-2xl font-medium">Products</h1>
            <div className="flex gap-8">
                <input placeholder="Search products" className="ring-2 ring-gray-200 ring-inset px-4 rounded-md outline-none" />
                <button className="flex gap-2 rounded-full p-3 pr-4 text-blue-700 ring-1 ring-blue-700 ring-inset hover:bg-blue-700 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add a new product
                </button>
            </div>
            <div className="flex flex-col h-full rounded-md ring-1 ring-gray-200 h-[500px] w-full overflow-x-scroll overflow-y-auto">
                <div className="flex p-2 gap-4 font-medium sticky top-0 bg-white">
                    <div className="w-24 truncate">ID</div>
                    <div className="w-96 truncate">Name</div>
                    <div className="w-24 truncate">Stock</div>
                    <div className="w-24 truncate">Price</div>
                    <div className="w-24 truncate">On Sale</div>
                    <div className="w-48 truncate">Our Code</div>
                    <div className="w-48 truncate">Manufacturer Code</div>
                </div>
                {products?.map((product)=>(
                    <div className="flex p-2 gap-4 hover:bg-gray-100 hover:cursor-pointer" key={product.id}>
                        <div className="w-24 truncate">{product.id}</div>
                        <div className="w-96 truncate">{product.name}</div>
                        <div className="w-24 truncate">{product.quantity}</div>
                        <div className="w-24 truncate">{product.price}</div>
                        <div className="w-24 truncate">{product.on_sale ? "TRUE" : "FALSE"}</div>
                        <div className="w-48 truncate">{product.sku}</div>
                        <div className="w-48 truncate">{product.manufacturer_code || "N/A"}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminProductsPage;