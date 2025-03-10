import { Json } from "@/lib/types";
import VariantTag from "./VariantTag";

const CustomizeProducts = ({variants, productId}:{variants:Json; productId:number;}) => {
    return (
        <>
            {Object.entries(variants!).map(([key,value])=>(
                <div className="flex flex-col gap-4" key={key}>
                    <h4 className="font-medium">Choose a {key.toLowerCase()}</h4>
                    <ul className="flex items-center gap-3 flex-wrap">
                        {Object.entries(value).map(([variant,id])=>(
                            <VariantTag variant={variant} productId={id as number} ogProductId={productId} key={variant} />
                        ))}
                    </ul>
                </div>
            ))}

            {/* DO NOT REMOVE - USE FOR COLOURS */}

            {/*<h4 className="font-medium">Choose a size</h4>
            <ul className="flex items-center gap-3">
                <li className="ring-1 ring-red-500 text-red-500 rounded-md py-1 px-4 text-sm cursor-pointer">
                    826
                </li>
                <li className="ring-1 ring-red-500 text-white bg-red-500 rounded-md py-1 px-4 text-sm cursor-pointer">
                    832
                </li>
                <li className="ring-1 ring-red-100 text-white bg-red-100 rounded-md py-1 px-4 text-sm cursor-not-allowed">
                    840
                </li>
            </ul>
            <h4 className="font-medium">Choose a colour</h4>
            <ul className="flex items-center gap-3">
                <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500">
                    <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
                </li>
                <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-700"></li>
                <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-green-500">
                    <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
                </li>
            </ul>*/}
        </>
    );
};

export default CustomizeProducts;