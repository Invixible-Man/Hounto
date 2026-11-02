import { useEffect, useState } from 'react'
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Reveal from './components/Reveal.jsx'
import Testimonials from './components/Testimonials.jsx'
import VideoPreview from './components/VideoPreview.jsx'
import ProductPage from './pages/ProductPage.jsx'
import NotFound from './pages/NotFound.jsx'
import { getMeta, applyMeta } from './seo.js'
import { brand, products, formatPrice, waLink } from './data.js'
import {
  IconWhatsApp, IconPhone, IconMail, IconPin, IconClock, IconTruck, IconLeaf, IconHeart,
  IconMenu, IconClose, IconArrow, IconFacebook, IconTikTok, Mushroom, 
} from './icons.jsx'

const nav = [
  { href: '/#produits', label: 'Nos produits' },
  { href: '/#apropos', label: 'À propos' },
  { href: '/#commander', label: 'Commander' },
  { href: '/#contact', label: 'Contact' },
]

function Header() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  // Déjà sur l'accueil : le clic sur le logo remonte en haut de page (comme un rafraîchissement)
  const onLogo = (e) => {
    if (pathname !== '/') return
    e.preventDefault()
    navigate('/', { replace: true })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])
  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header__bar">
        <Link to="/" className="logo" aria-label="Hounto – accueil" onClick={onLogo}>
          <img className="logo__img" src="/img/logo.png" alt="Hounto" width="848" height="240" />
        </Link>
        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <IconClose /> : <IconMenu />}
          <span className="sr-only">{open ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
        </button>
        <nav id="menu" className={`nav ${open ? 'is-open' : ''}`} aria-label="Navigation principale">
          <ul>
            {nav.map((n) => (
              <li key={n.href}><Link to={n.href} onClick={() => setOpen(false)}>{n.label}</Link></li>
            ))}
          </ul>
          <a className="btn btn--primary btn--sm" href={waLink('Bonjour Hounto, je souhaite passer commande.')} target="_blank" rel="noopener noreferrer">
            <IconWhatsApp /> Commander
          </a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="accueil" className="hero" aria-labelledby="hero-title">
      <img className="hero__man" src="/img/hero-homme.jpg" alt="Un homme en tenue wax et tablier Hounto savoure une brochette" width="1116" height="933" fetchpriority="high" />
      <div className="container hero__poster">
        <h1 id="hero-title">Hounto<span className="sr-only"> – champignons comestibles frais, déshydratés et repas au Bénin (Cotonou, Abomey-Calavi)</span></h1>
        <p className="hero__strip">Champignons, le goût du bien-être !</p>
        <p className="hero__intro">Avec nous, c’est :</p>
        <ul className="hero__list">
          <li>Champignons comestibles frais et/ou déshydratés &amp; épicés</li>
          <li>Mets préparés à base de champignons comestibles</li>
          <li>Astuces &amp; recettes pour sublimer vos plats</li>
        </ul>
        <div className="hero__cta">
          <a className="btn btn--light" href="#produits">Voir nos produits <IconArrow /></a>
          <a className="btn btn--ghost" href={waLink('Bonjour Hounto, je souhaite passer commande.')} target="_blank" rel="noopener noreferrer">
            <IconWhatsApp /> Commander sur WhatsApp
          </a>
        </div>
        <ul className="hero__facts">
          <li><IconClock /> {brand.hours}</li>
          <li><IconTruck /> Livraison sur commande</li>
          <li><IconPhone /> {brand.phones[0].label} · {brand.phones[1].label}</li>
        </ul>
      </div>
    </section>
  )
}

function Products() {
  return (
    <section id="produits" className="section" aria-labelledby="produits-title">
      <div className="container">
        <Reveal as="header" className="section__head">
          <p className="eyebrow eyebrow--dark">Notre carte</p>
          <h2 id="produits-title">Nos produits</h2>
          <p>Cliquez sur un produit pour savoir d’où il vient, comment il est préparé, et pourquoi il va vous plaire.</p>
        </Reveal>
        <ul className="cards">
          {products.map((p, i) => (
            <Reveal as="li" key={p.id} delay={i * 120}>
              <article className="card">
                <Link to={`/produit/${p.id}/`} className="card__art" aria-label={`En savoir plus : ${p.name}`} tabIndex={-1}>
                  <img src={p.img} alt="" loading="lazy" width="900" height="900" />
                </Link>
                <div className="card__body">
                  <h3><Link to={`/produit/${p.id}/`}>{p.name}</Link></h3>
                  <p>{p.description}</p>
                  <p className="card__price"><span className="sr-only">Prix : </span>{formatPrice(p.price)}</p>
                  <Link className="btn btn--primary btn--block" to={`/produit/${p.id}/`}>
                    En savoir plus <IconArrow />
                    <span className="sr-only"> : {p.name}</span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

function About() {
  const values = [
    { icon: <IconLeaf />, title: 'Produit au Bénin', text: 'Un champignon comestible cultivé et transformé localement.' },
    { icon: <IconHeart />, title: 'Le goût du bien-être', text: 'Une cuisine chaleureuse et traditionnelle, pensée pour se faire plaisir.' },
    { icon: <IconTruck />, title: 'Livré chez vous', text: 'À Cotonou et Abomey-Calavi, sur commande.' },
  ]
  return (
    <section id="apropos" className="section section--tint" aria-labelledby="apropos-title">
      <div className="container about">
        <Reveal className="about__text">
          <p className="eyebrow eyebrow--dark">À propos</p>
          <h2 id="apropos-title">Hounto, la passion du champignon</h2>
          <p>{brand.description}</p>
          <p>Derrière la marque, {brand.owner} partage une cuisine généreuse, fidèle à nos traditions, pour faire découvrir (et aimer) le champignon comestible.</p>
        </Reveal>
        <ul className="values">
          {values.map((v) => (
            <li key={v.title}>
              <span className="values__icon">{v.icon}</span>
              <div><h3>{v.title}</h3><p>{v.text}</p></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Order() {
  const steps = [
    { n: 1, title: 'Choisissez', text: 'Repas, champignons frais ou déshydratés.' },
    { n: 2, title: 'Écrivez-nous', text: 'Un message WhatsApp ou un appel suffit.' },
    { n: 3, title: 'Recevez', text: 'Livraison sur commande passée 48 h à l’avance.' },
  ]
  return (
    <section id="commander" className="section" aria-labelledby="commander-title">
      <div className="container">
        <Reveal as="header" className="section__head">
          <p className="eyebrow eyebrow--dark">Simple et rapide</p>
          <h2 id="commander-title">Comment commander ?</h2>
        </Reveal>
        <div className="order">
        <VideoPreview poster="/img/commande-video.jpg" alt="Le chef Hounto savourant un plat à base de champignon" />
        <div>
        <ol className="steps">
          {steps.map((s) => (
            <Reveal as="li" key={s.n} delay={s.n * 120}><span className="steps__n" aria-hidden="true">{s.n}</span><h3>{s.title}</h3><p>{s.text}</p></Reveal>
          ))}
        </ol>
        <p className="notice" role="note"><IconTruck /> {brand.deliveryNote}</p>
        </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <div>
          <p className="eyebrow">Parlons-en</p>
          <h2 id="contact-title">Une envie de champignons ?</h2>
          <p className="lead">Écrivez-nous sur WhatsApp, on vous répond avec plaisir.</p>
          <a className="btn btn--light btn--lg" href={waLink('Bonjour Hounto, j’aimerais avoir plus d’informations.')} target="_blank" rel="noopener noreferrer">
            <IconWhatsApp /> Discuter sur WhatsApp
          </a>
        </div>
        <address className="contact__list">
          <p><IconPin /> <span><strong>Adresse</strong>{brand.city}</span></p>
          <p><IconClock /> <span><strong>Horaires</strong>{brand.hours}</span></p>
          <p><IconPhone /> <span><strong>Téléphone</strong>
            {brand.phones.map((ph, i) => (<span key={ph.tel}>{i > 0 && ' · '}<a href={`tel:${ph.tel}`}>{ph.label}</a></span>))}
          </span></p>
          <p><IconMail /> <span><strong>E-mail</strong><a href={`mailto:${brand.email}`}>{brand.email}</a></span></p>
        </address>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__bar">
        <p><strong>Hounto</strong> · {brand.slogan}</p>
        <ul className="social">
          <li><a href={brand.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook de Hounto (nouvel onglet)"><IconFacebook /></a></li>
          <li><a href={brand.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok de Hounto (nouvel onglet)"><IconTikTok /></a></li>
        </ul>
        <p className="footer__copy">© {new Date().getFullYear()} Hounto. Tous droits réservés.</p>
      </div>
    </footer>
  )
}

function Home() {
  return (
    <main id="contenu">
      <Hero />
      <Marquee />
      <Products />
      <About />
      <Order />
      <Testimonials />
      <Contact />
    </main>
  )
}

function Marquee() {
  const items = ['Frais', 'Déshydraté', 'Épicé', 'Cuisiné', 'Fait au Bénin', 'Livré chez vous']
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[0, 1].map((k) => (
          <ul key={k}>{items.map((t) => <li key={t}>{t}</li>)}</ul>
        ))}
      </div>
    </div>
  )
}

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => { applyMeta(getMeta(pathname)) }, [pathname])
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 60)
      return () => clearTimeout(t)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <a className="skip" href="#contenu">Aller au contenu</a>
      <ScrollManager />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produit/:id" element={<ProductPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <a className="fab" href={waLink('Bonjour Hounto !')} target="_blank" rel="noopener noreferrer" aria-label="Écrire à Hounto sur WhatsApp (nouvel onglet)">
        <IconWhatsApp />
      </a>
    </>
  )
}
