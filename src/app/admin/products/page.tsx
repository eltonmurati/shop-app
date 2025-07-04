import AddProductButton from "@/components/AddProductButton";
import AdminProductSearch from "@/components/AdminProductSearch";
import AdminProductsList from "@/components/AdminProductsList";
import { redirect } from "next/navigation";

const AdminProductsPage = async ({searchParams}:{searchParams:any}) => {

    //redirect("/");

    const params = await searchParams;

    return(
        <div className="p-4 flex flex-col gap-4 w-full h-[calc(100vh-120px)] md:h-[calc(100vh-80px)] xl:h-[calc(100vh-144px)] overflow-hidden">
            <h1 className="text-2xl font-medium">Products</h1>
            <div className="flex md:items-center flex-col-reverse md:flex-row gap-4 z-30">
                <AdminProductSearch />
                <AddProductButton />
            </div>
            <AdminProductsList searchParams={params} />
        </div>
    );
}

export default AdminProductsPage;