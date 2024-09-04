import { privacy } from "@/constants/static";

export default function PrivacyPolicy() {
  return privacy.map((item) => (
    <div key={item.id} className="my-3" id={`${item.id}`}>
      <h3 className="font-bold">{item.title}</h3>
      <p className="text-sm mt-2 text-pretty text-justify">{item.text}</p>
    </div>
  ));
}
