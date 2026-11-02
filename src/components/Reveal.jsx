import { useEffect, useRef, useState } from 'react'

// Fait apparaître son contenu en douceur quand il entre dans l'écran.
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) { setSeen(true); return }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect() }
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Tag ref={ref} className={`reveal ${seen ? 'is-visible' : ''} ${className}`} style={{ '--d': `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}
