'use client'
import Image from 'next/image'

const IMAGES = [
  '/product-1.jpg',
  '/product-4.jpg',
  '/product-5.jpg',
  '/product-6.jpg',
  '/product-2.jpg',
  '/product-3.jpg',
  '/drop003-lineup.jpg',
]

// Doubled for seamless loop
const STRIP = [...IMAGES, ...IMAGES, ...IMAGES]

export default function ProductStrip() {
  return (
    <div
      style={{
        background: '#030303',
        borderTop: '0.5px solid #0f0f0f',
        borderBottom: '0.5px solid #0f0f0f',
        overflow: 'hidden',
        padding: '0',
      }}
    >
      {/* Label row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 24px 0' }}>
        <div style={{ width: 14, height: 1, background: '#b5935a' }} />
        <span className="font-dm font-light" style={{ fontSize: 8, letterSpacing: '0.45em', color: 'rgba(181,147,90,0.5)', textTransform: 'uppercase' }}>
          SS2025 — La Colección
        </span>
      </div>

      {/* Scrolling strip */}
      <div
        style={{
          display: 'flex',
          animation: 'marquee-left 28s linear infinite',
          width: 'max-content',
          gap: 3,
          padding: '12px 0',
        }}
      >
        {STRIP.map((src, i) => (
          <div
            key={i}
            style={{
              position: 'relative',
              width: 180,
              height: 180,
              flexShrink: 0,
              overflow: 'hidden',
              background: '#0a0a0a',
            }}
          >
            <Image
              src={src}
              alt="Product"
              fill
              className="object-cover"
              style={{ filter: 'grayscale(20%) contrast(1.05)' }}
              unoptimized
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(181,147,90,0.04) 0%, transparent 60%)',
              pointerEvents: 'none',
            }} />
          </div>
        ))}
      </div>
    </div>
  )
}
