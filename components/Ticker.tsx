'use client'

const ROW1 = 'POR FAVOR ✦ HECHO CON ORGULLO ✦ NOW AT ZUMIEZ ✦ LIMITED DROPS ✦ WEAR CULTURA ✦ SS2025 ✦ HOUSTON TX ✦ '
const ROW2 = 'DROP 003 ✦ OUT NOW ✦ PORFA THE BRAND ✦ GUADALUPE ✦ CHERRY ✦ DON\'T BREAK MY HEART ✦ J\'ADORE ✦ BY THE WAY ✦ '

const r1 = Array(14).fill(ROW1).join('')
const r2 = Array(14).fill(ROW2).join('')

export default function Ticker() {
  return (
    <div style={{ background: '#030303', borderTop: '0.5px solid rgba(181,147,90,0.08)', borderBottom: '0.5px solid rgba(181,147,90,0.08)', overflow: 'hidden' }}>
      {/* Row 1 — scrolls LEFT */}
      <div style={{ overflow: 'hidden', padding: '8px 0', borderBottom: '0.5px solid #0d0d0d' }}>
        <div
          className="font-dm font-light whitespace-nowrap"
          style={{
            animation: 'marquee-left 50s linear infinite',
            width: 'max-content',
            display: 'flex',
            fontSize: 8,
            letterSpacing: '0.38em',
            color: 'rgba(181,147,90,0.18)',
            textTransform: 'uppercase',
          }}
        >
          <span>{r1}</span>
          <span>{r1}</span>
        </div>
      </div>

      {/* Row 2 — scrolls RIGHT */}
      <div style={{ overflow: 'hidden', padding: '8px 0' }}>
        <div
          className="font-dm font-light whitespace-nowrap"
          style={{
            animation: 'marquee-right 42s linear infinite',
            width: 'max-content',
            display: 'flex',
            fontSize: 8,
            letterSpacing: '0.38em',
            color: 'rgba(181,147,90,0.18)',
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
