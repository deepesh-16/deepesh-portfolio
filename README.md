# Srinivasa Deepesh Kommineni, portfolio

A single-page portfolio built with Next.js (App Router, TypeScript), Material UI and Tailwind CSS, with a little custom CSS for the hero diagram.

## Run

    npm install
    npm run dev      # http://localhost:3000
    npm run build && npm start

## Where things live

- `src/data/profile.ts`: all content (experience, projects, skills, awards, contact). Edit text here.
- `src/theme/theme.ts`: the Material UI theme and the only place colors are defined. Tailwind reads them through CSS variables.
- `src/app/globals.css`: Tailwind setup, color mapping and the hero diagram styles.
- `src/components/`: one component per section.

## To finish

- Set `github` in `src/data/profile.ts` to show the GitHub icon in the sidebar.
- Add GitHub, demo and paper links to the projects.

## Deploy

Import the repository into Vercel (no configuration needed), or run `npm run build` and host the output with any Node host.
