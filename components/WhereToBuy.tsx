'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const retailers = [
  {
    name: 'ZUMIEZ',
    desc: '300+ locations nationwide',
    detail: 'In-store & online. Coast to coast.',
    href: 'https://www.zumiez.com/brands/porfa.html',
    cta: 'SHOP AT ZUMIEZ',
    badge: 'AVAILABLE NOW',
    badgeColor: '#1a6b3a',
  },
  {
    name: 'PORFA THE BRAND',
    desc: 'Official brand website',
    detail: 'Full catalog. Exclusive drops. Direct.',
    href: 'https://porfavorthebrand.com',
    cta: 'SHOP OFFICIAL SITE',
    badge: 'OFFICIAL',
    badgeColor: '#b5935a',
  },
  {
    name: 'MORE RETAILERS',
    desc: 'Expanding nationwide',
    detail: 'New partnerships dropping soon. Stay tuned.',
    href: 'https://instagram.com/porfavorthebrand',
    cta: 'FOLLOW FOR UPDATES',
    badge: 'COMING SOON',
    badgeColor: '#333',
  },
]

export default function WhereToBuy() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="where-to-buy" className="relative bg-[#050505] py-24 px-6 border-t border-[#b5935a]/10 overflow-hidden">
      {/* Gold glow top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px]"
        style={{ background: 'linear-gradient(to right, transparent, #b5935a 40%, #b5935a 60%, transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-16"
        >
          <p className="font-dm text-[10px] tracking-[0.4em] text-[#b5935a] uppercase mb-3">— Dónde Comprar</p>
          <h2 className="font-bebas text-[clamp(2.8rem,7vw,6rem)] text-[#f0ead6] leading-none">
            WHERE TO<br /><span className="text-[#b5935a]">BUY PORFA</span>
          </h2>
          <div className="w-14 h-[2px] bg-[#b5935a] mt-5" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {retailers.map((r, i) => (
            <motion.a
              key={r.name}
              href={r.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.14, duration: 0.6 }}
              className="group relative bg-[#0d0d0d] border border-[#1e1e1e] hover:border-[#b5935a] transition-all duration-300 p-8 flex flex-col"
            >
              {/* Badge */}
              <div
                className="inline-block font-dm text-[8px] tracking-[0.3em] uppercase px-3 py-1.5 mb-6 self-start"
                style={{ backgroundColor: r.badgeColor, color: '#f0ead6' }}
              >
                {r.badge}
              </div>

              <div className="font-bebas text-[#f0ead6] text-2xl tracking-wide leading-tight mb-2 group-hover:text-[#b5935a] transition-colors">
                {r.name}
              </div>
              <div className="font-dm text-[#b5935a] text-[11px] tracking-[0.15em] uppercase mb-3">{r.desc}</div>
              <div className="font-dm text-[#f0ead6]/40 text-sm leading-relaxed mb-8 flex-1">{r.detail}</div>

              <div className="flex items-center gap-2 font-dm text-[10px] tracking-[0.2em] uppercase text-[#b5935a] group-hover:text-[#f0ead6] transition-colors">
                <span>{r.cta}</span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
