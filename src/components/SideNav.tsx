"use client";

import { useEffect, useState } from "react";
import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ThemeToggle from "./ThemeToggle";
import { profile, sections } from "@/data/profile";

export default function SideNav() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-30% 0px -60% 0px" },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <aside className="px-5 pt-6 md:px-8 md:pt-12">
      <div className="md:sticky md:top-12">
        <Typography variant="h3" component="p" className="!text-[1.6rem] !font-extrabold !leading-[1.1]">
          {profile.name}
        </Typography>
        <Typography className="!mt-2 !mb-4 !text-base !leading-snug text-soft md:!mb-9">
          {profile.role}
        </Typography>

        <nav aria-label="Sections">
          <ul className="m-0 flex list-none flex-wrap gap-x-4 gap-y-1 p-0 md:block">
            {sections.map((s) => {
              const isActive = active === s.id;
              return (
                <li key={s.id}>
                  <MuiLink
                    href={`#${s.id}`}
                    underline="none"
                    aria-current={isActive ? "true" : undefined}
                    className={[
                      "!font-display block !text-base !font-semibold py-1 transition-colors",
                      "border-b-2 md:border-b-0 md:border-l-2 md:py-1 md:pl-3.5",
                      isActive
                        ? "!text-ink border-teal"
                        : "!text-soft border-transparent md:border-line hover:!text-ink",
                    ].join(" ")}
                  >
                    {s.label}
                  </MuiLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <ul className="mt-5 flex list-none items-center gap-5 p-0 md:mt-8">
          <li>
            <MuiLink href={`mailto:${profile.email}`} aria-label="Email" className="!text-ink">
              <EmailOutlinedIcon />
            </MuiLink>
          </li>
          <li>
            <MuiLink href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="!text-ink">
              <LinkedInIcon />
            </MuiLink>
          </li>
          {profile.github && (
            <li>
              <MuiLink href={profile.github} target="_blank" rel="noopener" aria-label="GitHub" className="!text-ink">
                <GitHubIcon />
              </MuiLink>
            </li>
          )}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </aside>
  );
}
