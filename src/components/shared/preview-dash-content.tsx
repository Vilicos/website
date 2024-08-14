import { TabsContent } from "../ui/tabs";
import Image, { StaticImageData } from "next/image";

type IProps = {
    src:StaticImageData;
    value:string;
    alt:string
}
export function PreviewDashContent({src,value,alt}:IProps){
    return(
        <TabsContent value={value} className="relative w-full h-full mt-0 overflow-hidden ">
          <Image src={src} alt={alt} fill quality={100} style={{ objectFit: "cover" }} priority unoptimized placeholder="blur" className="block !h-auto"/>
        </TabsContent>
    )
}