import { terms } from "@/constants/static";

export default function Heading() {
  return (
    <div className="space-y-3 text-center md:text-justify">
      <h1 className="font-semibold">TERMS AND CONDITIONS</h1>
      <h2 className="font-semibold ">Last updated August 30, 2024</h2>
      <p className="font-semibold ">AGREEMENT TO OUR LEGAL TERMS</p>
      <p className="text-justify text-pretty">
        {terms.heading}
      </p>
    </div>
  );
}
