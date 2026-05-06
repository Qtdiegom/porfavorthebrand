'use client'

const links = ['Drops', 'Cultura', 'Lookbook', 'Contact']

function FlagStripe() {
  return (
    <div style={{ display: 'flex', width: '100%', height: 1 }}>
      <div style={{ flex: 1, background: '#1a6b3a' }} />
      <div style={{ flex: 1, background: '#f0ead6' }} />
      <div style={{ flex: 1, background: '#c0392b' }} />
    </div>
  )
}

export default function Footer() {
  return (
    <footer style={{ background: '#030303' }}>
      {/* Flag stripe — TOP */}
      <FlagStripe />

      <div style={{ padding: '5rem 1.5rem 3rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>

          {/* Big ghost brand name */}
          <div className="text-center mb-8">
            <div className="font-bebas tracking-[0.06em] leading-none select-none" style={{
              fontSize: 'clamp(3.5rem, 12vw, 10rem)',
              color: 'rgba(240,234,214,0.04)',
            }}>
              POR FAVOR
            </div>

            {/* Small flag */}
            <div style={{ display: 'flex', height: 2, width: 48, margin: '10px auto 0', overflow: 'hidden' }}>
              <div style={{ flex: 1, background: '#1a6b3a' }} />
              <div style={{ flex: 1, background: '#f0ead6' }} />
              <div style={{ flex: 1, background: '#c0392b' }} />
            </div>

            <p className="font-playfair italic" style={{ color: 'rgba(240,234,214,0.18)', fontSize: '0.85rem', marginTop: 12 }}>
              Hecho Con Orgullo
            </p>
          </div>

          {/* Divider */}
          <div style={{ borderTop: '0.5px solid rgba(181,147,90,0.06)', margin: '2.5rem 0' }} />

          {/* Nav + social */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
            <div className="flex flex-wrap justify-center gap-8">
              {links.map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-dm font-light transition-colors duration-300"
                  style={{ fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(240,234,214,0.2)' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#b5935a')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(240,234,214,0.2)')}
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-5">
              <a href="https://instagram.com/porfavorthebrand" target="_blank" rel="noreferrer" aria-label="Brand IG"
                style={{ color: 'rgba(240,234,214,0.2)', transition: 'color 0.25s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#b5935a')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(240,234,214,0.2)')}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://instagram.com/santea__" target="_blank" rel="noreferrer"
                className="font-dm font-light transition-colors duration-300"
                style={{ fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(240,234,214,0.2)' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#b5935a')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(240,234,214,0.2)')}
              >
                @santea__
              </a>
              <a href="https://tiktok.com/@santea_" target="_blank" rel="noreferrer"
                style={{ color: 'rgba(240,234,214,0.2)', transition: 'color 0.25s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#b5935a')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(240,234,214,0.2)')}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.95a8.27 8.27 0 004.84 1.55V7.04a4.85 4.85 0 01-1.07-.35z"/>
                </svg>
              </a>
              <a href="https://www.zumiez.com/brands/porfa.html" target="_blank" rel="noreferrer"
                className="font-dm font-light transition-colors duration-300"
                style={{ fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(240,234,214,0.2)' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#b5935a')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(240,234,214,0.2)')}
              >
                ZUMIEZ
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="font-dm font-light" style={{ fontSize: 8, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(240,234,214,0.12)' }}>
              © 2025 Por Favor The Brand · Hecho Con Orgullo · Houston, TX
            </p>
          </div>
        </div>
      </div>

      {/* Flag stripe — BOTTOM */}
      <FlagStripe />
    </footer>
  )
}
