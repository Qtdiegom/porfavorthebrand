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

const aztecSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90"><circle cx="45" cy="45" r="42" fill="none" stroke="#b5935a" stroke-width="1"/><circle cx="45" cy="45" r="30" fill="none" stroke="#b5935a" stroke-width="0.5"/><circle cx="45" cy="45" r="18" fill="none" stroke="#b5935a" stroke-width="0.5"/><circle cx="45" cy="45" r="6" fill="none" stroke="#b5935a" stroke-width="1"/><line x1="45" y1="3" x2="45" y2="27" stroke="#b5935a" stroke-width="1.2"/><line x1="45" y1="63" x2="45" y2="87" stroke="#b5935a" stroke-width="1.2"/><line x1="3" y1="45" x2="27" y2="45" stroke="#b5935a" stroke-width="1.2"/><line x1="63" y1="45" x2="87" y2="45" stroke="#b5935a" stroke-width="1.2"/><line x1="18" y1="18" x2="33" y2="33" stroke="#b5935a" stroke-width="0.8"/><line x1="57" y1="57" x2="72" y2="72" stroke="#b5935a" stroke-width="0.8"/><line x1="72" y1="18" x2="57" y2="33" stroke="#b5935a" stroke-width="0.8"/><line x1="18" y1="72" x2="33" y2="57" stroke="#b5935a" stroke-width="0.8"/></svg>`

export default function Cultura() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' })

  return (
    <section id="cultura" className="relative bg-[#080808] py-24 px-6 overflow-hidden">
      {/* Aztec bg */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(aztecSvg)}")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '90px 90px',
          opacity: 0.05,
        }}
      />
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px]"
        style={{ background: 'linear-gradient(to bottom, transparent, #b5935a 30%, #b5935a 70%, transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
        {/* Headline + story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="font-dm text-[10px] tracking-[0.4em] text-[#b5935a] uppercase mb-4">— Nuestra Historia</p>
            <h2 className="font-bebas text-[clamp(2.5rem,6vw,5.5rem)] text-[#f0ead6] leading-[0.9] mb-6">
              BORN IN THE<br />
              BARRIO.<br />
              <span className="text-[#b5935a]">BUILT FOR</span><br />
              THE WORLD.
            </h2>
            <div className="w-10 h-[2px] bg-[#b5935a]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <p className="font-dm text-[#f0ead6]/55 text-base leading-[1.9] mb-6">
              Por Favor The Brand is more than clothing — it&apos;s a declaration. Started by Mexican-Americans who grew up between two worlds, we built something that speaks to both without apology.
            </p>
            <p className="font-dm text-[#f0ead6]/55 text-base leading-[1.9] mb-8">
              Every design carries the weight of our cultura, the hustle of the streets, and the unshakeable pride of knowing exactly who we are. We don&apos;t ask for permission. We just say <em className="font-playfair italic text-[#b5935a]">Por Favor</em> — and we make it happen. Now at Zumiez stores coast to coast.
            </p>
            <a
              href="https://www.zumiez.com/brands/porfa.html"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 font-dm text-[11px] tracking-[0.2em] uppercase text-[#b5935a] hover:text-[#f0ead6] transition-colors group"
            >
              <span>SHOP THE COLLECTION</span>
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
          </motion.div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20" ref={statsRef}>
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="bg-[#0d0d0d] border border-[#b5935a]/20 p-8 hover:border-[#b5935a]/50 transition-colors duration-300"
            >
              <div className="font-bebas text-[#b5935a] text-2xl tracking-wide leading-tight mb-3">{s.label}</div>
              <div className="font-dm text-[#f0ead6]/40 text-sm leading-relaxed">{s.sub}</div>
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
          <p className="font-dm text-[10px] tracking-[0.4em] text-[#b5935a] uppercase mb-6">— Lookbook</p>
          <div className="grid grid-cols-2 gap-3">
            {lookbook.map((src, i) => (
              <div key={i} className="group relative overflow-hidden aspect-square">
                <Image
                  src={src}
                  alt={`Lookbook ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-[1.05] transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-[#080808]/30" />
                <div className="absolute inset-0 flex items-center justify-center bg-[#b5935a]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
