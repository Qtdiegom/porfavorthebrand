'use client'
import { motion } from 'framer-motion'

const links = ['Drops', 'Cultura', 'Lookbook', 'Contact']

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#b5935a]/10 pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Large brand name */}
        <div className="text-center mb-6">
          <div
            className="font-bebas text-[#f0ead6] tracking-[0.08em] leading-none"
            style={{ fontSize: 'clamp(4rem, 14vw, 12rem)' }}
          >
            POR FAVOR
          </div>

          {/* Mexican flag stripe */}
          <div className="flex h-[3px] max-w-sm mx-auto mt-3 overflow-hidden rounded-full">
            <div className="flex-1 bg-[#1a6b3a]" />
            <div className="flex-1 bg-[#f0ead6]" />
            <div className="flex-1 bg-[#c0392b]" />
          </div>

          <p className="font-playfair italic text-[#f0ead6]/30 text-sm mt-4">
            Hecho Con Orgullo
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-[#b5935a]/10 my-10" />

        {/* Nav + social */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <div className="flex flex-wrap justify-center gap-8">
            {links.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-dm text-[10px] tracking-[0.25em] uppercase text-[#f0ead6]/35 hover:text-[#b5935a] transition-colors"
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
              title="@porfavorthebrand"
              className="text-[#f0ead6]/30 hover:text-[#b5935a] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
              aria-label="Founder Instagram"
              title="@santea__"
              className="font-dm text-[10px] tracking-[0.2em] uppercase text-[#f0ead6]/30 hover:text-[#b5935a] transition-colors"
            >
              @santea__
            </a>
            {/* Founder TikTok */}
            <a
              href="https://tiktok.com/@santea_"
              target="_blank"
              rel="noreferrer"
              aria-label="Founder TikTok"
              title="@santea_"
              className="text-[#f0ead6]/30 hover:text-[#b5935a] transition-colors"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.95a8.27 8.27 0 004.84 1.55V7.04a4.85 4.85 0 01-1.07-.35z"/>
              </svg>
            </a>
            <a
              href="https://www.zumiez.com/brands/porfa.html"
              target="_blank"
              rel="noreferrer"
              className="font-dm text-[10px] tracking-[0.25em] uppercase text-[#f0ead6]/30 hover:text-[#b5935a] transition-colors"
            >
              ZUMIEZ
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="font-dm text-[10px] tracking-[0.2em] text-[#f0ead6]/20">
            © 2025 Por Favor The Brand. Hecho Con Orgullo.
          </p>
        </div>
      </div>
    </footer>
  )
}
