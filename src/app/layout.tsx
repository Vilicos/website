import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Vilicos - Community Agent",
  description: "Automated Community Support Agent for Web 3",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-sans antialiased", fontSans.variable)}>
        <Header />
        <main className="container min-h-[calc(100dvh_-_216px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
