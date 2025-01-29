import Image from "next/image";

const CartCard = ({id, quantity}:{id:number; quantity:number;}) => {

    const product = {"name": "test name", "price": 1000, "sku": "1002003"};

    return(
        <div className="flex gap-4">
            <Image 
                src="https://images.pexels.com/photos/2088210/pexels-photo-2088210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="" 
                width={72} 
                height={96} 
                className="object-cover rounded-md"
            />
            <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                    {/* TITLE */}
                    <div className="flex items-center justify-between gap-8">
                        <h3 className="font-semibold">{product.name}</h3>
                        <div className="p-1">£{product.price.toLocaleString()}</div>
                    </div>
                    {/* DESCRIPTION */}
                    <div className="text-sm text-gray-500">
                        {product.sku}
                    </div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Qty. {quantity}</span>
                    <span className="text-bwcred">Remove</span>
                </div>
            </div>
        </div>
    );
}

export default CartCard;