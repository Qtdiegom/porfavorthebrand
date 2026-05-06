'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const products = [
  {
    name: 'Full Drop 003 Lineup',
    price: 'Shop All',
    tag: 'OUT NOW',
    img: '/drop003-lineup.jpg',
    href: 'https://porfavorthebrand.com',
  },
  {
    name: "Don't Break My Heart Tee",
    price: '$48',
    tag: 'NEW',
    img: '/product-4.jpg',
    href: 'https://porfavorthebrand.com',
  },
  {
    name: 'Cherry Porfa Tee',
    price: '$48',
    tag: 'NEW',
    img: '/product-5.jpg',
    href: 'https://porfavorthebrand.com',
  },
  {
    name: "J'adore Porfa Tank",
    price: '$38',
    tag: 'NEW',
    img: '/product-6.jpg',
    href: 'https://porfavorthebrand.com',
  },
  {
    name: 'Guadalupe Hoodie',
    price: '$78',
    tag: 'BESTSELLER',
    img: '/product-2.jpg',
    href: 'https://porfavorthebrand.com',
  },
  {
    name: 'By the Way Set',
    price: '$128',
    tag: 'DROP 002',
    img: '/product-1.jpg',
    href: 'https://www.zumiez.com/brands/porfa.html',
  },
]

// CSS lip-print shapes as background motif
const lips = [
  { x: 8,  y: 12, r: -18, s: 0.7, o: 0.06 },
  { x: 85, y: 8,  r: 12,  s: 0.9, o: 0.05 },
  { x: 92, y: 55, r: -8,  s: 0.6, o: 0.07 },
  { x: 15, y: 75, r: 22,  s: 0.8, o: 0.05 },
  { x: 50, y: 88, r: -5,  s: 0.65,o: 0.06 },
  { x: 72, y: 30, r: 15,  s: 0.75,o: 0.04 },
  { x: 35, y: 5,  r: -12, s: 0.55,o: 0.05 },
]

export default function DropThree() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-40px' })

  return (
    <section id="drop-003" className="relative bg-[#050505] py-28 px-6 overflow-hidden border-t border-[#c0392b]/20">

      {/* Animated lip-print bg motif */}
      {lips.map((l, i) => (
        <div
          key={i}
          className="absolute pointer-events-none select-none"
          style={{
            left: `${l.x}%`,
            top: `${l.y}%`,
            transform: `rotate(${l.r}deg) scale(${l.s})`,
            opacity: l.o,
            animation: `float-lip ${4 + i * 0.7}s ${i * 0.4}s ease-in-out infinite`,
          }}
        >
          {/* SVG lip print */}
          <svg width="80" height="50" viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 8 C28 8 14 16 8 26 C14 20 22 18 30 20 C34 21 37 24 40 24 C43 24 46 21 50 20 C58 18 66 20 72 26 C66 16 52 8 40 8Z" fill="#c0392b"/>
            <path d="M8 26 C12 34 22 42 40 44 C58 42 68 34 72 26 C62 32 52 34 40 34 C28 34 18 32 8 26Z" fill="#c0392b"/>
            <path d="M30 20 C34 21 37 24 40 24 C43 24 46 21 50 20 C46 22 43 26 40 26 C37 26 34 22 30 20Z" fill="#050505" opacity="0.4"/>
          </svg>
        </div>
      ))}

      {/* Red top glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: 'linear-gradient(to right, transparent, #c0392b 30%, #c0392b 70%, transparent)' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-40 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top, rgba(192,57,43,0.12) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>

        {/* Header — asymmetric, editorial */}
        <div className="mb-16" ref={headRef}>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={headInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-dm text-[10px] tracking-[0.45em] text-[#c0392b] uppercase mb-3"
          >
            — Drop 003 · Out Now
          </motion.p>

          {/* Big headline with cursive overlap */}
          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="font-bebas text-[clamp(3.5rem,10vw,9rem)] text-[#f0ead6] leading-[0.85]"
            >
              DON&apos;T<br />
              <span className="text-[#c0392b]">BREAK</span><br />
              MY HEART
            </motion.h2>
            {/* Cursive overlay */}
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              animate={headInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="absolute bottom-2 right-0 font-playfair italic text-[#c0392b]/30 text-[clamp(2rem,5vw,4.5rem)] leading-none pointer-events-none hidden lg:block"
            >
              Porfa
            </motion.span>
          </div>

          {/* Divider with lips motif */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={headInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="origin-left mt-6 flex items-center gap-4"
          >
            <div className="h-[1px] w-20 bg-[#c0392b]" />
            <svg width="20" height="13" viewBox="0 0 80 50" fill="none">
              <path d="M40 8 C28 8 14 16 8 26 C14 20 22 18 30 20 C34 21 37 24 40 24 C43 24 46 21 50 20 C58 18 66 20 72 26 C66 16 52 8 40 8Z" fill="#c0392b"/>
              <path d="M8 26 C12 34 22 42 40 44 C58 42 68 34 72 26 C62 32 52 34 40 34 C28 34 18 32 8 26Z" fill="#c0392b"/>
            </svg>
            <div className="h-[1px] flex-1 bg-[#c0392b]/20" />
            <span className="font-dm text-[9px] tracking-[0.35em] text-[#f0ead6]/30 uppercase">Porfavorthebrand.com</span>
          </motion.div>
        </div>

        {/* Product grid — magazine layout */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {products.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#c0392b] transition-all duration-300 overflow-hidden ${
                i === 0 ? 'lg:col-span-1 lg:row-span-2' : ''
              }`}
            >
              {/* Product image */}
              <div className={`relative w-full overflow-hidden bg-[#111] ${i === 0 ? 'aspect-[3/5]' : 'aspect-square'}`}>
                {p.img ? (
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-700"
                    unoptimized
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-bebas text-[#f0ead6]/10 text-3xl tracking-widest">PORFA</span>
                  </div>
                )}
                {/* Red overlay on hover */}
                <div className="absolute inset-0 bg-[#c0392b]/0 group-hover:bg-[#c0392b]/10 transition-all duration-300" />
                {/* Tag badge */}
                <div className="absolute top-3 left-3 font-dm text-[8px] tracking-[0.25em] uppercase px-2 py-1 bg-[#c0392b] text-[#f0ead6]">
                  {p.tag}
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="font-bebas text-[#f0ead6] text-lg tracking-wide leading-tight group-hover:text-[#c0392b] transition-colors">
                  {p.name}
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-dm text-[#f0ead6]/50 text-sm">{p.price}</span>
                  <span className="font-dm text-[10px] tracking-[0.2em] text-[#c0392b]/60 group-hover:text-[#c0392b] group-hover:translate-x-1 transition-all duration-200">
                    →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#c0392b]/15 pt-10"
        >
          <div>
            <p className="font-playfair italic text-[#f0ead6]/40 text-lg mb-1">
              &ldquo;No es illegal dejarlo todo por un sueño&rdquo;
            </p>
            <p className="font-dm text-[9px] tracking-[0.3em] text-[#c0392b]/50 uppercase">— Porfa The Brand</p>
          </div>
          <a
            href="https://porfavorthebrand.com"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 bg-[#c0392b] text-[#f0ead6] font-dm font-bold text-[11px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#f0ead6] hover:text-[#050505] transition-colors duration-200"
          >
            SHOP DROP 003
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float-lip {
          0%, 100% { transform: rotate(var(--r, 0deg)) scale(var(--s, 1)) translateY(0); }
          50%       { transform: rotate(var(--r, 0deg)) scale(var(--s, 1)) translateY(-12px); }
        }
      `}</style>
    </section>
  )
}
