import { postgres } from "@/lib/postgresClient";
import { useEffect, useState } from "react";

const FilterTagValue = ({tag}:{tag:string}) => {

    const [key,name] = tag.split(": ");
    const [value,setValue] = useState(name);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        const getValue = async () => {
            switch (key) {
                case "cat":
                    await postgres.from("category").select("*").eq("id", Number(name)).limit(1).single().then(({data: category}) => {
                        if (category) { setValue(category.name); }
                        setLoading(false);
                    });
                    break;
                case "brand":
                    await postgres.from("brand").select("*").eq("id", Number(name)).limit(1).single().then(({data: brand}) => {
                        if (brand) { setValue(brand.name); }
                        setLoading(false);
                    });
                    break;
                default:
                    setLoading(false);
                    break;
            }
        }
        getValue();
    },[]);

    if (loading) { return(<p>Loading...</p>); }

    return(<p>{value}</p>);
}

export default FilterTagValue;