import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="container fixed inset-0 top-9 overflow-hidden h-14 xss:h-[72px] z-10">
      <div className="bg-brand-fifth/70 h-full px-5 border border-brand-fourth rounded-full flex items-center justify-between hover:bg-brand-fifth/90 transition-colors">
        <Link href="/" title="Vilicos" className="inline-block max-w-36 shrink-0 overflow-hidden">
          <img src="/logo.png" alt="Vilicos" className="w-full h-full object-cover" />
        </Link>
        <nav className="space-x-5 flex">
          <Link
            href="/"
            title="Log In"
            target="_blank"
            className="text-brand-primary rounded-xl transition-colors border-brand-primary hover:border-brand-secondary hover:text-brand-secondary hover:bg-transparent font-semibold w-20 xs:w-[100px] border text-center text-sm flex h-9 xs:h-10 items-center justify-center flex-nowrap overflow-hidden"
          >
            Log In
          </Link>
          <Link
            href="/"
            target="_blank"
            title="Sign Up"
            className="bg-brand-primary rounded-xl hover:bg-brand-secondary transition-colors font-semibold w-[100px] h-10 hidden xs:flex items-center justify-center text-sm flex-nowrap "
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
}
