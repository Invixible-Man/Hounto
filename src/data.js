// Données issues de la fiche client (donnees.json / produits-services.csv)
export const brand = {
  name: 'Hounto',
  slogan: 'Champignons, le goût du bien-être.',
  description:
    'Hounto est une marque béninoise spécialisée dans la production et la transformation du champignon comestible.',
  owner: 'Emmella GOUBALI',
  city: 'Cotonou / Abomey-Calavi',
  hours: 'Ouvert 7j/7',
  email: 'emmellagoubali@gmail.com',
  phones: [
    { label: '01 65 55 55 23', tel: '+2290165555523', wa: '2290165555523' },
    { label: '01 90 46 05 93', tel: '+2290190460593', wa: '2290190460593' },
  ],
  facebook: 'https://www.facebook.com/share/1CLSqYVKuv/',
  tiktok: 'https://www.tiktok.com/@hounto.com',
  deliveryNote: 'Nous livrons sur commande passée au moins 48 h à l’avance.',
}

export const products = [
  {
    id: 'repas',
    name: 'Repas à base de champignon',
    price: 3000,
    description: 'Repas et recettes préparés avec du champignon comestible.',
    img: '/img/repas.jpg',
    tagline: 'Le champignon, version festin.',
    eyebrow: 'Nos repas',
    story: [
      'Tout est parti d’une envie simple : prouver que le champignon n’est pas un produit « à part », mais un vrai plaisir de table, capable de réunir toute la famille autour d’un même plat.',
      'Chez Hounto, on cuisine comme on aime manger : avec générosité, des épices bien dosées et des saveurs bien de chez nous. Brochettes dorées, riz parfumé, sauce onctueuse, pâtes à la crème… le champignon prend la place de la viande, sans rien perdre en goût.',
      'Chaque repas est préparé sur commande, avec des champignons choisis le jour même. Résultat : un plat chaleureux, léger et rassasiant, qui fait du bien autant qu’il fait plaisir.',
    ],
    steps: [
      { title: 'On choisit', text: 'Des champignons comestibles frais, triés un à un pour ne garder que les meilleurs.' },
      { title: 'On assaisonne', text: 'Oignons, poivrons, tomates et épices : une marinade maison qui réveille chaque bouchée.' },
      { title: 'On cuisine', text: 'Grillés en brochettes, mijotés en sauce ou sautés : la cuisson révèle toute la saveur du champignon.' },
      { title: 'On livre', text: 'Votre repas est emballé avec soin et livré chez vous, prêt à être savouré.' },
    ],
    highlights: [
      { title: 'Savoureux', text: 'Une cuisine chaleureuse, aux saveurs traditionnelles.' },
      { title: 'Léger & rassasiant', text: 'Le plaisir du bien-manger, sans lourdeur.' },
      { title: 'Fait sur commande', text: 'Préparé pour vous, pas stocké pendant des jours.' },
    ],
    ideas: ['Brochettes de champignon', 'Riz au maïs et sauce tomate', 'Pâtes crémeuses aux champignons', 'Repas de famille ou de bureau'],
  },
  {
    id: 'frais',
    name: 'Champignons comestibles frais',
    price: 4000,
    description: 'Champignons frais, à cuisiner dès réception.',
    img: '/img/frais.jpg',
    tagline: 'Cueillis avec soin, à cuisiner sans attendre.',
    eyebrow: 'Le frais',
    story: [
      'Tout commence dans la culture : des champignons comestibles qui poussent au rythme de la nature, avec patience et beaucoup d’attention. Ici, rien n’est précipité — chaque récolte est surveillée de près.',
      'Quand ils sont prêts, on les récolte à la main, on les trie et on les prépare pour la commande. C’est pour cela que nous livrons sur commande passée au moins 48 h à l’avance : pour que vos champignons arrivent aussi frais que possible.',
      'À la maison, il ne reste plus qu’à les cuisiner : ils se font dorer en quelques minutes et parfument sauces, omelettes, riz et sautés avec un goût délicat qu’on n’oublie pas.',
    ],
    steps: [
      { title: 'On cultive', text: 'Une culture suivie de près, avec le soin d’un produit vivant.' },
      { title: 'On récolte', text: 'Cueillis à la main, au bon moment, pour garder toute leur fraîcheur.' },
      { title: 'On trie', text: 'Seuls les plus beaux champignons partent dans votre commande.' },
      { title: 'On livre', text: 'Livraison sur commande passée 48 h à l’avance, pour une fraîcheur préservée.' },
    ],
    highlights: [
      { title: 'Ultra frais', text: 'Récoltés pour votre commande, à cuisiner dès réception.' },
      { title: 'Produit au Bénin', text: 'Un champignon local, cultivé près de chez vous.' },
      { title: 'Polyvalent', text: 'Sautés, grillés, en sauce ou en omelette : il s’adapte à tout.' },
    ],
    ideas: ['Sautés à la poêle avec oignon et ail', 'Omelette aux champignons', 'Sauce tomate ou sauce crémeuse', 'Brochettes grillées'],
  },
  {
    id: 'secs',
    name: 'Champignons comestibles déshydratés',
    price: 3000,
    description: 'Champignons déshydratés, pratiques à conserver et à utiliser.',
    img: '/img/secs.jpg',
    tagline: 'Toute la saveur, prête quand vous l’êtes.',
    eyebrow: 'Le déshydraté',
    story: [
      'Et si on pouvait garder le meilleur du champignon pour plus tard ? C’est toute l’idée du déshydraté : un séchage soigneux qui concentre le goût et permet de conserver le produit bien plus longtemps.',
      'Nos champignons sont préparés, séchés puis épicés pour être prêts à l’emploi. Ils arrivent dans un joli coffret avec fenêtre, pour voir ce que vous achetez et le ranger facilement dans votre cuisine.',
      'Au moment de cuisiner, on les réhydrate quelques minutes dans de l’eau tiède, et ils retrouvent leur texture : pratique pour les repas de la semaine, et toujours savoureux.',
    ],
    steps: [
      { title: 'On prépare', text: 'Les champignons sont nettoyés et découpés avec soin.' },
      { title: 'On déshydrate', text: 'Un séchage lent qui concentre les saveurs et allonge la conservation.' },
      { title: 'On épice', text: 'Une pointe d’épices pour un goût relevé, prêt à l’emploi.' },
      { title: 'On emballe', text: 'Mis en coffret Hounto, pour un produit propre et facile à ranger.' },
    ],
    highlights: [
      { title: 'Se conserve longtemps', text: 'Toujours un peu de champignon dans le placard.' },
      { title: 'Goût concentré', text: 'Une saveur intense qui parfume tous vos plats.' },
      { title: 'Prêt à l’emploi', text: 'Quelques minutes dans l’eau tiède et c’est prêt.' },
    ],
    ideas: ['Sauces et ragoûts', 'Riz et plats mijotés', 'Soupes et bouillons', 'Un cadeau gourmand'],
  },
]

export const getProduct = (id) => products.find((p) => p.id === id)

export const formatPrice = (n) =>
  new Intl.NumberFormat('fr-FR').format(n).replace(/ | /g, ' ') + ' F CFA'

export const waLink = (message) =>
  `https://wa.me/${brand.phones[0].wa}?text=${encodeURIComponent(message)}`
