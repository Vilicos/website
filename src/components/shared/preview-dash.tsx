import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import helpDeskImg from "../../assets/imgs/help-desk-tab.png";
import knowledgeImg from "../../assets/imgs/knowledge-tab.png";
import insightImg from "../../assets/imgs/insight-tab.png";
import { PreviewTabsTrigger } from "./preview-tabs-trigger";
export function PreviewDash() {
  return (
    <section className="rounded-[20px] bg-brand-card-bg p-2 sm:p-3 lg:p-4 xl:p-5 h-[700px] lg:h-[858px] mb-16 sm:mb-20 md:mb-28 lg:mb-[132px] mt-16 overflow-y-auto">
      <Tabs defaultValue="insights" className="w-full h-full overflow-hidden rounded-[20px] relative">
        <TabsList role="tablist" className="min-w-52 w-full bg-brand-dm-bg rounded-none justify-start p-3 h-11 flex-nowrap overflow-x-auto overflow-y-hidden">
          <Image role="img" src="/bars.svg" alt="Help Desk Page" width={56} height={12} quality={100} style={{ objectFit: "cover" }} className="mr-3" />
          <PreviewTabsTrigger value="helpdesk" title="Vilicos | Help Desk" />
          <PreviewTabsTrigger value="knowledge" title="Vilicos | Knowledge" />
          <PreviewTabsTrigger value="insights" title="Vilicos | Insights" />
        </TabsList>
        <div className="w-full h-auto overflow-x-auto">
          <img src="/navbar.png" alt="Navbar" className="w-full h-full object-cover min-w-[1200px]" />
        </div>
        <TabsContent value="helpdesk" className="relative w-full h-full mt-0  overflow-auto scrollbar-none">
          <Image src={helpDeskImg} alt="Help Desk Page" fill quality={100} style={{ objectFit: "cover" }} priority unoptimized placeholder="blur" className="min-w-[1200px] min-h-[818px]"/>
        </TabsContent>
        <TabsContent value="knowledge" className="relative w-full h-full mt-0  overflow-x-auto scrollbar-none">
          <Image src={knowledgeImg} alt="Knowledge Base Page" fill quality={100} style={{ objectFit: "cover" }} priority unoptimized placeholder="blur" className="min-w-[1200px] min-h-[818px]"/>
        </TabsContent>
        <TabsContent value="insights" className="relative w-full h-full mt-0 overflow-x-auto scrollbar-none">
          <Image src={insightImg} alt="Insight Page" fill quality={100} style={{ objectFit: "cover" }} priority unoptimized placeholder="blur" className="min-w-[1200px] min-h-[818px]"/>
        </TabsContent>
      </Tabs>
    </section>
  );
}
