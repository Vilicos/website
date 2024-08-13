import Image from "next/image";

export function AgnosticSolution() {
  return (
    <section className="text-center mb-[132px]">
      <h2 className="font-bold text-[20px] text-brand-primary tracking-tight">Chain-Agnostic Solution</h2>
      <div className="flex items-center justify-center flex-wrap mt-[84px] mb-8 gap-x-16 gap-y-10">
        <Image src="/ethereum.png" alt="Ethereum" width={120} quality={100} unoptimized height={30} style={{ objectFit: "cover" }} />
        <Image src="/celo.png" alt="Celo" width={90} quality={100} unoptimized height={30} style={{ objectFit: "cover" }} />
        <Image src="/solona.png" alt="Solona" width={202} quality={100} unoptimized height={30} style={{ objectFit: "cover" }} />
        <Image src="/ton.png" alt="ton" width={81} quality={100} unoptimized height={30} style={{ objectFit: "cover" }} />
        <Image src="/optimism.png" alt="Optimism" width={225} quality={100} unoptimized height={30} style={{ objectFit: "cover" }} />
        <Image src="/cosmos.png" alt="Cosmos" width={167} quality={100} unoptimized height={30} style={{ objectFit: "cover" }} />
        <Image src="/internet.png" alt="Internet" width={170} quality={100} unoptimized height={30} style={{ objectFit: "cover" }} />
        <Image src="/aptos.png" alt="Aptos" width={128} quality={100} unoptimized height={30} style={{ objectFit: "cover" }} />
        <Image src="/near.png" alt="Near" width={114} quality={100} unoptimized height={30} style={{ objectFit: "cover" }} />
        <Image src="/sui.png" alt="sui" width={58} quality={100} unoptimized height={30} style={{ objectFit: "cover" }} />
      </div>
      <span className="font-medium text-sm text-brand-dm-bg">and much more</span>
    </section>
  );
}
