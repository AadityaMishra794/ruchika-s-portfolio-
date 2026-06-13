import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const tags = ['Curious', 'Creative', 'Consistent']

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="relative py-20 md:py-28 bg-cream/40">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Portrait side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center"
          >
            {/* Polaroid-style frame */}
            <div className="relative">
              <motion.div
                animate={{ rotate: [-1, 1, -1] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="bg-white p-3 pb-10 shadow-2xl shadow-ink/10 rounded-lg"
                style={{ rotate: '-2deg' }}
              >
                <img
                  src="/ruchika-about.png"
                  alt="Ruchika Dangi"
                  className="w-[260px] md:w-[300px] h-[300px] md:h-[360px] object-cover rounded-sm"
                  loading="lazy"
                />
                <div className="absolute bottom-3 left-0 right-0 text-center font-display text-sm italic text-muted">
                  Ruchika Dangi
                </div>
              </motion.div>

              {/* Second photo tilted */}
              <motion.div
                initial={{ opacity: 0, rotate: 4, x: 20 }}
                animate={isInView ? { opacity: 1, rotate: 4, x: 20 } : {}}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="absolute -bottom-6 -right-8 bg-white p-2 pb-8 shadow-xl rounded-lg"
                style={{ rotate: '4deg' }}
              >
                <img
  src="/ruchika-card.jpg"
  alt="Ruchika Dangi"
  className="w-[120px] h-[100px] object-cover object-top rounded-sm"
/>
                <div className="absolute bottom-2 left-0 right-0 text-center font-label text-[10px] text-muted">Stories · Strategy · Impact</div>
              </motion.div>

              {/* Tags */}
              <div className="absolute -bottom-16 left-0 flex gap-2">
                {tags.map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="font-label text-xs font-semibold bg-white border border-primary/20 text-ink px-3 py-1 rounded-full shadow-sm"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 md:mt-0"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-5 h-px bg-primary" />
              <span className="font-label text-xs font-semibold tracking-[0.2em] uppercase text-primary">About Me</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-medium text-ink mb-6 leading-tight">
              About Me
            </h2>

          
<div className="space-y-4 font-body text-muted leading-relaxed text-base">
  <p>
    I'm Ruchika, passionate about digital marketing, storytelling, and understanding what truly connects brands with people. My foundation in journalism has helped me develop a strong eye for research, communication, and crafting narratives that make an impact.
  </p>

  <p>
    I enjoy working across SEO, content creation, and social media, where creativity meets strategy. Exploring audience behavior, building engaging campaigns, and turning ideas into meaningful digital experiences are the parts of my work I enjoy the most.
  </p>

  <p>
    With every project, my goal is simple—to create content that informs, inspires, and builds genuine connections while helping brands communicate with clarity and purpose.
  </p>
</div>
```


            {/* Yellow accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 h-px bg-gradient-to-r from-primary to-transparent origin-left"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
