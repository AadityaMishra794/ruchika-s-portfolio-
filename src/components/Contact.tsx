import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const links = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'hello@ruchikaadangi.com',
    href: 'mailto:hello@ruchikaadangi.com',
    color: '#FFF3E0',
    hint: 'slide into my inbox 💌',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/ruchikadangi',
    href: 'https://www.linkedin.com/in/ruchika-d-834419388/',
    color: '#FFF8E8',
    hint: "let's be professional besties 🤝",
  },
  {
    icon: '📸',
    label: 'Instagram',
    value: '@ruchikadangi',
    href: 'https://instagram.com/ruchikadangi',
    color: '#FFFBF0',
    hint: 'follow the journey ✨',
  },
]

const Confetti = ({ delay, x, color }: { delay: number; x: number; color: string }) => (
  <motion.div
    className="absolute pointer-events-none w-2 h-2 rounded-sm"
    style={{ left: `${x}%`, top: '40%', background: color }}
    initial={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
    animate={{ y: 120, opacity: 0, rotate: 360, scale: 0.5, x: (Math.random() - 0.5) * 80 }}
    transition={{ delay, duration: 1.2, ease: 'easeOut' }}
  />
)

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [hovered, setHovered] = useState<number | null>(null)
  const [sent, setSent] = useState(false)
  const [confetti, setConfetti] = useState<{ id: number; x: number; color: string; delay: number }[]>([])

  const handleSayHello = () => {
    setSent(true)
    const pieces = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: 20 + Math.random() * 60,
      color: ['#F4C430', '#FFE082', '#FFF3CD', '#FFB300', '#1C1C1C'][Math.floor(Math.random() * 5)],
      delay: i * 0.04,
    }))
    setConfetti(pieces)
    setTimeout(() => { setConfetti([]); setSent(false) }, 2500)
    window.open('mailto:hello@ruchikaadangi.com')
  }

  return (
    <section id="contact" ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 50" fill="none" className="w-full">
          <path d="M0 25 C360 50, 720 0, 1080 25 C1260 38, 1380 15, 1440 25 L1440 0 L0 0Z" fill="#FFF8E8" opacity="0.4"/>
        </svg>
      </div>

      <div className="max-w-xl mx-auto px-5 md:px-8 text-center relative">
        <motion.div
          className="absolute -top-4 left-8 text-2xl pointer-events-none"
          animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >💛</motion.div>
        <motion.div
          className="absolute top-10 right-4 text-xl pointer-events-none"
          animate={{ y: [0, -8, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        >🌸</motion.div>
        <motion.div
          className="absolute top-32 left-0 text-lg pointer-events-none hidden md:block"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        >⭐</motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-5 h-px bg-primary" />
            <span className="font-label text-xs font-semibold tracking-[0.2em] uppercase text-primary">Get in Touch</span>
            <span className="w-5 h-px bg-primary" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-medium text-ink mb-3">
            Let's <span className="italic text-primary">Connect</span>
          </h2>
          <motion.span
            className="inline-block text-3xl"
            animate={{ rotate: [0, 20, -10, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
          >👋</motion.span>
          <p className="font-body text-muted text-base mt-3 max-w-xs mx-auto leading-relaxed">
            I'm always open to meaningful conversations and opportunities.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3 mb-10">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              whileHover={{ scale: 1.03, rotate: i % 2 === 0 ? '-0.5deg' : '0.5deg' }}
              whileTap={{ scale: 0.97 }}
              className="relative flex items-center gap-4 rounded-2xl px-5 py-4 border border-primary/10 text-left group overflow-hidden"
              style={{ background: hovered === i ? link.color : 'white' }}
            >
              <motion.span
                className="text-2xl shrink-0"
                animate={hovered === i ? { scale: [1, 1.3, 1], rotate: [0, -15, 15, 0] } : {}}
                transition={{ duration: 0.4 }}
              >
                {link.icon}
              </motion.span>

              <div className="flex-1 min-w-0">
                <div className="font-label text-[10px] font-bold uppercase tracking-widest text-primary mb-0.5">
                  {link.label}
                </div>
                <div className="font-body text-sm text-ink truncate">{link.value}</div>
              </div>

              <AnimatePresence>
                {hovered === i && (
                  <motion.span
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="font-label text-[10px] text-muted shrink-0 hidden md:block"
                  >
                    {link.hint}
                  </motion.span>
                )}
              </AnimatePresence>

              <motion.svg
                width="16" height="16" viewBox="0 0 16 16" fill="none"
                className="shrink-0 opacity-30 group-hover:opacity-80"
                animate={hovered === i ? { x: [0, 4, 0] } : {}}
                transition={{ duration: 0.5, repeat: hovered === i ? Infinity : 0 }}
              >
                <path d="M3 8h10M9 4l4 4-4 4" stroke="#1C1C1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </motion.svg>

              {hovered === i && (
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(244,196,48,0.05), transparent)' }}
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                />
              )}
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.7, type: 'spring', bounce: 0.4 }}
          className="relative inline-block"
        >
          <motion.button
            onClick={handleSayHello}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative bg-primary text-ink font-label font-bold text-base px-10 py-4 rounded-full shadow-lg shadow-primary/30 overflow-hidden"
          >
            {sent ? (
              <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2">
                Sent! 🎉
              </motion.span>
            ) : (
              <span className="flex items-center gap-3">
                Say Hello
                <motion.span
                  animate={{ x: [0, 5, 0], rotate: [0, 15, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >✈️</motion.span>
              </span>
            )}
          </motion.button>

          <AnimatePresence>
            {confetti.map((c) => (
              <Confetti key={c.id} delay={c.delay} x={c.x} color={c.color} />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-16 pt-6 border-t border-primary/10"
        >
          <p className="font-display italic text-muted text-sm">
            Made with 💛 by Ruchika Dangi · {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </section>
  )
}