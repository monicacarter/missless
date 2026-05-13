# Missless — Homepage

The AI front office that never misses a lead. This folder contains the production-ready homepage you can run locally on your PC.

## Folder Structure

```
missless/
├── index.html          # Full homepage markup + schema
├── css/
│   └── style.css       # Stylesheet (brand colors, typography, layout)
├── js/
│   └── main.js         # Reveal animations, mobile nav, FAQ, audio tabs
├── assets/
│   └── favicon.svg     # Brand favicon
└── README.md           # This file
```

## Running the Site Locally

You have three easy options. Pick whichever you prefer.

### Option 1: Open directly in your browser (simplest)

Just double-click `index.html`. It will open in your default browser and work immediately.

Limitation: Some browsers restrict certain features when opening files via `file://`. This works fine here, but Option 2 or 3 is recommended for a more accurate preview.

### Option 2: Python's built-in server (recommended)

If you have Python installed (most PCs do):

1. Open a terminal or command prompt.
2. Navigate into the `missless` folder:
   ```
   cd path/to/missless
   ```
3. Start a local server:

   **Python 3 (most common):**
   ```
   python -m http.server 8000
   ```
   **Python 2:**
   ```
   python -m SimpleHTTPServer 8000
   ```
4. Open your browser and go to: `http://localhost:8000`

### Option 3: Node.js / npx (no install needed)

If you have Node.js installed:

```
cd path/to/missless
npx serve
```

Then open the URL it prints, usually `http://localhost:3000`.

### Option 4: VS Code Live Server (best for editing)

1. Open the `missless` folder in VS Code.
2. Install the "Live Server" extension by Ritwick Dey.
3. Right-click `index.html` and choose "Open with Live Server".
4. The site opens in your browser with auto-reload on save.

## Brand System

| Token | Hex | Use |
|-------|-----|-----|
| Primary | `#2563EB` | Buttons, accents, links |
| Hover | `#1D4ED8` | Button hover state |
| Dark | `#1E3A8A` | Headings on dark backgrounds, gradients |
| Tint | `#EFF6FF` | Soft backgrounds, badges |
| White | `#FFFFFF` | Surfaces, text on dark |

## Typography

- **Display + body:** Geist (loaded from Google Fonts)
- **Editorial accent:** Instrument Serif (italic, used sparingly for emphasis)

## Browser Support

Tested for modern Chromium, Firefox, and Safari. The site uses standard HTML5, CSS3 custom properties, CSS Grid, and ES6 JavaScript. No build step required.

## Adding Real Assets Later

When you have real assets, drop them into the `assets/` folder and update references in `index.html`:

- `assets/logo.svg` — referenced in schema (line ~37)
- `assets/og-image.jpg` — Open Graph image for social shares (line ~21)
- Audio sample files for the "Hear it in action" section can also live here

## Schema Markup

Organization, WebSite, SoftwareApplication, and FAQPage schemas are embedded in `index.html` as JSON-LD. No action needed unless you want to update specific entries.

## Next Pages

Once this homepage is live, the next pages in Phase 1 are:

1. Pricing
2. About
3. AI Receptionist (product page)
4. AI Sales Agent
5. AI Messaging
6. AI Workflow Engine
7. AI Intelligence
8. White Label
9. Contact
10. Privacy Policy + Terms

Internal links in `index.html` already point to the correct URLs, so they will work as soon as those pages exist.
