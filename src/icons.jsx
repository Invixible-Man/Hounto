// Icônes SVG (style trait, 24px) — décoratives : masquées aux lecteurs d'écran
const base = {
  width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor',
  strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: false,
}
export const IconWhatsApp = (p) => (
  <svg {...base} {...p}><path d="M3 21l1.6-4.6A8.5 8.5 0 1 1 8 19.6z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-.8.8c-.8-.4-1.6-1.2-2-2l.8-.8-1-2z" /></svg>
)
export const IconPhone = (p) => (<svg {...base} {...p}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg>)
export const IconMail = (p) => (<svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>)
export const IconPin = (p) => (<svg {...base} {...p}><path d="M12 21s7-6.1 7-11a7 7 0 0 0-14 0c0 4.9 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>)
export const IconClock = (p) => (<svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>)
export const IconTruck = (p) => (<svg {...base} {...p}><path d="M2 6h11v10H2zM13 10h4l3 3v3h-7" /><circle cx="6.5" cy="17.5" r="1.8" /><circle cx="16.5" cy="17.5" r="1.8" /></svg>)
export const IconLeaf = (p) => (<svg {...base} {...p}><path d="M5 19C5 10 10 5 20 4c0 10-5 15-14 15z" /><path d="M5 19c3-5 6-8 10-10" /></svg>)
export const IconHeart = (p) => (<svg {...base} {...p}><path d="M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11z" /></svg>)
export const IconMenu = (p) => (<svg {...base} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>)
export const IconClose = (p) => (<svg {...base} {...p}><path d="M6 6l12 12M18 6L6 18" /></svg>)
export const IconArrow = (p) => (<svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>)
export const IconFacebook = (p) => (<svg {...base} {...p}><path d="M14 8h2.5V4.5H14A3.5 3.5 0 0 0 10.5 8v2H8v3.5h2.5V21H14v-7.5h2.5L17 10h-3V8.5c0-.3.2-.5.5-.5z" /></svg>)
export const IconTikTok = (p) => (<svg {...base} {...p}><path d="M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5" /><path d="M14 4c.3 2.5 2 4 4.5 4.2" /></svg>)

// Champignon illustré (SVG) — sert de visuel tant qu'aucune photo n'est fournie
export function Mushroom({ className = '', cap = '#c2410c', spots = '#fff7ed', stem = '#fde8d0' }) {
  return (
    <svg className={className} viewBox="0 0 200 200" role="img" aria-label="Illustration d’un champignon" >
      <ellipse cx="100" cy="184" rx="52" ry="8" fill="rgba(0,0,0,.12)" />
      <path d="M78 104h44l6 72a10 10 0 0 1-10 10H82a10 10 0 0 1-10-10z" fill={stem} />
      <path d="M72 120q28 14 56 0l-1-12H73z" fill="rgba(0,0,0,.07)" />
      <path d="M14 108C14 56 52 20 100 20s86 36 86 88c0 6-4 10-10 10H24c-6 0-10-4-10-10z" fill={cap} />
      <path d="M30 100C34 62 62 36 100 34c-26 12-40 36-42 66z" fill="rgba(255,255,255,.14)" />
      <circle cx="68" cy="72" r="9" fill={spots} />
      <circle cx="112" cy="54" r="7" fill={spots} />
      <circle cx="140" cy="86" r="10" fill={spots} />
      <circle cx="98" cy="90" r="6" fill={spots} />
      <circle cx="46" cy="98" r="5" fill={spots} />
    </svg>
  )
}

// Petits visuels de cartes produit
export function ProductArt({ type }) {
  if (type === 'meal') {
    return (
      <svg viewBox="0 0 240 160" role="img" aria-label="Illustration d’un plat de champignons">
        <ellipse cx="120" cy="104" rx="98" ry="42" fill="#fff" />
        <ellipse cx="120" cy="100" rx="78" ry="30" fill="#fde8d0" />
        <g fill="#c2410c"><path d="M70 98a18 14 0 0 1 36 0z" /><path d="M118 92a16 12 0 0 1 32 0z" /><path d="M96 108a14 11 0 0 1 28 0z" /></g>
        <g fill="#fff7ed"><rect x="82" y="98" width="8" height="10" rx="3" /><rect x="130" y="92" width="7" height="10" rx="3" /><rect x="103" y="108" width="7" height="9" rx="3" /></g>
        <g fill="#65a30d"><circle cx="150" cy="108" r="4" /><circle cx="64" cy="108" r="3.5" /><circle cx="126" cy="114" r="3" /></g>
        <path d="M100 46c-6 8 6 12 0 22M122 40c-6 8 6 12 0 22M144 46c-6 8 6 12 0 22" fill="none" stroke="#c2410c" strokeOpacity=".35" strokeWidth="3" strokeLinecap="round" />
      </svg>
    )
  }
  if (type === 'fresh') {
    return (
      <svg viewBox="0 0 240 160" role="img" aria-label="Illustration de champignons frais">
        <ellipse cx="120" cy="140" rx="90" ry="8" fill="rgba(0,0,0,.1)" />
        {[[60, 1], [118, 1.25], [176, 0.95]].map(([x, s], i) => (
          <g key={i} transform={`translate(${x} 138) scale(${s})`}>
            <path d="M-9 -44h18l3 40a5 5 0 0 1-5 5h-14a5 5 0 0 1-5-5z" fill="#fde8d0" />
            <path d="M-34 -42c0-26 15-42 34-42s34 16 34 42c0 3-2 5-5 5h-58c-3 0-5-2-5-5z" fill={i === 1 ? '#c2410c' : '#9a3412'} />
            <circle cx="-10" cy="-58" r="4" fill="#fff7ed" /><circle cx="12" cy="-66" r="3" fill="#fff7ed" />
          </g>
        ))}
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 240 160" role="img" aria-label="Illustration de champignons déshydratés">
      <path d="M70 52h100l-8 88a10 10 0 0 1-10 9H88a10 10 0 0 1-10-9z" fill="#fff" stroke="#c2410c" strokeWidth="4" />
      <rect x="64" y="34" width="112" height="20" rx="8" fill="#c2410c" />
      <g fill="#b45309"><path d="M88 110a14 9 0 0 1 28 0z" /><path d="M118 96a14 9 0 0 1 28 0z" /><path d="M100 130a14 9 0 0 1 28 0z" /><path d="M132 124a12 8 0 0 1 24 0z" /></g>
      <rect x="92" y="70" width="56" height="14" rx="4" fill="#fde8d0" />
    </svg>
  )
}
