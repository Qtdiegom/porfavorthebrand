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
    featured: true,
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
  visible: { transition: { staggerChildren: 0.07 } },
}
const card = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function CollectionGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="drops" style={{ background: '#030303', paddingTop: '6rem', paddingBottom: '6rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          style={{ marginBottom: '4rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <div style={{ width: 14, height: 1, background: '#b5935a' }} />
            <p className="font-dm font-light" style={{ fontSize: 9, letterSpacing: '0.45em', color: '#b5935a', textTransform: 'uppercase' }}>SS2025 Collection</p>
          </div>
          <h2 className="font-bebas text-[#f0ead6] leading-none" style={{ fontSize: 'clamp(2.8rem,7vw,6rem)' }}>
            LA COLECCIÓN
          </h2>
          <div style={{ width: 40, height: 1, background: 'rgba(181,147,90,0.45)', marginTop: '1.2rem' }} />
        </motion.div>

        {/* Grid — featured first + 2-col remainder */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Top row: featured large + 2 stacked */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[3px] mb-[3px]">

            {/* Featured card — 2 cols wide */}
            <motion.a
              variants={card}
              href={products[0].url}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden md:col-span-2 block"
              style={{ background: '#080808', aspectRatio: '2/1.1' }}
            >
              <Image src={products[0].img} alt={products[0].name} fill className="object-cover group-hover:scale-[1.04] transition-transform duration-700" unoptimized />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(3,3,3,0.85) 0%, rgba(3,3,3,0.1) 55%, transparent 100%)' }} />

              {/* "NEW" badge */}
              <div className="absolute top-5 left-5" style={{ background: '#b5935a', padding: '4px 10px' }}>
                <span className="font-dm font-bold" style={{ fontSize: 7, letterSpacing: '0.35em', color: '#030303', textTransform: 'uppercase' }}>NEW</span>
              </div>

              {/* Info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <div>
                  <p className="font-dm font-light" style={{ fontSize: 8, letterSpacing: '0.35em', color: 'rgba(181,147,90,0.7)', textTransform: 'uppercase', marginBottom: 4 }}>{products[0].category}</p>
                  <h3 className="font-bebas" style={{ fontSize: '2rem', color: '#f0ead6', letterSpacing: '0.05em', lineHeight: 1 }}>{products[0].name}</h3>
                </div>
                <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-dm font-light" style={{ fontSize: 9, letterSpacing: '0.3em', color: '#b5935a', textTransform: 'uppercase' }}>SHOP →</span>
                </div>
              </div>
            </motion.a>

            {/* Right: 2 stacked cards */}
            <div className="flex flex-col gap-[3px]">
              {products.slice(1, 3).map((p, i) => (
                <motion.a
                  key={i}
                  variants={card}
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative overflow-hidden block flex-1"
                  style={{ background: '#080808', aspectRatio: '1/0.8' }}
                >
                  <Image src={p.img} alt={p.name} fill className="object-cover group-hover:scale-[1.05] transition-transform duration-700" unoptimized />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(3,3,3,0.8) 0%, transparent 60%)' }} />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-dm font-light" style={{ fontSize: 7, letterSpacing: '0.3em', color: 'rgba(181,147,90,0.65)', textTransform: 'uppercase', marginBottom: 2 }}>{p.category}</p>
                    <h3 className="font-bebas" style={{ fontSize: '1.25rem', color: '#f0ead6', letterSpacing: '0.05em', lineHeight: 1 }}>{p.name}</h3>
                    <p className="font-dm font-light" style={{ fontSize: 9, color: 'rgba(240,234,214,0.3)', marginTop: 4 }}>{p.price}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Bottom row: 3 equal cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[3px]">
            {products.slice(3).map((p, i) => (
              <motion.a
                key={i}
                variants={card}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden block"
                style={{ background: '#080808', aspectRatio: '3/4' }}
              >
                <Image src={p.img} alt={p.name} fill className="object-cover group-hover:scale-[1.05] transition-transform duration-700" unoptimized />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(3,3,3,0.88) 0%, transparent 55%)' }} />

                {/* Hover full overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(3,3,3,0.3)' }}>
                  <span className="font-dm font-bold" style={{ fontSize: 8, letterSpacing: '0.3em', textTransform: 'uppercase', background: '#b5935a', color: '#030303', padding: '8px 18px' }}>
                    SHOP NOW →
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-dm font-light" style={{ fontSize: 7, letterSpacing: '0.35em', color: 'rgba(181,147,90,0.65)', textTransform: 'uppercase', marginBottom: 4 }}>{p.category}</p>
                  <h3 className="font-bebas" style={{ fontSize: '1.35rem', color: '#f0ead6', letterSpacing: '0.05em', lineHeight: 1 }}>{p.name}</h3>
                  <p className="font-dm font-light" style={{ fontSize: 9, color: 'rgba(240,234,214,0.3)', marginTop: 5 }}>{p.price}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          style={{ textAlign: 'center', marginTop: '3.5rem' }}
        >
          <a
            href="https://www.zumiez.com/brands/porfa.html"
            target="_blank"
            rel="noreferrer"
            className="font-dm font-light inline-block"
            style={{ fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', border: '0.5px solid rgba(181,147,90,0.25)', color: 'rgba(181,147,90,0.55)', padding: '14px 40px', transition: 'all 0.3s' }}
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
