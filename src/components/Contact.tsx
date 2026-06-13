import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Linkedin, Instagram } from 'lucide-react'
import MagneticButton from './MagneticButton'

const contactLinks = [
  {
    icon: <Mail size={20} />,
    label: 'hello@ruchikaadangi.com',
    href: 'mailto:hello@ruchikaadangi.com',
    display: 'hello@ruchikaadangi.com',
  },
  {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/ruchikadangi',
    display: 'linkedin.com/in/ruchikadangi',
  },
  {
    icon: <Instagram size={20} />,
    label: 'Instagram',
    href: 'https://instagram.com/ruchikadangi',
    display: '@ruchikadangi',
  },
]

// Paper plane SVG
const PaperPlane = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
    <path d="M5 30 L55 5 L40 55 L28 35 Z" fill="#F4C430" opacity="0.9"/>
    <path d="M28 35 L38 25" stroke="#1C1C1C" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M5 30 L28 35" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
  </svg>
)

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} className="relative py-20 md:py-28 bg-cream/40 overflow-hidden">
      <div className="max-w-2xl mx-auto px-5 md:px-8 text-center">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <span className="w-5 h-px bg-primary" />
          <span className="font-label text-xs font-semibold tracking-[0.2em] uppercase text-primary">Get in Touch</span>
          <span className="w-5 h-px bg-primary" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl md:text-6xl font-medium text-ink mb-4"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-body text-muted text-base md:text-lg leading-relaxed mb-12"
        >
          I'm always open to meaningful conversations and opportunities.
          <br className="hidden md:block" />
          Whether it's a collaboration, an internship, or just a hello —
        </motion.p>

        {/* Contact links */}
        <div className="space-y-4 mb-12">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
              className="flex items-center justify-between bg-white rounded-2xl px-6 py-4 border border-primary/10 hover:border-primary/40 hover:shadow-md hover:shadow-primary/10 transition-all duration-200 group max-w-md mx-auto"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/40 flex items-center justify-center text-ink group-hover:bg-primary/20 transition-colors">
                  {link.icon}
                </div>
                <span className="font-label text-sm font-medium text-ink">{link.display}</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="opacity-40 group-hover:opacity-80 group-hover:translate-x-1 transition-all">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="#1C1C1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5, type: 'spring', bounce: 0.3 }}
        >
          <MagneticButton
            onClick={() => window.open('mailto:hello@ruchikaadangi.com')}
            className="inline-flex items-center gap-3 bg-primary text-ink font-label font-semibold px-8 py-4 rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
          >
            Say Hello
            <PaperPlane />
          </MagneticButton>
        </motion.div>

      </div>

      {/* Decorative paper plane floating */}
      <motion.div
        className="absolute bottom-10 right-10 opacity-20 pointer-events-none"
        animate={{ x: [0, 20, 0], y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <PaperPlane />
      </motion.div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-primary/10 text-center">
        <p className="font-label text-xs text-muted/60 tracking-wide">
          © {new Date().getFullYear()} Ruchika Dangi. Crafted with care.
        </p>
      </div>
    </section>
  )
}
