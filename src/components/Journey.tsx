import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const milestones = [
  {
    year: '2021',
    title: 'Discovered my love for storytelling',
    desc: 'Started writing for college publications, finding my voice in journalism and long-form narrative.',
    icon: '✦',
  },
  {
    year: '2022',
    title: 'Started my journey in journalism',
    desc: 'Joined the college media team, wrote investigative pieces and covered campus events.',
    icon: '◎',
  },
  {
    year: '2023',
    title: 'Exploring digital marketing & content strategy',
    desc: 'Discovered SEO and content marketing — began understanding how words drive real business outcomes.',
    icon: '◈',
  },
  {
    year: '2024',
    title: 'Internship in digital marketing',
    desc: 'Joined a digital agency as a marketing intern — creating content, managing social channels, and growing every day.',
    icon: '★',
  },
  {
    year: '2025',
    title: 'Building and growing',
    desc: 'Continuing to sharpen skills across journalism, SEO, and social media marketing while seeking new opportunities.',
    icon: '✿',
  },
]

export default function Journey() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ['0%', '100%'])

  return (
    <section id="journey" ref={ref} className="relative py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-5 md:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-5 h-px bg-primary" />
            <span className="font-label text-xs font-semibold tracking-[0.2em] uppercase text-primary">Timeline</span>
            <span className="w-5 h-px bg-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-ink">
            My Journey
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-primary/15 md:-translate-x-1/2">
            <motion.div
              className="absolute top-0 left-0 w-full bg-primary origin-top rounded-full"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-10">
            {milestones.map((m, i) => (
              <MilestoneItem key={m.year} milestone={m} index={i} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function MilestoneItem({
  milestone,
  index,
  isInView,
}: {
  milestone: typeof milestones[0]
  index: number
  isInView: boolean
}) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.1 + index * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex items-start gap-6 md:gap-0"
    >
      {/* Mobile layout: left line with dot */}
      <div className="md:hidden flex flex-col items-center gap-0 shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: 0.15 + index * 0.12, type: 'spring', bounce: 0.5 }}
          className="w-12 h-12 rounded-full bg-accent/60 border-2 border-primary flex items-center justify-center text-lg z-10 shrink-0"
        >
          {milestone.icon}
        </motion.div>
      </div>

      <div className="md:hidden flex-1">
        <span className="font-label text-xs font-bold text-primary tracking-widest">{milestone.year}</span>
        <h3 className="font-label font-semibold text-ink text-base mt-0.5 mb-1">{milestone.title}</h3>
        <p className="font-body text-sm text-muted leading-relaxed">{milestone.desc}</p>
      </div>

      {/* Desktop alternating layout */}
      <div className="hidden md:flex w-full items-center">
        {isEven ? (
          <>
            <div className="w-1/2 pr-10 text-right">
              <span className="font-label text-xs font-bold text-primary tracking-widest">{milestone.year}</span>
              <h3 className="font-label font-semibold text-ink text-base mt-0.5 mb-1">{milestone.title}</h3>
              <p className="font-body text-sm text-muted leading-relaxed">{milestone.desc}</p>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.15 + index * 0.12, type: 'spring', bounce: 0.5 }}
              className="w-12 h-12 rounded-full bg-accent/60 border-2 border-primary flex items-center justify-center text-lg z-10 shrink-0 -mx-6"
            >
              {milestone.icon}
            </motion.div>
            <div className="w-1/2 pl-10" />
          </>
        ) : (
          <>
            <div className="w-1/2 pr-10" />
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.15 + index * 0.12, type: 'spring', bounce: 0.5 }}
              className="w-12 h-12 rounded-full bg-accent/60 border-2 border-primary flex items-center justify-center text-lg z-10 shrink-0 -mx-6"
            >
              {milestone.icon}
            </motion.div>
            <div className="w-1/2 pl-10">
              <span className="font-label text-xs font-bold text-primary tracking-widest">{milestone.year}</span>
              <h3 className="font-label font-semibold text-ink text-base mt-0.5 mb-1">{milestone.title}</h3>
              <p className="font-body text-sm text-muted leading-relaxed">{milestone.desc}</p>
            </div>
          </>
        )}
      </div>
    </motion.div>
  )
}
