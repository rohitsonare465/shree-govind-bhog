# ShreeGovind Bhog

A premium restaurant website concept for ShreeGovind Bhog, EC Road, Dehradun, managed by STVR Hospitality Services. Built in the existing React project.

## Preview

```sh
npm install
npm start
```

Local preview: http://localhost:3000

- `/` — cinematic homepage, brand story, experiences, interactive thali, gallery, occasions, location
- `/menu` — interactive bowl selection and the complete grouped sample menu
- `/gallery` — category filters and accessible native-dialog lightbox
- `/contact` — address, EC Road area map, enquiry form and contact options
- `/admin` — interactive staff dashboard demo

```sh
npm run build
CI=true npm test -- --watchAll=false --runInBand
```

Static deployment should serve `build/` and rewrite unknown routes to `index.html` for direct route access.

## What works in the demo

Staff can edit, add and remove dishes, edit descriptions and categories, position bowl markers, upload gallery images, remove gallery entries, review and update enquiry status, edit contact details/opening status, and change the browser title and description. Changes persist in localStorage in the same browser and origin. Gallery uploads support JPG, PNG and WebP up to 1.5 MB and report storage failures without claiming success.

Reservation fields validate required details and future dates in the browser. Sample enquiries are saved locally and appear in the staff dashboard. Configuring a real WhatsApp number or email enables a user-initiated handoff to WhatsApp or an email draft. The app never sends messages automatically or claims a confirmed booking.

## Demo boundaries

- No production backend, authentication, shared database, payment, ordering, delivery or automatic email service is connected.
- The staff dashboard is publicly accessible as a presentation mockup. Use sample guest data only.
- No phone number, email address, pricing, hours, reviews, awards or certifications were invented. Unknown details remain editable placeholders.
- The venue is marked Opening Soon. Menu dishes are illustrative selections; imagery is labeled as concept imagery.
- Google Maps shows the EC Road area. A precise restaurant pin must be supplied before launch.
- The demo deliberately includes `noindex, nofollow`. Remove only for the approved production website.
- Restaurant JSON-LD is provided as a starting point. Add verified location/contact/hours in production; do not add fabricated ratings.
- Google Fonts and the embedded Google Map require network access. Images are served locally.

## Verification

Four interaction tests cover bowl selection, saved staff menu edits, gallery filtering/lightbox behavior, and enquiries appearing in the staff dashboard. The production build is warning-free. Desktop and mobile previews were inspected in the browser, including 390 px mobile and 1440 px desktop layouts, navigation, thali selection, lightbox and reservation submission. A clearly named sample enquiry may remain in the preview browser from verification.

## WordPress + Elementor handoff

Keep the visual system in global Elementor styles: Cormorant Garamond headings, Manrope body text, cream `#fbf8f0`, burgundy `#641e2b`, dark maroon `#35151c`, antique gold `#bd9757`. Use responsive container sections with the same generous spacing and supplied crest/assets.

Create a Daily Thali custom post type with fields for dish name, label, description, category, availability, and marker x/y percentages. A small custom Elementor widget can render the accessible image hotspot selector against those fields. Use WordPress Media Library for categorized gallery images, restaurant options fields for contact/opening details, and an authenticated staff role limited to menu/media/enquiries.

Replace localStorage with validated server-side persistence. Add a forms plugin or server endpoint with spam protection and rate limiting; only display a submission success message after receiving confirmation from the server. Configure verified WhatsApp/email routing, privacy/retention requirements and protected enquiry access. A standard SEO plugin can manage production metadata, canonical URLs, sitemap and verified Restaurant schema.

Image source and generation notes: [docs/ASSETS.md](docs/ASSETS.md).
