'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

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
    <section id="contact" ref={ref} style={{ background: '#030303', borderTop: '0.5px solid rgba(181,147,90,0.08)', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: '4rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <div style={{ width: 14, height: 1, background: '#b5935a' }} />
            <p className="font-dm font-light" style={{ fontSize: 9, letterSpacing: '0.45em', color: '#b5935a', textTransform: 'uppercase' }}>Contacto</p>
          </div>
          <h2 className="font-bebas text-[#f0ead6] leading-none" style={{ fontSize: 'clamp(2.8rem,7vw,6rem)' }}>
            TRABAJA CON<br /><span style={{ color: '#b5935a' }}>NOSOTROS</span>
          </h2>
          <div style={{ width: 40, height: 1, background: 'rgba(181,147,90,0.45)', marginTop: '1.2rem' }} />
        </motion.div>

        {/* Grid: form left, info right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.65 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
          >
            {([
              { key: 'name',    label: 'Nombre',  type: 'text',  placeholder: 'Tu nombre' },
              { key: 'email',   label: 'Email',   type: 'email', placeholder: 'tu@email.com' },
            ] as const).map(({ key, label, type, placeholder }) => (
              <div key={key}>
                <label className="font-dm font-light" style={{ fontSize: 9, letterSpacing: '0.3em', color: 'rgba(181,147,90,0.7)', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>
                  {label}
                </label>
                <input
                  type={type}
                  value={form[key]}
                  onChange={e => setForm({ ...form, [key]: e.target.value })}
                  placeholder={placeholder}
                  required
                  style={{
                    width: '100%',
                    background: '#080808',
                    border: '0.5px solid #1e1e1e',
                    padding: '13px 16px',
                    color: '#f0ead6',
                    fontSize: '0.875rem',
                    fontFamily: 'inherit',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(181,147,90,0.5)')}
                  onBlur={e => (e.currentTarget.style.borderColor = '#1e1e1e')}
                />
              </div>
            ))}

            <div>
              <label className="font-dm font-light" style={{ fontSize: 9, letterSpacing: '0.3em', color: 'rgba(181,147,90,0.7)', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>
                Mensaje
              </label>
              <textarea
                rows={5}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                placeholder="¿Qué tienes en mente?"
                required
                style={{
                  width: '100%',
                  background: '#080808',
                  border: '0.5px solid #1e1e1e',
                  padding: '13px 16px',
                  color: '#f0ead6',
                  fontSize: '0.875rem',
                  fontFamily: 'inherit',
                  outline: 'none',
                  resize: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => (e.currentTarget.style.borderColor = 'rgba(181,147,90,0.5)')}
                onBlur={e => (e.currentTarget.style.borderColor = '#1e1e1e')}
              />
            </div>

            <button
              type="submit"
              className="font-dm font-bold"
              style={{
                background: sent ? '#1a6b3a' : '#b5935a',
                color: '#030303',
                fontSize: 9,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                padding: '14px',
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.2s',
                width: '100%',
              }}
              onMouseEnter={e => { if (!sent) (e.currentTarget.style.background = '#f0ead6') }}
              onMouseLeave={e => { if (!sent) (e.currentTarget.style.background = '#b5935a') }}
            >
              {sent ? '✓ MENSAJE ENVIADO' : 'ENVIAR MENSAJE'}
            </button>
          </motion.form>

          {/* Info grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.65 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 0 }}
          >
            {/* Info rows — Trümung-style grid */}
            {[
              { label: 'Instagram', value: '@porfavorthebrand', href: 'https://instagram.com/porfavorthebrand' },
              { label: 'TikTok', value: '@santea_', href: 'https://tiktok.com/@santea_' },
              { label: 'Zumiez', value: '300+ stores nationwide', href: 'https://www.zumiez.com/brands/porfa.html' },
              { label: 'Email', value: 'shop@porfavorthebrand.com', href: 'mailto:shop@porfavorthebrand.com' },
              { label: 'Location', value: 'Houston, Texas', href: null },
              { label: 'Founded', value: '2020', href: null },
            ].map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.06, duration: 0.5 }}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '0.5px solid rgba(181,147,90,0.07)', padding: '18px 0' }}
              >
                <span className="font-dm font-light" style={{ fontSize: 9, letterSpacing: '0.35em', color: 'rgba(181,147,90,0.5)', textTransform: 'uppercase' }}>
                  {row.label}
                </span>
                {row.href ? (
                  <a
                    href={row.href}
                    target={row.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="font-dm font-light"
                    style={{ fontSize: '0.85rem', color: 'rgba(240,234,214,0.55)', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#b5935a')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,234,214,0.55)')}
                  >
                    {row.value}
                  </a>
                ) : (
                  <span className="font-dm font-light" style={{ fontSize: '0.85rem', color: 'rgba(240,234,214,0.55)' }}>{row.value}</span>
                )}
              </motion.div>
            ))}

            {/* Quote block */}
            <div style={{ borderLeft: '2px solid rgba(181,147,90,0.3)', paddingLeft: 20, marginTop: '2rem' }}>
              <p className="font-playfair italic" style={{ color: 'rgba(240,234,214,0.3)', fontSize: '1rem', lineHeight: 1.7 }}>
                &ldquo;No es ilegal dejarlo todo por un sueño&rdquo;
              </p>
              <p className="font-dm font-light" style={{ fontSize: 8, letterSpacing: '0.4em', color: 'rgba(181,147,90,0.4)', textTransform: 'uppercase', marginTop: 8 }}>
                — Porfa The Brand
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
