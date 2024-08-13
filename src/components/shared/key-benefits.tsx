import { keyBenefits } from "@/constants/static";
import { KeyBenefitsCard } from "./key-benefits-card";

export function KeyBenefits() {
  return (
    <section className="text-center mb-16 sm:mb-20 md:mb-28 lg:mb-[132px]">
      <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-brand-primary tracking-tight">Key Benefits of Vilicos</h2>
      <p className="font-medium text-sm text-brand-dm-bg mt-2 sm:mt-3 md:mt-4 lg:mt-5">It's more than just a bot.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-3 lg:gap-4 xl:gap-7 mt-6 sm:mt-12 md:mt-16 lg:mt-[84px]">
        {keyBenefits.map((item) => (
          <KeyBenefitsCard key={item.id} description={item.description} img={item.img} heading={item.heading} />
        ))}
      </div>
    </section>
  );
}
