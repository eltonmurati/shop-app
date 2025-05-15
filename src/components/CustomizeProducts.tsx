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
        </>
    );
};

export default CustomizeProducts;