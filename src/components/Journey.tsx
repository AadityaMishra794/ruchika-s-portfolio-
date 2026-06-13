import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const journey = [
  {
    year: 'Dec 2022 – May 2025',
    emoji: '📰',
    tag: 'Education',
    tagColor: 'bg-blue-50 text-blue-600 border-blue-100',
    title: 'BA in Journalism & Mass Communication',
    place: 'School of Journalism and Mass Communication',
    desc: 'Where it all began. Fell in love with words, stories, and the power of a well-told narrative. Learned that every story deserves to be told — and told well.',
    rotate: '-1deg',
    highlight: 'storytelling',
  },
  {
    year: 'Jul 2025 – Jun 2027',
    emoji: '🎓',
    tag: 'Currently Pursuing',
    tagColor: 'bg-amber-50 text-amber-600 border-amber-100',
    title: 'MBA in E-Commerce',
    place: 'IMS DAVV, Indore',
    desc: 'Blending creativity with commerce. Exploring online business models, consumer behavior & tech-driven strategies — because great content needs smart strategy behind it.',
    rotate: '1deg',
    highlight: 'strategy',
  },
  {
    year: 'May 2026 – Present',
    emoji: '🚀',
    tag: 'Experience',
    tagColor: 'bg-green-50 text-green-700 border-green-100',
    title: 'Digital Marketing Intern',
    place: 'Aspire Marketing Solutions, Indore',
    desc: "Turning everything I've learned into real impact. Creating content, running campaigns, and growing every single day in the world of digital marketing.",
    rotate: '-0.5deg',
    highlight: 'impact',
  },
]

const Squiggle = () => (
  <svg width="120" height="20" viewBox="0 0 120 20" fill="none" className="mx-auto my-2">
    <path d="M2 10 C15 2, 25 18, 40 10 C55 2, 65 18, 80 10 C95 2, 105 18, 118 10"
      stroke="#F4C430" strokeWidth="2" fill="none" strokeLinecap="round"/>
  </svg>
)

const Star = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M8 1v4M8 11v4M1 8h4M11 8h4M3.2 3.2l2.8 2.8M10 10l2.8 2.8M3.2 12.8l2.8-2.8M10 6l2.8-2.8"
      stroke="#F4C430" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

export default function Journey() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="journey" ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-8 opacity-20"><Star size={24} /></div>
        <div className="absolute top-40 right-12 opacity-15"><Star size={18} /></div>
        <div className="absolute bottom-32 left-16 opacity-10"><Star size={30} /></div>
      </div>

      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-4"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-5 h-px bg-primary" />
            <span className="font-label text-xs font-semibold tracking-[0.2em] uppercase text-primary">The Story So Far</span>
            <span className="w-5 h-px bg-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-medium text-ink">My Journey</h2>
          <Squiggle />
          <p className="font-body text-muted text-base mt-2 max-w-md mx-auto">
            From a curious storyteller to a strategy-driven marketer — here's how it unfolded.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 items-start">
          {journey.map((item, i) => (
            <JourneyCard key={item.title} item={item} index={i} isInView={isInView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center mt-14"
        >
          <div className="inline-flex items-center gap-3 bg-card border border-primary/20 rounded-full px-6 py-3">
            <span className="text-lg">✨</span>
            <span className="font-label text-sm font-medium text-ink">Still writing the next chapter...</span>
            <span className="text-lg">✨</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function JourneyCard({
  item,
  index,
  isInView,
}: {
  item: typeof journey[0]
  index: number
  isInView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: item.rotate } : {}}
      transition={{ delay: 0.15 + index * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ rotate: '0deg', y: -8, scale: 1.02, transition: { duration: 0.25 } }}
      className="relative bg-white rounded-3xl border border-primary/10 shadow-lg shadow-ink/5 p-6 cursor-default"
      style={{ transformOrigin: 'center bottom' }}
    >
      <div className="absolute top-0 left-6 right-6 h-1 rounded-b-full"
        style={{ background: 'linear-gradient(90deg, #F4C430, #FFE082)' }} />

      <div className="flex items-center justify-between mb-4 mt-2">
        <motion.span
          className="text-3xl"
          animate={isInView ? { rotate: [0, -10, 10, 0] } : {}}
          transition={{ delay: 0.4 + index * 0.15, duration: 0.6 }}
        >
          {item.emoji}
        </motion.span>
        <span className={`font-label text-[11px] font-semibold px-3 py-1 rounded-full border ${item.tagColor}`}>
          {item.tag}
        </span>
      </div>

      <h3 className="font-display text-xl md:text-2xl font-semibold text-ink leading-tight mb-1">
        {item.title}
      </h3>
      <p className="font-label text-xs font-medium text-primary mb-1">{item.place}</p>
      <p className="font-label text-[11px] text-muted mb-4 tracking-wide">{item.year}</p>

      <div className="h-px bg-gradient-to-r from-primary/30 to-transparent mb-4" />

      <p className="font-body text-sm text-muted leading-relaxed">
        {item.desc.split(item.highlight).map((part, i, arr) =>
          i < arr.length - 1 ? (
            <span key={i}>
              {part}
              <span className="font-semibold text-ink bg-accent/50 px-1 rounded">{item.highlight}</span>
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </p>

      <div className="absolute bottom-4 right-5 w-2 h-2 rounded-full bg-primary/40" />
    </motion.div>
  )
}