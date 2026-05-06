'use client'

const PHRASE_1 = 'POR FAVOR ✦ HECHO CON ORGULLO ✦ NOW AT ZUMIEZ ✦ LIMITED DROPS ✦ WEAR CULTURA ✦ SS2025 ✦ HOUSTON TX ✦ '
const PHRASE_2 = 'DROP 003 ✦ OUT NOW ✦ DON&apos;T BREAK MY HEART ✦ CHERRY PORFA ✦ J&apos;ADORE ✦ GUADALUPE ✦ PORFA THE BRAND ✦ '

const r1 = Array(12).fill(PHRASE_1).join('')
const r2 = Array(12).fill(PHRASE_2).join('')

export default function Ticker() {
  return (
    <div className="bg-[#050505] border-y border-[#141414] overflow-hidden">
      {/* Row 1 — scrolls LEFT */}
      <div className="relative overflow-hidden py-2 border-b border-[#0f0f0f]">
        <div
          className="flex whitespace-nowrap font-dm font-light text-[9px] tracking-[0.3em] text-[#2a2a2a]"
          style={{ animation: 'marquee-left 40s linear infinite', width: 'max-content' }}
        >
          <span dangerouslySetInnerHTML={{ __html: r1 }} />
          <span dangerouslySetInnerHTML={{ __html: r1 }} />
        </div>
      </div>

      {/* Row 2 — scrolls RIGHT */}
      <div className="relative overflow-hidden py-2">
        <div
          className="flex whitespace-nowrap font-dm font-light text-[9px] tracking-[0.3em] text-[#2a2a2a]"
          style={{ animation: 'marquee-right 34s linear infinite', width: 'max-content' }}
        >
          <span dangerouslySetInnerHTML={{ __html: r2 }} />
          <span dangerouslySetInnerHTML={{ __html: r2 }} />
        </div>
      </div>
    </div>
  )
}
