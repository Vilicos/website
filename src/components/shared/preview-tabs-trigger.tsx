import { TabsTrigger } from "../ui/tabs";

export function PreviewTabsTrigger({ title, value }: { title: string; value: string }) {
  return (
    <TabsTrigger
      value={value}
      className="text-brand-white data-[state=active]:bg-brand-dark-2 data-[state=active]:text-brand-white data-[state=active]:rounded-[6px] data-[state=active]:after:opacity-0 relative after:absolute after:right-2 after:w-px after:h-4 after:bg-brand-white min-w-48 w-64 justify-start hover:bg-brand-dark-2 transition-colors"
    >
      {title}
    </TabsTrigger>
  );
}
