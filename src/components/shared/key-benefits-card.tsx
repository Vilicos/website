import Image from "next/image";

type IProps = {
    img:string;
    heading:string;
    description:string
}

export function KeyBenefitsCard({description,heading,img}:IProps) {
  return (
    <article className="rounded-[20px] h-[234px] flex flex-col justify-end bg-brand-card-bg  p-6 hover:bg-brand-fourth transition-colors text-left">
      <div className="rounded-[12px] bg-brand-secondary w-[50px] h-[50px] flex items-center justify-center">
        <Image src={img} alt={heading} width={32} height={32} style={{ objectFit: "cover" }} />
      </div>
      <h4 className="font-bold text-xl mt-5 mb-3">{heading}</h4>
      <p className="font-medium text-sm text-brand-secondary overflow-hidden tracking-tight">{description}</p>
    </article>
  );
}
