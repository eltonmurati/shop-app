import { postgres } from "@/lib/postgresClient";
import { redirect } from "next/navigation";

const AdminProductsPage = async () => {

    //redirect("/");

    const { data: products } = await postgres.from('product').select();
    
    return(
        <div className="p-4 flex flex-col gap-4 w-full h-[calc(100vh-80px)] xl:h-[calc(100vh-144px)]">
            <h1 className="text-2xl font-medium">Products</h1>
            <div className="flex gap-8">
                <input placeholder="Search products" className="ring-2 ring-gray-200 ring-inset px-4 rounded-md outline-none" />
                <button className="flex gap-2 rounded-full p-3 pr-4 text-blue-700 ring-1 ring-blue-700 ring-inset hover:bg-blue-700 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <div className="whitespace-nowrap">Add a new product</div>
                </button>
            </div>
            <div className="flex flex-col rounded-md ring-1 ring-gray-200 h-full w-full overflow-auto">
                
            </div>
            <div className="bg-green-200 h-20"></div>
        </div>
    );
}

export default AdminProductsPage;