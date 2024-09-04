"use client"
import { terms } from "@/constants/static";
import { Link } from "react-scroll";

export default function TableOfContents() {
  return (
    <nav className="my-4">
      <h2 className="font-bold mb-2">TABLE OF CONTENTS</h2>
      <ul className="space-y-0.5">
        {terms.tablecontents.map((item) => (
          <li key={item.id}>
            <Link to={`${item.id}`} spy={true} offset={-110} className="text-brand-primary font-medium hover:underline cursor-pointer">{`${item.id}. ${item.text}`}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
