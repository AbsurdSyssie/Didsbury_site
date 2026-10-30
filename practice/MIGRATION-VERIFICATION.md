# Migration verification

## Scope and data flow

Separate fresh clone: `/home/oscar/Documents/Code_Projects/Didsbury_site`, upstream `pacharanero/open-gp-practice-website`. HHC and Barlow checkouts/deployments/DNS are out of scope and unchanged. Only their reusable preview implementation was read for design reference. All practice facts here are Didsbury-specific.

YAML is validated through unchanged `lib/practice.js`; ordinary production check/build reject missing genuine approval date and earnings year. Isolated `eleventy.preview.config.js` emits `_preview` only, with exactly those absent fields deferred, invalid supplied values still rejected. Preview-only core Markdown replaces unsupported generic template promises while retaining the base layout and urgent-help partial. No patient data processing, archived script execution or active embeds.

Sources and conflicts are recorded in [inventory](CONTENT-INVENTORY.md) and [queries](MIGRATION-QUERIES.md), never repeated across patient pages. Exactly one compact global unofficial banner appears on each page. Earnings are not rendered when the year is absent. The content-review footer is not fabricated. Demo statement preparation date records only statement authoring.

## Verification performed locally

- Fresh `npm ci` and unchanged baseline tests passed before editing.
- Lint/formatting, fictional valid-practice unit/build tests, fictional production check/build and production HTML validation passed. Nation-specific fictional England and Wales builds retain urgent help.
- Actual practice production check/build correctly reject precisely `gp_earnings.financial_year` and `site.content_last_reviewed`. No gate was weakened to claim production readiness. Inherited CI is expected to fail that production check; GitHub Pages is not enabled.
- Fresh `build:demo`, all 19-page `lint:html:demo` and source-specific `audit:demo` passed. An initial HTML validation run caught breaking spaces in telephone links across Markdown; all affected source links were fixed with nonbreaking spaces and revalidated, not patched only in generated output.
- REUSE via `uvx reuse lint` passed. System `reuse` executable was absent; the isolated tool invocation provided the check without adding project dependencies.
- All 19 patient page bodies inspected for inherited fictional names/numbers, wrong practices/old address, unrendered migration notes, qualifications, broken local links, forms, frames, external script loads, duplicate banners and absent urgent help. Automated audit records the same invariants and checks supplier anchors, results wording, two-working-day prescription turnaround, option 3, correct new CQC and registration URLs.
- Source supplier and registration destinations were independently read in a browser without interaction, consent, login, patient data or submissions. A registration network-idle timeout was resolved using DOM-content-loaded and body inspection. Both Accurx source URLs redirect to the correct Didsbury identity/new address. See source inventory.

## Visual review

Playwright exercised all 19 local pages at 390×844, 768×1024 and 1440×900: 57 page/viewport combinations, no horizontal overflow, broken image assets, missing urgent-help control, extra banners or forms/frames. Homepage, phone appointments and desktop contact screenshots inspected. Keyboard skip link focused and moved to `maincontent`; mobile More navigation exposed Services. Reduced motion and 200% root-text enlargement produced no homepage overflow. Final homepage uses the full NHS.UK content grid, while ordinary reading pages retain the narrower text column. Screenshots/reports are local in `/tmp/opencode/didsbury-source`, not committed. This is not a full assistive-technology or accessibility certification.

## Remaining limits

No practice approval, earnings year, current full privacy notice, legal sign-off, accessibility certification or official production ownership is claimed. Locum cohort representation needs explicit approval. No complete reproduction of the old website or proof that all original URLs were found is claimed. Some archive-body requests failed and indexed text is labelled separately. HTTPS hosting and live body checks are operational evidence, not clinical content approval.
