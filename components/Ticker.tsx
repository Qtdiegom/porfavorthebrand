'use client'

const ROW1 = 'POR FAVOR ✦ HECHO CON ORGULLO ✦ NOW AT ZUMIEZ ✦ LIMITED DROPS ✦ WEAR CULTURA ✦ SS2025 ✦ HOUSTON TX ✦ '
const ROW2 = 'DROP 003 ✦ OUT NOW ✦ PORFA THE BRAND ✦ GUADALUPE ✦ CHERRY ✦ DON\'T BREAK MY HEART ✦ J\'ADORE ✦ BY THE WAY ✦ '

const r1 = Array(14).fill(ROW1).join('')
const r2 = Array(14).fill(ROW2).join('')

export default function Ticker() {
  return (
    <div style={{ background: '#030303', borderTop: '0.5px solid #111', borderBottom: '0.5px solid #111', overflow: 'hidden' }}>
      {/* Row 1 — scrolls LEFT */}
      <div style={{ overflow: 'hidden', padding: '7px 0', borderBottom: '0.5px solid #0d0d0d' }}>
        <div
          className="font-dm font-light whitespace-nowrap"
          style={{
            animation: 'marquee-left 45s linear infinite',
            width: 'max-content',
            display: 'flex',
            fontSize: 8,
            letterSpacing: '0.32em',
            color: '#1e1e1e',
            textTransform: 'uppercase',
          }}
        >
          <span>{r1}</span>
          <span>{r1}</span>
        </div>
      </div>

      {/* Row 2 — scrolls RIGHT */}
      <div style={{ overflow: 'hidden', padding: '7px 0' }}>
        <div
          className="font-dm font-light whitespace-nowrap"
          style={{
            animation: 'marquee-right 38s linear infinite',
            width: 'max-content',
            display: 'flex',
            fontSize: 8,
            letterSpacing: '0.32em',
            color: '#1e1e1e',
            textTransform: 'uppercase',
          }}
        >
          <span>{r2}</span>
          <span>{r2}</span>
        </div>
      </div>
    </div>
  )
}
