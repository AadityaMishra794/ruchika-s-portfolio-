import { motion } from 'framer-motion'

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top right blob */}
      <motion.div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(244,196,48,0.08) 0%, transparent 70%)' }}
        animate={{
          x: [0, 20, -10, 0],
          y: [0, -15, 10, 0],
          scale: [1, 1.05, 0.97, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Bottom left blob */}
      <motion.div
        className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,224,130,0.07) 0%, transparent 70%)' }}
        animate={{
          x: [0, -20, 15, 0],
          y: [0, 20, -10, 0],
          scale: [1, 0.95, 1.03, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      {/* Center subtle highlight */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(244,196,48,0.025) 0%, transparent 60%)' }}
        animate={{
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
      />
    </div>
  )
}
