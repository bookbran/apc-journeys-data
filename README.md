# apc-journeys-data

Canonical content for A Portland Career's three coaching journeys: **Career Explorer**, **Pivot**, and **Advancing Job Search**.

This is the single source of truth for journey phases, sessions, activities, homework, and intake-team metadata (best-fit signals, recommended coaches, etc.). Consumed by:

- **APC Journeys / Inquiry Call Guide** — `https://github.com/bookbran/APC-Journeys`
- **APC Intake Builder** — `https://github.com/bookbran/APC-Intake-Builder`
- **apc-crm milestone library** (planned)

## Install

```bash
npm install github:bookbran/apc-journeys-data
```

## Use

```ts
import { JOURNEYS, getJourneyByKey, isJourneyKey, type Journey } from 'apc-journeys-data'

// All three journeys, in display order
JOURNEYS

// Look up a specific journey
const explorer = getJourneyByKey('explorer')

// Validate a string before use
if (isJourneyKey(value)) {
  // value is now typed as JourneyKey
}
```

## Update flow

When journey content changes:

1. Edit `src/index.ts` here.
2. Run `npm run build` (compiles to `dist/`).
3. Commit both `src/` and `dist/` (committed dist lets consumers install from GitHub without a build step).
4. Push to `main`.
5. In each consumer repo, run `npm update apc-journeys-data` to pull in the new version.

## Why one shared package

Journey content used to live in three places: the inquiry call guide, the intake system, and the CRM milestone library. They drifted. Now there's one file to edit, and consumers `npm update` to propagate.

Hex colors and the journey shape are stable — adding a phase or session is non-breaking. Renaming a key (`explorer` / `pivot` / `advancing`) is breaking; bump the major version if that ever happens.

## License

Private — A Portland Career.
