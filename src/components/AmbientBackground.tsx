import { motion } from 'framer-motion'

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

export default function AmbientBackground() {
  if (isMobile) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(244,196,48,0.08) 0%, transparent 70%)' }}
        animate={{ x: [0, 20, -10, 0], y: [0, -15, 10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,224,130,0.07) 0%, transparent 70%)' }}
        animate={{ x: [0, -20, 15, 0], y: [0, 20, -10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
    </div>
  )
}