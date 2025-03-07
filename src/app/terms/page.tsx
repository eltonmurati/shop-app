const TermsPage = () => {
    return(
        <div className="py-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 min-h-max h-[calc(100vh-80px)] xl:h-[calc(100vh-144px)] flex flex-col gap-12 justify-center">
            <h1 className="text-2xl font-medium">Terms & Conditions</h1>
            <div className="flex flex-col items-center justify-center gap-12">
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-medium">Orders and Payments</h2>
                    <p className="">When you place an order on our Site, you are making an offer to purchase the products, subject to these Terms. 
                        We reserve the right to accept or reject any order for any reason, including product availability, pricing errors, or suspicion of fraud. 
                        Payment for orders will be processed through Stripe. By submitting your payment details, 
                        you authorize us to charge the payment method you provide for the total order amount.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-medium">Shipping and Delivery</h2>
                    <p className="">
                        We strive to deliver products within the timeframes indicated on the Site. However, 
                        delivery times are not guaranteed and may vary due to factors such as shipping carrier delays or inventory issues. 
                        You are responsible for providing accurate shipping information, and any issues with delivery due to incorrect or incomplete information are your responsibility. 
                        Once your order is dispatched, we use a third-party courier service to deliver your products. 
                        While we take great care in ensuring your items are securely packaged and shipped, we are not responsible for any issues that arise during the shipping process, 
                        including but not limited to: delays in delivery, damage to products during transit, or loss of items.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-medium">Returns and Refunds</h2>
                    <p className="">
                    We do not offer refunds or accept returns on any products purchased from our website. All sales are final. 
                    Please make sure to review your order thoroughly before completing your purchase.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TermsPage;