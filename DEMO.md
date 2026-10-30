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
