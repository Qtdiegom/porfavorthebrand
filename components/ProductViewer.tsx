'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const products = [
  {
    name: 'Star Tee',
    price: '$42',
    category: 'Tee',
    front: 'https://scene7.zumiez.com/is/image/zumiez/product_main_medium/Porfa-Star-Black-T-Shirt-_402705-front-US.jpg',
    back: 'https://scene7.zumiez.com/is/image/zumiez/product_main_medium/Porfa-Star-Black-T-Shirt-_402705-back-US.jpg',
    url: 'https://www.zumiez.com/porfa-star-black-t-shirt.html',
    comingSoon: false,
  },
  {
    name: 'Forgive Tee',
    price: '$42',
    category: 'Tee',
    front: 'https://scene7.zumiez.com/is/image/zumiez/product_main_medium/Porfa-Forgive-Black-T-Shirt-_402703-front-US.jpg',
    back: 'https://scene7.zumiez.com/is/image/zumiez/product_main_medium/Porfa-Forgive-Black-T-Shirt-_402703-back-US.jpg',
    url: 'https://www.zumiez.com/porfa-forgive-black-t-shirt.html',
    comingSoon: false,
  },
  {
    name: 'Stones Sweats',
    price: '$68',
    category: 'Bottoms',
    front: 'https://scene7.zumiez.com/is/image/zumiez/product_main_medium/Porfa-Stones-Black-Baggy-Sweatpants-_406604-front-US.jpg',
    back: 'https://scene7.zumiez.com/is/image/zumiez/product_main_medium/Porfa-Stones-Black-Baggy-Sweatpants-_406604-back-US.jpg',
    url: 'https://www.zumiez.com/porfa-stones-black-baggy-sweatpants.html',
    comingSoon: false,
  },
  { name: '???', price: '???', category: 'Coming Soon', front: '', back: '', url: '#', comingSoon: true },
  { name: '???', price: '???', category: 'Coming Soon', front: '', back: '', url: '#', comingSoon: true },
  { name: '???', price: '???', category: 'Coming Soon', front: '', back: '', url: '#', comingSoon: true },
]

export default function ProductViewer() {
  const [current, setCurrent] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [flipped, setFlipped] = useState(false)
  const timer = useRef<ReturnType<typeof setInterval>>()

  useEffect(() => {
    if (!hovered) {
      timer.current = setInterval(() => {
        setCurrent(p => (p + 1) % products.length)
        setFlipped(false)
      }, 4000)
    }
    return () => clearInterval(timer.current)
  }, [hovered])

  const p = products[current]

  return (
    <div className="flex flex-col items-center gap-6 select-none">
      {/* 3D viewer area */}
      <div className="relative" style={{ width: 300, height: 360 }}>
        {/* Gold glow rings */}
        <div className="glow-ring absolute inset-0 rounded-sm pointer-events-none" style={{ border: '1px solid rgba(181,147,90,0.25)', transform: 'scale(1.08)' }} />
        <div className="absolute inset-0 rounded-sm pointer-events-none" style={{ border: '1px solid rgba(181,147,90,0.1)', transform: 'scale(1.18)' }} />
        <div className="absolute inset-0 rounded-sm pointer-events-none" style={{ border: '1px solid rgba(181,147,90,0.05)', transform: 'scale(1.3)' }} />

        <div
          style={{ width: '100%', height: '100%', perspective: '1200px' }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              style={{ width: '100%', height: '100%' }}
            >
              {p.comingSoon ? (
                <div className="w-full h-full bg-[#0f0f0f] border border-[#b5935a]/15 flex items-center justify-center overflow-hidden relative">
                  {/* Aztec pattern inside */}
                  <div className="absolute inset-0 opacity-[0.06]"
                    style={{ backgroundImage: `url("data:image/svg+xml,${encodeURIComponent('<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'60\' height=\'60\' viewBox=\'0 0 60 60\'><circle cx=\'30\' cy=\'30\' r=\'28\' fill=\'none\' stroke=\'%23b5935a\' stroke-width=\'1\'/><circle cx=\'30\' cy=\'30\' r=\'18\' fill=\'none\' stroke=\'%23b5935a\' stroke-width=\'0.5\'/><line x1=\'30\' y1=\'2\' x2=\'30\' y2=\'14\' stroke=\'%23b5935a\' stroke-width=\'1\'/><line x1=\'30\' y1=\'46\' x2=\'30\' y2=\'58\' stroke=\'%23b5935a\' stroke-width=\'1\'/><line x1=\'2\' y1=\'30\' x2=\'14\' y2=\'30\' stroke=\'%23b5935a\' stroke-width=\'1\'/><line x1=\'46\' y1=\'30\' x2=\'58\' y2=\'30\' stroke=\'%23b5935a\' stroke-width=\'1\'/></svg>')}")`, backgroundRepeat: 'repeat', backgroundSize: '60px 60px' }}
                  />
                  <div className="text-center z-10">
                    <div className="font-bebas text-7xl text-[#b5935a]/40 mb-1">???</div>
                    <div className="font-dm text-[10px] tracking-[0.3em] text-[#f0ead6]/30 uppercase">Coming Soon</div>
                  </div>
                </div>
              ) : (
                /* Flip card */
                <div
                  className="w-full h-full relative"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    transition: 'transform 0.75s cubic-bezier(0.4,0,0.2,1)',
                  }}
                  onClick={() => setFlipped(f => !f)}
                >
                  {/* Front face */}
                  <div
                    className="absolute inset-0 overflow-hidden bg-[#0f0f0f] border border-[#b5935a]/20"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <Image src={p.front} alt={p.name} fill className="object-cover" unoptimized priority />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="font-dm text-[10px] text-[#b5935a] tracking-[0.25em] uppercase mb-0.5">{p.category}</div>
                      <div className="font-bebas text-[#f0ead6] text-2xl leading-none">{p.name}</div>
                      <div className="font-dm text-[#b5935a] text-sm mt-0.5">{p.price}</div>
                    </div>
                    <div className="absolute top-3 right-3 font-dm text-[9px] text-[#f0ead6]/25 tracking-widest uppercase">TAP TO FLIP →</div>
                  </div>
                  {/* Back face */}
                  <div
                    className="absolute inset-0 overflow-hidden bg-[#0f0f0f] border border-[#b5935a]/20"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <Image src={p.back} alt={`${p.name} back`} fill className="object-cover" unoptimized />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        onClick={e => e.stopPropagation()}
                        className="inline-block bg-[#b5935a] text-[#080808] font-dm font-bold text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 hover:bg-[#f0ead6] transition-colors"
                      >
                        SHOP NOW →
                      </a>
                    </div>
                    <div className="absolute top-3 right-3 font-dm text-[9px] text-[#f0ead6]/25 tracking-widest uppercase">← FLIP BACK</div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center gap-2">
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); setFlipped(false) }}
            style={{
              width: i === current ? 24 : 6,
              height: 6,
              borderRadius: 3,
              background: i === current ? '#b5935a' : 'rgba(240,234,214,0.2)',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>

      {/* Label */}
      <div className="text-center">
        <div className="font-bebas text-[#f0ead6] text-xl tracking-wide">
          {p.comingSoon ? 'COMING SOON' : p.name}
        </div>
        {!p.comingSoon && (
          <div className="font-dm text-[#b5935a] text-sm">{p.price} · {p.category}</div>
        )}
      </div>
    </div>
  )
}
