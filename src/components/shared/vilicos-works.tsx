import { vilicosWorks } from "@/constants/static";
import { VilicosWorksCard } from "./vilicos-works-card";

export function VilicosWorks() {
  return (
    <section className="text-center mb-[132px]">
      <h2 className="font-bold text-[32px] text-brand-primary tracking-tight">How Vilicos Works</h2>
      <p className="font-medium text-sm text-brand-dm-bg mt-5">You're just three steps away from excellence.</p>
      <div className="space-y-20 mt-[84px]">
        {vilicosWorks.map((item) => (
          <VilicosWorksCard key={item.id} description={item.description} heading={item.heading} img={item.img} step={item.step} last={item.last} reverse={item.reverse}/>
        ))}
      </div>
    </section>
  );
}
