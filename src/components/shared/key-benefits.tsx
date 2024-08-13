import { keyBenefits } from "@/constants/static";
import { KeyBenefitsCard } from "./key-benefits-card";

export function KeyBenefits() {
  return (
    <section className="text-center mb-[132px]">
      <h2 className="font-bold text-[32px] text-brand-primary tracking-tight">Key Benefits of Vilicos</h2>
      <p className="font-medium text-sm text-brand-dm-bg mt-5">It's more than just a bot.</p>
      <div className="grid grid-cols-3 gap-7 mt-[84px]">
        {keyBenefits.map((item) => (
          <KeyBenefitsCard key={item.id} description={item.description} img={item.img} heading={item.heading} />
        ))}
      </div>
    </section>
  );
}
