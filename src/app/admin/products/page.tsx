import AdminProductsList from "@/components/AdminProductsList";
import { redirect } from "next/navigation";

const AdminProductsPage = async ({searchParams}:{searchParams:any}) => {

    //redirect("/");

    const params = await searchParams;

    return(
        <div className="p-4 flex flex-col gap-4 w-full h-[calc(100vh-120px)] md:h-[calc(100vh-80px)] xl:h-[calc(100vh-144px)] overflow-hidden">
            <h1 className="text-2xl font-medium">Products</h1>
            <div className="flex md:items-center flex-col-reverse md:flex-row gap-4 md:gap-8">
                <input placeholder="Search products" className="ring-2 ring-gray-200 ring-inset p-2 rounded-md outline-none" />
                <button className="flex w-max gap-2 rounded-full p-2 pr-3 text-blue-700 ring-1 ring-blue-700 ring-inset hover:bg-blue-700 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <div className="text-sm">Add a new product</div>
                </button>
            </div>
            <AdminProductsList searchParams={params}/>
        </div>
    );
}

export default AdminProductsPage;