'use client'

const PHRASE = 'POR FAVOR ✦ HECHO CON ORGULLO ✦ NOW AT ZUMIEZ ✦ LIMITED DROPS ✦ WEAR CULTURA ✦ SS2025 ✦ '
const repeated = Array(10).fill(PHRASE).join('')

export default function Ticker() {
  return (
    <div className="bg-[#080808] border-y border-[#b5935a]/15 overflow-hidden py-0.5">
      {/* Row 1 — left */}
      <div className="relative overflow-hidden py-2.5 border-b border-[#b5935a]/10">
        <div
          className="flex whitespace-nowrap font-bebas text-sm tracking-[0.22em] text-[#b5935a]"
          style={{ animation: 'marquee-left 32s linear infinite', width: 'max-content' }}
        >
          <span>{repeated}</span>
          <span>{repeated}</span>
        </div>
      </div>

      {/* Row 2 — right */}
      <div className="relative overflow-hidden py-2.5">
        <div
          className="flex whitespace-nowrap font-bebas text-sm tracking-[0.22em] text-[#f0ead6]/20"
          style={{ animation: 'marquee-right 26s linear infinite', width: 'max-content' }}
        >
          <span>{repeated}</span>
          <span>{repeated}</span>
        </div>
      </div>
    </div>
  )
}
