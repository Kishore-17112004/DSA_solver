# DSAverse

DSAverse is a futuristic, animated AI-powered learning interface for Data Structures and Algorithms in Python.

## Tech Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion + GSAP
- Three.js + React Three Fiber
- Monaco Editor
- Recharts
- D3.js + React Flow
- Zustand + Redux Toolkit

## Features Included

- Animated cinematic landing page
- Authentication UI (sign in/sign up)
- Dashboard with XP/streak analytics
- DSA learning module catalog + dynamic module pages
- Visualization playground (React Flow + D3 + Monaco)
- AI tutor assistant interface
- Challenge arena, leaderboard, roadmap, timeline
- Quiz/MCQ, notes/bookmarks, community discussion UI
- Dark/light theme toggle
- API-ready service layer

## Project Structure

```text
src/
  app/
  components/
  features/
  hooks/
  services/
  animations/
  visualizers/
  layouts/
  lib/
  store/
  types/
  assets/
```

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Environment

Copy `.env.example` to `.env.local` and update values.

## Quality Commands

```bash
npm run lint
npm run build
```

## Deployment (Vercel)

1. Push repository to GitHub.
2. Import project in Vercel.
3. Configure environment variables from `.env.example`.
4. Deploy with default Next.js build settings.

## License

MIT
