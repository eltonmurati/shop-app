import { postgres } from "@/app/lib/postgresClient";
import { Json } from "@/app/lib/types";
import Add from "@/components/Add"
import CustomizeProducts from "@/components/CustomizeProducts"
import ProductImages from "@/components/ProductImages"

const SinglePage = async () => {

    let { data: product, error } = await postgres.from('product').select('*').eq('id', 1);

    let name = "Product Name";
    let desc = null
    let price = "0";
    let stock = 0;
    let sku = "SKU";
    let specs = null;
    let width = "0";
    let height = "0";
    let depth = "0";
    let weight = "0";

    if (product) {
        name = product[0].name;
        desc = product[0].description;
        price = product[0].price.toString();
        stock = product[0].quantity;
        sku = product[0].sku;
        specs = product[0].specifications;
        width = product[0].width.toString() + "mm";
        height = product[0].height.toString() + "mm";
        depth = product[0].depth.toString() + "mm";
        weight = product[0].weight.toString() + "kg";
    }

    if (specs) {
        let keys = Object.keys(specs);
        console.log(Object.entries(specs));
    }

    return (
        <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-8 xl:gap-16 md:mt-4 lg:mt-8'>
            {/* IMAGES */}
            <div className="w-full lg:w-1/2 lg:sticky top-4 h-max">
                <ProductImages/>
            </div>
            {/* TEXTS */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h1 className="text-4xl font-medium">{name}</h1>
                <p className=""><span className="font-semibold">Product Code:</span> {sku}</p>
                <p className="text-gray-500">
                    {desc}
                </p>
                <div className="h-[2px] bg-gray-100"/>
                <div className="flex items-center gap-4">
                    <h3 className="text-xl text-gray-500 line-through">£50</h3>
                    <h2 className="font-medium text-2xl">£{price}</h2>
                </div>
                <div className="h-[2px] bg-gray-100"/>
                <CustomizeProducts/>
                <Add stock={stock} />
                <div className="h-[2px] bg-gray-100"/>
                <div className="text-sm ">
                    <h4 className="font-medium mb-4">Title</h4>
                    <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Accusantium eum repudiandae nulla, laboriosam iure dolore 
                        quos magni in eos dicta quibusdam dolorem, incidunt exercitationem 
                        tempora ratione velit voluptatum et facilis!
                    </p>
                </div>
                <div className="text-sm ">
                    <h4 className="font-medium mb-4">Title</h4>
                    <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Accusantium eum repudiandae nulla, laboriosam iure dolore 
                        quos magni in eos dicta quibusdam dolorem, incidunt exercitationem 
                        tempora ratione velit voluptatum et facilis!
                    </p>
                </div>
                <div className="text-sm ">
                    <h4 className="font-medium mb-4">Title</h4>
                    <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Accusantium eum repudiandae nulla, laboriosam iure dolore 
                        quos magni in eos dicta quibusdam dolorem, incidunt exercitationem 
                        tempora ratione velit voluptatum et facilis!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SinglePage