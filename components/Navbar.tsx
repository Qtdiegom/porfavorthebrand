'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Drops', href: '#drops' },
  { label: 'Cultura', href: '#cultura' },
  { label: 'Lookbook', href: '#lookbook' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#030303]/97 backdrop-blur-md border-b border-[#b5935a]/12'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-0 grid grid-cols-3 items-center" style={{ height: 68 }}>

          {/* Left — nav links */}
          <div className="hidden md:flex items-center gap-7">
            {links.slice(0, 2).map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                className="font-dm text-[9px] tracking-[0.38em] uppercase text-[#3a3a3a] hover:text-[#b5935a] transition-colors duration-300"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Center — Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0, duration: 0.6 }}
            className="flex justify-center hover:opacity-70 transition-opacity"
          >
            <svg viewBox="0 0 220 80" width="110" height="40" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <path id="nav-arch" d="M 10,68 Q 110,4 210,68" />
              </defs>
              <text fontFamily="'Georgia', 'Times New Roman', serif" fontSize="42" fontWeight="bold" fill="#f0ead6" letterSpacing="4">
                <textPath href="#nav-arch" startOffset="50%" textAnchor="middle">PORFA</textPath>
              </text>
            </svg>
          </motion.a>

          {/* Right — remaining links + shop */}
          <div className="flex items-center justify-end gap-7">
            <div className="hidden md:flex items-center gap-7">
              {links.slice(2).map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.36 + i * 0.08, duration: 0.5 }}
                  className="font-dm text-[9px] tracking-[0.38em] uppercase text-[#3a3a3a] hover:text-[#b5935a] transition-colors duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="https://porfavorthebrand.com"
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="bg-[#b5935a] text-[#030303] font-dm font-bold text-[9px] tracking-[0.25em] uppercase px-4 py-2 hover:bg-[#f0ead6] transition-colors duration-200"
              >
                SHOP
              </motion.a>
            </div>

            {/* Hamburger — mobile */}
            <button
              className="md:hidden flex flex-col gap-[5px] p-2"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              <span className={`block w-6 h-[1px] bg-[#f0ead6]/60 transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[6px]' : ''}`} />
              <span className={`block w-6 h-[1px] bg-[#f0ead6]/60 transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block w-6 h-[1px] bg-[#f0ead6]/60 transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[6px]' : ''}`} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full-screen mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#030303] flex flex-col items-center justify-center gap-6"
          >
            <div className="absolute inset-0 opacity-[0.03]"
              style={{ backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(aztecSvg)}")`, backgroundRepeat: 'repeat', backgroundSize: '100px 100px' }}
            />
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                onClick={() => setOpen(false)}
                className="font-bebas text-[14vw] leading-none tracking-widest text-[#f0ead6]/80 hover:text-[#b5935a] transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="https://porfavorthebrand.com"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              onClick={() => setOpen(false)}
              className="mt-6 bg-[#b5935a] text-[#030303] font-dm font-bold text-sm tracking-widest uppercase px-10 py-4"
            >
              SHOP NOW
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

const aztecSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="none" stroke="#b5935a" stroke-width="1"/><circle cx="50" cy="50" r="34" fill="none" stroke="#b5935a" stroke-width="0.5"/><circle cx="50" cy="50" r="22" fill="none" stroke="#b5935a" stroke-width="0.5"/><circle cx="50" cy="50" r="10" fill="none" stroke="#b5935a" stroke-width="1"/><circle cx="50" cy="50" r="3" fill="#b5935a"/><line x1="50" y1="4" x2="50" y2="28" stroke="#b5935a" stroke-width="1.2"/><line x1="50" y1="72" x2="50" y2="96" stroke="#b5935a" stroke-width="1.2"/><line x1="4" y1="50" x2="28" y2="50" stroke="#b5935a" stroke-width="1.2"/><line x1="72" y1="50" x2="96" y2="50" stroke="#b5935a" stroke-width="1.2"/><line x1="18" y1="18" x2="34" y2="34" stroke="#b5935a" stroke-width="0.8"/><line x1="66" y1="66" x2="82" y2="82" stroke="#b5935a" stroke-width="0.8"/><line x1="82" y1="18" x2="66" y2="34" stroke="#b5935a" stroke-width="0.8"/><line x1="18" y1="82" x2="34" y2="66" stroke="#b5935a" stroke-width="0.8"/><polygon points="50,4 54,12 46,12" fill="#b5935a"/><polygon points="50,96 54,88 46,88" fill="#b5935a"/><polygon points="4,50 12,46 12,54" fill="#b5935a"/><polygon points="96,50 88,46 88,54" fill="#b5935a"/></svg>`
