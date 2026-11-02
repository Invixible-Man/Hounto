import { brand, products } from './data.js'

// ⚠️ À remplacer par le vrai nom de domaine avant la mise en ligne (ou définir SITE_URL au moment du build).
export const SITE_URL = (typeof process !== 'undefined' && process.env?.SITE_URL) || 'https://hounto.com'

export const routes = ['/', ...products.map((p) => `/produit/${p.id}/`)]

const abs = (path) => `${SITE_URL}${path}`
const ogImage = abs('/img/og-image.jpg')

const organization = () => ({
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': abs('/#organisation'),
  name: 'Hounto',
  url: abs('/'),
  logo: abs('/icon-512.png'),
  image: ogImage,
  description: 'Marque béninoise spécialisée dans la production et la transformation du champignon comestible.',
  slogan: 'Champignons, le goût du bien-être.',
  servesCuisine: 'Béninoise',
  priceRange: '3000-4000 XOF',
  email: brand.email,
  telephone: brand.phones.map((p) => p.tel),
  areaServed: ['Cotonou', 'Abomey-Calavi'],
  address: { '@type': 'PostalAddress', addressLocality: 'Cotonou / Abomey-Calavi', addressCountry: 'BJ' },
  openingHours: 'Mo-Su',
  sameAs: [brand.facebook, brand.tiktok],
})

export function getMeta(pathname) {
  const clean = pathname.replace(/\/+$/, '') || '/'
  if (clean === '/') {
    return {
      title: 'Hounto – Champignons comestibles frais, déshydratés et repas au Bénin',
      description: 'Hounto, marque béninoise de champignons comestibles : champignons frais, déshydratés et repas à base de champignon. Livraison sur commande à Cotonou et Abomey-Calavi, 7j/7.',
      canonical: abs('/'),
      image: ogImage,
      ld: [organization()],
    }
  }
  const m = clean.match(/^\/produit\/([^/]+)$/)
  const p = m && products.find((x) => x.id === m[1])
  if (p) {
    const url = abs(`/produit/${p.id}/`)
    return {
      title: `${p.name} – Hounto | Cotonou & Abomey-Calavi`,
      description: `${p.tagline} ${p.description} ${new Intl.NumberFormat('fr-FR').format(p.price)} F CFA, livraison sur commande à Cotonou et Abomey-Calavi.`,
      canonical: url,
      image: abs(p.img),
      ld: [
        organization(),
        {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: p.name,
          description: p.description,
          image: abs(p.img),
          brand: { '@type': 'Brand', name: 'Hounto' },
          offers: {
            '@type': 'Offer',
            url,
            priceCurrency: 'XOF',
            price: String(p.price),
            availability: 'https://schema.org/InStock',
            seller: { '@type': 'Organization', name: 'Hounto' },
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: abs('/') },
            { '@type': 'ListItem', position: 2, name: p.name, item: url },
          ],
        },
      ],
    }
  }
  return {
    title: 'Page introuvable – Hounto',
    description: 'Cette page n’existe pas. Découvrez les champignons et repas Hounto.',
    canonical: null,
    image: ogImage,
    noindex: true,
    ld: [],
  }
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

// Balises <head> pour le pré-rendu (HTML statique lisible sans JavaScript).
export function headHtml(meta) {
  const t = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<meta name="robots" content="${meta.noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large'}" />`,
  ]
  if (meta.canonical) t.push(`<link rel="canonical" href="${esc(meta.canonical)}" />`)
  t.push(
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="fr_BJ" />`,
    `<meta property="og:site_name" content="Hounto" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:image" content="${esc(meta.image)}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${esc(meta.image)}" />`,
  )
  if (meta.canonical) t.push(`<meta property="og:url" content="${esc(meta.canonical)}" />`)
  if (meta.ld.length) t.push(`<script type="application/ld+json" id="ld-page">${JSON.stringify(meta.ld).replace(/</g, '\\u003c')}</script>`)
  return t.join('\n    ')
}

// Mise à jour du <head> côté navigateur lors d'un changement de page.
export function applyMeta(meta) {
  const set = (selector, create, attr, value) => {
    let el = document.head.querySelector(selector)
    if (value == null) { el?.remove(); return }
    if (!el) { el = create(); document.head.appendChild(el) }
    el.setAttribute(attr, value)
  }
  const meta_ = (key, val, by = 'name') => set(`meta[${by}="${key}"]`, () => { const e = document.createElement('meta'); e.setAttribute(by, key); return e }, 'content', val)
  document.title = meta.title
  meta_('description', meta.description)
  meta_('robots', meta.noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large')
  set('link[rel="canonical"]', () => { const e = document.createElement('link'); e.rel = 'canonical'; return e }, 'href', meta.canonical)
  meta_('og:title', meta.title, 'property')
  meta_('og:description', meta.description, 'property')
  meta_('og:image', meta.image, 'property')
  meta_('og:url', meta.canonical, 'property')
  meta_('twitter:title', meta.title)
  meta_('twitter:description', meta.description)
  meta_('twitter:image', meta.image)
  let ld = document.getElementById('ld-page')
  if (!meta.ld.length) { ld?.remove(); return }
  if (!ld) { ld = document.createElement('script'); ld.type = 'application/ld+json'; ld.id = 'ld-page'; document.head.appendChild(ld) }
  ld.textContent = JSON.stringify(meta.ld)
}
