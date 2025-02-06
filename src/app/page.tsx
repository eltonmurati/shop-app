import CategoryList from "@/components/CategoryList"
import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider"
import Link from "next/link"
import { Suspense } from "react"

const HomePage = () => {
  return (
    <div className='mb-16'>
      <Slider/>
      <div className="mt-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <Link href="/shop?cat=95" className="flex gap-2 mb-8 items-center">
          <h1 className="text-2xl">Featured Products</h1>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </Link>
        <Suspense fallback={"Loading..."}>
          <ProductList searchParams={{cat: 95}} limit={4} />
        </Suspense>
      </div>
      <div className="mt-16">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-8">Categories</h1>
        <Suspense fallback={"Loading..."}>
          <CategoryList />
        </Suspense>
      </div>
      <div className="mt-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <Link href="/shop?cat=96" className="flex gap-2 mb-8 items-center">
          <h1 className="text-2xl">New Products</h1>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </Link>
        <Suspense fallback={"Loading..."}>
          <ProductList searchParams={{cat: 96}} limit={4} />
        </Suspense>
      </div>
    </div>
  )
}

export default HomePage