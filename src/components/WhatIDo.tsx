import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 4 C8 4, 10 12, 16 16 C22 20, 24 28, 24 28" stroke="#1C1C1C" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        <path d="M12 6 C12 6, 6 10, 6 16 C6 22, 12 24, 16 26" stroke="#1C1C1C" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.4"/>
        <circle cx="16" cy="16" r="2.5" fill="#F4C430"/>
      </svg>
    ),
    title: 'Journalism',
    desc: 'Research, write and tell stories that inform and inspire — turning complex truths into compelling narratives.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="14" cy="14" r="8" stroke="#1C1C1C" strokeWidth="1.8" fill="none"/>
        <path d="M20 20 L27 27" stroke="#1C1C1C" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M11 14 L13 16 L17 12" stroke="#F4C430" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'SEO & Content',
    desc: 'Optimizing content that ranks, reaches and resonates — blending data insight with creative writing.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 22 L14 14 L18 18 L24 10 L28 14" stroke="#1C1C1C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <circle cx="28" cy="8" r="3" fill="#F4C430" opacity="0.9"/>
        <path d="M4 26 L28 26" stroke="#1C1C1C" strokeWidth="1.2" strokeLinecap="round" opacity="0.3"/>
      </svg>
    ),
    title: 'Social Media',
    desc: 'Creating engaging content and managing communities that connect brands to people authentically.',
  },
]

const FreeFormScribble = () => (
  <svg width="80" height="70" viewBox="0 0 80 70" fill="none" className="absolute right-8 top-8 opacity-30">
    <path d="M10 50 C20 20, 50 10, 60 30 C70 50, 40 65, 30 55 C20 45, 35 25, 50 35" stroke="#1C1C1C" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
  </svg>
)

export default function WhatIDo() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="what-i-do" ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-px bg-primary" />
              <span className="font-label text-xs font-semibold tracking-[0.2em] uppercase text-primary">Services</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-ink relative inline-block">
              What I Do
              <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 160 6" fill="none">
                <path d="M2 4 C50 1, 100 5, 158 2" stroke="#F4C430" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="font-body text-muted text-base max-w-xs md:text-right leading-relaxed"
          >
            I blend storytelling with strategy to help brands communicate better.
          </motion.p>
        </div>

        {/* Cards grid — desktop: 3 cols, mobile: list */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} isInView={isInView} layout="card" />
          ))}
        </div>

        {/* Mobile: list style matching reference */}
        <div className="md:hidden flex flex-col gap-3">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} isInView={isInView} layout="list" />
          ))}
        </div>

      </div>

      {/* Decorative heart */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 0.5, scale: 1 } : {}}
        transition={{ delay: 0.5 }}
        className="absolute left-6 top-1/2 pointer-events-none"
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M11 19s-8-5-8-10a5.5 5.5 0 0 1 8-4.9A5.5 5.5 0 0 1 19 9c0 5-8 10-8 10z" stroke="#1C1C1C" strokeWidth="1.3"/>
        </svg>
      </motion.div>

      <FreeFormScribble />
    </section>
  )
}

function ServiceCard({
  service,
  index,
  isInView,
  layout,
}: {
  service: typeof services[0]
  index: number
  isInView: boolean
  layout: 'card' | 'list'
}) {
  if (layout === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.1 + index * 0.08, duration: 0.5 }}
        className="flex items-center justify-between p-4 bg-card rounded-2xl border border-primary/10"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-accent/50 flex items-center justify-center shrink-0">
            {service.icon}
          </div>
          <span className="font-label font-semibold text-ink">{service.title}</span>
        </div>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 3l5 5-5 5" stroke="#1C1C1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + index * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group bg-card rounded-3xl p-8 border border-primary/10 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-default"
    >
      <div className="w-14 h-14 rounded-2xl bg-accent/50 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
        {service.icon}
      </div>
      <h3 className="font-label font-bold text-lg text-ink mb-3">{service.title}</h3>
      <p className="font-body text-sm text-muted leading-relaxed">{service.desc}</p>
    </motion.div>
  )
}
