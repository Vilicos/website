import Link from "next/link";

export function AdoptAgent() {
  return (
    <section className="rounded-[20px] text-center h-[270px] md:h-[330px] lg:h-[352px] overflow-hidden bg-gradient-to-l from-brand-gradient-one to-brand-gradient-two animated-background flex flex-col items-center justify-center p-4">
      <h3 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-white tracking-tight">Adopt Agent with confidence now.</h3>
      <p className="mt-3 sm:mt-5 mb-5 sm:mb-8 max-w-96 text-sm sm:text-base text-brand-fifth font-medium mx-auto leading-5">
        Increase community satisfaction and engagement with Vilicos through AI-powered support agents.
      </p>
      <Link
        href="/"
        target="_blank"
        title="Get Started Now"
        className="bg-brand-primary rounded-[12px] py-3 px-5 md:px-7 lg:py-[14px] lg:px-[34px] font-semibold text-sm inline-block hover:bg-brand-secondary transition-colors"
      >
        Get Started Now
      </Link>
    </section>
  );
}
