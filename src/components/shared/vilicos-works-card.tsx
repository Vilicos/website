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
    <article className={`flex flex-col sm:flex-row items-center flex-nowrap bg-brand-card-bg rounded-[20px] sm:h-[280px] md:h-[320px] lg:h-[350px] py-3 sm:py-0 px-2 sm:px-4 md:px-8 lg:px-14 relative ${last && "overflow-hidden"}`}>
      <div className={`shrink-0 basis-1/2 ${reverse ? "sm:order-1":"sm:order-0"}`}>
        <div className="relative w-[100px] sm:w-[140px] md:w-[164px] h-[100px] sm:h-[150px] md:h-[170px] lg:h-[200px] overflow-hidden mx-auto">
        <Image src={img} alt={heading} fill style={{ objectFit: "contain" }} />
        </div>
      </div>
      <div className="absolute z-[5] top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:block hidden">
        <div className="relative">
          <div className="size-5 bg-brand-white rounded-full border-4 border-brand-fourth"></div>
          <div className="w-2 h-[215px] sm:h-[250px] md:h-[300px] lg:h-[364px] bg-gradient-to-b from-brand-fourth via-brand-gradient-line-top to-brand-gradient-line-bottom absolute top-[18px] left-[6px]"></div>
        </div>
      </div>
      <div className={`shrink-0 basis-1/2 sm:text-left ${reverse ? "sm:order-0 sm:pr-6 md:pr-9":"sm:order-1 sm:pl-5 md:pl-10"}`}>
        <p className="text-sm text-brand-primary font-medium mt-2 sm:mt-0">{step}</p>
        <h4 className="font-bold text-xl sm:text-2xl md:text-[32px] tracking-tight md:mt-2 mb-1 sm:mb-3 md:mb-5 lg:mb-8">{heading}</h4>
        <p className="text-brand-secondary font-medium text-sm md:text-base">
          {description}
        </p>
      </div>
    </article>
  );
}
