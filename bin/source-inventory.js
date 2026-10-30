// SPDX-FileCopyrightText: 2026 Marcus Baw
// SPDX-License-Identifier: MIT

// Regenerate factual capture metadata, never executable archived documents.
import fs from "node:fs";
import path from "node:path";
const dir = process.argv[2];
if (!dir) throw new Error("Pass the local source-artifact directory");
const rows = JSON.parse(fs.readFileSync(path.join(dir, "cdx-success.json"), "utf8")).slice(1);
const latest = new Map();
for (const [timestamp, url] of rows) {
  if (!latest.has(url) || latest.get(url) < timestamp) latest.set(url, timestamp);
}
const inspected = JSON.parse(fs.readFileSync(path.join(dir, "inspected-fetches.json"), "utf8"));
const result = [...latest].map(([url, timestamp]) => {
  const pathname = new URL(url).pathname;
  const fetched = inspected.find(
    ([p, date, , file]) =>
      file && url === `https://www.didsburymedicalcentre.co.uk/${p}` && timestamp === date,
  );
  let disposition = "Not migrated; not inspected. Retain for editorial review.";
  if (/\/Library\//i.test(pathname))
    disposition = "Exclude legacy clinical library; link to nhs.uk.";
  else if (/\/navigator\//i.test(pathname))
    disposition = "Exclude patient-data forms; use verified supplier links.";
  else if (/\/(news|practice_news)\//i.test(pathname))
    disposition = "Do not republish old notices, closures or clinical advice.";
  else if (fetched)
    disposition =
      "Inspected source; relevant facts summarised in core journeys. No scripts, forms, tracking or embeds copied.";
  return {
    url,
    latestSuccessfulCapture: timestamp,
    inspectedArchiveBody: Boolean(fetched),
    disposition,
  };
});
fs.mkdirSync("practice/sources", { recursive: true });
fs.writeFileSync(
  "practice/sources/url-inventory.json",
  `${JSON.stringify(
    {
      collected: "2026-10-30",
      query:
        "https://web.archive.org/cdx/search/cdx?url=www.didsburymedicalcentre.co.uk&matchType=prefix&output=json&filter=statuscode:200&filter=mimetype:text/html&fl=timestamp,original",
      note: "Maximum successful timestamp per original URL, computed across all returned rows without urlkey collapse. Index metadata is not inspected body evidence. Query also returned apex originals. Coverage is limited to returned HTML captures, not all URLs ever published.",
      successfulRows: rows.length,
      urls: result,
    },
    null,
    2,
  )}\n`,
);
console.log(`Recorded ${result.length} URLs from ${rows.length} successful capture rows.`);
