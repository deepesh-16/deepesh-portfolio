"use client";

import { useState } from "react";
import Section from "./Section";
import { skillIcon } from "./skillIcons";
import { skills } from "@/data/profile";

// Category tabs on top, a grid of icon tiles for the selected category below.
export default function Skills() {
  const [active, setActive] = useState(0);
  const group = skills[active];

  return (
    <Section id="skills" title="Skills">
      <div role="tablist" aria-label="Skill categories" className="mb-6 flex flex-wrap gap-2">
        {skills.map((g, i) => (
          <button
            key={g.label}
            role="tab"
            id={`skill-tab-${i}`}
            aria-selected={i === active}
            aria-controls="skill-panel"
            onClick={() => setActive(i)}
            className={[
              "!font-display cursor-pointer rounded-full border px-4 py-1.5 text-[0.95rem] font-semibold transition-colors",
              i === active
                ? "border-teal bg-teal text-paper"
                : "border-line bg-card text-soft hover:border-teal hover:text-ink",
            ].join(" ")}
          >
            {g.label}
          </button>
        ))}
      </div>

      <ul
        role="tabpanel"
        id="skill-panel"
        aria-labelledby={`skill-tab-${active}`}
        className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(9.5rem,1fr))] gap-4 p-0"
      >
        {group.items.map((item) => {
          const { icon: Icon, color } = skillIcon(item);
          return (
            <li
              key={item}
              className="skill-tile flex min-h-32 flex-col items-center justify-center gap-3 rounded-2xl border border-line bg-card p-4 text-center"
              style={{ "--tile": color } as React.CSSProperties}
            >
              <Icon size={36} aria-hidden />
              <span className="!font-display text-[0.92rem] leading-tight font-semibold">{item}</span>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
