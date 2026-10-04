import Section from "./Section";
import SkillTag from "./skillTag";
import { employer, roles } from "@/data/profile";

type YM = { year: number; month: number };
const months = (a: YM, b: YM) => (b.year - a.year) * 12 + (b.month - a.month) + 1; // inclusive
const fmtDur = (m: number) => {
  const y = Math.floor(m / 12);
  const r = m % 12;
  return [y && `${y} yr${y > 1 ? "s" : ""}`, r && `${r} mo`].filter(Boolean).join(" ");
};
const MONTH = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const fmt = (d: YM) => `${MONTH[d.month - 1]} ${d.year}`;

export default function Experience() {
  const now = new Date();
  const today: YM = { year: now.getFullYear(), month: now.getMonth() + 1 };
  const total = months(employer.since, today);
  const rows = roles.map((r) => {
    const end = "end" in r && r.end ? r.end : today;
    return { ...r, endLabel: "end" in r && r.end ? fmt(r.end) : "Present", dur: months(r.start, end) };
  });

  return (
    <Section id="experience" title="Experience">
      <h3 className="!font-display m-0 text-[1.3rem] font-bold">{employer.name}</h3>
      <p className="m-0 mb-5 text-base text-soft">
        {employer.meta} · {fmtDur(total)} full time
      </p>

      {/* Proportional bar: each segment is the time spent in that role. */}
      <div className="mb-8" role="img" aria-label={rows.map((r) => `${r.title}, ${fmtDur(r.dur)}`).join("; ")}>
        <div className="flex h-3 gap-1 overflow-hidden rounded-full">
          {[...rows].reverse().map((r, i) => (
            <span
              key={r.title}
              className={i === rows.length - 1 ? "bg-teal" : "bg-teal/40"}
              style={{ flexGrow: r.dur }}
            />
          ))}
        </div>
        <div className="mt-2 flex gap-1 text-[0.85rem] text-soft">
          {[...rows].reverse().map((r) => (
            <span key={r.title} style={{ flexGrow: r.dur, flexBasis: 0 }}>
              {fmtDur(r.dur)}
            </span>
          ))}
        </div>
      </div>

      <ol className="m-0 list-none border-l-2 border-line p-0 pl-6">
        {rows.map((r) => (
          <li key={r.title} className="relative pb-9 last:pb-0">
            <span aria-hidden className="absolute top-[0.45rem] -left-[calc(1.5rem+7px)] size-3 rounded-full border-2 border-teal bg-paper" />
            <p className="!font-display m-0 text-[0.95rem] font-semibold text-teal">
              {fmt(r.start)} to {r.endLabel} · {fmtDur(r.dur)}
            </p>
            <h4 className="!font-display m-0 text-[1.15rem] font-bold">{r.title}</h4>
            {r.stack.length > 0 && (
              <ul className="m-0 my-2 flex list-none flex-wrap gap-2 p-0">
                {r.stack.map((s) => (
                  <SkillTag key={s} name={s} />
                ))}
              </ul>
            )}
            {r.points.length > 0 && (
              <ul className="mt-3 max-w-[40rem] list-disc pl-5 marker:text-teal">
                {r.points.map((p) => (
                  <li key={p} className="mb-2.5">{p}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
