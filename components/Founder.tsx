'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const socialStats = [
  { platform: 'TikTok', handle: '@santea_', stat: '3.4M', href: 'https://tiktok.com/@santea_', color: '#b5935a' },
  { platform: 'YouTube', handle: 'Santea', stat: '750K', href: 'https://youtube.com/@santea', color: '#c0392b' },
  { platform: 'Brand IG', handle: '@porfavorthebrand', stat: '52K', href: 'https://instagram.com/porfavorthebrand', color: '#1a6b3a' },
]

export default function Founder() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="founder" className="relative py-24 px-6 overflow-hidden" style={{ background: '#030303', borderTop: '0.5px solid #0f0f0f' }}>

      {/* Subtle gold glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none" style={{
        width: 500, height: 1,
        background: 'linear-gradient(to right, transparent, rgba(181,147,90,0.25) 40%, rgba(181,147,90,0.25) 60%, transparent)',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-14"
        >
          <div style={{ width: 14, height: 1, background: '#b5935a' }} />
          <p className="font-dm font-light" style={{ fontSize: 9, letterSpacing: '0.45em', color: '#b5935a', textTransform: 'uppercase' }}>El Fundador</p>
        </motion.div>

        {/* Two column: Photo LEFT, Bio RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT — Real Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75 }}
            className="relative"
          >
            <div className="relative overflow-hidden" style={{ aspectRatio: '3/4', border: '0.5px solid rgba(181,147,90,0.15)' }}>
              <Image
                src="/founder.jpg"
                alt="Santea — Founder of Por Favor The Brand"
                fill
                className="object-cover object-top"
                unoptimized
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #030303 0%, transparent 40%)' }} />

              {/* Name tag */}
              <div className="absolute bottom-6 left-6">
                <div className="font-bebas tracking-widest" style={{ color: '#f0ead6', fontSize: '1.4rem' }}>SANTEA</div>
                <div className="font-dm font-light" style={{ fontSize: 8, letterSpacing: '0.35em', color: '#b5935a', textTransform: 'uppercase' }}>Founder · Houston, TX</div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 left-0" style={{ width: 28, height: 28, borderTop: '1.5px solid #b5935a', borderLeft: '1.5px solid #b5935a' }} />
              <div className="absolute top-0 right-0" style={{ width: 28, height: 28, borderTop: '1.5px solid #b5935a', borderRight: '1.5px solid #b5935a' }} />
            </div>

            {/* Houston badge below photo */}
            <div className="flex items-center gap-3 mt-5">
              <div className="flex overflow-hidden" style={{ height: 2, width: 40 }}>
                <div style={{ flex: 1, background: '#1a6b3a' }} />
                <div style={{ flex: 1, background: '#f0ead6' }} />
                <div style={{ flex: 1, background: '#c0392b' }} />
              </div>
              <span className="font-dm font-light" style={{ fontSize: 9, letterSpacing: '0.35em', color: 'rgba(240,234,214,0.22)', textTransform: 'uppercase' }}>
                Houston, Texas — Est. 2020
              </span>
            </div>
          </motion.div>

          {/* RIGHT — Bio + stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.15 }}
          >
            <h2 className="font-bebas text-[#f0ead6] leading-[0.88] mb-6" style={{ fontSize: 'clamp(2.8rem,7vw,6rem)' }}>
              STARTED<br />
              FROM<br />
              <span style={{ color: '#b5935a' }}>HOUSTON.</span>
            </h2>
            <div style={{ width: 40, height: 1, background: 'rgba(181,147,90,0.5)', marginBottom: '2rem' }} />

            <p className="font-dm font-light leading-[1.9] mb-4" style={{ color: 'rgba(240,234,214,0.45)', fontSize: '0.95rem' }}>
              Santiago Albarran — known online as <em className="font-playfair italic" style={{ color: '#b5935a' }}>Santea</em> — is the Houston-born Mexican-American creator behind Por Favor The Brand. He built a massive digital following before turning that energy into something you can wear.
            </p>
            <p className="font-dm font-light leading-[1.9] mb-10" style={{ color: 'rgba(240,234,214,0.45)', fontSize: '0.95rem' }}>
              From viral content to 300+ Zumiez stores nationwide, Santea proved the brand wasn&apos;t just a flex — it was a movement rooted in cultura, community, and Houston pride.
            </p>

            {/* Social stat cards */}
            <div className="space-y-2 mb-8">
              {socialStats.map((s, i) => (
                <motion.a
                  key={s.platform}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.35 + i * 0.1, duration: 0.5 }}
                  className="group flex items-center justify-between"
                  style={{
                    background: '#080808',
                    border: '0.5px solid #141414',
                    borderLeft: `2px solid ${s.color}`,
                    padding: '16px 20px',
                    transition: 'border-color 0.3s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = s.color)}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.border = '0.5px solid #141414'; (e.currentTarget as HTMLElement).style.borderLeft = `2px solid ${s.color}` }}
                >
                  <div>
                    <div className="font-dm font-light" style={{ fontSize: 8, letterSpacing: '0.3em', color: s.color, textTransform: 'uppercase', marginBottom: 3 }}>{s.platform}</div>
                    <div className="font-dm font-light" style={{ color: 'rgba(240,234,214,0.4)', fontSize: '0.8rem' }}>{s.handle}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="font-bebas group-hover:text-[#b5935a] transition-colors" style={{ color: '#f0ead6', fontSize: '2rem', letterSpacing: '0.05em' }}>{s.stat}</div>
                    <span style={{ color: 'rgba(181,147,90,0.3)', transition: 'all 0.2s' }} className="group-hover:text-[#b5935a] group-hover:translate-x-1">→</span>
                  </div>
                </motion.a>
              ))}
            </div>

            <a href="https://instagram.com/santea__" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 group font-dm font-light"
              style={{ border: '0.5px solid rgba(181,147,90,0.3)', color: '#b5935a', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', padding: '12px 22px', transition: 'all 0.25s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#b5935a'; (e.currentTarget as HTMLElement).style.color = '#f0ead6' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(181,147,90,0.3)'; (e.currentTarget as HTMLElement).style.color = '#b5935a' }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
              <span>@SANTEA__</span>
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
