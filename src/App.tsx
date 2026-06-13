import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatIDo from './components/WhatIDo'
import About from './components/About'
import Journey from './components/Journey'
import Contact from './components/Contact'
import Preloader from './components/Preloader'
import AmbientBackground from './components/AmbientBackground'

function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Initialize smooth scroll with Lenis
    let lenis: any = null
    
    const initLenis = async () => {
      try {
        const { default: Lenis } = await import('@studio-freight/lenis')
        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        })

        function raf(time: number) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
      } catch {
        // Lenis unavailable, use native scroll
      }
    }

    if (loaded) {
      initLenis()
    }

    return () => {
      if (lenis) lenis.destroy()
    }
  }, [loaded])

  return (
    <>
      <AnimatePresence mode="wait">
        {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      {loaded && (
        <div className="grain relative">
          <AmbientBackground />
          <Navbar />
          <main>
            <Hero />
            <WhatIDo />
            <About />
            <Journey />
            <Contact />
          </main>
        </div>
      )}
    </>
  )
}

export default App
