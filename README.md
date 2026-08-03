# Sushi Takumi

## Overview
**Sushi Takumi** is a mobile-first website for a Japanese restaurant in Green Bay, Wisconsin. It's a full re-theme of an earlier sushi restaurant template: rebranded, rebuilt for phones, and illustrated entirely with open-source cartoon icons instead of stock photography.

## Tech Stack
- **HTML5** — semantic, accessible structure.
- **CSS3** — responsive, mobile-first layout with a warm custom theme.
- **JavaScript** — mobile nav menu + service worker registration.
- **AOS (Animate on Scroll)** — scroll-triggered animations.
- **[Twemoji](https://github.com/jdecked/twemoji)** — cartoon food icons (CC BY 4.0), loaded from jsDelivr.

## Mobile web app features
- Fixed viewport bug from the original template (`width=device-width`).
- Working hamburger menu on small screens (the original had no way to open the nav on mobile).
- `manifest.json` + service worker so the site can be added to a phone's home screen and installed as a standalone app.
- Fully responsive down to small phone widths.

## Features
- Menu, trending dishes, and drinks sections themed around Sushi Takumi's Green Bay location.
- Smooth scroll animations via AOS.
- No stock photos — every food image is a hand-drawn cartoon icon, not AI-generated.

## Before showing this to Sushi Takumi's owner
This was built as a concept pitch, not from their real content. The address, phone, and hours in the footer are pulled from their current site (sushitakumiwi.com) as of August 2026 — worth double-checking they haven't changed. Still to swap in:
- Actual menu items and prices (currently placeholder dishes)
- Real photos/logo, if they have any, in place of the Twemoji icons
- Anything specific to their actual hibachi/grill offerings beyond the placeholder menu

## Development
```bash
npm install
npm run dev      # local dev server
npm run build    # production build
```

## License
This project is open-source and available under the [MIT License](LICENSE).
