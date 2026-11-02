import { Link, Navigate, useParams } from 'react-router-dom'
import { products, getProduct, formatPrice, waLink } from '../data.js'
import { IconWhatsApp, IconArrow, IconLeaf, IconHeart, IconTruck } from '../icons.jsx'
import Reveal from '../components/Reveal.jsx'

const highlightIcons = [<IconHeart key="h" />, <IconLeaf key="l" />, <IconTruck key="t" />]

export default function ProductPage() {
  const { id } = useParams()
  const p = getProduct(id)
  if (!p) return <Navigate to="/" replace />
  const order = waLink(`Bonjour Hounto, je souhaite commander : ${p.name} (${formatPrice(p.price)}).`)
  const others = products.filter((o) => o.id !== p.id)

  return (
    <main id="contenu" className="pp">
      <section className="pp-hero" aria-labelledby="pp-title">
        <div className="container pp-hero__grid">
          <div className="pp-hero__copy">
            <Link to="/#produits" className="pp-back"><IconArrow /> Tous nos produits</Link>
            <p className="eyebrow">{p.eyebrow}</p>
            <h1 id="pp-title">{p.name}</h1>
            <p className="pp-tagline">{p.tagline}</p>
            <p className="pp-price"><span className="sr-only">Prix : </span>{formatPrice(p.price)}</p>
            <div className="hero__cta pp-cta">
              <a className="btn btn--light btn--lg" href={order} target="_blank" rel="noopener noreferrer">
                <IconWhatsApp /> Commander
              </a>
              <a className="btn btn--ghost" href="#histoire">Découvrir l’origine <IconArrow /></a>
            </div>
          </div>
          <div className="pp-hero__photo">
            <img src={p.img} alt={p.name} width="900" height="900" fetchpriority="high" />
          </div>
        </div>
      </section>

      <section id="histoire" className="section pp-story" aria-labelledby="histoire-title">
        <div className="container pp-story__grid">
          <Reveal>
            <p className="eyebrow eyebrow--dark">Aux origines</p>
            <h2 id="histoire-title">Derrière chaque bouchée, une histoire</h2>
          </Reveal>
          <div className="pp-story__text">
            {p.story.map((t, i) => (<Reveal as="p" key={i} delay={i * 120}>{t}</Reveal>))}
          </div>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="steps-title">
        <div className="container">
          <Reveal className="section__head">
            <p className="eyebrow eyebrow--dark">De la culture à votre assiette</p>
            <h2 id="steps-title">Comment c’est fait</h2>
          </Reveal>
          <ol className="timeline">
            {p.steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 130}>
                <span className="timeline__n" aria-hidden="true">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="why-title">
        <div className="container">
          <Reveal className="section__head">
            <p className="eyebrow eyebrow--dark">Ce qui fait la différence</p>
            <h2 id="why-title">La signature Hounto</h2>
          </Reveal>
          <ul className="cards pp-why">
            {p.highlights.map((h, i) => (
              <Reveal as="li" key={h.title} delay={i * 120} className="pp-why__item">
                <span className="values__icon">{highlightIcons[i % 3]}</span>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </Reveal>
            ))}
          </ul>
          <Reveal className="pp-ideas">
            <h3>Comment le savourer ?</h3>
            <ul>{p.ideas.map((x) => <li key={x}>{x}</li>)}</ul>
          </Reveal>
        </div>
      </section>

      <section className="section contact pp-order" aria-labelledby="pp-order-title">
        <Reveal className="container pp-order__box">
          <h2 id="pp-order-title">Envie d’y goûter ?</h2>
          <p className="lead">{p.name} · {formatPrice(p.price)}. Livraison sur commande passée au moins 48 h à l’avance.</p>
          <a className="btn btn--light btn--lg" href={order} target="_blank" rel="noopener noreferrer">
            <IconWhatsApp /> Commander sur WhatsApp
          </a>
        </Reveal>
      </section>

      <section className="section" aria-labelledby="more-title">
        <div className="container">
          <Reveal className="section__head">
            <h2 id="more-title">Découvrez aussi</h2>
          </Reveal>
          <ul className="cards pp-more">
            {others.map((o, i) => (
              <Reveal as="li" key={o.id} delay={i * 120}>
                <Link to={`/produit/${o.id}/`} className="card card--link">
                  <div className="card__art"><img src={o.img} alt="" loading="lazy" width="900" height="900" /></div>
                  <div className="card__body">
                    <h3>{o.name}</h3>
                    <p>{o.tagline}</p>
                    <span className="card__more">Voir le produit <IconArrow /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
