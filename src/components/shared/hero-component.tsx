import Link from "next/link";

export function HeroComponent() {
  return (
    <section className="before:absolute before:bg-gradient-to-r before:from-brand-gradient-one before:to-brand-gradient-two before:h-[737px] before:-z-10 before:top-4 before:left-5 before:right-5 before:rounded-[20px] before:w-[calc(100%_-_40px)] before:cursor-none text-center pt-44 before:animated-background">
      <h1 className="max-w-[583px] mx-auto font-bold text-5xl">
        Automated Community Support Agent for <span className="text-brand-primary">Web 3</span>
      </h1>
      <p className="font-medium text-brand-fifth leading-5 mt-5 mb-6 max-w-[660px] mx-auto">
        Vilicos provides an AI agent that automatically answers your community's questions on platforms such as Discord, Telegram, and your website, using your knowledge base of
        websites, documents, and chat history.
      </p>
      <Link
        href="/"
        target="_blank"
        title="Get Started Now"
        className="bg-brand-primary rounded-[12px] py-[12px] px-[35px] font-semibold text-sm inline-block hover:bg-brand-secondary transition-colors"
      >
        Get Started Now
      </Link>
    </section>
  );
}
