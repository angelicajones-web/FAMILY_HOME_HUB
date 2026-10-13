# Family Home Hub

A simple, responsive family website for meals, chores, Grab & Go menus, household information, family instructions, and shared-space reminders. The seven pages follow the approved blueprint in `AGENTS.md`.

The website is live at [Family Home Hub](https://angelicajones-web.github.io/FAMILY_HOME_HUB/). The family photo, food calendar, monthly chore calendar, laundry schedule, duties, chore information, menus, and shared-space posters use the family's supplied images. The Additional Chores PDF remains a labeled placeholder. The Grab & Go Google Sheet is connected. Food & Meals now has separate Meat Inventory and Sides Inventory buttons; each shows a coming-soon message until its new link is supplied. Future How-To guides also show a coming-soon message until their links are supplied.

## Project files

- `FAMILY_HOME_HUB/` contains the complete website and is the only folder published.
- `FAMILY_HOME_HUB/assets/styles.css` controls the shared design.
- `FAMILY_HOME_HUB/assets/site.js` controls the phone menu and unavailable-resource messages.
- `FAMILY_HOME_HUB/assets/resources.js` contains the Google and How-To links.
- `.github/workflows/pages.yml` publishes `FAMILY_HOME_HUB/` to GitHub Pages.
- `scripts/serve.mjs` starts an optional local preview.
- `work/` contains initial authoring helpers and PDF preview images; it is not published. The website runs directly from the saved HTML files and does not need these helpers.

No installation, package dependencies, or build step is required for the website.

## View the website

Open `FAMILY_HOME_HUB/index.html` in a browser, or use an HTTP preview with Node.js:

```powershell
node .\scripts\serve.mjs
```

Then open `http://127.0.0.1:4173`. Stop the preview with Ctrl+C. If Node is not on PATH, the bundled runtime used in this workspace is:

```powershell
& 'C:\Users\gel22\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' '.\scripts\serve.mjs'
```

## Replace the preview images

Save the finished file in `FAMILY_HOME_HUB/assets/images/` using the exact filename below. Replace the existing placeholder file. Keep the extension and file format consistent: JPEG for the family photo and PNG for the remaining images. No HTML changes are needed for replacements. Images display in their original colors and full proportions.

| Image | Stable filename |
| --- | --- |
| Family Photo | `family-photo.jpg` |
| Jazz's Food Calendar | `jazz-food-calendar.png` |
| Monthly Chore Calendar | `chore-calendar.png` |
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

Replace `chore-calendar.png` each month with the new chore calendar picture. Keep this exact filename rather than adding a month to it. The Chores page displays the picture directly, with no PDF viewer or editing link. Refresh the preview after replacing it.

## Replace the Additional Chores PDF

Replace `FAMILY_HOME_HUB/assets/documents/additional-chores.pdf` with the finished PDF. The single Additional Chores button opens it in a new tab.

The old `chore-calendar.pdf` placeholder is no longer used by the website.

## Connect the Google and How-To resources

Edit `FAMILY_HOME_HUB/assets/resources.js`. Paste each URL inside the matching empty quotes:

```javascript
meatInventory: 'https://docs.google.com/spreadsheets/d/YOUR_MEAT_SHEET_ID/edit',
sidesInventory: 'https://docs.google.com/spreadsheets/d/YOUR_SIDES_SHEET_ID/edit',
grabGoHaveNeed: 'https://docs.google.com/YOUR_HAVE_NEED_RESOURCE',
```

Leave unavailable guides empty. How-To links support HTTPS URLs (including YouTube) and local PDF paths, such as `assets/documents/how-to-kool-aid.pdf`. Google sharing settings determine who can access the linked resources; the website does not change those permissions.

Food & Meals uses separate Meat Inventory and Sides Inventory resources. Leave both links empty until the user supplies them. The old combined foodInventory URL is retained in resources.js for reference and is no longer used by that page. Grab & Go keeps its own Have/Need link.

## Publish on GitHub Pages

The target repository is [angelicajones-web/FAMILY_HOME_HUB](https://github.com/angelicajones-web/FAMILY_HOME_HUB). The workflow is prepared; GitHub Pages must be enabled before publication can succeed.

1. Upload this project to the target repository, including `.github/workflows/pages.yml`.
2. Keep the default branch named `main` or `master`, or update the workflow's branch list to match your repository.
3. Open **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.
4. Commit the website files. Check the **Actions** tab for the Publish Family Home Hub run. You can also run it manually through **Run workflow**.
5. Open **Settings → Pages → Visit site** after deployment succeeds.

Subsequent image, PDF, or website changes committed to the default branch publish automatically. The workflow publishes only `FAMILY_HOME_HUB/`; project instructions and scratch files are excluded.

GitHub Pages sites normally have a public URL. Check the family content and linked-resource access settings before publishing. A private repository alone does not make a standard Pages site private.

Official references: [GitHub Pages publishing sources](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [custom Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages), and [creating a Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

## Verification

There is no build or lint step. JavaScript syntax can be checked with:

```powershell
node --check .\FAMILY_HOME_HUB\assets\site.js
node --check .\FAMILY_HOME_HUB\assets\resources.js
node --check .\scripts\serve.mjs
```

Use the local preview to check all seven pages, menu keyboard controls, image loading, PDFs, and the two resource messages. Review the paired image grids at phone, tablet, and desktop sizes after replacing assets. The pages use relative paths so they work under a GitHub Pages repository URL.
