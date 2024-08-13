import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import helpDeskImg from "../../assets/imgs/help-desk-tab.png";
import knowledgeImg from "../../assets/imgs/knowledge-tab.png";
import insightImg from "../../assets/imgs/insight-tab.png";
import { PreviewTabsTrigger } from "./preview-tabs-trigger";
export function PreviewDash() {
  return (
    <section className="rounded-[20px] bg-brand-card-bg p-5 h-[858px] mb-[132px] mt-16 overflow-hidden">
      <Tabs defaultValue="helpdesk" className="w-full h-full overflow-hidden rounded-[20px] relative">
        <TabsList className="w-full bg-brand-dm-bg rounded-none justify-start p-3 h-11">
          <Image src="/bars.svg" alt="Help Desk Page" width={56} height={12} quality={100} style={{ objectFit: "cover" }} className="mr-3" />
          <PreviewTabsTrigger value="helpdesk" title="Vilicos | Help Desk" />
          <PreviewTabsTrigger value="knowledge" title="Vilicos | Knowledge" />
          <PreviewTabsTrigger value="insights" title="Vilicos | Insights" />
        </TabsList>
        <img src="/navbar.png" alt="Navbar" className="" />
        <TabsContent value="helpdesk" className="relative w-full h-full mt-0">
          <Image src={helpDeskImg} alt="Help Desk Page" fill quality={100} style={{ objectFit: "cover" }} priority placeholder="blur" />
        </TabsContent>
        <TabsContent value="knowledge" className="relative w-full h-full mt-0">
          <Image src={knowledgeImg} alt="Knowledge Base Page" fill quality={100} style={{ objectFit: "cover" }} priority placeholder="blur" />
        </TabsContent>
        <TabsContent value="insights" className="relative w-full h-full mt-0 ">
          <Image src={insightImg} alt="Insight Page" fill quality={100} style={{ objectFit: "cover" }} priority placeholder="blur" />
        </TabsContent>
      </Tabs>
    </section>
  );
}
