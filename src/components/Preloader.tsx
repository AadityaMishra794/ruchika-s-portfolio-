import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

interface PreloaderProps {
  onComplete: () => void
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const sweepRef = useRef<SVGPathElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(onComplete, 200)
      }
    })

    tl.fromTo(sweepRef.current,
      { scaleX: 0, transformOrigin: 'left center' },
      { scaleX: 1, duration: 0.6, ease: 'power3.inOut' }
    )
    .to(sweepRef.current,
      { scaleX: 0, transformOrigin: 'right center', duration: 0.5, ease: 'power3.inOut' },
      '+=0.1'
    )
    .fromTo(textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 },
      0.2
    )
    .to(textRef.current,
      { opacity: 0, duration: 0.3 },
      1.0
    )

    return () => { tl.kill() }
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: '#FFF8E8' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Yellow sweep */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <path
          ref={sweepRef}
          d="M0 0 L100 0 L100 100 L0 100 Z"
          fill="#F4C430"
          style={{ transform: 'scaleX(0)', transformOrigin: 'left center' }}
        />
      </svg>

      {/* Name */}
      <div ref={textRef} className="relative z-10 text-center">
        <div className="font-display text-5xl md:text-7xl font-light text-ink tracking-wide">
          Ruchika
        </div>
        <div className="font-label text-xs tracking-[0.3em] uppercase text-muted mt-2">
          Dangi
        </div>
      </div>
    </motion.div>
  )
}
