import Image from "next/image";
import { Tabs,TabsList } from "../ui/tabs";
import helpDeskImg from "../../assets/imgs/help-desk-tab.png";
import knowledgeImg from "../../assets/imgs/knowledge-tab.png";
import insightImg from "../../assets/imgs/insight-tab.png";
import { PreviewTabsTrigger } from "./preview-tabs-trigger";
import { PreviewDashContent } from "./preview-dash-content";
export function PreviewDash() {
  return (
    <section className="rounded-[20px] bg-brand-card-bg p-2 sm:p-3 lg:p-4 xl:p-5  mb-16 sm:mb-20 md:mb-28 lg:mb-[132px] mt-16">
      <Tabs defaultValue="insights" className="w-full overflow-hidden rounded-[20px] relative h-[320px] xss:h-[380px] sm:h-[500px] lg:h-[700px] xl:h-[858px]">
        <TabsList role="tablist" className="min-w-52 w-full bg-brand-dm-bg rounded-none justify-start p-3 h-11 flex-nowrap overflow-x-auto overflow-y-hidden">
          <Image role="img" src="/bars.svg" alt="Help Desk Page" width={56} height={12} quality={100} style={{ objectFit: "cover" }} className="mr-3" />
          <PreviewTabsTrigger value="helpdesk" title="Vilicos | Help Desk" />
          <PreviewTabsTrigger value="knowledge" title="Vilicos | Knowledge" />
          <PreviewTabsTrigger value="insights" title="Vilicos | Insights" />
        </TabsList>
        <div className="w-full h-auto overflow-x-auto">
          <img src="/navbar.png" alt="Navbar" className="w-full h-full object-cover min-w-[1200px]" />
        </div>
        <PreviewDashContent src={helpDeskImg} value="helpdesk" alt="Help Desk Page"/>
        <PreviewDashContent src={knowledgeImg} value="knowledge" alt="Knowledge Base Page"/>
        <PreviewDashContent src={insightImg} value="insights" alt="Insight Page"/>
      </Tabs>
    </section>
  );
}
