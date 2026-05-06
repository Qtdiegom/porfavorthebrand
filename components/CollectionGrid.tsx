'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const products = [
  {
    name: 'By the Way Hoodie',
    price: '$78',
    category: 'Drop 002',
    img: '/product-1.jpg',
    url: 'https://www.zumiez.com/brands/porfa.html',
  },
  {
    name: "Don't Break My Heart Tee",
    price: '$48',
    category: 'Drop 003',
    img: '/product-4.jpg',
    url: 'https://porfavorthebrand.com',
  },
  {
    name: 'Cherry Porfa Tee',
    price: '$48',
    category: 'Drop 003',
    img: '/product-5.jpg',
    url: 'https://porfavorthebrand.com',
  },
  {
    name: "J'adore Porfa Tank",
    price: '$38',
    category: 'Drop 003',
    img: '/product-6.jpg',
    url: 'https://porfavorthebrand.com',
  },
  {
    name: 'Virgin Mary Drop',
    price: 'From $48',
    category: 'Drop 002',
    img: '/product-2.jpg',
    url: 'https://www.zumiez.com/brands/porfa.html',
  },
  {
    name: 'Full Lineup',
    price: 'View All',
    category: 'Collection',
    img: '/product-3.jpg',
    url: 'https://porfavorthebrand.com',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const card = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function CollectionGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="drops" className="bg-[#050505] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-[1px] bg-[#b5935a]" />
            <p className="font-dm font-light text-[9px] tracking-[0.45em] text-[#b5935a] uppercase">SS2025 Collection</p>
          </div>
          <h2 className="font-bebas text-[clamp(3rem,8vw,7rem)] text-[#f0ead6] leading-none tracking-wide">
            LA COLECCIÓN
          </h2>
          <div className="w-12 h-[1px] bg-[#b5935a]/60 mt-5" />
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {products.map((p, i) => (
            <motion.div key={i} variants={card}>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden"
                style={{ background: '#0a0a0a', border: '0.5px solid #141414', transition: 'border-color 0.4s' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(181,147,90,0.35)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#141414')}
              >
                {/* Image area */}
                <div className="relative aspect-square overflow-hidden" style={{ background: '#0a0a0a' }}>
                  {p.img ? (
                    <>
                      <Image
                        src={p.img}
                        alt={p.name}
                        fill
                        className="object-cover group-hover:scale-[1.06] transition-transform duration-700 ease-out"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent" />
                      {/* Hover CTA */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-350"
                        style={{ background: 'rgba(5,5,5,0.45)' }}>
                        <span className="font-dm font-bold text-[10px] tracking-[0.3em] uppercase px-6 py-3"
                          style={{ background: '#b5935a', color: '#050505' }}>
                          SHOP NOW →
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center" style={{ background: '#0a0a0a' }}>
                      <div className="text-center">
                        <div className="font-bebas text-6xl mb-2" style={{ color: 'rgba(181,147,90,0.08)' }}>???</div>
                        <div className="font-dm font-light text-[9px] tracking-[0.35em] uppercase" style={{ color: 'rgba(240,234,214,0.12)' }}>Coming Soon</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="font-dm font-light text-[9px] tracking-[0.3em] uppercase mb-1.5" style={{ color: 'rgba(181,147,90,0.6)' }}>{p.category}</div>
                  <div className="font-bebas text-[1.4rem] leading-tight tracking-wider group-hover:text-[#b5935a] transition-colors duration-300" style={{ color: 'rgba(240,234,214,0.88)' }}>{p.name}</div>
                  <div className="font-dm font-light text-xs mt-1.5 tracking-wide" style={{ color: 'rgba(240,234,214,0.28)' }}>{p.price}</div>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href="https://www.zumiez.com/brands/porfa.html"
            target="_blank"
            rel="noreferrer"
            className="inline-block font-dm font-light text-[9px] tracking-[0.35em] uppercase px-10 py-4 transition-colors duration-300"
            style={{ border: '0.5px solid rgba(181,147,90,0.25)', color: 'rgba(181,147,90,0.55)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#b5935a'; (e.currentTarget as HTMLElement).style.color = '#b5935a' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(181,147,90,0.25)'; (e.currentTarget as HTMLElement).style.color = 'rgba(181,147,90,0.55)' }}
          >
            VER TODO EN ZUMIEZ →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
