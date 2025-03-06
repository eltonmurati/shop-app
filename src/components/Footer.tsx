import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <div className='py-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm'>
            {/* TOP */}
            <div className="flex flex-col md:flex-row gap-8 justify-between">
                <div className="flex flex-col gap-4 max-w-[30rem]">
                    <Link href="/">
                        <div className="text-2xl tracking-wide">BWC Merchants</div>
                    </Link>
                    <p>Unit 15, Leyton Business Centre, Etloe Road, Leyton, London, E10 7BT, United Kingdom</p>
                    <span className="">orders@bwcmerchants.co.uk</span>
                    <span className="">020 3336 7457</span>
                </div>
                <div className="flex flex-col gap-8 max-w-[30rem]">
                    <div className="flex flex-col gap-4">
                        <span className="font-semibold">Secure Payments</span>
                        <div className="flex gap-8">
                            <Image src="/stripe.png" alt="" width={40} height={20} />
                            <Image src="/amex.png" alt="" width={40} height={20} />
                            <Image src="/mastercard.png" alt="" width={40} height={20} />
                            <Image src="/visa.png" alt="" width={40} height={20} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="font-semibold">Terms & Conditions</span>
                        <p className="">
                            By purchasing any product from our website, you acknowledge and agree to abide by our Terms and Conditions.
                            <span className="text-blue-700"><Link href="/terms" target="_blank"> Read our T&Cs here.</Link></span>
                        </p>
                    </div>
                </div>
            </div>
            {/* BOTTOM */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
                <div className="">© 2025 BWC Merchants Ltd</div>
                <div className="flex flex-col gap-8 md:flex-row">
                    <div className="flex gap-4">
                        <span className="text-gray-400">Language</span>
                        <span className="font-medium">United Kingdom | English</span>
                    </div>
                    <div className="flex gap-4">
                        <span className="text-gray-400">Currency</span>
                        <span className="font-medium">£ GDP</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer