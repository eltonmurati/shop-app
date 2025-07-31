import { Json } from "@/lib/types";
import VariantTag from "./VariantTag";

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

const CustomizeProducts = ({variants, productId}:{variants:Json[]; productId:number;}) => {
    return (
        <>
            {/* {Object.entries(variants!).map(([key,value])=>(
                <div className="flex flex-col gap-4" key={key}>
                    <h4 className="font-medium">Choose a {key}</h4>
                    <ul className="flex items-center gap-3 flex-wrap">
                        {Object.entries(value).map(([variant,id])=>(
                            <VariantTag variant={variant} productId={id as number} ogProductId={productId} key={variant} />
                        ))}
                    </ul>
                </div>
            ))} */}

            {variants!.map(variant => (
                <div className="flex flex-col gap-4" key={Object.keys(variant!)[0]}>
                    <p className="font-medium">Choose {vowels.includes(Object.keys(variant!)[0][0]) ? "an" : "a"} {Object.keys(variant!)[0]}</p>
                    <ul className="flex items-center gap-3 flex-wrap">
                        {Object.values(variant!)[0].map((value: {[type:string]: number}) => (
                            <VariantTag variant={Object.keys(value)[0]} productId={Object.values(value)[0]} ogProductId={productId} key={Object.keys(value)[0]} />
                        ))}
                    </ul>
                </div>
            ))}
        </>
    );
};

export default CustomizeProducts;