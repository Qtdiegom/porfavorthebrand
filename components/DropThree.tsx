'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const drops = [
  { name: "Don't Break My Heart Tee", price: '$48', img: '/product-4.jpg', href: 'https://porfavorthebrand.com', tag: 'NEW' },
  { name: 'Cherry Porfa Tee',         price: '$48', img: '/render-tee-cherry-3d.png', href: 'https://porfavorthebrand.com', tag: 'NEW' },
  { name: "J'adore Porfa Tank",       price: '$38', img: '/product-6.jpg', href: 'https://porfavorthebrand.com', tag: 'NEW' },
  { name: 'Guadalupe Hoodie',          price: '$78', img: '/product-2.jpg', href: 'https://www.zumiez.com/brands/porfa.html', tag: 'BESTSELLER' },
]

export default function DropThree() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="drop-003" ref={ref} style={{ background: '#030303', overflow: 'hidden' }}>

      {/* ── FULL-BLEED EDITORIAL BANNER ──────── */}
      <div className="relative" style={{ height: 'clamp(420px, 65vh, 720px)' }}>
        <Image
          src="/drop003-lineup.jpg"
          alt="Drop 003 — Por Favor The Brand"
          fill
          className="object-cover object-top"
          unoptimized
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(3,3,3,0.88) 0%, rgba(3,3,3,0.45) 50%, rgba(3,3,3,0.25) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #030303 0%, transparent 40%)' }} />

        {/* Red top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: 'linear-gradient(to right, transparent, rgba(192,57,43,0.6) 30%, rgba(192,57,43,0.6) 70%, transparent)' }} />

        {/* Content */}
        <div className="absolute inset-0 flex items-center" style={{ padding: '0 clamp(1.5rem,5vw,4rem)' }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-dm font-light mb-3" style={{ fontSize: 9, letterSpacing: '0.45em', color: '#c0392b', textTransform: 'uppercase' }}>
              Drop 003 · Out Now
            </p>
            <h2 className="font-bebas leading-[0.88] mb-6" style={{ fontSize: 'clamp(3.5rem,10vw,9rem)', color: '#f0ead6' }}>
              DON&apos;T<br />
              <span style={{ color: '#c0392b' }}>BREAK</span><br />
              MY HEART
            </h2>

            {/* Flag + tagline */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex overflow-hidden" style={{ height: 2, width: 40 }}>
                <div style={{ flex: 1, background: '#1a6b3a' }} />
                <div style={{ flex: 1, background: '#f0ead6' }} />
                <div style={{ flex: 1, background: '#c0392b' }} />
              </div>
              <p className="font-playfair italic" style={{ color: 'rgba(240,234,214,0.4)', fontSize: '0.95rem' }}>
                &ldquo;No es ilegal dejarlo todo por un sueño&rdquo;
              </p>
            </div>

            <a
              href="https://porfavorthebrand.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 font-dm font-bold group"
              style={{ background: '#c0392b', color: '#f0ead6', fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', padding: '13px 28px', transition: 'background 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#e04030')}
              onMouseLeave={e => (e.currentTarget.style.background = '#c0392b')}
            >
              SHOP DROP 003
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
          </motion.div>
        </div>

        {/* DROP 003 vertical text right side */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-1" style={{ writingMode: 'vertical-rl' }}>
          <span className="font-dm font-light" style={{ fontSize: 8, letterSpacing: '0.45em', color: 'rgba(192,57,43,0.3)', textTransform: 'uppercase' }}>
            Por Favor The Brand · SS2025
          </span>
        </div>
      </div>

      {/* ── PRODUCT ROW ──────────────────────── */}
      <div style={{ padding: '0 1.5rem 6rem', maxWidth: '80rem', margin: '0 auto' }}>

        {/* Divider label */}
        <div className="flex items-center gap-4 mb-8" style={{ paddingTop: '3.5rem', borderTop: '0.5px solid rgba(192,57,43,0.12)' }}>
          <div style={{ width: 14, height: 1, background: '#c0392b' }} />
          <p className="font-dm font-light" style={{ fontSize: 9, letterSpacing: '0.45em', color: 'rgba(192,57,43,0.6)', textTransform: 'uppercase' }}>
            Todo el Drop 003
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[3px]">
          {drops.map((p, i) => {
            const isFlip = p.img === '/render-tee-cherry-3d.png'
            return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.6 }}
              className="group relative"
              style={{ aspectRatio: '3/4', perspective: '900px' }}
            >
              {isFlip ? (
                /* ── FLIP CARD (Cherry Porfa Tee only) ── */
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full h-full"
                  style={{ transformStyle: 'preserve-3d', transition: 'transform 0.7s cubic-bezier(0.4,0.2,0.2,1)', transform: 'rotateY(0deg)' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'rotateY(180deg)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'rotateY(0deg)')}
                >
                  {/* FRONT face */}
                  <div className="absolute inset-0 overflow-hidden" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', background: '#080808' }}>
                    <Image src={p.img} alt={p.name} fill className="object-cover" unoptimized />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(3,3,3,0.85) 0%, transparent 55%)' }} />
                    <div className="absolute top-3 left-3" style={{ background: '#c0392b', padding: '3px 8px' }}>
                      <span className="font-dm font-bold" style={{ fontSize: 7, letterSpacing: '0.3em', color: '#f0ead6', textTransform: 'uppercase' }}>{p.tag}</span>
                    </div>
                    <div className="absolute top-3 right-3" style={{ background: 'rgba(3,3,3,0.6)', border: '0.5px solid rgba(240,234,214,0.15)', padding: '3px 7px' }}>
                      <span className="font-dm font-light" style={{ fontSize: 7, letterSpacing: '0.3em', color: 'rgba(240,234,214,0.5)', textTransform: 'uppercase' }}>FRONT</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-bebas" style={{ fontSize: '1.2rem', color: '#f0ead6', letterSpacing: '0.05em', lineHeight: 1, marginBottom: 4 }}>{p.name}</h3>
                      <p className="font-dm font-light" style={{ fontSize: 9, color: 'rgba(240,234,214,0.3)' }}>{p.price}</p>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="font-dm font-light" style={{ fontSize: 7, letterSpacing: '0.2em', color: 'rgba(240,234,214,0.25)', textTransform: 'uppercase' }}>hover to flip →</span>
                    </div>
                  </div>

                  {/* BACK face */}
                  <div className="absolute inset-0 overflow-hidden" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)', background: '#080808' }}>
                    <Image src="/render-tee-cherry-back.png" alt={`${p.name} — back`} fill className="object-cover" unoptimized />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(3,3,3,0.85) 0%, transparent 55%)' }} />
                    <div className="absolute top-3 left-3" style={{ background: 'rgba(192,57,43,0.15)', border: '0.5px solid #c0392b', padding: '3px 8px' }}>
                      <span className="font-dm font-bold" style={{ fontSize: 7, letterSpacing: '0.3em', color: '#c0392b', textTransform: 'uppercase' }}>BACK</span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center" style={{ paddingBottom: '3rem' }}>
                      <div className="text-center">
                        <div className="font-bebas" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: 'rgba(240,234,214,0.08)', letterSpacing: '0.15em' }}>ONE OF ONE</div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                      <div>
                        <h3 className="font-bebas" style={{ fontSize: '1.2rem', color: '#f0ead6', letterSpacing: '0.05em', lineHeight: 1, marginBottom: 4 }}>{p.name}</h3>
                        <p className="font-dm font-light" style={{ fontSize: 9, color: 'rgba(240,234,214,0.3)' }}>{p.price}</p>
                      </div>
                      <span className="font-dm font-bold" style={{ fontSize: 7, letterSpacing: '0.3em', textTransform: 'uppercase', background: '#c0392b', color: '#f0ead6', padding: '6px 12px' }}>
                        SHOP →
                      </span>
                    </div>
                  </div>
                </a>
              ) : (
                /* ── REGULAR CARD ── */
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block overflow-hidden w-full h-full"
                  style={{ background: '#080808' }}
                >
                  <Image src={p.img} alt={p.name} fill className="object-cover group-hover:scale-[1.05] transition-transform duration-700" unoptimized />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(3,3,3,0.85) 0%, transparent 55%)' }} />
                  <div className="absolute top-3 left-3" style={{ background: '#c0392b', padding: '3px 8px' }}>
                    <span className="font-dm font-bold" style={{ fontSize: 7, letterSpacing: '0.3em', color: '#f0ead6', textTransform: 'uppercase' }}>{p.tag}</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(3,3,3,0.35)' }}>
                    <span className="font-dm font-bold" style={{ fontSize: 7, letterSpacing: '0.3em', textTransform: 'uppercase', background: '#c0392b', color: '#f0ead6', padding: '8px 16px' }}>
                      SHOP →
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bebas" style={{ fontSize: '1.2rem', color: '#f0ead6', letterSpacing: '0.05em', lineHeight: 1, marginBottom: 4 }}>{p.name}</h3>
                    <p className="font-dm font-light" style={{ fontSize: 9, color: 'rgba(240,234,214,0.3)' }}>{p.price}</p>
                  </div>
                </a>
              )}
            </motion.div>
            )
          })}
        </div>
      </div>

    </section>
  )
}
