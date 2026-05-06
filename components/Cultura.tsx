'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const stats = [
  { label: '300+ Zumiez Stores', sub: 'Coast to coast. Nationwide presence.' },
  { label: '52K Brand Followers', sub: 'La familia keeps growing. Join us.' },
  { label: 'Houston Born', sub: 'Texas roots. Global reach. Always Porfa.' },
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
    <section id="cultura" className="relative bg-[#050505] py-24 px-6 overflow-hidden">

      {/* Giant faded PF watermark */}
      <div
        className="absolute select-none pointer-events-none"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: "'Georgia', serif",
          fontSize: 'clamp(300px, 40vw, 600px)',
          fontWeight: 900,
          color: '#0c0c0c',
          lineHeight: 1,
          letterSpacing: '-0.05em',
          userSelect: 'none',
          whiteSpace: 'nowrap',
          zIndex: 0,
        }}
      >
        PF
      </div>

      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[1px]"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(181,147,90,0.4) 30%, rgba(181,147,90,0.4) 70%, transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
        {/* Headline + story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-4 h-[1px] bg-[#b5935a]" />
              <p className="font-dm font-light text-[9px] tracking-[0.45em] text-[#b5935a] uppercase">Nuestra Historia</p>
            </div>
            <h2 className="font-bebas text-[clamp(2.5rem,6vw,5.5rem)] text-[#f0ead6] leading-[0.9] mb-6">
              BORN IN THE<br />
              BARRIO.<br />
              <span className="text-[#b5935a]">BUILT FOR</span><br />
              THE WORLD.
            </h2>
            <div className="w-10 h-[1px] bg-[#b5935a]/60" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <p className="font-dm font-light text-[#f0ead6]/45 text-base leading-[1.9] mb-6">
              Por Favor The Brand is more than clothing — it&apos;s a declaration. Started by Mexican-Americans who grew up between two worlds, we built something that speaks to both without apology.
            </p>
            <p className="font-dm font-light text-[#f0ead6]/45 text-base leading-[1.9] mb-8">
              Every design carries the weight of our cultura, the hustle of the streets, and the unshakeable pride of knowing exactly who we are. We don&apos;t ask for permission. We just say <em className="font-playfair italic text-[#b5935a]">Por Favor</em> — and we make it happen.
            </p>

            {/* Brand quote with red left border */}
            <div className="border-l-2 border-[#c0392b] pl-5 mb-8">
              <p className="font-playfair italic text-[#f0ead6]/60 text-lg leading-snug">
                &ldquo;No es ilegal dejarlo todo por un sueño&rdquo;
              </p>
              <p className="font-dm font-light text-[9px] tracking-[0.35em] text-[#c0392b]/60 uppercase mt-2">— Porfa The Brand</p>
            </div>

            <a
              href="https://www.zumiez.com/brands/porfa.html"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 font-dm font-light text-[10px] tracking-[0.3em] uppercase text-[#b5935a] hover:text-[#f0ead6] transition-colors group"
            >
              <span>SHOP THE COLLECTION</span>
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
          </motion.div>
        </div>

        {/* Stat cards — with red left border */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20" ref={statsRef}>
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="relative group"
              style={{
                background: '#0a0a0a',
                border: '0.5px solid #181818',
                borderLeft: '2px solid #c0392b',
                padding: '2rem',
                transition: 'border-color 0.3s',
              }}
            >
              <div className="font-bebas text-[#b5935a] text-2xl tracking-wide leading-tight mb-3">{s.label}</div>
              <div className="font-dm font-light text-[#f0ead6]/35 text-sm leading-relaxed">{s.sub}</div>
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
            <div className="w-4 h-[1px] bg-[#b5935a]" />
            <p className="font-dm font-light text-[9px] tracking-[0.45em] text-[#b5935a] uppercase">Lookbook</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {lookbook.map((src, i) => (
              <div key={i} className="group relative overflow-hidden aspect-square">
                <Image
                  src={src}
                  alt={`Lookbook ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-[1.05] transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0" style={{ background: 'rgba(5,5,5,0.25)' }} />
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(181,147,90,0.15)' }}
                >
                  <div className="text-center">
                    <div className="font-bebas text-3xl text-[#f0ead6] tracking-widest">VER MÁS</div>
                    <div className="w-8 h-[1px] bg-[#b5935a] mx-auto mt-2" />
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
