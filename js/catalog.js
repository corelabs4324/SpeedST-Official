// PASTE STRIPE PAYMENT LINKS HERE — one per product (or per variant in sizes[].stripeLink)
// Create links in Stripe Dashboard → Payment Links. Paste the full https://buy.stripe.com/… URL.
// Variant-level links override the product-level stripeLink when set.

/**
 * SPEED·ST product catalog — blackout plates, underglow, interior glow, stickers
 */
const CATALOG = [
  /* ---- BLACKOUT PLATES ---- */
  {
    id: 'plates-single',
    category: 'plates', categoryLabel: 'Blackout Plates',
    title: 'Blackout Plate™ — Single',
    subtitle: 'Remote-controlled blackout overlay, standard or slimline fit',
    price: 263, compareAt: 458,
    image: 'assets/kit-single.svg',
    stripeLink: '', // YOUR_STRIPE_LINK_HERE — or set per variant below
    badge: null,
    featured: true,
    page: 'blackout-plates.html',
    sizes: [
      { id: 'std', label: 'Standard', dim: '372 × 134 mm', note: 'Most AU rear plates', stripeLink: '' },
      { id: 'slim', label: 'Slimline', dim: '372 × 100 mm', note: 'Compact front plates', stripeLink: '' }
    ]
  },
  {
    id: 'plates-dual',
    category: 'plates', categoryLabel: 'Blackout Plates',
    title: 'Blackout Plate™ — Dual',
    subtitle: 'Front + rear set, one remote controls both',
    price: 427, compareAt: 725,
    image: 'assets/kit-dual.svg',
    stripeLink: '',
    badge: 'Best value',
    featured: true,
    page: 'blackout-plates.html',
    sizes: [
      { id: 'std-pair', label: 'Standard pair', dim: '2 × 372 × 134 mm', note: 'Both standard', stripeLink: '' },
      { id: 'slim-pair', label: 'Slimline pair', dim: '2 × 372 × 100 mm', note: 'Both slimline', stripeLink: '' },
      { id: 'mixed', label: 'Mixed pair', dim: '1 × Standard + 1 × Slimline', note: 'Front/rear mix', mixedNote: true, stripeLink: '' }
    ]
  },

  /* ---- UNDERGLOW ---- */
  {
    id: 'underglow-v1',
    category: 'underglow', categoryLabel: 'Underglow',
    title: 'Underglow Kit V1',
    subtitle: '4-piece RGB aluminium bars, RF remote, IP68',
    price: 349, compareAt: 449,
    image: 'assets/underglow-kit.svg',
    stripeLink: '',
    badge: 'New',
    featured: true,
    page: 'underglow.html',
    sizes: [
      { id: 'sedan', label: 'Sedan / Hatch', dim: '2 × 120 cm + 2 × 90 cm', note: 'Most sedans & hatches', stripeLink: '' },
      { id: 'suv', label: 'SUV / Ute', dim: '2 × 150 cm + 2 × 120 cm', note: 'Long wheelbase', stripeLink: '' }
    ]
  },
  {
    id: 'underglow-pro',
    category: 'underglow', categoryLabel: 'Underglow',
    title: 'Underglow Pro',
    subtitle: 'App control, music sync, chase animations',
    price: 469, compareAt: null,
    image: 'assets/underglow-car.svg',
    stripeLink: '',
    badge: null,
    featured: false,
    page: 'underglow.html',
    sizes: [
      { id: 'pro-sedan', label: 'Sedan / Hatch', dim: '2 × 120 cm + 2 × 90 cm', note: 'Addressable LEDs', stripeLink: '' },
      { id: 'pro-suv', label: 'SUV / Ute', dim: '2 × 150 cm + 2 × 120 cm', note: 'Addressable LEDs', stripeLink: '' }
    ]
  },

  /* ---- INTERIOR GLOW ---- */
  {
    id: 'interior-core',
    category: 'interior', categoryLabel: 'Interior Glow',
    title: 'Interior Glow Pack — Core',
    subtitle: '2 footwell bars + 2 ambient strips, USB-C powered',
    price: 129, compareAt: 179,
    image: 'assets/interior-glow-kit.svg',
    stripeLink: '',
    badge: null,
    featured: true,
    page: 'interior-glow.html',
    sizes: [
      { id: 'core', label: 'Core 4-piece', dim: '2 × footwell + 2 × dash strips', note: 'Front cabin', stripeLink: '' }
    ]
  },
  {
    id: 'interior-pro',
    category: 'interior', categoryLabel: 'Interior Glow',
    title: 'Interior Glow Pack — Pro',
    subtitle: 'Full-cabin 8-piece, music sync, app + remote',
    price: 199, compareAt: 259,
    image: 'assets/interior-glow-kit.svg',
    stripeLink: '',
    badge: 'Full cabin',
    featured: false,
    page: 'interior-glow.html',
    sizes: [
      { id: 'pro8', label: 'Pro 8-piece', dim: '4 × footwell + 4 × ambient strips', note: 'Front + rear cabin', stripeLink: '' }
    ]
  },

  /* ---- STICKERS ---- */
  {
    id: 'sticker-pack-01',
    category: 'stickers', categoryLabel: 'Stickers',
    title: 'Sticker Pack 01',
    subtitle: '7 die-cut vinyl decals — checker, katakana, skull & more',
    price: 29, compareAt: null,
    image: 'assets/sticker-pack.svg',
    stripeLink: '',
    badge: null,
    featured: true,
    page: 'stickers.html',
    sizes: [
      { id: 'matte', label: 'Matte black', dim: 'Matte vinyl, 5-year outdoor', note: 'Stealth finish', stripeLink: '' },
      { id: 'gloss', label: 'Gloss', dim: 'Gloss vinyl, 5-year outdoor', note: 'High contrast', stripeLink: '' }
    ]
  },
  {
    id: 'windshield-banner',
    category: 'stickers', categoryLabel: 'Stickers',
    title: 'SPEED·ST Windshield Banner',
    subtitle: '950 × 130 mm sun-strip banner, pre-masked for install',
    price: 39, compareAt: null,
    image: 'assets/sticker-pack.svg',
    stripeLink: '',
    badge: null,
    featured: false,
    page: 'stickers.html',
    sizes: [
      { id: 'wob', label: 'White on black', dim: '950 × 130 mm', note: 'Classic', stripeLink: '' },
      { id: 'bow', label: 'Black on white', dim: '950 × 130 mm', note: 'Inverted', stripeLink: '' }
    ]
  }
];

const CATEGORIES = [
  { id: 'all', label: 'Everything' },
  { id: 'plates', label: 'Blackout Plates' },
  { id: 'underglow', label: 'Underglow' },
  { id: 'interior', label: 'Interior Glow' },
  { id: 'stickers', label: 'Stickers' }
];

const FREE_SHIPPING_MIN = 250;

function getProduct(id) {
  return CATALOG.find(p => p.id === id);
}

function getStripeLink(product, sizeId) {
  if (!product) return '';
  const size = product.sizes.find(s => s.id === sizeId);
  if (size?.stripeLink) return size.stripeLink;
  return product.stripeLink || '';
}

function formatPrice(n) {
  return '$' + n.toFixed(0);
}

function discountPct(price, compareAt) {
  if (!compareAt || compareAt <= price) return 0;
  return Math.round((1 - price / compareAt) * 100);
}

/* Shared product card renderer used by shop + category pages */
function productCardHTML(p) {
  const disc = discountPct(p.price, p.compareAt);
  return `
    <a class="pcard" href="product.html?id=${p.id}">
      ${p.badge ? `<span class="pcard-flag">${p.badge}</span>` : ''}
      <div class="pcard-img"><img src="${p.image}" alt="${p.title}" loading="lazy"></div>
      <div class="pcard-body">
        <span class="pcard-kind">${p.categoryLabel}</span>
        <h3>${p.title}</h3>
        <p>${p.subtitle}</p>
        <div class="pcard-foot">
          <span class="pcard-price">${formatPrice(p.price)}
            ${p.compareAt ? `<s>${formatPrice(p.compareAt)}</s>` : ''}
          </span>
          ${disc ? `<span class="pcard-save">Save ${disc}%</span>` : ''}
        </div>
      </div>
    </a>`;
}

if (typeof window !== 'undefined') {
  window.CATALOG = CATALOG;
  window.CATEGORIES = CATEGORIES;
  window.getProduct = getProduct;
  window.getStripeLink = getStripeLink;
  window.formatPrice = formatPrice;
  window.discountPct = discountPct;
  window.productCardHTML = productCardHTML;
  window.FREE_SHIPPING_MIN = FREE_SHIPPING_MIN;
}
