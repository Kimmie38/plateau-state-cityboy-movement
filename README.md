# City Boy Movement — Plateau State Chapter website

A multi-page site for the Plateau State Chapter of the City Boy Movement, built with Next.js (App Router) and TypeScript. It uses the official CBM logo, the chapter's green and gold colours, and the APC's red and blue as accents.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

To set the live domain used by the sitemap and robots file, set `NEXT_PUBLIC_SITE_URL` (e.g. in `.env.local`).

## Pages

| Route | Page |
| --- | --- |
| `/` | Home: hero with the sign-up URL on the photo, member stats, slogan ticker, who we are, Operation Rock Solid, Patron, APC, State Director, latest news, sliding photos |
| `/about` | Who we are, mission, Inform / Engage / Empower, structure (state, LGAs, wards, polling units), units and wings, milestones, slogans |
| `/apc` | City Boy Movement & the APC: relationship, APC leaders, one million votes, Renewed Hope in Plateau |
| `/national` | National leadership, structure, national events, National Retreat |
| `/leadership` | State Director, the 15-member State Working Committee, directorates, the 17 LGAs |
| `/patron` | Governor Caleb Mutfwang: biography, joining the APC, his role in the Movement, other patrons |
| `/operation-rock-solid` | The framework, structure, four steps, road to unveiling, coordinators |
| `/grassroots` | Partnerships, LGA chapters, grassroots news |
| `/students` | Student Wing, campus coordinators, NELFUND |
| `/news` | All news and press releases, filterable by category |
| `/news/[slug]` | One page per story, with photos, older/newer links and related stories |
| `/gallery` | All photos, filterable, with a full-screen viewer |
| `/join` | How to join, official links, safety notice, FAQ, support-group QR flyer |

## Editing

| What | Where |
| --- | --- |
| All text, people, dates, news and photos | `src/content/site.ts` |
| Photos | `public/images/<group>/` |
| Logos | `public/brand/`: `cbm-logo-dark.png`, `cbm-logo-white.png`, `cbm-logo-green.png` and `cbm-media-plateau.jpg` |
| Colours | Top of `src/app/globals.css`: `--green-800`, `--yellow`, `--apc-red`, `--apc-blue` |
| Animations | `src/components/ScrollAnimator.tsx` (scroll reveals and number count-ups) and the "Motion" section of `globals.css` |

### Adding a news story

Add an object to the top of the `news` list in `site.ts`, giving it a unique `slug`. Its page is created automatically at `/news/<slug>`.

### LGA coordinators

The 17 LGAs are listed in `lgas`. Fill in `coordinator` for each one, using the names from the 31 July 2026 "Know your LGA Coordinator" cards.

## Confirm before launch

Search `site.ts` for `TODO`:

- the chapter email, phone and secretariat address
- the X, Instagram and TikTok links
- the names of the 17 LGA coordinators
- the link to the Daser David website
- the live domain (set `NEXT_PUBLIC_SITE_URL`)

The Assistant State Student Coordinator is deliberately left off the committee list, because that appointment was withdrawn on 24 August 2026 pending due process.

National HQ has said publicly that cityboymovement.ng is the Movement's only official website. Get the chapter site cleared with National HQ before it goes live.
