# SPEED·ST Website

Static website for [SPEED·ST](https://speedst.com) — blackout plates, underglow kits, interior glow packs, and stickers. No Shopify, no build step. Pure HTML, CSS, and JavaScript.

## Pages

| Page | File |
|------|------|
| Homepage | `index.html` |
| Shop all | `shop.html` |
| Blackout Plates | `blackout-plates.html` |
| Underglow | `underglow.html` |
| Interior Glow | `interior-glow.html` |
| Stickers | `stickers.html` |
| Meets & Collabs | `meets.html` |
| Product detail | `product.html?id=<product-id>` |
| Checkout info | `cart.html` (redirects visitors to direct Stripe checkout) |

## Local preview

**Option A — open directly**

```bash
open index.html
```

**Option B — local server (recommended for relative paths)**

```bash
ruby -run -e httpd . -p 8080
```

Then visit `http://localhost:8080`

## Checkout model

This site uses **Stripe Payment Links** with direct **Buy now** buttons — no shopping cart. Each product (or variant) gets its own Stripe link. When a customer clicks Buy now, they go straight to Stripe's hosted checkout.

See `STRIPE-LINKS.md` for a checklist of every product ID.

### Adding Stripe Payment Links

1. In [Stripe Dashboard](https://dashboard.stripe.com) → **Payment Links**, create a link for each product/variant.
2. Open `js/catalog.js` and paste each URL:
   - **Product-level:** set `stripeLink: 'https://buy.stripe.com/…'` on the product object
   - **Variant-level:** set `stripeLink` on individual entries in `sizes[]` (overrides product-level link)
3. Variant links are useful when sizes/configurations have different prices in Stripe.

Empty links show a disabled **Payment link coming soon** button on the product page.

## Replacing images

Placeholder SVGs live in `assets/`. Replace them with your own photos:

| Placeholder | Suggested final filename |
|-------------|-------------------------|
| `kit-single.svg` | `kit-single.png` |
| `kit-dual.svg` | `kit-dual.png` |
| `underglow-kit.svg` | `underglow-kit.png` |
| `underglow-car.svg` | `underglow-car.png` |
| `interior-glow-kit.svg` | `interior-glow-kit.png` |
| `sticker-pack.svg` | `sticker-pack.png` |
| `lifestyle-rear.svg` | `lifestyle-rear.png` |
| `mode-comparison.svg` | `mode-comparison.png` |
| `feature-detail.svg` | `feature-detail.png` |
| `meets-hero.svg` | `meets-hero.png` |

After adding PNG/JPG files, update image paths in `js/catalog.js` and any hardcoded paths in the HTML files (search for `assets/`).

## Product catalog

All products are defined in `js/catalog.js`. The 8-product catalog covers four lines:

- **Blackout Plates** — Single, Dual
- **Underglow** — Kit V1, Pro
- **Interior Glow** — Core, Pro
- **Stickers** — Pack 01, Windshield Banner

## Deploy to GitHub

1. Create a new repository at [github.com/new](https://github.com/new) (e.g. `speedst-website`). Do **not** initialize with a README if you're uploading locally.

2. In Terminal, from this project folder:

```bash
git init
git add .
git commit -m "Initial commit — SPEED·ST static site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/speedst-website.git
git push -u origin main
```

3. Enable **GitHub Pages** (optional): repo **Settings → Pages → Deploy from branch → main / root**.

> **Note:** If `git` or `python3` fail with an Xcode tools error, install [Xcode Command Line Tools](https://developer.apple.com/xcode/resources/) first (`xcode-select --install`), or use [GitHub Desktop](https://desktop.github.com/) to drag-and-drop the folder.

## Project structure

```
speedst-website/
├── index.html              Homepage
├── shop.html               All products + filters
├── blackout-plates.html    Line landing page
├── underglow.html
├── interior-glow.html
├── stickers.html
├── meets.html              Meets & collabs
├── product.html            Product detail + Buy now
├── cart.html               Checkout info (no cart)
├── css/
│   ├── theme.css           Global styles
│   └── line-page.css       Category page styles
├── js/
│   └── catalog.js          Products, prices, Stripe links
├── assets/                 Product & lifestyle images
├── STRIPE-LINKS.md         Stripe link checklist
└── README.md               This file
```

## What's not included

The `shopify-theme/`, `shopify-paste/`, and `lumicast/` folders are legacy Shopify experiments — excluded from the static site via `.gitignore`. They are not needed to run the site.
