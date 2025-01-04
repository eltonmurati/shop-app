import { postgres } from "@/app/lib/postgresClient";
import Image from "next/image";
import Link from "next/link";

const ProductList = async ({categoryId, limit}:{categoryId:number; limit:number;}) => {

    let { data: product, error } = await postgres.from('product').select('*').contains('categories', [categoryId]);

    return (
        <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
            <Link href="/product/1" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image 
                        src="https://images.pexels.com/photos/2088210/pexels-photo-2088210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="" 
                        fill 
                        sizes="25vw" 
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image 
                        src="https://images.pexels.com/photos/6194837/pexels-photo-6194837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="" 
                        fill 
                        sizes="25vw"
                        className="absolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">£49</span>
                </div>
                <div className="text-sm text-gray-500">My Description</div>
                <button className="rounded-2xl ring-1 ring-bwcblue text-bwcblue w-max py-2 px-4 text-xs hover:bg-bwcblue hover:text-white">Add to Cart</button>
            </Link>
        </div>
    )
};

export default ProductList;