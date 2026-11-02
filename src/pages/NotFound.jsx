import { Link } from 'react-router-dom'
import { products } from '../data.js'
import { IconArrow } from '../icons.jsx'

export default function NotFound() {
  return (
    <main id="contenu" className="section nf">
      <div className="container nf__box">
        <p className="eyebrow eyebrow--dark">Erreur 404</p>
        <h1>Cette page n’existe pas</h1>
        <p className="lead nf__lead">Le lien est peut-être incorrect ou la page a été déplacée. Retrouvez nos produits ci-dessous.</p>
        <div className="hero__cta nf__cta">
          <Link className="btn btn--primary btn--lg" to="/">Retour à l’accueil <IconArrow /></Link>
        </div>
        <ul className="nf__links">
          {products.map((p) => (<li key={p.id}><Link to={`/produit/${p.id}/`}>{p.name}</Link></li>))}
        </ul>
      </div>
    </main>
  )
}
