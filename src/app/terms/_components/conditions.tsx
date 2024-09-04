import { terms } from "@/constants/static";
import { Fragment } from "react";

export default function Conditions() {
  return terms.contents.map((item) => (
    <div key={item.id} className="my-3" id={`${item.id}`}>
      <h3 className="font-bold">{`${item.id}. ${item.heading}`}</h3>
      <p className="text-sm mt-2 text-pretty text-justify">{item.text}</p>
    </div>
  ));
}
