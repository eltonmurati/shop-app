import Filter from "@/components/Filter"
import ProductList from "@/components/ProductList"
import Image from "next/image"
import { postgres } from "../lib/postgresClient"
import { notFound } from "next/navigation"
import { Suspense } from "react"

const ListPage = async ({searchParams}:{searchParams:any}) => {

    const params = await searchParams;

    let { data: category } = await postgres.from('category').select('*').eq('id', Number(params['cat'])).limit(1).single();

    if (!category) {
        return notFound();
    }

    return (
        <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
            {/* CAMPAIGN */}
            <div className="hidden bg-blue-50 px-4 sm:flex justify-between h-64">
                <div className="w-2/3 flex flex-col items-center justify-center gap-8">
                    <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">Grab up to 50% off on<br/> Selected Products</h1>
                    <button className="rounded-3xl bg-bwcblue text-white w-max py-3 px-5 text-sm">Buy Now</button>
                </div>
                <div className="relative w-1/3">
                    <Image src="/woman.png" alt="" fill className="object-contain"/>
                </div>
            </div>
            <h1 className="mt-8 text-2xl font-semibold">Boilers</h1>
            {/* FILTER */}
            <Filter/>
            {/* PRODUCTS */}
            <Suspense fallback={"Loading..."}>
                <ProductList categoryId={category.id} limit={20} searchParams={params} />
            </Suspense>
        </div>
    )
}

export default ListPage