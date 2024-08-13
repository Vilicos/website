import { vilicosWorks } from "@/constants/static";
import { VilicosWorksCard } from "./vilicos-works-card";

export function VilicosWorks() {
  return (
    <section className="text-center mb-16 sm:mb-20 md:mb-28 lg:mb-[132px]">
      <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-brand-primary tracking-tight">How Vilicos Works</h2>
      <p className="font-medium text-sm text-brand-dm-bg mt-2 sm:mt-3 md:mt-4 lg:mt-5">You're just three steps away from excellence.</p>
      <div className="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20 mt-6 sm:mt-12 md:mt-16 lg:mt-[84px]">
        {vilicosWorks.map((item) => (
          <VilicosWorksCard key={item.id} description={item.description} heading={item.heading} img={item.img} step={item.step} last={item.last} reverse={item.reverse}/>
        ))}
      </div>
    </section>
  );
}
