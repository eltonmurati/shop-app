import Filter from "@/components/Filter"
import ProductList from "@/components/ProductList"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"

const ShopPage = async ({searchParams}:{searchParams:any}) => {

    const params = await searchParams;

    return (
        <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
            {/* CAMPAIGN */}
            {/* <div className="hidden bg-blue-50 px-4 sm:flex justify-between h-64">
                <div className="w-2/3 flex flex-col items-center justify-center gap-8">
                    <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">Grab up to 30% off on<br/> Selected Products</h1>
                    <Link href="/list?sale=true">
                        <button className="rounded-3xl bg-bwcblue text-white w-max py-3 px-5 text-sm">Buy Now</button>
                    </Link>
                </div>
                <div className="relative w-1/3">
                    <Image src="/woman.png" alt="" fill className="object-contain"/>
                </div>
            </div> */}
            {/* TITLE */}
            <h1 className="font-semibold text-2xl mt-8">Shop</h1>
            {/* FILTER */}
            <Filter />
            {/* PRODUCTS */}
            <Suspense fallback={"Loading..."}>
                <ProductList searchParams={params} limit={2} />
            </Suspense>
        </div>
    )
}

export default ShopPage