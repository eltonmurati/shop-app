import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <div className='py-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm'>
            {/* TOP */}
            <div className="flex flex-col md:flex-row justify-between gap-24">
                {/* LEFT */}
                <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
                    <Link href="/">
                        <div className="text-2xl tracking-wide">BWC Merchants</div>
                    </Link>
                    <p>Unit 15, Leyton Business Centre, Etloe Road, Leyton, London, E10 7BT, United Kingdom</p>
                    <span className="font-semibold">info@bwcmerchants.co.uk</span>
                    <span className="">+44 7469 285005</span>
                    <div className="flex gap-6">
                        <Image src="/facebook.png" alt="" width={16} height={16} />
                        <Image src="/instagram.png" alt="" width={16} height={16} />
                        <Image src="/youtube.png" alt="" width={16} height={16} />
                        <Image src="/pinterest.png" alt="" width={16} height={16} />
                        <Image src="/x.png" alt="" width={16} height={16} />
                    </div>
                </div>
                {/* CENTER */}
                <div className="hidden lg:flex justify-between w-1/2">
                    <div className="flex flex-col justify-between">
                        <h1 className="font-medium text-lg">COMPANY</h1>
                        <div className="flex flex-col gap-6">
                            <Link href="">About Us</Link>
                            <Link href="">Careers</Link>
                            <Link href="">Affiliates</Link>
                            <Link href="">Blog</Link>
                            <Link href="">Contact Us</Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <h1 className="font-medium text-lg">SHOP</h1>
                        <div className="flex flex-col gap-6">
                            <Link href="/shop">All Products</Link>
                            <Link href="/shop?cat=95">Featured Products</Link>
                            <Link href="/shop?cat=96">New Products</Link>
                            <Link href="/shop?sale=true">On-Sale Products</Link>
                            <Link href="/shop?sort=pop">Popular Products</Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <h1 className="font-medium text-lg">HELP</h1>
                        <div className="flex flex-col gap-6">
                            <Link href="">Customer Service</Link>
                            <Link href="">My Account</Link>
                            <Link href="">Find a Store</Link>
                            <Link href="">Legal & Privacy</Link>
                            <Link href="">Gift Card</Link>
                        </div>
                    </div>
                </div>
                {/* RIGHT */}
                <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
                    <h1 className="font-medium text-lg">SUBSCRIBE</h1>
                    <p>Be the first to get the latest news about trends, promotions, and much more!</p>
                    <div className="flex">
                        <input type="text" name="subscribe" placeholder="Email address" className="p-4 w-3/4 outline-none"/>
                        <button className="w-1/4 bg-blue-700 text-white">JOIN</button>
                    </div>
                    <span className="font-semibold">Secure Payments</span>
                    <div className="flex justify-between">
                        <Image src="/discover.png" alt="" width={40} height={40}/>
                        <Image src="/skrill.png" alt="" width={40} height={40}/>
                        <Image src="/paypal.png" alt="" width={40} height={40}/>
                        <Image src="/mastercard.png" alt="" width={40} height={40}/>
                        <Image src="/visa.png" alt="" width={40} height={40}/>
                    </div>
                </div>
            </div>
            {/* BOTTOM */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
                <div className="">© 2024 BWC Merchants Ltd</div>
                <div className="flex flex-col gap-8 md:flex-row">
                    <div className="">
                        <span className="text-gray-400 mr-4">Language</span>
                        <span className="font-medium">United Kingdom | English</span>
                    </div>
                    <div className="">
                        <span className="text-gray-400 mr-4">Currency</span>
                        <span className="font-medium">£ GDP</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer