import Image from "next/image";

type IProps = {
    img:string;
    step:string;
    heading:string;
    description:string;
    last:boolean;
    reverse:boolean
}

export function VilicosWorksCard({description,heading, img,step,last,reverse}:IProps) {
  return (
    <article className={`flex items-center flex-nowrap bg-brand-card-bg rounded-[20px] h-[350px] px-14 relative ${last && "overflow-hidden"}`}>
      <div className={`shrink-0 basis-1/2 ${reverse ? "order-1":"order-0"}`}>
        <Image src={img} alt={heading} width={164} className="mx-auto " height={200} style={{ objectFit: "cover" }} />
      </div>
      <div className="absolute z-[5] top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="size-5 bg-brand-white rounded-full border-4 border-brand-fourth"></div>
          <div className="w-2 h-[364px] bg-gradient-to-b from-brand-fourth via-brand-gradient-line-top to-brand-gradient-line-bottom absolute top-[18px] left-[6px]"></div>
        </div>
      </div>
      <div className={`shrink-0 basis-1/2 text-left ${reverse ? "order-0 pr-9":"order-1 pl-10"}`}>
        <p className="text-sm text-brand-primary font-medium">{step}</p>
        <h4 className="font-bold text-[32px] tracking-tight mt-2 mb-8">{heading}</h4>
        <p className="text-brand-secondary font-medium leading-5">
          {description}
        </p>
      </div>
    </article>
  );
}
