import { AdoptAgent } from "@/components/shared/adopt-agent";
import { AgnosticSolution } from "@/components/shared/agnostic-solution";
import { HeroComponent } from "@/components/shared/hero-component";
import { KeyBenefits } from "@/components/shared/key-benefits";
import { PreviewDash } from "@/components/shared/preview-dash";
import { VilicosWorks } from "@/components/shared/vilicos-works";

export default function Home() {
  return (
    <>
      <HeroComponent/>
      <PreviewDash/>
      <AgnosticSolution/>
      <VilicosWorks/>
      <KeyBenefits />
      <AdoptAgent />
    </>
  );
}
