'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const contacts = [
  {
    label: 'Instagram',
    handle: '@porfavorthebrand',
    sub: 'DM for collabs, features & press',
    href: 'https://instagram.com/porfavorthebrand',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    handle: 'info@porfavorthebrand.com',
    sub: 'General inquiries & press kits',
    href: 'mailto:info@porfavorthebrand.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <polyline points="2,4 12,13 22,4"/>
      </svg>
    ),
  },
  {
    label: 'Zumiez Partnership',
    handle: 'Available at Zumiez',
    sub: 'In stores & online nationwide',
    href: 'https://www.zumiez.com/brands/porfa.html',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9,22 9,12 15,12 15,22"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="bg-[#080808] py-24 px-6 border-t border-[#b5935a]/10">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-16"
        >
          <p className="font-dm text-[10px] tracking-[0.4em] text-[#b5935a] uppercase mb-3">— Contacto</p>
          <h2 className="font-bebas text-[clamp(3rem,8vw,7rem)] text-[#f0ead6] leading-none">
            TRABAJA CON<br /><span className="text-[#b5935a]">NOSOTROS</span>
          </h2>
          <div className="w-14 h-[2px] bg-[#b5935a] mt-5" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact cards */}
          <div className="space-y-4">
            {contacts.map((c, i) => (
              <motion.a
                key={i}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="group flex items-start gap-5 bg-[#0d0d0d] border border-[#1e1e1e] hover:border-[#b5935a] transition-all duration-300 p-6"
              >
                <div className="text-[#b5935a] group-hover:scale-110 transition-transform duration-200 mt-0.5 flex-shrink-0">
                  {c.icon}
                </div>
                <div>
                  <div className="font-dm text-[10px] text-[#b5935a] tracking-[0.25em] uppercase mb-1">{c.label}</div>
                  <div className="font-bebas text-[#f0ead6] text-xl tracking-wide group-hover:text-[#b5935a] transition-colors">{c.handle}</div>
                  <div className="font-dm text-[#f0ead6]/35 text-sm mt-1">{c.sub}</div>
                </div>
                <div className="ml-auto text-[#b5935a]/30 group-hover:text-[#b5935a] group-hover:translate-x-1 transition-all duration-200 self-center">
                  →
                </div>
              </motion.a>
            ))}
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.65 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { key: 'name', label: 'Name', type: 'text', placeholder: 'Tu nombre' },
                { key: 'email', label: 'Email', type: 'email', placeholder: 'tu@email.com' },
              ].map(({ key, label, type, placeholder }) => (
                <div key={key}>
                  <label className="font-dm text-[10px] text-[#b5935a] tracking-[0.25em] uppercase block mb-2">
                    {label}
                  </label>
                  <input
                    type={type}
                    value={form[key as keyof typeof form]}
                    onChange={e => setForm({ ...form, [key]: e.target.value })}
                    placeholder={placeholder}
                    className="w-full bg-[#0d0d0d] border border-[#1e1e1e] focus:border-[#b5935a] px-4 py-3.5 font-dm text-[#f0ead6] text-sm placeholder-[#f0ead6]/20 transition-colors duration-200"
                    required
                  />
                </div>
              ))}
              <div>
                <label className="font-dm text-[10px] text-[#b5935a] tracking-[0.25em] uppercase block mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="¿Qué tienes en mente?"
                  className="w-full bg-[#0d0d0d] border border-[#1e1e1e] focus:border-[#b5935a] px-4 py-3.5 font-dm text-[#f0ead6] text-sm placeholder-[#f0ead6]/20 transition-colors duration-200 resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className={`w-full font-dm font-bold text-[11px] tracking-[0.25em] uppercase py-4 transition-all duration-300 ${
                  sent
                    ? 'bg-[#1a6b3a] text-[#f0ead6]'
                    : 'bg-[#b5935a] text-[#080808] hover:bg-[#f0ead6]'
                }`}
              >
                {sent ? '✓ MENSAJE ENVIADO' : 'ENVIAR MENSAJE'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
