import { useCallback, useEffect, useRef, useState } from 'react'
import Reveal from './Reveal.jsx'

// ⚠️ Exemples de témoignages à remplacer par de vrais avis clients.
// Portraits : photos libres de droits Unsplash (licence Unsplash : https://unsplash.com/license) — ce ne sont pas des clients de Hounto.
const items = [
  {
    quote: 'Les brochettes de champignon ont bluffé toute la famille. Bien assaisonnées, généreuses, et on n’a même pas regretté la viande. On recommande les yeux fermés !',
    name: 'Awa K.',
    role: 'Cliente · Repas à base de champignon · Cotonou',
    img: '/img/t-awa.jpg',
  },
  {
    quote: 'Livraison à l’heure prévue, des champignons bien frais et propres. J’ai commandé 48 h à l’avance comme demandé et tout était parfait. Je recommande chaque semaine depuis.',
    name: 'Marc A.',
    role: 'Client · Champignons frais · Abomey-Calavi',
    img: '/img/t-marc.jpg',
  },
  {
    quote: 'Le déshydraté est super pratique : il se conserve longtemps et parfume mes sauces. L’emballage en coffret est soigné, on sent qu’il y a du sérieux derrière.',
    name: 'Fatou D.',
    role: 'Cliente · Champignons déshydratés · Cotonou',
    img: '/img/t-fatou.jpg',
  },
  {
    quote: 'J’avais des questions avant de commander et on m’a répondu rapidement, avec beaucoup de gentillesse. Les plats étaient délicieux pour mon petit événement. Merci Hounto !',
    name: 'Judicaël H.',
    role: 'Client · Commande pour un événement · Cotonou',
    img: '/img/t-judicael.jpg',
  },
]

const Stars = () => (
  <div className="stars" role="img" aria-label="5 étoiles sur 5">
    {[0, 1, 2, 3, 4].map((i) => (
      <svg key={i} viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" /></svg>
    ))}
  </div>
)

export default function Testimonials() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const touch = useRef(null)
  const n = items.length
  const go = useCallback((k) => setI(((k % n) + n) % n), [n])

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setI((x) => (x + 1) % n), 5000)
    return () => clearInterval(t)
  }, [paused, n])

  const onKey = (e) => {
    if (e.key === 'ArrowRight') go(i + 1)
    if (e.key === 'ArrowLeft') go(i - 1)
  }

  return (
    <section id="temoignages" className="section section--tint testimonials" aria-labelledby="temoignages-title">
      <div className="container">
        <Reveal as="header" className="section__head section__head--center">
          <p className="eyebrow eyebrow--dark">Témoignages</p>
          <h2 id="temoignages-title">Ce que nos clients <span>disent de nous</span></h2>
        </Reveal>

        <Reveal
          className="tm"
          role="group"
          aria-roledescription="carrousel"
          aria-label="Témoignages de clients"
          tabIndex={0}
          onKeyDown={onKey}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onTouchStart={(e) => { touch.current = e.touches[0].clientX; setPaused(true) }}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - (touch.current ?? 0)
            if (Math.abs(dx) > 40) go(i + (dx < 0 ? 1 : -1))
            setPaused(false)
          }}
        >
          <div className="tm__track" style={{ transform: `translateX(-${i * 100}%)` }} aria-live={paused ? 'polite' : 'off'}>
            {items.map((t, k) => (
              <figure key={t.name} className="tm__slide" role="group" aria-roledescription="diapositive" aria-label={`${k + 1} sur ${n}`} aria-hidden={k !== i}>
                <div className="tm__body">
                  <blockquote>
                    <span className="tm__q tm__q--l" aria-hidden="true">“</span>
                    <p>{t.quote}</p>
                    <span className="tm__q tm__q--r" aria-hidden="true">”</span>
                  </blockquote>
                  <figcaption>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </figcaption>
                  <Stars />
                </div>
                <img className="tm__img" src={t.img} alt="" loading="lazy" width="180" height="180" />
              </figure>
            ))}
          </div>
          <div className="tm__dots" role="tablist" aria-label="Choisir un témoignage">
            {items.map((t, k) => (
              <button key={t.name} type="button" role="tab" aria-selected={k === i} aria-label={`Témoignage ${k + 1} : ${t.name}`} className={k === i ? 'is-on' : ''} onClick={() => go(k)} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
