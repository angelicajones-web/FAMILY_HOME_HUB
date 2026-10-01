# Family Home Hub

A simple, responsive family website for meals, chores, Grab & Go menus, household information, family instructions, and shared-space reminders. The seven pages follow the approved blueprint in `AGENTS.md`.

The first version includes **19 clearly labeled image placeholders and two placeholder PDFs**. They are preview assets, not the family's finished content. The two Google resources and future How-To guides show a coming-soon message until their links are supplied.

## Project files

- `site/` contains the complete website and is the only folder published.
- `site/assets/styles.css` controls the shared design.
- `site/assets/site.js` controls the phone menu and unavailable-resource messages.
- `site/assets/resources.js` contains the Google and How-To links.
- `.github/workflows/pages.yml` publishes `site/` to GitHub Pages.
- `scripts/serve.mjs` starts an optional local preview.
- `work/` contains initial authoring helpers and PDF preview images; it is not published. The website runs directly from the saved HTML files and does not need these helpers.

No installation, package dependencies, or build step is required for the website.

## View the website

Open `site/index.html` in a browser, or use an HTTP preview with Node.js:

```powershell
node .\scripts\serve.mjs
```

Then open `http://127.0.0.1:4173`. Stop the preview with Ctrl+C. If Node is not on PATH, the bundled runtime used in this workspace is:

```powershell
& 'C:\Users\gel22\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' '.\scripts\serve.mjs'
```

## Replace the preview images

Save the finished file in `site/assets/images/` using the exact filename below. Replace the existing placeholder file. Keep the extension and file format consistent: JPEG for the family photo and PNG for the remaining images. No HTML changes are needed for replacements. Images display in their original colors and full proportions.

| Image | Stable filename |
| --- | --- |
| Family Photo | `family-photo.jpg` |
| Jazz's Food Calendar | `jazz-food-calendar.png` |
| Laundry Schedule | `laundry-schedule.png` |
| Duty 1 | `duty-1.png` |
| Duty 2 | `duty-2.png` |
| Duty 3 | `duty-3.png` |
| Duty 4 | `duty-4.png` |
| Rewards | `rewards.png` |
| Punishments | `punishments.png` |
| Punishment Reset | `punishment-reset.png` |
| Bedroom Reset | `bedroom-reset.png` |
| Heat & Eat Menu | `heat-eat-menu.png` |
| Make It Yourself Menu | `make-it-yourself-menu.png` |
| Breakfast Anytime Menu | `breakfast-anytime-menu.png` |
| Pre-Made Salads Menu | `pre-made-salads-menu.png` |
| Laundry Room Shared Spaces Expectations | `laundry-room-expectations.png` |
| Garage Shared Spaces Expectations | `garage-expectations.png` |
| Patio Shared Spaces Expectations | `patio-expectations.png` |
| Living Room Shared Spaces Expectations | `living-room-expectations.png` |

Around the 10th of each month, replace `jazz-food-calendar.png` with the new calendar. The same path remains in use.

## Replace the PDFs

Replace these files in `site/assets/documents/` with finished PDFs:

- `chore-calendar.pdf`: embedded monthly chore calendar, plus an open-in-new-tab fallback.
- `additional-chores.pdf`: opened by the Additional Chores button.

Use the same filename for the monthly chore calendar. Its page link and embedded viewer update together.

PDF embedding depends on the browser's PDF viewer. If the frame is blank in the in-app preview or on a phone, use **OPEN CHORE CALENDAR** to open the PDF directly.

## Connect the Google and How-To resources

Edit `site/assets/resources.js`. Paste each URL inside the matching empty quotes:

```javascript
foodInventory: 'https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit',
grabGoHaveNeed: 'https://docs.google.com/YOUR_HAVE_NEED_RESOURCE',
```

Leave unavailable guides empty. How-To links support HTTPS URLs (including YouTube) and local PDF paths, such as `assets/documents/how-to-kool-aid.pdf`. Google sharing settings determine who can access the linked resources; the website does not change those permissions.

The Food Inventory sheet should have these categories: Meat & Poultry; Canned/Jarred; Sauces/Condiments; Boxed/Dry; Tortillas/Bread Stock; Seasonings; Cooking/Pantry Staples; Frozen/Meal Stock.

## Publish on GitHub Pages

The target repository is [angelicajones-web/FAMILY_HOME_HUB](https://github.com/angelicajones-web/FAMILY_HOME_HUB). The workflow is prepared; GitHub Pages must be enabled before publication can succeed.

1. Upload this project to the target repository, including `.github/workflows/pages.yml`.
2. Keep the default branch named `main` or `master`, or update the workflow's branch list to match your repository.
3. Open **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.
4. Commit the website files. Check the **Actions** tab for the Publish Family Home Hub run. You can also run it manually through **Run workflow**.
5. Open **Settings → Pages → Visit site** after deployment succeeds.

Subsequent image, PDF, or website changes committed to the default branch publish automatically. The workflow publishes only `site/`; project instructions and scratch files are excluded.

GitHub Pages sites normally have a public URL. Check the family content and linked-resource access settings before publishing. A private repository alone does not make a standard Pages site private.

Official references: [GitHub Pages publishing sources](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [custom Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages), and [creating a Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

## Verification

There is no build or lint step. JavaScript syntax can be checked with:

```powershell
node --check .\site\assets\site.js
node --check .\site\assets\resources.js
node --check .\scripts\serve.mjs
```

Use the local preview to check all seven pages, menu keyboard controls, image loading, PDFs, and the two resource messages. Review the paired image grids at phone, tablet, and desktop sizes after replacing assets. The pages use relative paths so they work under a GitHub Pages repository URL.
