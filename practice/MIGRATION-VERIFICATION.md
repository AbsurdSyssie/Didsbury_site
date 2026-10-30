# Migration verification

## Scope and data flow

Separate fresh clone: `/home/oscar/Documents/Code_Projects/Didsbury_site`, upstream `pacharanero/open-gp-practice-website`. HHC and Barlow checkouts/deployments/DNS are out of scope and unchanged. Only their reusable preview implementation was read for design reference. All practice facts here are Didsbury-specific.

YAML is validated through unchanged `lib/practice.js`; ordinary production check/build reject missing genuine approval date, earnings year and locum count. Isolated `eleventy.preview.config.js` emits `_preview` only. When the earnings year is absent, the entire earnings block is removed from preview data and the remaining practice is revalidated; only the resulting required-block error and absent approval date are deferred. With a supplied year, all earnings fields must validate. Preview-only core Markdown replaces unsupported generic template promises while retaining the base layout and urgent-help partial. No patient data processing, archived script execution or active embeds.

Sources and conflicts are recorded in [inventory](CONTENT-INVENTORY.md) and [queries](MIGRATION-QUERIES.md), never repeated across patient pages. Exactly one compact global unofficial banner appears on each page. Earnings are not rendered when the year is absent. The content-review footer is not fabricated. Demo statement preparation date records only statement authoring.

## Verification performed locally

- Fresh `npm ci` and unchanged baseline tests passed before editing.
- Lint/formatting, fictional valid-practice unit/build tests, fictional production check/build and production HTML validation passed. Nation-specific fictional England and Wales builds retain urgent help.
- Actual practice production check/build correctly reject precisely `gp_earnings.financial_year`, `gp_earnings.locum_gps` and `site.content_last_reviewed`. No gate was weakened to claim production readiness. Inherited CI is expected to fail that production check; GitHub Pages is not enabled.
- Fresh `build:demo`, all 19-page `lint:html:demo` and source-specific `audit:demo` passed. An initial HTML validation run caught breaking spaces in telephone links across Markdown; all affected source links were fixed with nonbreaking spaces and revalidated, not patched only in generated output.
- REUSE via `uvx reuse lint` passed. System `reuse` executable was absent; the isolated tool invocation provided the check without adding project dependencies.
- All 19 patient page bodies inspected for inherited fictional names/numbers, wrong practices/old address, unrendered migration notes, qualifications, broken local links, forms, frames, external script loads, duplicate banners and absent urgent help. Automated audit records the same invariants and checks supplier anchors, results wording, two-working-day prescription turnaround, option 3, correct new CQC and registration URLs.
- Source supplier and registration destinations were independently read in a browser without interaction, consent, login, patient data or submissions. A registration network-idle timeout was resolved using DOM-content-loaded and body inspection. Both Accurx source URLs redirect to the correct Didsbury identity/new address. See source inventory.

### Unknown locum count correction, 30 October 2026

Removed the unsupported zero from source data; the source inventory records no locum count. Regression test failed before the preview correction and now passes: no earnings block reaches preview template data, no count is filled in the input file, no declaration is rendered, and providing a year while leaving the count unknown blocks preview. Existing invalid phone, hours, review-date, placeholder-year and embed checks still block preview. The production validator is unchanged.

Current verification: all 42 tests pass with `PRACTICE_DIR=tests/fixtures/demo-practice npm test`; lint, fictional production check/build/HTML validation, actual `build:demo`, 19-page HTML validation, source-specific audit and `uvx reuse lint` pass. Unqualified `npm test` fails its production-build setup against the intentionally incomplete real practice, just as actual production check/build block the three fields above. Initial formatting failure was corrected and lint rerun successfully. Preview rebuild is now successful, not a current worker failure.

All 18 successful live HTML page responses, robots.txt and the true missing-URL 404 body match the rebuilt preview byte-for-byte. The first comparison incorrectly treated `/404.html` as a normal success URL; Pages redirects that path, so verification used a genuine missing URL (HTTP 404) instead. No rendered output changed and no redeployment was needed or performed. The previous good online artifact remains current.

## Visual review

Playwright exercised all 19 local pages at 390×844, 768×1024 and 1440×900: 57 page/viewport combinations, no horizontal overflow, broken image assets, missing urgent-help control, extra banners or forms/frames. Homepage, phone appointments and desktop contact screenshots inspected. Keyboard skip link focused and moved to `maincontent`; mobile More navigation exposed Services. Reduced motion and 200% root-text enlargement produced no homepage overflow. Final homepage uses the full NHS.UK content grid, while ordinary reading pages retain the narrower text column. Screenshots/reports are local in `/tmp/opencode/didsbury-source`, not committed. This is not a full assistive-technology or accessibility certification.

## External deployment checks

Manual upload of implementation `c22f71d6f9527da3846cca595559f75c508ff4ed` to the new `didsbury-site` project succeeded. Main hostname <https://didsbury-site.pages.dev/> serves all 19 tested HTML pages byte-for-byte with noindex. Robots and checked CSS/JS match; true missing paths return 404/noindex and the tested error bytes. The live home, appointments, opening times, contact and about pages passed phone/tablet/desktop browser layout/safety checks. Curl and browser were used after Python urllib encountered 403. Immutable `96deb09d.didsbury-site.pages.dev` had a TLS handshake failure, so no successful immutable-host audit is claimed.

The custom hostname is attached but pending “CNAME record not set”, externally HTTP 525. Exact-host DNS read was denied 403. No DNS backup/write was possible or attempted after denial. Exact dashboard completion steps are in `DEMO.md`. Do not claim the custom hostname is live. The only push target was the new public personal GitHub project; no upstream, HHC or Barlow changes. Inherited GitHub CI/publishing logs confirm both stopped at missing real review date and earnings year; GitHub Pages was not enabled.

## Outstanding approval and operational limits

No practice approval, earnings year, current full privacy notice, legal sign-off, accessibility certification or official production ownership is claimed. The source does not provide a locum count, which remains unknown. No complete reproduction of the old website or proof that all original URLs were found is claimed. Some archive-body requests failed and indexed text is labelled separately. HTTPS hosting and live body checks are operational evidence, not clinical content approval.
