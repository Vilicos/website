import Conditions from "./_components/conditions";
import Heading from "./_components/heading";
import TableOfContents from "./_components/table-of-contents";

export default function Terms() {
  return (
    <section className="text-black pt-36 sm:pt-40 md:pt-40 ">
      <Heading />
      <TableOfContents/>
      <Conditions/>
    </section>
  );
}
