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
  visible: { transition: { staggerChildren: 0.1 } },
}
const card = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function CollectionGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="drops" className="bg-[#080808] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-16"
        >
          <p className="font-dm text-[10px] tracking-[0.4em] text-[#b5935a] uppercase mb-3">— SS2025 Collection</p>
          <h2 className="font-bebas text-[clamp(3rem,8vw,7rem)] text-[#f0ead6] leading-none tracking-wide">
            LA COLECCIÓN
          </h2>
          <div className="w-14 h-[2px] bg-[#b5935a] mt-5" />
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {products.map((p, i) => (
            <motion.div key={i} variants={card}>
              <a
                href={p.url}
                target={p.img ? '_blank' : undefined}
                rel="noreferrer"
                className="group block bg-[#0d0d0d] border border-[#1e1e1e] hover:border-[#b5935a] transition-all duration-400 overflow-hidden"
              >
                {/* Image area */}
                <div className="relative aspect-square overflow-hidden">
                  {p.img ? (
                    <>
                      <Image
                        src={p.img}
                        alt={p.name}
                        fill
                        className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 to-transparent" />
                      {/* Hover CTA */}
                      <div className="absolute inset-0 flex items-center justify-center bg-[#080808]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="font-dm font-bold text-[11px] tracking-[0.2em] uppercase text-[#080808] bg-[#b5935a] px-6 py-3">
                          SHOP NOW →
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full bg-[#0a0a0a] border border-[#b5935a]/10 flex items-center justify-center">
                      <div className="text-center">
                        <div className="font-bebas text-6xl text-[#b5935a]/20 mb-2">???</div>
                        <div className="font-dm text-[9px] tracking-[0.35em] text-[#f0ead6]/20 uppercase">Coming Soon</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-5 border-t border-[#1e1e1e] group-hover:border-[#b5935a]/30 transition-colors duration-400">
                  <div className="font-dm text-[10px] text-[#b5935a] tracking-[0.25em] uppercase mb-1">{p.category}</div>
                  <div className="font-bebas text-[#f0ead6] text-2xl leading-tight tracking-wide">{p.name}</div>
                  <div className="font-dm text-[#b5935a]/80 text-sm mt-1">{p.price}</div>
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
            className="inline-block border border-[#b5935a]/40 text-[#b5935a] font-dm font-bold text-[11px] tracking-[0.2em] uppercase px-10 py-4 hover:bg-[#b5935a] hover:text-[#080808] transition-colors duration-200"
          >
            VER TODO EN ZUMIEZ →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
