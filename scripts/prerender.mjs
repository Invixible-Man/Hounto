// Pré-rendu : génère un fichier HTML complet par page + robots.txt + sitemap.xml + 404.html
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { routes, getMeta, headHtml, SITE_URL } from '../src/seo.js'

const dist = path.resolve('dist')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const { render } = await import(pathToFileURL(path.join(dist, 'server', 'entry-server.js')).href)

const build = (url) => {
  const html = render(url)
  return template
    .replace(/<title>[\s\S]*?<\/title>\s*/, '')
    .replace('<!--seo-head-->', headHtml(getMeta(url)))
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
}

for (const r of routes) {
  const out = r === '/' ? path.join(dist, 'index.html') : path.join(dist, r, 'index.html')
  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, build(r))
}
fs.writeFileSync(path.join(dist, '404.html'), build('/404'))

const today = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  routes.map((r) => `  <url>\n    <loc>${SITE_URL}${r}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${r === '/' ? '1.0' : '0.8'}</priority>\n  </url>`).join('\n') + `\n</urlset>\n`
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`)

fs.rmSync(path.join(dist, 'server'), { recursive: true, force: true })
console.log(`Pré-rendu terminé : ${routes.length} pages + 404.html + sitemap.xml + robots.txt (${SITE_URL})`)
