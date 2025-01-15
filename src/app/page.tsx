import CategoryList from "@/components/CategoryList"
import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider"
import { Suspense } from "react"

const HomePage = () => {
  return (
    <div className=''>
      <Slider/>
      <div className="mt-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl mb-8">Featured Products</h1>
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
        <h1 className="text-2xl mb-8">New Products</h1>
        <Suspense fallback={"Loading..."}>
          <ProductList searchParams={{cat: 96}} limit={4} />
        </Suspense>
      </div>
    </div>
  )
}

export default HomePage