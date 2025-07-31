import Marquee from "@/components/Marquee"
import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider"
import Link from "next/link"
import { Suspense } from "react"

const partners = [
  {
    id: 1,
    source: "/partnerImages/kartell.webp",
    link: "https://kartelluk.com/",
  },
  {
    id: 2,
    source: "/partnerImages/barco.png",
    link: "https://www.barco.net/",
  },
  {
    id: 3,
    source: "/partnerImages/primaflow.jpg",
    link: "https://www.primaflowfandp.co.uk/",
  },
  {
    id: 4,
    source: "/partnerImages/navigator.png",
    link: "https://navigatormsl.com/",
  },
  {
    id: 5,
    source: "/partnerImages/fwhipkin.png",
    link: "https://fwhipkin.co.uk/",
  },
  {
    id: 6,
    source: "/partnerImages/markvitow.png",
    link: "https://markvitow.com/",
  },
  {
    id: 7,
    source: "/partnerImages/boilerandheatingcare.png",
    link: "https://boilerheatingcare.co.uk/",
  },
]

const HomePage = () => {
  return (
    <div className='mb-16'>
      <Slider/>
      <div className="flex flex-col items-center gap-8 mt-16 mx-4 md:mx-8 lg:mx-16 xl:mx-32 2xl:mx-64">
        
        <h1 className="text-2xl">Our Partners</h1>
        <div className="h-[2px] bg-gray-100 w-full"></div>
        <div className="w-full overflow-hidden">
          <Marquee items={partners} />
        </div>
        <div className="h-[2px] bg-gray-100 w-full"></div>
      </div>
      <div className="mt-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <Link href="/shop?cat=95" className="flex gap-2 mb-8 items-center hover:text-blue-700 w-max tansition-colors duration-200">
          <h1 className="text-2xl">Featured Products</h1>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </Link>
        <Suspense fallback={"Loading..."}>
          <ProductList searchParams={{cat: 95}} limit={4} />
        </Suspense>
      </div>
    </div>
  )
}

export default HomePage