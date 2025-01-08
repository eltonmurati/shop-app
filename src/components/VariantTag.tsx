import { postgres } from "@/app/lib/postgresClient";
import Link from "next/link";

const VariantTag = async ({variant, productId, ogProductId}:{variant:string; productId:number; ogProductId:number;}) => {

    const available = "ring-1 ring-bwcblue text-bwcblue rounded-md py-1 px-4 text-sm";
    const selected = "ring-1 ring-bwcblue text-white bg-bwcblue rounded-md py-1 px-4 text-sm cursor-pointer";
    const disabled = "ring-1 ring-bwcblue_disabled text-white bg-bwcblue_disabled rounded-md py-1 px-4 text-sm";

    let { data: product } = await postgres.from('product').select('quantity').eq('id', productId).limit(1).single();

    if (!product) {
        return (
            <div className={disabled + " cursor-not-allowed"}>
                {variant}
            </div>
        );
    }

    if (productId === ogProductId) {
        return (
            <div className={selected}>
                {variant}
            </div>
        );
    }

    return (
        <Link href={`/product/${productId}`} className={product.quantity > 0 ? available : disabled}>
            {variant}
        </Link>
    );
}

export default VariantTag;