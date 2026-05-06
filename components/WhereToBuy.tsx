'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const retailers = [
  {
    name: 'ZUMIEZ',
    desc: '300+ locations nationwide',
    detail: 'In-store & online. Coast to coast. The biggest streetwear retailer in the US carries Porfa.',
    href: 'https://www.zumiez.com/brands/porfa.html',
    cta: 'SHOP AT ZUMIEZ',
    badge: 'AVAILABLE NOW',
    badgeColor: '#1a6b3a',
    highlighted: true,
  },
  {
    name: 'PORFA THE BRAND',
    desc: 'Official brand website',
    detail: 'Full catalog. Exclusive drops. Direct from the brand.',
    href: 'https://porfavorthebrand.com',
    cta: 'SHOP OFFICIAL SITE',
    badge: 'OFFICIAL',
    badgeColor: '#b5935a',
    highlighted: false,
  },
  {
    name: 'MORE RETAILERS',
    desc: 'Expanding nationwide',
    detail: 'New partnerships dropping soon. Stay tuned via @porfavorthebrand.',
    href: 'https://instagram.com/porfavorthebrand',
    cta: 'FOLLOW FOR UPDATES',
    badge: 'COMING SOON',
    badgeColor: '#2a2a2a',
    highlighted: false,
  },
]

export default function WhereToBuy() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="where-to-buy" className="relative py-24 px-6 overflow-hidden" style={{ background: '#030303', borderTop: '0.5px solid #0f0f0f' }}>

      {/* Gold top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2" style={{
        width: 500, height: 1,
        background: 'linear-gradient(to right, transparent, rgba(181,147,90,0.3) 40%, rgba(181,147,90,0.3) 60%, transparent)',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>

        <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width: 14, height: 1, background: '#b5935a' }} />
            <p className="font-dm font-light" style={{ fontSize: 9, letterSpacing: '0.45em', color: '#b5935a', textTransform: 'uppercase' }}>Dónde Comprar</p>
          </div>
          <h2 className="font-bebas text-[#f0ead6] leading-none" style={{ fontSize: 'clamp(2.8rem,7vw,6rem)' }}>
            WHERE TO<br /><span style={{ color: '#b5935a' }}>BUY PORFA</span>
          </h2>
          <div style={{ width: 40, height: 1, background: 'rgba(181,147,90,0.45)', marginTop: '1.2rem' }} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {retailers.map((r, i) => (
            <motion.a
              key={r.name}
              href={r.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="group flex flex-col"
              style={{
                background: r.highlighted ? 'rgba(181,147,90,0.04)' : '#080808',
                border: r.highlighted ? '1px solid rgba(181,147,90,0.4)' : '0.5px solid #141414',
                padding: '2rem',
                transition: 'border-color 0.3s, background 0.3s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = r.highlighted ? '#b5935a' : 'rgba(181,147,90,0.3)'
                if (r.highlighted) (e.currentTarget as HTMLElement).style.background = 'rgba(181,147,90,0.07)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = r.highlighted ? 'rgba(181,147,90,0.4)' : '#141414'
                if (r.highlighted) (e.currentTarget as HTMLElement).style.background = 'rgba(181,147,90,0.04)'
              }}
            >
              {/* Badge */}
              <div className="font-dm font-bold self-start mb-6" style={{
                background: r.badgeColor,
                color: '#f0ead6',
                fontSize: 8,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                padding: '5px 12px',
              }}>
                {r.badge}
              </div>

              <div className="font-bebas mb-2 group-hover:text-[#b5935a] transition-colors" style={{ color: '#f0ead6', fontSize: '1.5rem', letterSpacing: '0.05em' }}>
                {r.name}
              </div>
              <div className="font-dm font-light mb-3" style={{ color: '#b5935a', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase' }}>{r.desc}</div>
              <div className="font-dm font-light leading-relaxed flex-1 mb-8" style={{ color: 'rgba(240,234,214,0.35)', fontSize: '0.85rem' }}>{r.detail}</div>

              <div className="flex items-center gap-2 font-dm font-light group-hover:text-[#f0ead6] transition-colors" style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#b5935a' }}>
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
