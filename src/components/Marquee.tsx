import Image from "next/image";
import Link from "next/link";

const Marquee = ({items}:{items:{id:number, source:string, link:string}[]}) => {
    return(
        <div className="relative w-max overflow-hidden">
            <div className="flex animate-marquee items-center h-32">
                {items.map((item)=>(
                    <Link target="_blank" href={item.link} className="mx-8" key={item.id.toString()}>
                        <Image src={item.source} alt="" width={200} height={200} className="object-contain"></Image>
                    </Link>
                ))}
            </div>
            <div className="absolute top-0 animate-marquee2 flex items-center h-32">
                {items.map((item)=>(
                    <Link target="_blank" href={item.link} className="mx-8" key={item.id.toString()}>
                        <Image src={item.source} alt="" width={200} height={200} className="object-contain"></Image>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Marquee;