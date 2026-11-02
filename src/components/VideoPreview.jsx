import { useEffect, useRef, useState } from 'react'
import { IconClose } from '../icons.jsx'
import Reveal from './Reveal.jsx'

const SRC = '/video/hounto-apercu.mp4'
const CAPTIONS = '/video/hounto-apercu.fr.vtt'

// Aperçu vidéo : une photo avec un bouton « lecture » qui ouvre la vidéo en grand.
export default function VideoPreview({ poster, alt }) {
  const [open, setOpen] = useState(false)
  const trigger = useRef(null)
  const video = useRef(null)
  const closeBtn = useRef(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeBtn.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      trigger.current?.focus()
    }
  }, [open])

  return (
    <>
      <Reveal as="figure" className="order__photo vp">
        <img src={poster} alt={alt} loading="lazy" width="1000" height="1250" />
        <button type="button" className="vp__play" onClick={() => setOpen(true)} ref={trigger} aria-haspopup="dialog">
          <span className="vp__btn" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="30" height="30"><path d="M8 5.5v13l11-6.5z" fill="currentColor" /></svg>
          </span>
          <span className="vp__label">Voir notre histoire en vidéo</span>
        </button>
      </Reveal>

      {open && (
        <div className="vp-modal" role="dialog" aria-modal="true" aria-label="Vidéo : l’histoire de Hounto" onClick={(e) => e.target === e.currentTarget && setOpen(false)}>
          <div className="vp-modal__box">
            <button type="button" className="vp-modal__close" onClick={() => setOpen(false)} ref={closeBtn}>
              <IconClose /><span className="sr-only">Fermer la vidéo</span>
            </button>
            <video ref={video} src={SRC} poster={poster} controls autoPlay playsInline preload="metadata">
              <track kind="captions" srcLang="fr" label="Français" src={CAPTIONS} default />
              Votre navigateur ne peut pas lire cette vidéo.
            </video>
          </div>
        </div>
      )}
    </>
  )
}
