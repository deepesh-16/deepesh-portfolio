import Section from "./Section";
import { awards, education } from "@/data/profile";
import { FaTrophy } from "react-icons/fa6";

export function Education() {
  return (
    <Section id="education" title="Education">
      <h3 className="!font-display m-0 text-[1.3rem] leading-tight font-bold">{education.school}</h3>
      <p className="m-0 mb-3 text-base text-soft">{education.meta}</p>
      <p className="m-0 mb-2 max-w-[40rem]">{education.degree}</p>
      <p className="m-0 max-w-[40rem] text-base text-soft">{education.coursework}</p>
    </Section>
  );
}

export function Recognition() {
  return (
    <Section id="recognition" title="Recognition">
      <ul className="m-0 list-none p-0">
        {awards.map((a) => (
          <li key={a.title} className="flex items-center gap-4 border-b border-line py-3 last:border-b-0">
            <FaTrophy size={20} className="shrink-0 text-teal" aria-hidden />
            <div>
              <p className="!font-display m-0 text-[1.1rem] font-semibold">{a.title}</p>
              <p className="m-0 text-base text-soft">{a.by}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
