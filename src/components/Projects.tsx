import Section from "./Section";
import SkillTag from "./skillTag";
import { projects } from "@/data/profile";

// Editorial list: big index, title and notes on the left, description and stack on the right.
export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ol className="m-0 list-none p-0">
        {projects.map((p, i) => (
          <li
            key={p.title}
            className="group grid gap-4 border-b border-line py-8 first:pt-0 last:border-b-0 md:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,1.3fr)] md:gap-6"
          >
            <span className="!font-display text-4xl leading-none font-extrabold text-line transition-colors group-hover:text-teal">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="!font-display m-0 text-[1.25rem] leading-tight font-bold">{p.title}</h3>
              {p.extra && (
                <p className="!font-display m-0 mt-2 inline-block rounded-md bg-teal/10 px-2 py-0.5 text-[0.82rem] font-semibold text-teal">
                  {p.extra}
                </p>
              )}
            </div>
            <div>
              <p className="m-0 mb-4 text-[1.02rem]">{p.body}</p>
              <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                {p.stack.map((s) => (
                  <SkillTag key={s} name={s} />
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
