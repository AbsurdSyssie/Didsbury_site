# Didsbury content inventory

Research date: 30 October 2026. This is a personal, unofficial demonstration, not a practice-approved migration. No source capture date is a practice review/sign-off date.

## Availability and identity

- Both <https://didsburymedicalcentre.co.uk/> and <https://www.didsburymedicalcentre.co.uk/> returned HTTP 502. Core live page requests also failed. Search-index extracts remained available, but are explicitly distinguished below from archive bodies actually fetched.
- Latest successful homepage CDX capture returned: **20260713221628**, <https://web.archive.org/web/20260713221628/https://www.didsburymedicalcentre.co.uk/>. Its actual HTML body was fetched and inspected, not just the index. No urlkey collapse was used to choose latest dates.
- [NHS profile P84678](https://www.nhs.uk/services/gp-surgery/didsbury-medical-centre-dr-whitaker/P84678), its [contact/hours page](https://www.nhs.uk/services/gp-surgery/didsbury-medical-centre-dr-whitaker/P84678/contact-details-and-opening-times), and [current CQC location](https://www.cqc.org.uk/location/1-29701373279) corroborate **1 The Avenue, Didsbury, Manchester, M20 2ER**, **0161 445 1957**. NHS reception hours are 8am to 6:30pm Monday to Friday, weekends closed; hours show a last-confirmed label of 29 November 2024. These match the inspected archive opening-times page.
- The name is **The Didsbury Medical Centre**, not Barlow Medical Centre. ODS **P84678** is corroborated by NHS, the supplier destination and source registration href. Historical P84677 and the former CQC location must not be substituted.
- [CQC provider services](https://www.cqc.org.uk/provider/1-199785118/services) lists the new location **1-29701373279**, not inspected yet, and archives the old **1-571125789** at 645 Wilmslow Road. Do not transfer its Good rating to the new location. The ordinary demo About page links to the current location without a rating claim.

## Full discoverable URL inventory

[sources/url-inventory.json](sources/url-inventory.json) records **1,567 original URLs**, their maximum successful capture timestamp from **3,347 CDX rows**, exact inspected-body status and disposition. The prefix query returned both www and apex originals, including old versions. It covers returned HTML captures, not an assertion that every URL ever published was found. Archived PDFs and assets linked from bodies are discovery references, not inspected HTML evidence. No patient data or executable archived documents are committed. Local raw artifacts: `/tmp/opencode/didsbury-source`.

The initial wildcard query and an early inventory fetch returned an Internet Archive offline page. They were not treated as successful indexes. The subsequent full prefix JSON response was used to compute per-original-URL maximum timestamps. Early urlkey-collapsed results were not used to choose latest dates.

## Inspected archive bodies and migration disposition

Paths below are on `https://www.didsburymedicalcentre.co.uk`. Timestamp is the latest successful CDX capture for that exact original URL, not earliest capture or research date.

| Source path | Latest successful capture | Disposition |
| --- | --- | --- |
| `/` | 20260713221628 | Homepage journeys, practice identity and new address. Exclude stale flu/closure notices and embedded code. |
| `/appointments/` | 20260123141428 | Appointment/service entry points. Clinical lists replaced with NHS links; booking process supplemented by indexed booking text and live supplier. |
| `/prescriptions/` | 20260214161143 | Two-working-day collection, pharmacy nomination, after-10am option 3 medicine queries. |
| `/prescriptions/how-to-request-a-repeat-prescription/` | 20260713221922 | Exact Accurx prescription href, NHS App, paper slip and post. No invented phone-order prohibition. |
| `/services/test-results/` | 20260411055023 | Exact Accurx link; call/visit reception; no routine result calls; hospital-requested tests go to hospital. |
| `/new-patients/how-to-register-as-a-new-patient/` | 20260517054838 | Exact NHS registration href and paper alternative. Do not promise its historical two-week completion time. |
| `/new-patients/catchment-area/` | 20260517050835 | Boundary eligibility with reception route. Exclude postcode form and active map. No invented boundary geography. |
| `/surgery-information/opening-times/` | 20260411055145 | Weekday reception 8am–6:30pm, weekends closed, Manchester Extended Access. Exclude stale dynamic “currently closed” state. |
| `/surgery-information/contact-us/` | 20260713205604 | New address, phone, exact Accurx href. Exclude stale map coordinates, old-area bus/travel claims. New map is explicitly an address search, not copied old pin. |
| `/surgery-information/team/doctors/` | 20260713223614 | Named doctors, four partners, two physician associates. Qualifications and unsourced availability omitted. |
| `/surgery-information/team/nursing-team/` | 20260517053023 | Named nursing team and roles, no clinical advice. |
| `/surgery-information/team/practice-team/` | 20260517055427 | Management names/roles and team functions. No unnecessary staff personal information. |
| `/services/surgery-clinics/` | 20260517062640 | Clinic names only. Exclude obsolete screening intervals, eligibility cutoffs and clinical instructions. |
| `/surgery-information/policies/complaints/` | 20260713221732 | Reception/post route and patient consent process. No invented response promise or email. |
| `/surgery-information/policies/gp-earnings/` | 20260411052242 | £70,203, 2 full-time and 13 part-time; year only “last financial year”, so no earnings claim is rendered. See queries. |
| `/surgery-information/policies/privacy-notices/` | 20231130194414 | Index of old PDFs, not approved full notice. Use permitted short notice-on-request page. No invented legal policy. |
| `/surgery-information/care-quality-commission-cqc/` | 20260517054426 | Old location href superseded by inspected current CQC evidence above; no rating badge. |
| `/surgery-information/patient-group/` | 20260517064433 | Group purpose, all registered patients welcome; reception contact rather than copied registration form. |

## Indexed text inspected, not archive-body evidence

- [Booking process](https://www.didsburymedicalcentre.co.uk/appointments/how-to-make-an-appointment/): latest successful CDX **20260616190753**. Archive body fetch failed with connection refused. Search-index text inspected: online/phone from 8am; urgent requests 8am–9:30am; routine from 9:30am with up-to-24-hour review; admin 8am–6:30pm working days, not for GP appointments. Live supplier independently corroborates the split windows. Nurse requests are separate; demo uses reception rather than cloning its local nurse form.
- [Sick notes](https://www.didsburymedicalcentre.co.uk/services/sick-notes/): latest successful CDX **20260616183148**; archive fetch failed. Indexed text includes exact `https://florey.accurx.com/p/P84678`, phone/reception alternative and GP assessment. Clinical/legal instructions replaced by NHS information link.
- [Relocation](https://www.didsburymedicalcentre.co.uk/surgery-information/didsbury-relocation/): latest successful CDX **20260616191234**; archive fetch failed. Indexed relocation text says opening at 1 The Avenue on 8 June 2026. New address is independently supported by NHS, CQC, live Accurx and actual July contact archive. No old Wilmslow Road address appears in patient copy.
- [Appointment change news](https://www.didsburymedicalcentre.co.uk/news/our-appointment-system-is-changing-from-1st-october-2025-didsbury-medical-centre/), CDX **20260616181202**, and [online requests news](https://www.didsburymedicalcentre.co.uk/news/changes-to-online-requests/), CDX **20260517052401**: fetches failed. Do not infer details from titles. Operational copy relies on inspected booking extracts and live supplier, not assumed news-body contents.

## Outgoing service verification

- Exact source contact/results/sick-note supplier: **https://florey.accurx.com/p/P84678**. Read-only browser GET redirects to **https://accurx.nhs.uk/patient-initiated/p84678**, identifying **Didsbury Medical Centre, 1 The Avenue, Manchester, M20 2ER**. Same-day/routine windows and admin options inspected. No login, cookie consent or patient submission.
- Exact prescription source href: **https://florey.accurx.com/p/P84678/patient-form**, not a constructed route. Read-only browser GET redirects to the same correct practice landing page with `?markdownTitle=patient-form`. Choose its admin request option. Source wording “admin query” and current destination “admin or routine care request” refer to this route.
- Exact source registration href: **https://gp-registration.nhs.uk/P84678/gpregistration/landing**. Read-only browser inspection identifies **Didsbury Medical Centre - DR Whitaker, Manchester**. Network-idle wait timed out because of background requests; DOM-content-loaded followed by body inspection succeeded. No “Start now” click or submission.

## Explicit exclusions and rights

Legacy clinical library and wellbeing advice are not copied; link to nhs.uk. Old bank holidays, training closures, vaccination campaigns, dated phone-system announcements and COVID notices are not presented as current news. No forms, scripts, tracking, consent widgets, active embeds, archive toolbars or source photographs were copied. Optional access facilities, parking rules, email, PCN and ICB details are omitted unless established for this site. The inherited template licence does not confer rights to third-party practice text or branding. Patient copy is a concise factual reconstruction; official reuse still requires rights and practice approval.
