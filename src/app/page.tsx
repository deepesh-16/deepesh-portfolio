import Typography from "@mui/material/Typography";
import SideNav from "@/components/SideNav";
import ThemeToggle from "@/components/ThemeToggle";
import FlowDiagram from "@/components/FlowDiagram";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { Education, Recognition } from "@/components/EducationAndAwards";
import { achievements, profile } from "@/data/profile";

export default function Home() {
  return (
    <div className="mx-auto grid max-w-[78rem] grid-cols-1 md:grid-cols-[17rem_minmax(0,1fr)]">
      <a href="#main" className="absolute -top-16 left-4 z-10 bg-ink px-4 py-2 text-paper focus:top-4">
        Skip to content
      </a>
      <div className="fixed top-4 right-4 z-20 rounded-full border border-line bg-card shadow-sm">
        <ThemeToggle />
      </div>
      <SideNav />
      <main id="main" className="max-w-[48rem] px-5 pt-10 pb-24 md:px-12 md:pt-12">
        <section id="top">
          <Typography variant="h1" component="h1" className="max-w-[22ch] !text-[clamp(2.2rem,5vw,3.4rem)]">
            {profile.headline}
          </Typography>
          <Typography className="!mt-5 !mb-8 max-w-[40rem] !text-[1.3rem] !leading-normal">
            {profile.lead}
          </Typography>
          <dl className="m-0 mb-10 grid gap-4 sm:grid-cols-2" aria-label="Top achievements">
            {achievements.map((a) => (
              <div key={a.value} className="rounded-xl border border-line border-l-4 border-l-teal bg-card p-4">
                <dt className="!font-display text-[1.9rem] leading-none font-extrabold text-teal">{a.value}</dt>
                <dd className="m-0 mt-2 text-[0.98rem] leading-snug">{a.label}</dd>
              </div>
            ))}
          </dl>
          <FlowDiagram />
          <Typography className="!mt-8 max-w-[40rem]">{profile.about}</Typography>
        </section>
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Recognition />
        <Contact />
      </main>
    </div>
  );
}
