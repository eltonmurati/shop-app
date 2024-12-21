import { postgres } from "@/app/lib/postgresClient";
import Add from "@/components/Add"
import CustomizeProducts from "@/components/CustomizeProducts"
import ProductImages from "@/components/ProductImages"

const SinglePage = async () => {

    let { data: product, error } = await postgres.from('product').select('*').eq('id', 1);

    let name = "Product Name";
    let desc = null
    let price = "0";
    let discountPrice = null;
    let stock = 0;
    let sku = "SKU";
    let specs = null;
    let width = "0";
    let height = "0";
    let depth = "0";
    let weight = "0";
    let images: string[] = [];
    let categories: number[] = [];
    let brand = null;
    let variants = null;

    if (product) {
        name = product[0].name;
        desc = product[0].description;
        price = product[0].price.toLocaleString();
        discountPrice = product[0].discounted_price ? product[0].discounted_price.toLocaleString() : null;
        stock = product[0].quantity;
        sku = product[0].sku;
        specs = product[0].specifications;
        width = product[0].width.toString() + "mm";
        height = product[0].height.toString() + "mm";
        depth = product[0].depth.toString() + "mm";
        weight = product[0].weight.toString() + "kg";
        images = product[0].image_urls ? product[0].image_urls : [];
        categories = product[0].categories;
        brand = product[0].brand;
        variants = product[0].variants;
    }

    let specEntries = null;
    specEntries = specs ? Object.entries(specs) : null;

    let variantEntries = null;
    let variantKeys = null;

    if (variants) {
        variantEntries = Object.entries(variants);
        variantKeys = Object.keys(variants);
    }

    console.log(variants?["type"]);

    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
            <div className='flex flex-col lg:flex-row gap-8 xl:gap-16 md:mt-4 lg:mt-8'>
                {/* IMAGES */}
                <div className="w-full lg:w-1/2 top-4 h-max">
                    <ProductImages images={images}/>
                </div>
                {/* TEXTS */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                    <h1 className="text-4xl font-medium">{name}</h1>
                    <p className="">{sku}</p>
                    {desc && (<p className="text-gray-500">{desc}</p>)}
                    <div className="h-[2px] bg-gray-100"/>
                    {discountPrice ? (
                        <div className="flex items-center gap-4">
                            <h3 className="text-xl text-gray-500 line-through">£{price}</h3>
                            <h2 className="font-medium text-2xl">£{discountPrice}</h2>
                        </div>
                    ) : (
                        <h2 className="font-medium text-2xl">£{price}</h2>
                    )}
                    <div className="h-[2px] bg-gray-100"/>
                    <CustomizeProducts/>
                    <Add stock={stock} />
                    <div className="lg:hidden h-[2px] bg-gray-100"/>
                </div>
            </div>
            <div className="mt-8">
                <h2 className="text-2xl pb-4">Specifications</h2>
                <div className="h-[2px] bg-gray-100"/>
                {specEntries && (
                    <>
                        {specEntries.map((entry,i)=>(
                            <div className="text-sm" key={i}>
                                <div className="flex flec-col py-4 justify-between">
                                    <h4 className="text-xl">{entry[0]}</h4>
                                    <p className="text-xl">{entry[1]}</p>
                                </div>
                                <div className="h-[2px] bg-gray-100"/>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    )
}

export default SinglePage