'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const heroStats = [
  { value: '300+', label: 'Zumiez Stores' },
  { value: '3.4M', label: 'TikTok' },
  { value: '52K', label: 'Brand IG' },
  { value: 'HTX', label: 'Houston' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#030303' }} id="hero">

      {/* ── NAV SPACER ─────────────────────────────── */}
      <div style={{ height: 72 }} />

      {/* ── LIVE BADGE ─────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex justify-center mb-5"
      >
        <div
          className="inline-flex items-center gap-2"
          style={{ border: '0.5px solid rgba(192,57,43,0.35)', padding: '5px 14px' }}
        >
          <span className="blink" style={{ width: 5, height: 5, borderRadius: '50%', background: '#c0392b', display: 'inline-block' }} />
          <span className="font-dm font-light" style={{ fontSize: 8, letterSpacing: '0.4em', color: '#c0392b', textTransform: 'uppercase' }}>
            Drop 003 — Live Now
          </span>
        </div>
      </motion.div>

      {/* ── SPLIT PANEL HERO ───────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.9 }}
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ height: 'clamp(460px, 80vh, 820px)' }}
      >
        {/* LEFT PANEL */}
        <div className="relative overflow-hidden group">
          <Image
            src="/lookbook-1.jpg"
            alt="Por Favor — Houston"
            fill
            className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-700"
            unoptimized
          />
          {/* dark overlay */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(3,3,3,0.82) 0%, rgba(3,3,3,0.25) 50%, rgba(3,3,3,0.45) 100%)' }} />

          {/* Top label */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute top-8 left-8"
          >
            <p className="font-dm font-light" style={{ fontSize: 8, letterSpacing: '0.45em', color: 'rgba(240,234,214,0.5)', textTransform: 'uppercase' }}>
              Est. 2020
            </p>
          </motion.div>

          {/* Bottom content */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <p className="font-dm font-light mb-2" style={{ fontSize: 9, letterSpacing: '0.45em', color: 'rgba(181,147,90,0.7)', textTransform: 'uppercase' }}>
                Houston, Texas
              </p>
              <h2 className="font-bebas leading-none mb-4" style={{ fontSize: 'clamp(3rem,7vw,5.5rem)', color: '#f0ead6' }}>
                BORN IN<br />THE BARRIO.
              </h2>
              {/* Mexican flag stripe */}
              <div className="flex overflow-hidden" style={{ height: 2, width: 48 }}>
                <div style={{ flex: 1, background: '#1a6b3a' }} />
                <div style={{ flex: 1, background: '#f0ead6' }} />
                <div style={{ flex: 1, background: '#c0392b' }} />
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="relative overflow-hidden group" style={{ borderLeft: '1px solid rgba(181,147,90,0.08)' }}>
          <Image
            src="/lookbook-2.jpg"
            alt="Por Favor — La Colección"
            fill
            className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-700"
            unoptimized
          />
          {/* dark overlay — slightly lighter to differentiate */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(3,3,3,0.78) 0%, rgba(3,3,3,0.15) 50%, rgba(3,3,3,0.38) 100%)' }} />

          {/* Top label */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            className="absolute top-8 right-8 text-right"
          >
            <p className="font-dm font-light" style={{ fontSize: 8, letterSpacing: '0.45em', color: 'rgba(240,234,214,0.5)', textTransform: 'uppercase' }}>
              300+ Zumiez
            </p>
          </motion.div>

          {/* Bottom content */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
            >
              <p className="font-dm font-light mb-2" style={{ fontSize: 9, letterSpacing: '0.45em', color: 'rgba(181,147,90,0.7)', textTransform: 'uppercase' }}>
                La Colección SS25
              </p>
              <h2 className="font-bebas leading-none mb-4" style={{ fontSize: 'clamp(3rem,7vw,5.5rem)', color: '#f0ead6' }}>
                BUILT FOR<br />
                <span style={{ color: '#b5935a' }}>THE WORLD.</span>
              </h2>
              <a
                href="https://www.zumiez.com/brands/porfa.html"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-dm font-light group/link"
                style={{ fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#b5935a', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#f0ead6')}
                onMouseLeave={e => (e.currentTarget.style.color = '#b5935a')}
              >
                <span>SHOP THE DROP</span>
                <span style={{ transition: 'transform 0.2s' }} className="group-hover/link:translate-x-1">→</span>
              </a>
            </motion.div>
          </div>

          {/* Vertical divider gold line — desktop only */}
          <div className="absolute left-0 top-12 bottom-12 hidden md:block" style={{ width: 1, background: 'linear-gradient(to bottom, transparent, rgba(181,147,90,0.3) 40%, rgba(181,147,90,0.3) 60%, transparent)' }} />
        </div>
      </motion.div>

      {/* ── STATS BAR ──────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="flex items-center justify-center gap-10 flex-wrap"
        style={{ borderTop: '0.5px solid rgba(181,147,90,0.1)', borderBottom: '0.5px solid rgba(181,147,90,0.1)', padding: '18px 24px' }}
      >
        {heroStats.map((s, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="font-bebas" style={{ color: '#b5935a', fontSize: '1.5rem', lineHeight: 1 }}>{s.value}</span>
            <span className="font-dm font-light" style={{ color: 'rgba(240,234,214,0.28)', fontSize: 8, letterSpacing: '0.35em', textTransform: 'uppercase', marginTop: 2 }}>{s.label}</span>
          </div>
        ))}
      </motion.div>

      {/* ── SCROLL HINT ────────────────────────────── */}
      <div className="flex flex-col items-center gap-2 py-4">
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
          <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
            <path d="M5 0v10M1 6l4 5 4-5" stroke="rgba(181,147,90,0.4)" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>

    </section>
  )
}
