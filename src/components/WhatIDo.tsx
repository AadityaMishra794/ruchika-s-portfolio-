import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    emoji: '📰',
    title: 'Journalism',
    subtitle: 'The Art of Storytelling',
    color: '#FFF3E0',
    borderColor: '#F4C430',
    tag: '#storyteller',
    desc: 'Research, write and tell stories that inform and inspire — turning complex truths into compelling narratives.',
    backEmoji: '✍️',
    frontDoodle: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <path d="M15 20 Q40 10 65 20" stroke="#F4C430" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path d="M15 32 Q40 22 65 32" stroke="#F4C430" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7"/>
        <path d="M15 44 Q40 34 65 44" stroke="#F4C430" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.4"/>
        <path d="M15 56 Q40 46 45 56" stroke="#F4C430" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.2"/>
        <circle cx="62" cy="58" r="10" fill="#F4C430" opacity="0.12"/>
        <path d="M57 58 L67 58 M62 53 L62 63" stroke="#F4C430" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    emoji: '🔍',
    title: 'SEO & Content',
    subtitle: 'Strategy Meets Creativity',
    color: '#FFFBF0',
    borderColor: '#FFB300',
    tag: '#strategist',
    desc: 'Optimizing content that ranks, reaches and resonates — blending data insight with creative writing.',
    backEmoji: '📈',
    frontDoodle: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <circle cx="32" cy="32" r="18" stroke="#F4C430" strokeWidth="2.5" fill="none"/>
        <path d="M45 45 L65 65" stroke="#F4C430" strokeWidth="3" strokeLinecap="round"/>
        <path d="M26 32 L30 37 L40 25" stroke="#F4C430" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    emoji: '📱',
    title: 'Social Media',
    subtitle: 'Building Real Connections',
    color: '#FFF8F0',
    borderColor: '#FFC107',
    tag: '#creator',
    desc: 'Creating engaging content and managing communities that connect brands to people authentically.',
    backEmoji: '💫',
    frontDoodle: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <path d="M10 55 L22 38 L32 47 L46 25 L62 38" stroke="#F4C430" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <circle cx="62" cy="30" r="7" fill="#F4C430" opacity="0.2"/>
        <circle cx="62" cy="30" r="3" fill="#F4C430"/>
        <circle cx="10" cy="55" r="3" fill="#F4C430" opacity="0.5"/>
        <circle cx="32" cy="47" r="3" fill="#F4C430" opacity="0.7"/>
      </svg>
    ),
  },
]

export default function WhatIDo() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [flipped, setFlipped] = useState<number | null>(null)

  return (
    <section id="what-i-do" ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 md:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-4xl mb-3 inline-block"
          >✨</motion.div>
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-5 h-px bg-primary" />
            <span className="font-label text-xs font-semibold tracking-[0.2em] uppercase text-primary">What I Do</span>
            <span className="w-5 h-px bg-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-ink">
            I wear many <span className="italic text-primary">hats</span> 🎩
          </h2>
          <p className="font-body text-muted text-sm mt-3">tap a card to flip it 🔄</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6" style={{ perspective: '1200px' }}>
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[320px] md:h-[360px] cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
              onClick={() => setFlipped(flipped === i ? null : i)}
            >
              <motion.div
                className="relative w-full h-full"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: flipped === i ? 180 : 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* FRONT */}
                <div
                  className="absolute inset-0 rounded-3xl flex flex-col items-center justify-center p-8 border-2 select-none"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    background: s.color,
                    borderColor: `${s.borderColor}40`,
                    boxShadow: '0 8px 40px rgba(0,0,0,0.06)',
                  }}
                >
                  {/* Page curl */}
                  <div className="absolute top-0 right-0 w-10 h-10"
                    style={{ background: `linear-gradient(225deg, white 45%, ${s.borderColor}30 45%)`, borderRadius: '0 12px 0 100%' }} />

                  {/* Notebook lines */}
                  <div className="absolute inset-x-6 top-14 bottom-14 flex flex-col justify-evenly pointer-events-none">
                    {[...Array(6)].map((_, li) => (
                      <div key={li} className="h-px w-full" style={{ background: `${s.borderColor}20` }} />
                    ))}
                  </div>

                  {/* Binding dots */}
                  <div className="absolute left-4 top-0 bottom-0 flex flex-col justify-evenly pointer-events-none">
                    {[...Array(5)].map((_, di) => (
                      <div key={di} className="w-2 h-2 rounded-full" style={{ background: `${s.borderColor}30` }} />
                    ))}
                  </div>

                  <div className="relative z-10 flex flex-col items-center text-center gap-4">
                    <motion.div className="text-5xl"
                      animate={flipped !== i ? { y: [0, -6, 0] } : {}}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}>
                      {s.emoji}
                    </motion.div>
                    <div>{s.frontDoodle}</div>
                    <h3 className="font-display text-2xl font-semibold text-ink">{s.title}</h3>
                    <span className="font-label text-xs font-bold px-3 py-1 rounded-full"
                      style={{ background: `${s.borderColor}25`, color: s.borderColor }}>{s.tag}</span>
                  </div>

                  <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                    <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
                      className="flex items-center gap-1 opacity-40">
                      <span className="font-label text-[10px] text-ink">flip me</span>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6 C2 3, 10 3, 10 6 C10 9, 2 9, 2 6" stroke="#1C1C1C" strokeWidth="1" fill="none" strokeLinecap="round"/>
                        <path d="M8 4 L10 6 L8 8" stroke="#1C1C1C" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  </div>
                </div>

                {/* BACK */}
                <div
                  className="absolute inset-0 rounded-3xl flex flex-col justify-between p-8 border-2 select-none"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    background: 'white',
                    borderColor: `${s.borderColor}50`,
                    boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
                  }}
                >
                  <div className="absolute top-0 left-6 right-6 h-1 rounded-b-full"
                    style={{ background: `linear-gradient(90deg, ${s.borderColor}, transparent)` }} />

                  <div className="absolute inset-x-6 top-14 bottom-14 flex flex-col justify-evenly pointer-events-none">
                    {[...Array(8)].map((_, li) => (
                      <div key={li} className="h-px w-full" style={{ background: `${s.borderColor}15` }} />
                    ))}
                  </div>

                  <div className="relative z-10">
                    <div className="text-3xl mb-3">{s.backEmoji}</div>
                    <h3 className="font-display text-xl font-semibold text-ink mb-1">{s.title}</h3>
                    <p className="font-label text-xs font-medium mb-4" style={{ color: s.borderColor }}>{s.subtitle}</p>
                    <p className="font-body text-sm text-muted leading-relaxed">{s.desc}</p>
                  </div>

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-label text-[10px] font-bold px-3 py-1 rounded-full"
                      style={{ background: `${s.borderColor}15`, color: s.borderColor }}>{s.tag}</span>
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 2v4M10 14v4M2 10h4M14 10h4M4.2 4.2l2.8 2.8M13 13l2.8 2.8M4.2 15.8l2.8-2.8M13 7l2.8-2.8"
                          stroke={s.borderColor} strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="text-center font-display italic text-muted text-base mt-14"
        >
          "Every word is intentional. Every strategy is personal." 🌸
        </motion.p>
      </div>
    </section>
  )
}