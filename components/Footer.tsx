'use client'

const links = ['Drops', 'Cultura', 'Lookbook', 'Contact']

function FlagStripe() {
  return (
    <div className="flex w-full" style={{ height: '1.5px' }}>
      <div className="flex-1" style={{ background: '#1a6b3a' }} />
      <div className="flex-1" style={{ background: '#f0ead6' }} />
      <div className="flex-1" style={{ background: '#c0392b' }} />
    </div>
  )
}

export default function Footer() {
  return (
    <footer style={{ background: '#050505' }}>
      {/* Flag stripe — top */}
      <FlagStripe />

      <div className="px-6 pt-20 pb-10">
        <div className="max-w-7xl mx-auto">
          {/* Large brand name */}
          <div className="text-center mb-6">
            <div
              className="font-bebas text-[#f0ead6] tracking-[0.08em] leading-none"
              style={{ fontSize: 'clamp(4rem, 14vw, 12rem)', color: 'rgba(240,234,214,0.06)' }}
            >
              POR FAVOR
            </div>

            {/* Small Mexican flag stripe under name */}
            <div className="flex h-[2px] w-16 mx-auto mt-3 overflow-hidden">
              <div className="flex-1 bg-[#1a6b3a]" />
              <div className="flex-1 bg-[#f0ead6]" />
              <div className="flex-1 bg-[#c0392b]" />
            </div>

            <p className="font-playfair italic text-[#f0ead6]/20 text-sm mt-4">
              Hecho Con Orgullo
            </p>
          </div>

          {/* Divider */}
          <div className="my-10" style={{ borderTop: '0.5px solid rgba(181,147,90,0.08)' }} />

          {/* Nav + social */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
            <div className="flex flex-wrap justify-center gap-8">
              {links.map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-dm font-light text-[9px] tracking-[0.35em] uppercase transition-colors duration-300"
                  style={{ color: 'rgba(240,234,214,0.25)' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#b5935a')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(240,234,214,0.25)')}
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-5">
              {/* Brand IG */}
              <a
                href="https://instagram.com/porfavorthebrand"
                target="_blank"
                rel="noreferrer"
                aria-label="Brand Instagram"
                className="transition-colors duration-300"
                style={{ color: 'rgba(240,234,214,0.25)' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#b5935a')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(240,234,214,0.25)')}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
              {/* Founder IG */}
              <a
                href="https://instagram.com/santea__"
                target="_blank"
                rel="noreferrer"
                className="font-dm font-light text-[9px] tracking-[0.25em] uppercase transition-colors duration-300"
                style={{ color: 'rgba(240,234,214,0.25)' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#b5935a')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(240,234,214,0.25)')}
              >
                @santea__
              </a>
              {/* Founder TikTok */}
              <a
                href="https://tiktok.com/@santea_"
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-300"
                style={{ color: 'rgba(240,234,214,0.25)' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#b5935a')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(240,234,214,0.25)')}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.95a8.27 8.27 0 004.84 1.55V7.04a4.85 4.85 0 01-1.07-.35z"/>
                </svg>
              </a>
              <a
                href="https://www.zumiez.com/brands/porfa.html"
                target="_blank"
                rel="noreferrer"
                className="font-dm font-light text-[9px] tracking-[0.3em] uppercase transition-colors duration-300"
                style={{ color: 'rgba(240,234,214,0.25)' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#b5935a')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(240,234,214,0.25)')}
              >
                ZUMIEZ
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="font-dm font-light text-[9px] tracking-[0.25em]" style={{ color: 'rgba(240,234,214,0.15)' }}>
              © 2025 Por Favor The Brand. Hecho Con Orgullo.
            </p>
          </div>
        </div>
      </div>

      {/* Flag stripe — bottom */}
      <FlagStripe />
    </footer>
  )
}
