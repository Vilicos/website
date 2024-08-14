import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Vilicos - Community Support Agent for Web 3",
  description: "Automated Community Support Agent for Web 3",
  keywords: ['Community Support', 'Automated Web 3 Agent', 'AI Agent', 'Web 3 Agent', 'AI Web 3 Agent',],
  applicationName:"Vilicos",
  authors:[{name:"Vilicos Inc.",url:"https://vilicos.com"}],
  creator:"Nijat Hamid",
  publisher:"Orkhan Aslanov",
  referrer:"origin-when-cross-origin",
  category:'artificial intelligence',
  twitter:{
    card:'summary_large_image',
    title:'Vilicos - Community Support Agent for Web 3',
    description:"Automated Community Support Agent for Web 3",
    creator:'@vilicos',
    images:{url:'https://vilicos.com/metadata/og-image.png',alt:"Vilicos"},
    siteId:"1814744523056021504",
    creatorId:'1814744523056021504',
    site:"@vilicos",
  },
  openGraph:{
    title:"Vilicos - Community Support Agent for Web 3",
    description:"Automated Community Support Agent for Web 3",
    url:"https://vilicos.com",
    siteName:"Vilicos",
    type:'website',
    locale:'en_US',
    images:[{
      url:"https://vilicos.com/metadata/og-image.png",
      alt:"Vilicos",
      width:1200,
      height:769,
      type:"image/png"
    }]
  },
  icons:{
    icon:[{
      url:'/metadata/favicon-32x32.png',
      sizes:'32x32'
    },
    {
      url:'/metadata/favicon-16x16.png',
      sizes:'16x16'
    }
  ],
   apple:{url:"/metadata/apple-touch-icon.png",sizes:'180x180'},
   other:{
      rel:'mask-icon',
      url:'/safari-pinned-tab.svg'
   }
  },
  
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
      <GoogleAnalytics gaId={`G-${process.env.MEASUREMENT_ID}`} />
    </html>
  );
}
