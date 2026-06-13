import { useEffect, useState, lazy, Suspense } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Preloader from './components/Preloader'

const WhatIDo = lazy(() => import('./components/WhatIDo'))
const About = lazy(() => import('./components/About'))
const Journey = lazy(() => import('./components/Journey'))
const Contact = lazy(() => import('./components/Contact'))
const AmbientBackground = lazy(() => import('./components/AmbientBackground'))

function App() {
  const [loaded, setLoaded] = useState(false)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  useEffect(() => {
    if (!loaded || isMobile) return

    let lenis: any = null
    let rafId: number

    const initLenis = async () => {
      try {
        const { default: Lenis } = await import('@studio-freight/lenis')
        lenis = new Lenis({
          duration: 1.0,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          touchMultiplier: 0,
        })
        function raf(time: number) {
          lenis.raf(time)
          rafId = requestAnimationFrame(raf)
        }
        rafId = requestAnimationFrame(raf)
      } catch {
        // fallback to native scroll
      }
    }

    initLenis()
    return () => {
      cancelAnimationFrame(rafId)
      if (lenis) lenis.destroy()
    }
  }, [loaded, isMobile])

  return (
    <>
      <AnimatePresence mode="wait">
        {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      {loaded && (
        <div className="relative">
          <Suspense fallback={null}>
            <AmbientBackground />
          </Suspense>
          <Navbar />
          <main>
            <Hero />
            <Suspense fallback={<div className="h-screen" />}>
              <WhatIDo />
              <About />
              <Journey />
              <Contact />
            </Suspense>
          </main>
        </div>
      )}
    </>
  )
}

export default App