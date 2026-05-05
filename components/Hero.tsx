'use client'
import { motion } from 'framer-motion'
import ProductViewer from './ProductViewer'

const PARTICLES = [
  { x: 7,  y: 18, s: 3,   delay: 0,    dur: 4.2 },
  { x: 20, y: 55, s: 2,   delay: 0.7,  dur: 5.1 },
  { x: 4,  y: 78, s: 4,   delay: 1.4,  dur: 3.8 },
  { x: 38, y: 6,  s: 2,   delay: 0.3,  dur: 6.0 },
  { x: 82, y: 22, s: 3,   delay: 1.1,  dur: 4.6 },
  { x: 92, y: 64, s: 2,   delay: 0.5,  dur: 5.4 },
  { x: 68, y: 88, s: 3,   delay: 1.9,  dur: 4.0 },
  { x: 28, y: 92, s: 2,   delay: 1.7,  dur: 3.6 },
  { x: 52, y: 32, s: 1.5, delay: 0.9,  dur: 6.5 },
  { x: 86, y: 82, s: 3,   delay: 0.4,  dur: 4.9 },
  { x: 13, y: 48, s: 2,   delay: 2.1,  dur: 5.3 },
  { x: 72, y: 8,  s: 2.5, delay: 1.3,  dur: 3.3 },
  { x: 44, y: 72, s: 2,   delay: 0.2,  dur: 5.8 },
  { x: 60, y: 14, s: 1.5, delay: 2.4,  dur: 4.4 },
  { x: 35, y: 40, s: 3,   delay: 0.8,  dur: 3.9 },
]

const aztecSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140"><circle cx="70" cy="70" r="66" fill="none" stroke="#b5935a" stroke-width="1"/><circle cx="70" cy="70" r="50" fill="none" stroke="#b5935a" stroke-width="0.5"/><circle cx="70" cy="70" r="34" fill="none" stroke="#b5935a" stroke-width="0.5"/><circle cx="70" cy="70" r="18" fill="none" stroke="#b5935a" stroke-width="1"/><circle cx="70" cy="70" r="6" fill="none" stroke="#b5935a" stroke-width="1"/><circle cx="70" cy="70" r="2" fill="#b5935a"/><line x1="70" y1="4" x2="70" y2="36" stroke="#b5935a" stroke-width="1.5"/><line x1="70" y1="104" x2="70" y2="136" stroke="#b5935a" stroke-width="1.5"/><line x1="4" y1="70" x2="36" y2="70" stroke="#b5935a" stroke-width="1.5"/><line x1="104" y1="70" x2="136" y2="70" stroke="#b5935a" stroke-width="1.5"/><line x1="22" y1="22" x2="46" y2="46" stroke="#b5935a" stroke-width="1"/><line x1="94" y1="94" x2="118" y2="118" stroke="#b5935a" stroke-width="1"/><line x1="118" y1="22" x2="94" y2="46" stroke="#b5935a" stroke-width="1"/><line x1="22" y1="118" x2="46" y2="94" stroke="#b5935a" stroke-width="1"/><polygon points="70,4 75,16 65,16" fill="#b5935a"/><polygon points="70,136 75,124 65,124" fill="#b5935a"/><polygon points="4,70 16,65 16,75" fill="#b5935a"/><polygon points="136,70 124,65 124,75" fill="#b5935a"/></svg>`

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#080808]" id="hero">
      {/* Aztec background pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(aztecSvg)}")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '140px 140px',
          opacity: 0.04,
        }}
      />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, #080808 100%)' }}
      />

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-[#b5935a]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.s,
            height: p.s,
            animation: `particle-float ${p.dur}s ${p.delay}s ease-in-out infinite`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="font-dm text-[10px] tracking-[0.45em] text-[#b5935a] uppercase mb-8"
          >
            — SS2025 · Now at Zumiez Nationwide
          </motion.p>

          {/* WEAR / CULTURA / . */}
          <div className="font-bebas leading-[0.88] mb-6 overflow-hidden">
            {[
              { text: 'WEAR',    color: '#f0ead6', delay: 0.55 },
              { text: 'CULTURA', color: '#b5935a', delay: 0.72 },
              { text: '.',       color: '#c0392b', delay: 0.89 },
            ].map(({ text, color, delay }) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontSize: 'clamp(5rem, 12vw, 9rem)',
                  color,
                  display: 'block',
                  lineHeight: 0.9,
                }}
              >
                {text}
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.6 }}
            className="font-playfair italic text-[#f0ead6]/65 text-xl leading-relaxed mb-10"
          >
            Born in the barrio. Built for the world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://www.zumiez.com/brands/porfa.html"
              target="_blank"
              rel="noreferrer"
              className="bg-[#b5935a] text-[#080808] font-dm font-bold text-[11px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#f0ead6] transition-colors duration-200"
            >
              SHOP THE DROP
            </a>
            <a
              href="#lookbook"
              className="border border-[#b5935a] text-[#b5935a] font-dm font-bold text-[11px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#b5935a] hover:text-[#080808] transition-colors duration-200"
            >
              VER LOOKBOOK
            </a>
          </motion.div>

          {/* Zumiez badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-10 flex items-center gap-3"
          >
            <div className="w-8 h-[1px] bg-[#b5935a]/40" />
            <span className="font-dm text-[10px] tracking-[0.3em] text-[#f0ead6]/30 uppercase">
              Available at Zumiez stores nationwide
            </span>
          </motion.div>
        </div>

        {/* Right: Product Viewer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <ProductViewer />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-dm text-[9px] tracking-[0.4em] text-[#f0ead6]/25 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
            <path d="M7 0v14M1 8l6 6 6-6" stroke="#b5935a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
