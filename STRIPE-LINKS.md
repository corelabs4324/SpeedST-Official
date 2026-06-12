# Stripe Payment Links — SPEED·ST

Paste your Stripe Payment Link URLs below, then copy them into `js/catalog.js`.

Create links at: **Stripe Dashboard → Payment Links → + New**

Use variant-level links when a product has multiple sizes/prices in Stripe.

---

## Blackout Plates

### plates-single — Blackout Plate™ Single ($263)

| Variant | Stripe Payment Link |
|---------|---------------------|
| Standard | |
| Slimline | |

Product-level fallback (if one link covers all variants):

```
plates-single stripeLink:
```

---

### plates-dual — Blackout Plate™ Dual ($427)

| Variant | Stripe Payment Link |
|---------|---------------------|
| Standard pair | |
| Slimline pair | |
| Mixed pair | |

Product-level fallback:

```
plates-dual stripeLink:
```

---

## Underglow

### underglow-v1 — Underglow Kit V1 ($349)

| Variant | Stripe Payment Link |
|---------|---------------------|
| Sedan / Hatch | |
| SUV / Ute | |

Product-level fallback:

```
underglow-v1 stripeLink:
```

---

### underglow-pro — Underglow Pro ($469)

| Variant | Stripe Payment Link |
|---------|---------------------|
| Sedan / Hatch | |
| SUV / Ute | |

Product-level fallback:

```
underglow-pro stripeLink:
```

---

## Interior Glow

### interior-core — Interior Glow Pack Core ($129)

| Variant | Stripe Payment Link |
|---------|---------------------|
| Core 4-piece | |

Product-level fallback:

```
interior-core stripeLink:
```

---

### interior-pro — Interior Glow Pack Pro ($199)

| Variant | Stripe Payment Link |
|---------|---------------------|
| Pro 8-piece | |

Product-level fallback:

```
interior-pro stripeLink:
```

---

## Stickers

### sticker-pack-01 — Sticker Pack 01 ($29)

| Variant | Stripe Payment Link |
|---------|---------------------|
| Matte black | |
| Gloss | |

Product-level fallback:

```
sticker-pack-01 stripeLink:
```

---

### windshield-banner — SPEED·ST Windshield Banner ($39)

| Variant | Stripe Payment Link |
|---------|---------------------|
| White on black | |
| Black on white | |

Product-level fallback:

```
windshield-banner stripeLink:
```

---

## Quick reference — product IDs

```
plates-single
plates-dual
underglow-v1
underglow-pro
interior-core
interior-pro
sticker-pack-01
windshield-banner
```

Product URLs on the site: `product.html?id=<id>` (e.g. `product.html?id=plates-dual`)
