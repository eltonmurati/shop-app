const AboutPage = () => {
    return(
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
            <h1 className="text-2xl font-medium py-8">About</h1>
            <div className="flex flex-col gap-12 pb-16">
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-medium">Welcome to BWC Merchants – Your Trusted Plumbing Partner</h2>
                    <p className="">
                        At BWC Merchants, we specialize in providing top-quality plumbing supplies, tools, and equipment for homeowners, tradespeople, and businesses. 
                        We’ve been serving our customers with a commitment to quality, reliability, and exceptional service. 
                        Whether you’re a DIY enthusiast or a seasoned plumbing professional, 
                        our extensive range of products ensures that you’ll find everything you need to get the job done right.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-medium">Our Mission</h2>
                    <p className="">
                        Our mission is simple: to be the go-to source for all your plumbing needs. We are dedicated to offering reliable, high-quality products at competitive prices, 
                        while ensuring every customer receives the best service possible. Our expert team is always here to provide guidance, answer questions, 
                        and help you find the perfect solutions for your projects.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-medium">What We Offer</h2>
                    <div className="flex flex-col gap-4">
                        At BWC Merchants, we offer a wide selection of plumbing products including:
                        <ul className="flex flex-col gap-2">
                            <li className=""><span className="font-medium">Pipes, fittings, and valves:</span> For all your plumbing installations and repairs.</li>
                            <li className=""><span className="font-medium">Plumbing tools:</span> Durable and reliable tools to help you get the job done efficiently.</li>
                            <li className=""><span className="font-medium">Heating solutions:</span> Radiators, underfloor heating, and more for residential and commercial spaces.</li>
                            <li className=""><span className="font-medium">Water heaters and boilers:</span> High-quality systems to meet your needs.</li>
                            <li className=""><span className="font-medium">Bathroom supplies:</span> From taps and showers to bathroom accessories and fixtures.</li>
                        </ul>
                        We also offer fast delivery and expert advice to ensure that you have everything you need, right when you need it.
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-medium">Why Choose BWC Merchants?</h2>
                    <div className="">
                        <ul className="flex flex-col gap-2">
                            <li className=""><span className="font-medium">Quality Products:</span> We only stock trusted, industry-leading brands known for their durability and performance.</li>
                            <li className=""><span className="font-medium">Expert Knowledge:</span> Our team has years of experience in the plumbing industry, so you can rely on us for informed recommendations and advice.</li>
                            <li className=""><span className="font-medium">Customer-Focused Service:</span> We pride ourselves on offering personalized customer service. Whether you’re looking for a specific product or need help with a plumbing issue, we’re here to assist.</li>
                            <li className=""><span className="font-medium">Competitive Prices:</span> Get the best value for your money without compromising on quality.</li>
                            <li className=""><span className="font-medium">Fast, Reliable Delivery:</span> We offer speedy shipping to ensure your plumbing materials arrive when you need them.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;