'use client'
import { motion } from 'framer-motion'
import ProductViewer from './ProductViewer'

// Aztec sun / mandala SVG — 12-point radial geometry
const MANDALA = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <g fill="none" stroke="#b5935a" stroke-width="0.6" transform="translate(100,100)">
    <!-- outer ring -->
    <circle r="94" stroke-width="0.8"/>
    <circle r="84"/>
    <circle r="72"/>
    <circle r="58"/>
    <circle r="44"/>
    <circle r="30"/>
    <circle r="16"/>
    <circle r="6" fill="#b5935a" stroke="none"/>
    <!-- 12 radial spokes -->
    <line x1="0" y1="-94" x2="0" y2="94" stroke-width="0.4"/>
    <line x1="-94" y1="0" x2="94" y2="0" stroke-width="0.4"/>
    <line x1="-66" y1="-66" x2="66" y2="66" stroke-width="0.3"/>
    <line x1="66" y1="-66" x2="-66" y2="66" stroke-width="0.3"/>
    <line x1="-24" y1="-91" x2="24" y2="91" stroke-width="0.25"/>
    <line x1="24" y1="-91" x2="-24" y2="91" stroke-width="0.25"/>
    <line x1="-91" y1="-24" x2="91" y2="24" stroke-width="0.25"/>
    <line x1="91" y1="-24" x2="-91" y2="24" stroke-width="0.25"/>
    <!-- petal shapes at 12 pts -->
    <ellipse rx="5" ry="14" transform="rotate(0) translate(0,-79)"/>
    <ellipse rx="5" ry="14" transform="rotate(30) translate(0,-79)"/>
    <ellipse rx="5" ry="14" transform="rotate(60) translate(0,-79)"/>
    <ellipse rx="5" ry="14" transform="rotate(90) translate(0,-79)"/>
    <ellipse rx="5" ry="14" transform="rotate(120) translate(0,-79)"/>
    <ellipse rx="5" ry="14" transform="rotate(150) translate(0,-79)"/>
    <ellipse rx="5" ry="14" transform="rotate(180) translate(0,-79)"/>
    <ellipse rx="5" ry="14" transform="rotate(210) translate(0,-79)"/>
    <ellipse rx="5" ry="14" transform="rotate(240) translate(0,-79)"/>
    <ellipse rx="5" ry="14" transform="rotate(270) translate(0,-79)"/>
    <ellipse rx="5" ry="14" transform="rotate(300) translate(0,-79)"/>
    <ellipse rx="5" ry="14" transform="rotate(330) translate(0,-79)"/>
    <!-- inner triangles -->
    <polygon points="0,-58 20,29 -20,29" stroke-width="0.5"/>
    <polygon points="0,58 20,-29 -20,-29" stroke-width="0.5"/>
    <!-- mid-ring dots -->
    <circle cx="0" cy="-44" r="2" fill="#b5935a" stroke="none"/>
    <circle cx="38" cy="-22" r="2" fill="#b5935a" stroke="none"/>
    <circle cx="38" cy="22" r="2" fill="#b5935a" stroke="none"/>
    <circle cx="0" cy="44" r="2" fill="#b5935a" stroke="none"/>
    <circle cx="-38" cy="22" r="2" fill="#b5935a" stroke="none"/>
    <circle cx="-38" cy="-22" r="2" fill="#b5935a" stroke="none"/>
  </g>
</svg>`

const heroStats = [
  { value: '300+', label: 'Zumiez Stores' },
  { value: '3.4M', label: 'TikTok' },
  { value: '52K', label: 'Brand IG' },
  { value: 'HTX', label: 'Houston' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#030303' }} id="hero">

      {/* Real photo bg */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'url(/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 20%',
        opacity: 0.12,
      }} />

      {/* Aztec mandala tiled background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(MANDALA)}")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px',
        opacity: 0.05,
      }} />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 90% 90% at 50% 50%, transparent 30%, #030303 100%)',
      }} />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, transparent, #030303)',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-0 w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left */}
        <div>

          {/* Blinking live badge */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-7"
            style={{ border: '0.5px solid rgba(192,57,43,0.4)', padding: '5px 12px' }}
          >
            <span className="blink" style={{ width: 6, height: 6, borderRadius: '50%', background: '#c0392b', display: 'inline-block' }} />
            <span className="font-dm font-light" style={{ fontSize: 9, letterSpacing: '0.35em', color: '#c0392b', textTransform: 'uppercase' }}>
              Drop 003 — Live Now
            </span>
          </motion.div>

          {/* Eyebrow line */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div style={{ width: 20, height: 1, background: '#b5935a' }} />
            <span className="font-dm font-light" style={{ fontSize: 9, letterSpacing: '0.5em', color: 'rgba(181,147,90,0.7)', textTransform: 'uppercase' }}>
              SS2025 · Now at Zumiez Nationwide
            </span>
          </motion.div>

          {/* WEAR CULTURA . */}
          <div className="font-bebas overflow-hidden mb-5" style={{ lineHeight: 0.88 }}>
            {/* WEAR — solid cream */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.55, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontSize: 'clamp(4.5rem,11vw,8.5rem)', color: '#f0ead6', display: 'block', lineHeight: 0.9 }}
            >
              WEAR
            </motion.div>

            {/* CULTURA — outlined gold */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontSize: 'clamp(4.5rem,11vw,8.5rem)',
                display: 'block',
                lineHeight: 0.9,
                color: 'transparent',
                WebkitTextStroke: '1.5px #b5935a',
              }}
            >
              CULTURA
            </motion.div>

            {/* . — red */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.85, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontSize: 'clamp(4.5rem,11vw,8.5rem)', color: '#c0392b', display: 'block', lineHeight: 0.9 }}
            >
              .
            </motion.div>
          </div>

          {/* Mexican flag stripe */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.95, duration: 0.4 }}
            className="origin-left flex mb-6 overflow-hidden"
            style={{ height: 2, width: 60 }}
          >
            <div style={{ flex: 1, background: '#1a6b3a' }} />
            <div style={{ flex: 1, background: '#f0ead6' }} />
            <div style={{ flex: 1, background: '#c0392b' }} />
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="font-dm font-light"
            style={{ color: 'rgba(240,234,214,0.42)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem', letterSpacing: '0.02em' }}
          >
            Born in the barrio. Built for the world.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.12, duration: 0.5 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <a href="https://www.zumiez.com/brands/porfa.html" target="_blank" rel="noreferrer"
              className="font-dm font-bold"
              style={{ background: '#b5935a', color: '#030303', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', padding: '14px 28px', display: 'inline-block', transition: 'background 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#e8c97a')}
              onMouseLeave={e => (e.currentTarget.style.background = '#b5935a')}
            >
              SHOP THE DROP
            </a>
            <a href="#lookbook"
              className="font-dm font-light"
              style={{ border: '0.5px solid rgba(181,147,90,0.35)', color: 'rgba(181,147,90,0.7)', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', padding: '14px 28px', display: 'inline-block', transition: 'all 0.25s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#b5935a'; (e.currentTarget as HTMLElement).style.color = '#f0ead6' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(181,147,90,0.35)'; (e.currentTarget as HTMLElement).style.color = 'rgba(181,147,90,0.7)' }}
            >
              VER LOOKBOOK
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.5 }}
            className="flex items-center gap-6 flex-wrap"
            style={{ borderTop: '0.5px solid rgba(181,147,90,0.12)', paddingTop: '1.5rem' }}
          >
            {heroStats.map((s, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-bebas" style={{ color: '#b5935a', fontSize: '1.6rem', lineHeight: 1 }}>{s.value}</span>
                <span className="font-dm font-light" style={{ color: 'rgba(240,234,214,0.3)', fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', marginTop: 2 }}>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Product Viewer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <ProductViewer />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-dm font-light" style={{ fontSize: 8, letterSpacing: '0.5em', color: 'rgba(240,234,214,0.18)', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
          <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
            <path d="M5 0v10M1 6l4 5 4-5" stroke="#b5935a" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
