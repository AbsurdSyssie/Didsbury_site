# Didsbury personal demonstration

This is an unofficial personal demo for The Didsbury Medical Centre, not its official website and not approved by the practice. The user authorised a separate public `AbsurdSyssie/Didsbury_site` project, personal Cloudflare Pages hosting and only `didsbury.oddtv.uk`. This is not practice ownership or sign-off. Do not direct patients to this demo or submit patient information through linked services during testing.

## Build and review

```sh
npm ci
npm run lint
PRACTICE_DIR=tests/fixtures/demo-practice npm test
PRACTICE_DIR=tests/fixtures/demo-practice npm run check
PRACTICE_DIR=tests/fixtures/demo-practice npm run build
npm run lint:html
npm run build:demo
npm run lint:html:demo
npm run audit:demo
uvx reuse lint
```

Only `_preview` is the demo artifact. The build cleans it before building, so a failed rebuild does not leave a deployable stale homepage. `_site` remains separate. Preview-only config defers absent practice review date and earnings year, not any other validation. Ordinary production checks intentionally fail on those missing genuine facts. Invalid supplied dates, bad phones/hours and untrusted embeds still block the preview. Tests use fictional fixtures, while the separate source audit checks Didsbury-specific routes and prose.

Patient pages use normal source-based copy. Exactly one global unofficial banner, noindex meta/header and robots exclusion remain mandatory, including on the error page. Noindex is advisory, not authentication. Outgoing Accurx links open the actual practice supplier; they are not simulated forms. No local forms, analytics or external embeds are included. `no-transform` discourages hosting-layer HTML rewriting; compare live artifacts after every upload.

See [content inventory](practice/CONTENT-INVENTORY.md), [questions](practice/MIGRATION-QUERIES.md) and [verification](practice/MIGRATION-VERIFICATION.md). Template licensing does not grant rights to third-party practice material. Before official use, obtain all actual facts, approval, rights and safety/accessibility review, and move to practice-owned accounts. Do not merely fill two dates and treat this as approved.

## Hosting scope and recovery

Deploy manually only to the new **didsbury-site** Cloudflare Pages project, branch `main`, using tested `_preview`. No Git integration or GitHub Pages configuration. Never deploy this copy to HHC or Barlow projects. Preserve upstream as read-only; push only the new personal GitHub repository.

Attach **didsbury.oddtv.uk** to this Pages project before changing any DNS. If permissions allow, privately back up complete records for only that exact host, then set its CNAME to **didsbury-site.pages.dev**. No apex, wildcard, mail, HHC, Barlow or zone security changes. If DNS is denied, leave domain verification pending and use `.pages.dev`.

To remove the demo, remove only this project's deployments/custom hostname. Restore exact-host records only from the private recovery copy if a DNS change was actually made. Never delete an unrelated Pages project or DNS record. Confirm external HTTPS home, appointments, assets and noindex before claiming a hostname works.

## Deployment record, 30 October 2026

- New public repository: <https://github.com/AbsurdSyssie/Didsbury_site>. Implementation **c22f71d6f9527da3846cca595559f75c508ff4ed** was pushed only to the `demo` remote, and its remote main hash matched. Original upstream `origin` is preserved with its local push URL disabled. Later documentation-only commits do not change deployed HTML.
- New Cloudflare Pages project **didsbury-site**, production branch `main`, direct manual upload, no Git integration. Project creation used the documented `--force` flag once to avoid Workers delegation; normal upload did not use it. Tested `_preview` uploaded successfully. Working verified demo: **https://didsbury-site.pages.dev/**.
- Upload returned immutable deployment address **https://96deb09d.didsbury-site.pages.dev/**, but that hostname had an external TLS handshake failure during verification. Do not claim it is working. The main `.pages.dev` address is externally verified separately.
- All 19 HTML URLs on `didsbury-site.pages.dev` returned HTTP 200 and exactly matched the tested local bytes, including `/404.html` requested as a normal URL. All carried `X-Robots-Tag: noindex, nofollow`. Robots and three checked CSS/JS assets matched too. A genuine missing path returned HTTP 404, noindex and exactly the local error-page bytes. No injected script/frame was observed. Five core live pages were browser-checked at phone, tablet and desktop widths without overflow, extra banners or missing urgent help.
- Python urllib requests initially returned 403 on the main address and TLS failure on the immutable address; curl and browser verification of the main address succeeded. No zone protection was disabled to make automated checks pass.
- **didsbury.oddtv.uk is attached but pending**, with Pages reporting **“CNAME record not set”**. External HTTPS returned **525**, not a working demo. Exact-host DNS read returned **403** under the existing OAuth permissions. No prior record could be read/backed up; no DNS record was written or changed. HHC, Barlow, wildcard/apex/mail and zone settings were untouched.
- Both inherited CI and GitHub publishing workflows correctly stopped at the production check on the two missing genuine facts. Their failed logs were inspected. No GitHub Pages settings were enabled or modified. This is expected gated production behaviour, not green production CI.

### Complete only the Didsbury demo hostname

1. In Cloudflare → **oddtv.uk → DNS → Records**, inspect only the exact **didsbury.oddtv.uk** record(s). Save their complete existing settings privately for rollback before editing. Do not change wildcard, apex, email, HHC or Barlow records.
2. Set the exact host **didsbury** to **CNAME → didsbury-site.pages.dev**, without scheme or path. Resolve only exact-host conflicts after recording them. Stop if resolving a conflict would require a broader change.
3. In **Workers & Pages → didsbury-site → Custom domains**, check that **didsbury.oddtv.uk** becomes active and its certificate is valid.
4. Open **https://didsbury.oddtv.uk/** and `/appointments/`, check the correct Didsbury body and assets and noindex headers. Do not bypass certificate warnings. Until these checks pass, use the working `.pages.dev` demo address.
