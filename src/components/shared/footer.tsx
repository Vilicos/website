import Link from "next/link";
import { Separator } from "../ui/separator";
import Github from "@/assets/icons/github";
import Xtwitter from "@/assets/icons/xtwitter";
import Linkedin from "@/assets/icons/linkedin";
import Mail from "@/assets/icons/mail";

export function Footer() {
  const currenYear = new Date().getFullYear();
  return (
    <footer className="container mb-10 mt-20">
      <Separator className="bg-brand-fourth" />
      <div className="flex items-center justify-center xs:justify-between mt-8 flex-wrap gap-x-10 gap-y-6">
        <Link href="/" title="Vilicos" className="inline-block max-w-36 shrink-0 overflow-hidden">
          <img src="/logo.png" alt="Vilicos" className="w-full h-full object-cover" />
        </Link>
        <div className="flex items-center gap-x-4 sm:gap-x-6  md:gap-x-10 lg:gap-x-[60px] flex-wrap">
          <p className="font-medium text-sm text-brand-primary">{`© ${currenYear} Vilicos, Inc.`}</p>
          <Link href='/terms' className="font-medium text-brand-primary text-sm">Terms</Link>
          <Link href='/privacy' className="font-medium text-brand-primary text-sm">Privacy</Link>
        </div>
        
        <address className="flex items-center space-x-5 xxs:mx-auto md:mx-0">
          <Link href="mailto:info@vilicos.com" title="Mail" className="flex items-center justify-center bg-brand-fourth rounded-full hover:bg-brand-mail transition-colors size-7">
            <Mail className="size-4 object-cover shrink-0" />
          </Link>
          <Link
            href="https://github.com/Vilicos"
            target="_blank"
            title="Github"
            className="flex items-center justify-center bg-brand-fourth rounded-full hover:bg-brand-github transition-colors size-7"
          >
            <Github className="size-4 object-cover shrink-0" />
          </Link>
          <Link
            href="https://x.com/vilicos"
            target="_blank"
            title="X - Twitter"
            className="flex items-center justify-center bg-brand-fourth rounded-full hover:bg-brand-xtwitter transition-colors size-7"
          >
            <Xtwitter className="size-3 object-cover shrink-0" />
          </Link>
          <Link
            href="https://linkedin.com/company/vilicos"
            target="_blank"
            title="Linkedin"
            className="bg-brand-fourth rounded-full hover:bg-brand-linkedin transition-colors size-7 flex items-center justify-center"
          >
            <Linkedin className="size-3 object-cover shrink-0" />
          </Link>
        </address>
      </div>
    </footer>
  );
}
