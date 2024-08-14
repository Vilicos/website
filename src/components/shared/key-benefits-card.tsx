import Image from "next/image";

type IProps = {
  img: string;
  heading: string;
  description: string;
};

export function KeyBenefitsCard({ description, heading, img }: IProps) {
  return (
    <article className="rounded-[20px] sm:h-[183px] lg:h-[210px] xl:h-[234px] flex flex-col items-center lg:items-start lg:justify-start xl:justify-end bg-brand-card-bg p-5 xl:p-6 hover:bg-brand-fourth transition-colors text-center lg:text-left overflow-hidden">
      <div className="rounded-[12px] bg-brand-secondary w-[50px] h-[50px] flex items-center justify-center">
        <Image src={img} alt={heading} width={32} height={32} style={{ objectFit: "cover" }} />
      </div>
      <h3 className="font-bold text-xl mt-3 lg:mt-5 mb-3">{heading}</h3>
      <p className="font-medium text-sm text-brand-secondary overflow-hidden tracking-tight px-3 sm:px-0">{description}</p>
    </article>
  );
}
