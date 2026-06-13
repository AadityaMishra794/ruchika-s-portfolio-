import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ArrowDown, Heart } from 'lucide-react'
import MagneticButton from './MagneticButton'

// Decorative SVG elements matching the reference
const HeartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 17s-7-4.35-7-9a5 5 0 0 1 7-4.58A5 5 0 0 1 17 8c0 4.65-7 9-7 9z" stroke="#1C1C1C" strokeWidth="1.3" fill="none"/>
  </svg>
)

const SparkleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M9 1v4M9 13v4M1 9h4M13 9h4M3.2 3.2l2.8 2.8M12 12l2.8 2.8M3.2 14.8l2.8-2.8M12 6l2.8-2.8" stroke="#1C1C1C" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
)

const ScribbleCurl = () => (
  <svg width="70" height="60" viewBox="0 0 70 60" fill="none">
    <path d="M10 10 C20 5, 40 15, 35 30 C30 45, 10 50, 20 58 L25 62" stroke="#1C1C1C" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <path d="M25 62 L22 57 M25 62 L30 59" stroke="#1C1C1C" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const Dashes = () => (
  <svg width="40" height="30" viewBox="0 0 40 30" fill="none">
    <line x1="0" y1="5" x2="15" y2="0" stroke="#1C1C1C" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="5" y1="15" x2="20" y2="10" stroke="#1C1C1C" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="2" y1="25" x2="12" y2="22" stroke="#1C1C1C" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const HatchLines = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
    {[0,8,16,24,32,40].map((i) => (
      <line key={i} x1={i} y1="0" x2={50} y2={50-i} stroke="#1C1C1C" strokeWidth="1.2" strokeLinecap="round"/>
    ))}
  </svg>
)

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const underlineRef = useRef<SVGPathElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 })

      // Headline words stagger
      const words = headlineRef.current?.querySelectorAll('.word')
      if (words) {
        tl.fromTo(words,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
        )
      }

      // Underline draw
      if (underlineRef.current) {
        const length = underlineRef.current.getTotalLength()
        gsap.set(underlineRef.current, { strokeDasharray: length, strokeDashoffset: length })
        tl.to(underlineRef.current, {
          strokeDashoffset: 0,
          duration: 0.6,
          ease: 'power2.out'
        }, '-=0.3')
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* LEFT: Text content */}
          <div className="order-2 md:order-1 relative z-10">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-center gap-2 mb-5"
            >
              <span className="w-6 h-px bg-primary inline-block" />
              <span className="font-label text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                Journalist & Digital Marketer
              </span>
            </motion.div>

            {/* Headline */}
            <h1
              ref={headlineRef}
              className="font-display text-[3.2rem] md:text-[4rem] lg:text-[5rem] leading-[1.05] font-medium text-ink mb-6"
            >
              <span className="word inline-block opacity-0">I tell</span>{' '}
              <span className="word inline-block opacity-0">stories</span>
              <br />
              <span className="word inline-block opacity-0">that</span>{' '}
              <span className="relative inline-block opacity-0 word">
                <span className="italic text-primary">connect.</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 200 8"
                  fill="none"
                >
                  <path
                    ref={underlineRef}
                    d="M2 6 C50 2, 100 7, 150 4 C175 2, 185 5, 198 3"
                    stroke="#F4C430"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="font-body text-base md:text-lg text-muted leading-relaxed max-w-sm mb-8"
            >
              A journalism student exploring the world of digital marketing through content, strategy and creativity.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex items-center gap-5 flex-wrap"
            >
              <MagneticButton
                onClick={() => document.querySelector('#journey')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 bg-primary text-ink font-label font-semibold text-sm px-6 py-3 rounded-full hover:bg-primary/90 transition-colors shadow-md shadow-primary/20"
              >
                View My Journey
                <div className="w-6 h-6 rounded-full bg-ink/10 flex items-center justify-center">
                  <ArrowDown size={12} />
                </div>
              </MagneticButton>

              <MagneticButton
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 font-label font-medium text-sm text-ink/70 hover:text-ink transition-colors"
              >
                Let's Connect
                <Heart size={16} className="text-primary fill-primary" />
              </MagneticButton>
            </motion.div>

            {/* Decorative: scribble curl + dot */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-8 left-4 md:left-0 opacity-40"
            >
              <ScribbleCurl />
            </motion.div>
          </div>

          {/* RIGHT: Portrait + blob */}
          <div className="order-1 md:order-2 relative flex justify-center md:justify-end">
            {/* Blob background */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Yellow blob shape */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 480 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ zIndex: 0 }}
              >
                <path
                  d="M80 60 C140 10, 350 0, 420 80 C490 160, 500 320, 430 410 C360 500, 160 520, 80 430 C0 340, 20 110, 80 60Z"
                  fill="#F4C430"
                />
              </svg>

              {/* Portrait */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10"
              >
                <img
                  src="/ruchika-hero.png"
                  alt="Ruchika Dangi — Journalist & Digital Marketer"
                  className="w-[320px] md:w-[380px] lg:w-[420px] h-auto object-cover relative z-10"
                  loading="eager"
                  style={{ borderRadius: '60% 40% 50% 50% / 60% 60% 40% 40%' }}
                />
              </motion.div>

              {/* Floating note card */}
              <motion.div
                initial={{ opacity: 0, x: -30, rotate: -5 }}
                animate={{ opacity: 1, x: 0, rotate: -3 }}
                transition={{ delay: 1.0, duration: 0.7, type: 'spring', bounce: 0.4 }}
                className="absolute left-[-20px] md:left-[-40px] top-1/2 -translate-y-1/2 z-20 bg-white rounded-xl shadow-xl px-5 py-4 max-w-[150px]"
                style={{ rotate: '-3deg' }}
              >
                <div className="w-5 h-5 rounded-full bg-primary mb-2" />
                <p className="font-display text-sm text-ink leading-snug">
                  Turning ideas <br />
                  into <span className="italic text-primary font-semibold">impact</span>
                </p>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, type: 'spring' }}
                className="absolute top-8 right-2 md:right-[-10px] opacity-60"
              >
                <HeartIcon />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: 'spring' }}
                className="absolute top-16 left-[-15px] opacity-70"
              >
                <Dashes />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, type: 'spring' }}
                className="absolute bottom-12 right-[-5px] md:right-[-15px] opacity-40"
              >
                <HatchLines />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, rotate: [0, 15, 0] }}
                transition={{ delay: 1.4, duration: 3, repeat: Infinity }}
                className="absolute top-4 left-1/4 opacity-60"
              >
                <SparkleIcon />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
