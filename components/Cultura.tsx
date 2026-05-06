'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const stats = [
  { label: '300+ Zumiez Stores', sub: 'Coast to coast. Nationwide presence.', borderColor: '#b5935a' },
  { label: '52K Brand Followers', sub: 'La familia keeps growing. Join us.', borderColor: '#c0392b' },
  { label: 'Houston Born', sub: 'Texas roots. Global reach. Always Porfa.', borderColor: '#1a6b3a' },
]

const lookbook = [
  '/lookbook-1.jpg',
  '/lookbook-2.jpg',
  '/lookbook-3.jpg',
  '/lookbook-4.jpg',
]

export default function Cultura() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' })

  return (
    <section id="cultura" className="relative py-24 px-6 overflow-hidden" style={{ background: '#030303' }}>

      {/* Giant faded PF watermark */}
      <div className="absolute select-none pointer-events-none" style={{
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: "'Georgia', serif",
        fontSize: 'clamp(280px, 38vw, 560px)',
        fontWeight: 900,
        color: '#080808',
        lineHeight: 1,
        letterSpacing: '-0.05em',
        whiteSpace: 'nowrap',
        zIndex: 0,
        userSelect: 'none',
      }}>
        PF
      </div>

      {/* Left accent */}
      <div className="absolute left-0 top-0 bottom-0" style={{
        width: 1,
        background: 'linear-gradient(to bottom, transparent, rgba(181,147,90,0.35) 30%, rgba(181,147,90,0.35) 70%, transparent)',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>

        {/* Headline + story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-4">
              <div style={{ width: 14, height: 1, background: '#b5935a' }} />
              <p className="font-dm font-light" style={{ fontSize: 9, letterSpacing: '0.45em', color: '#b5935a', textTransform: 'uppercase' }}>Nuestra Historia</p>
            </div>
            <h2 className="font-bebas text-[#f0ead6] leading-[0.9] mb-6" style={{ fontSize: 'clamp(2.5rem,6vw,5.5rem)' }}>
              BORN IN THE<br />
              BARRIO.<br />
              <span style={{ color: '#b5935a' }}>BUILT FOR</span><br />
              THE WORLD.
            </h2>
            <div style={{ width: 40, height: 1, background: 'rgba(181,147,90,0.5)' }} />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.7 }} className="flex flex-col justify-center">
            <p className="font-dm font-light leading-[1.9] mb-5" style={{ color: 'rgba(240,234,214,0.42)', fontSize: '0.95rem' }}>
              Por Favor The Brand is more than clothing — it&apos;s a declaration. Started by Mexican-Americans who grew up between two worlds, we built something that speaks to both without apology.
            </p>
            <p className="font-dm font-light leading-[1.9] mb-8" style={{ color: 'rgba(240,234,214,0.42)', fontSize: '0.95rem' }}>
              Every design carries the weight of our cultura, the hustle of the streets, and the unshakeable pride of knowing exactly who we are. We don&apos;t ask for permission. We just say <em className="font-playfair italic" style={{ color: '#b5935a' }}>Por Favor</em> — and we make it happen.
            </p>

            {/* Brand quote — red left border */}
            <div className="mb-8" style={{ borderLeft: '2px solid #c0392b', paddingLeft: 20 }}>
              <p className="font-playfair italic" style={{ color: 'rgba(240,234,214,0.55)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                &ldquo;No es ilegal dejarlo todo por un sueño&rdquo;
              </p>
              <p className="font-dm font-light mt-2" style={{ fontSize: 8, letterSpacing: '0.4em', color: 'rgba(192,57,43,0.55)', textTransform: 'uppercase' }}>
                — Porfa The Brand
              </p>
            </div>

            <a href="https://www.zumiez.com/brands/porfa.html" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 group font-dm font-light"
              style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#b5935a', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#f0ead6')}
              onMouseLeave={e => (e.currentTarget.style.color = '#b5935a')}
            >
              <span>SHOP THE COLLECTION</span>
              <span style={{ transition: 'transform 0.2s' }} className="group-hover:translate-x-1">→</span>
            </a>
          </motion.div>
        </div>

        {/* Stat cards — colored left borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20" ref={statsRef}>
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              style={{
                background: '#080808',
                borderLeft: `2px solid ${s.borderColor}`,
                border: `0.5px solid #141414`,
                borderLeftWidth: 2,
                borderLeftColor: s.borderColor,
                padding: '2rem',
              }}
            >
              <div className="font-bebas leading-tight mb-3" style={{ color: s.borderColor, fontSize: '1.4rem', letterSpacing: '0.05em' }}>{s.label}</div>
              <div className="font-dm font-light leading-relaxed" style={{ color: 'rgba(240,234,214,0.32)', fontSize: '0.85rem' }}>{s.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Lookbook 2×2 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.7 }}
          id="lookbook"
        >
          <div className="flex items-center gap-3 mb-6">
            <div style={{ width: 14, height: 1, background: '#b5935a' }} />
            <p className="font-dm font-light" style={{ fontSize: 9, letterSpacing: '0.45em', color: 'rgba(181,147,90,0.6)', textTransform: 'uppercase' }}>Lookbook</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {lookbook.map((src, i) => (
              <div key={i} className="group relative overflow-hidden aspect-square">
                <Image src={src} alt={`Lookbook ${i + 1}`} fill className="object-cover group-hover:scale-[1.05] transition-transform duration-700" unoptimized />
                <div className="absolute inset-0" style={{ background: 'rgba(3,3,3,0.28)' }} />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(181,147,90,0.12)' }}>
                  <div className="text-center">
                    <div className="font-bebas text-[#f0ead6] tracking-widest" style={{ fontSize: '1.6rem' }}>VER MÁS</div>
                    <div style={{ width: 30, height: 1, background: '#b5935a', margin: '6px auto 0' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
