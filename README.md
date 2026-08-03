Here's the cleaned up version:

```markdown
# Sushi Takumi

## Overview
Sushi Takumi is a mobile first concept site built as a pitch for a real Japanese restaurant in Green Bay, Wisconsin. It's meant to show the owner what a modern, phone friendly version of their site could look like, built entirely with open source cartoon icons instead of stock photography.

## Tech Stack
- **HTML5**, semantic and accessible structure.
- **CSS3**, responsive mobile first layout with a custom Green Bay themed palette.
- **JavaScript**, handles the mobile nav menu and service worker registration.
- **AOS (Animate on Scroll)**, for scroll triggered animations.
- **[Twemoji](https://github.com/jdecked/twemoji)**, cartoon food icons (CC BY 4.0), loaded from jsDelivr.

## Mobile Web App Features
- Proper viewport handling and full responsiveness down to small phone widths.
- A working hamburger menu that actually opens on small screens.
- `manifest.json` and a service worker so the site can be added to a phone's home screen and installed like a standalone app.

## Features
- Menu, trending dishes, and drinks sections themed around Sushi Takumi's Green Bay location.
- Smooth scroll animations throughout.
- No stock photos anywhere. Every food image is a hand drawn cartoon icon

## A Note for Sushi Takumi's Owner
This site was built as a concept pitch
## Development
```bash
npm install
npm run dev      # local dev server
npm run build    # production build
```
