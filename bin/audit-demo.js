// SPDX-FileCopyrightText: 2026 Marcus Baw
// SPDX-License-Identifier: MIT

// H1/H2/H3/H5/H7/H10: source-specific audit, not fictional template tests.
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { load } from "js-yaml";
const root = path.resolve("_preview");
const data = load(fs.readFileSync("practice/practice.yaml", "utf8"));
const evidence = JSON.parse(fs.readFileSync("practice/sources/online-consultation.json", "utf8"));
assert.equal(data.practice.ods_code, "P84678");
assert.equal(data.contact.phone, "0161 445 1957");
assert.equal(data.site.content_last_reviewed, "");
assert.equal(data.gp_earnings.financial_year, "");
assert.equal(data.online_services.online_consultation.url, evidence.url);
const files = fs.readdirSync(root, { recursive: true }).filter((f) => f.endsWith(".html"));
assert.equal(files.length, 19);
for (const file of files) {
  const html = fs.readFileSync(path.join(root, file), "utf8");
  assert.equal((html.match(/Unofficial demo/g) ?? []).length, 1, file);
  assert.match(html, /<meta name="robots" content="noindex, nofollow">/, file);
  assert.match(html, /data-safety="urgent-help"/, file);
  assert.match(html, /href="tel:999"/, file);
  assert.match(html, /href="tel:111"/, file);
  assert.doesNotMatch(
    html,
    /<form\b|<iframe\b|<input\b|<textarea\b|<script[^>]+src="https?:/i,
    file,
  );
  assert.doesNotMatch(
    html,
    /Barlow|Handforth|Fernmoor|Exampleton|01632|645 Wilmslow|M20 6BA|P84034|patchs\.ai|70,203|GP earnings|Website content last reviewed|MIGRATION-|CONTENT-INVENTORY|web\.archive\.org/i,
    file,
  );
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1];
  assert.ok(main, file);
  const copy = main.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ");
  assert.doesNotMatch(
    copy,
    /historical|archived|unverified|unconfirmed|not confirmed|source[- ](?:derived|based)|contact.{0,30}confirm|migration|demonstration|not practice.approved/i,
    file,
  );
  for (const [, href] of html.matchAll(/(?:href|src)="(\/[^"#?]*)(?:[?#][^"]*)?"/g)) {
    const local = path.join(root, href.endsWith("/") ? `${href}index.html` : href);
    assert.ok(fs.existsSync(local), `${file}: broken local link ${href}`);
  }
}
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
for (const file of [
  "index.html",
  "appointments/index.html",
  "contact/index.html",
  "test-results/index.html",
  "sick-notes/index.html",
]) {
  assert.ok(read(file).includes(`href="${evidence.url}"`), file);
}
assert.ok(read("prescriptions/index.html").includes(`href="${evidence.prescriptionUrl}"`));
assert.match(read("appointments/index.html"), /9:30am/);
assert.match(read("appointments/index.html"), /24 hours/);
assert.match(
  read("appointments/index.html"),
  /Do not use the admin option to request a GP appointment/,
);
assert.doesNotMatch(read("appointments/index.html"), /to book some appointments|After 10am/);
assert.match(read("prescriptions/index.html"), /2 working days/);
assert.match(read("prescriptions/index.html"), /prescription slip/);
assert.match(read("prescriptions/index.html"), /By post|by post/);
assert.match(read("prescriptions/index.html"), /option 3/);
assert.match(read("test-results/index.html"), /does not routinely telephone/);
assert.match(read("contact/index.html"), /1 The Avenue/);
assert.match(read("about/index.html"), /1-29701373279/);
assert.match(
  read("register/index.html"),
  /https:\/\/gp-registration.nhs.uk\/P84678\/gpregistration\/landing/,
);
assert.match(read("_headers"), /X-Robots-Tag: noindex, nofollow/);
assert.match(read("_headers"), /Cache-Control: .*no-transform/);
assert.match(read("robots.txt"), /Disallow: \//);
assert.ok(!fs.existsSync(path.join(root, "CNAME")));
console.log(`Audited all ${files.length} demo pages and source-specific journeys.`);
