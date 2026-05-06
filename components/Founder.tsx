'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const socialStats = [
  { platform: 'TikTok', handle: '@santea_', stat: '3.4M', href: 'https://tiktok.com/@santea_' },
  { platform: 'YouTube', handle: 'Santea', stat: '750K', href: 'https://youtube.com/@santea' },
  { platform: 'Brand IG', handle: '@porfavorthebrand', stat: '52K', href: 'https://instagram.com/porfavorthebrand' },
]

export default function Founder() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="founder" className="relative bg-[#060606] py-28 px-6 overflow-hidden border-t border-[#b5935a]/10">
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(181,147,90,0.06) 0%, transparent 70%)`,
        }}
      />
      {/* Vertical label */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block">
        <span
          className="font-dm text-[9px] tracking-[0.5em] text-[#b5935a]/20 uppercase"
          style={{ writingMode: 'vertical-rl' }}
        >
          El Creador
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75 }}
          >
            <p className="font-dm text-[10px] tracking-[0.4em] text-[#b5935a] uppercase mb-4">— El Fundador</p>
            <h2 className="font-bebas text-[clamp(2.8rem,7vw,6rem)] text-[#f0ead6] leading-[0.88] mb-6">
              STARTED<br />
              FROM<br />
              <span className="text-[#b5935a]">HOUSTON.</span>
            </h2>
            <div className="w-10 h-[2px] bg-[#b5935a] mb-8" />
            <p className="font-dm text-[#f0ead6]/55 text-base leading-[1.9] mb-5">
              Santiago Albarran — known online as <em className="font-playfair italic text-[#b5935a]">Santea</em> — is the Houston-born Mexican-American creator behind Por Favor The Brand. He built a massive digital following before turning that energy into something you can wear.
            </p>
            <p className="font-dm text-[#f0ead6]/55 text-base leading-[1.9] mb-10">
              From viral content to 300+ Zumiez stores nationwide, Santea proved the brand wasn&apos;t just a flex — it was a movement rooted in cultura, community, and Houston pride.
            </p>
            <a
              href="https://instagram.com/santea__"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 font-dm text-[11px] tracking-[0.2em] uppercase text-[#b5935a] hover:text-[#f0ead6] transition-colors group border border-[#b5935a]/30 hover:border-[#b5935a] px-6 py-3.5"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
              <span>@SANTEA__</span>
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
          </motion.div>

          {/* Right — stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="space-y-4"
          >
            {socialStats.map((s, i) => (
              <motion.a
                key={s.platform}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.55 }}
                className="group flex items-center justify-between bg-[#0d0d0d] border border-[#1e1e1e] hover:border-[#b5935a] transition-all duration-300 p-6"
              >
                <div>
                  <div className="font-dm text-[9px] tracking-[0.3em] text-[#b5935a] uppercase mb-1">{s.platform}</div>
                  <div className="font-dm text-[#f0ead6]/50 text-sm">{s.handle}</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="font-bebas text-[#f0ead6] text-4xl tracking-wide group-hover:text-[#b5935a] transition-colors">
                    {s.stat}
                  </div>
                  <span className="text-[#b5935a]/30 group-hover:text-[#b5935a] group-hover:translate-x-1 transition-all duration-200">→</span>
                </div>
              </motion.a>
            ))}

            {/* Houston badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center gap-3 pt-2"
            >
              <div className="flex h-[2px] w-12 overflow-hidden">
                <div className="flex-1 bg-[#1a6b3a]" />
                <div className="flex-1 bg-[#f0ead6]" />
                <div className="flex-1 bg-[#c0392b]" />
              </div>
              <span className="font-dm text-[9px] tracking-[0.35em] text-[#f0ead6]/25 uppercase">
                Houston, Texas — Est. 2020
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
