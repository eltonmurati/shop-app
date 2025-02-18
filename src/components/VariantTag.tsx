import { postgres } from "@/lib/postgresClient";
import Link from "next/link";

const VariantTag = async ({variant, productId, ogProductId}:{variant:string; productId:number; ogProductId:number;}) => {

    const available = "ring-1 ring-blue-700 text-blue-700 rounded-md py-1 px-4 text-sm";
    const selected = "ring-1 ring-blue-700 text-white bg-blue-700 rounded-md py-1 px-4 text-sm cursor-pointer";
    const disabled = "ring-1 ring-indigo-200 text-white bg-indigo-200 rounded-md py-1 px-4 text-sm cursor-not-allowed";

    let { data: product } = await postgres.from('product').select('quantity').eq('id', productId).limit(1).single();

    if (!product) {
        return (
            <div className={disabled}>
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
        <Link href={`/product/${productId}`} className={available}>
            {variant}
        </Link>
    );
}

export default VariantTag;