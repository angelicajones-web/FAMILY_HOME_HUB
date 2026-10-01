# Family Home Hub — Persistent Project Rules

This repository is for my Family Home Hub website.

IMPORTANT:
- Use the latest instructions below as the source of truth.
- Do not replace or simplify approved layouts unless I explicitly ask.
- Build the site responsive for phone, tablet, and desktop.
- Use GitHub Pages.
- Keep the design warm, cozy, clean, minimal, editorial.
- Use cream, beige, taupe, brown, lots of light space, serif headings, simple body text, large images, and understated borders.
- Do not use purple unless I explicitly ask.

SITE NAVIGATION:
Home
Food & Meals
Chores
Grab & Go
Budget
How-To
Reminders

HOME PAGE:
- Main title: Family Home Hub
- Optional decorative text: La Familia
- Large family photo near the top
- Intro text:
  Welcome to Our Family Home Hub
  Everything for keeping this crazy house organized in one place.
- Home also serves as the About/introduction page.
- Include a section titled:
  WHAT'S IN THE HUB
- The six directory items are clickable TEXT LINKS with descriptions.
- They are NOT image cards.
- Directory:
  Food & Meals — Meal calendar + food inventory
  Chores — Chore calendar, laundry, duties & chore information
  Grab & Go — Grab & Go menus + Have/Need list
  Budget — Household budget information
  How-To — Family instructions + admin instructions
  Reminders — Shared-space rules & reminders

FOOD & MEALS PAGE:
- Do NOT add a separate “Meal Plan” heading.
- Show Jazz’s Food Calendar directly as an image.
- The calendar image will be replaced around the 10th of every month using the same filename/path.
- Keep its original colors, even if bright or frilly.
- Include section:
  FOOD INVENTORY
  Check what we have
  and what we need.
- Include clickable button:
  OPEN INVENTORY
- This opens a Google Sheet.

Food Inventory categories:
Meat & Poultry
Canned/Jarred
Sauces/Condiments
Boxed/Dry
Tortillas/Bread Stock
Seasonings
Cooking/Pantry Staples
Frozen/Meal Stock

CHORE PAGE ORDER — DO NOT CHANGE:
1. Monthly Chore Calendar
2. Laundry Schedule
3. Duties
4. Chore Information
5. Additional Chores

Monthly Chore Calendar:
- Display chore-calendar.pdf directly using a responsive iframe.
- Include a clickable fallback link/button:
  OPEN CHORE CALENDAR
- The PDF will be replaced monthly using the same filename.

Laundry Schedule:
- Display as an image.

Duties:
- Show four images:
  Duty 1
  Duty 2
  Duty 3
  Duty 4
- Desktop/tablet: 2x2
- Phone: stack vertically

Chore Information:
- Show four images:
  Rewards
  Punishments
  Punishment Reset
  Bedroom Reset
- Desktop/tablet: 2x2
- Phone: stack vertically

Additional Chores:
- Do NOT use an image/sign.
- Use text and a clickable button/link:
  ADDITIONAL CHORES
  VIEW ADDITIONAL CHORES
- This opens additional-chores.pdf.

GRAB & GO PAGE:
Display exactly four finished menu images:
1. Heat & Eat
2. Make It Yourself
3. Breakfast Anytime
4. Pre-Made Salads

At the bottom include:
OUT OF SOMETHING?
Let us know what we need.
UPDATE HAVE & NEED

The button opens the Grab & Go Have/Need Google resource.
Do not create individual food item cards.

BUDGET PAGE:
- Warm/cozy site styling
- Show only:
  BUDGET
  COMING SOON
- No other content yet.

HOW-TO PAGE:
This is a clickable directory.

FAMILY HOW-TO:
How to Use the Food Inventory
How to Complete Additional Chores
How to Make Kool-Aid
How to Do Often-Forgotten Cleaning Jobs

ADMIN HOW-TO:
How to Change Jazz's Food Calendar
How to Update the Monthly Chore Calendar
How to Update Additional Chores
How to Update the Grab & Go Menu Images
How to Replace a File in GitHub
How to Commit & Publish Website Changes

Resources can later link to PDFs or YouTube videos.
Do not require the PDFs to exist before building the page structure.

REMINDERS PAGE:
The visible page heading should be:
SHARED SPACES EXPECTATIONS

Tagline:
Clean up after yourself. Respect the space. Leave it ready for the next person.

Show four shared-space images:
1. Laundry Room
2. Garage
3. Patio
4. Living Room

Desktop/tablet: balanced 2x2
Phone: stack vertically

Do not add a separate visible “Reminders” heading inside the page.

CURRENT WEBSITE IMAGE LIST:
1. Family Photo
2. Jazz’s Food Calendar
3. Laundry Schedule
4. Duty 1
5. Duty 2
6. Duty 3
7. Duty 4
8. Rewards
9. Punishments
10. Punishment Reset
11. Bedroom Reset
12. Heat & Eat Menu
13. Make It Yourself Menu
14. Breakfast Anytime Menu
15. Pre-Made Salads Menu
16. Laundry Room Shared Spaces Expectations
17. Garage Shared Spaces Expectations
18. Patio Shared Spaces Expectations
19. Living Room Shared Spaces Expectations

PDFs/resources:
- chore-calendar.pdf
- additional-chores.pdf
- future How-To PDFs
- Google Food Inventory link
- Google Grab & Go Have/Need link

IMPORTANT WORKFLOW:
- Keep stable filenames for recurring replacement files.
- I want to be able to replace the monthly food calendar image and monthly chore calendar PDF without rewriting HTML.
- Do not build complicated features that require maintenance.
- Keep the site simple enough for family use on a 15-inch kitchen command-center display and on phones.

The project blueprint was saved and confirmed before website building began. The user subsequently authorized building the website, with placeholders for now.

# Repository Guidance

## Current State

The website is plain HTML, CSS, and small JavaScript files under `site/`, with no framework, package dependencies, or build step. The seven HTML pages share `site/assets/styles.css`, `site/assets/site.js`, and `site/assets/resources.js`. GitHub Pages publication is prepared in `.github/workflows/pages.yml`. The target repository is `https://github.com/angelicajones-web/FAMILY_HOME_HUB`, with default branch `main`; publication needs GitHub Pages enabled in repository settings. Keep the simple static structure.

The user approved placeholders for the first version. The 19 image files and two PDFs in `site/assets/` are clearly labeled preview assets. Replace them with supplied finished assets at their stable paths; do not invent family photos, calendar entries, menu items, chores, or household rules. Missing Google and How-To links live in `site/assets/resources.js` and show a coming-soon message until provided.

Use `work/` for scratch files and intermediate assets. Keep delivered website files in `site/`. Do not rerun the initial page-authoring helper over edited HTML. The optional preview server is `scripts/serve.mjs`; its local URL is `http://127.0.0.1:4173`.

## Working Practices

- Inspect the current files before making changes, and preserve unrelated user work.
- Keep changes focused on the requested task. Avoid adding dependencies or infrastructure without a concrete need.
- When introducing a project, document its purpose, setup, and actual run commands in `README.md`.
- Follow the conventions established by new project files. Update this guidance when the repository gains a defined structure.
- Keep credentials and private configuration out of source files; provide example configuration when needed.

## Validation

No build or lint workflow is needed. Check changed JavaScript with `node --check`, run the preview with `node scripts/serve.mjs`, and verify affected routes, local links, images, PDFs, phone menu, and responsive layouts. See README.md for Windows commands and the bundled Node executable. Do not claim validation that was not performed.

## Environment

The workspace is on Windows and uses PowerShell. Use shell commands and paths compatible with that environment. Git and Node are available through the bundled runtime but were not found on PATH. The bundled Git executable is `C:\Users\gel22\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe`. Do not edit Git metadata directly.
