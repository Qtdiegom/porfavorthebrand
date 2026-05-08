'use client'
import Image from 'next/image'

export default function SpinPreview() {
  return (
    <div style={{ background: '#050505', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui, sans-serif', overflow: 'hidden' }}>

      <p style={{ color: '#f0ead6', fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: 40, opacity: 0.4 }}>
        Cherry Porfa Tee &mdash; 3D Spin Preview
      </p>

      <div style={{ perspective: '1200px', width: 420, height: 560 }}>
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            transformStyle: 'preserve-3d',
            animation: 'slowSpin 8s linear infinite',
          }}
        >
          {/* Front */}
          <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', overflow: 'hidden', borderRadius: 4 }}>
            <Image src="/render-tee-cherry-3d.png" alt="Front" fill style={{ objectFit: 'contain' }} unoptimized />
          </div>
          {/* Back */}
          <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)', overflow: 'hidden', borderRadius: 4 }}>
            <Image src="/render-tee-cherry-back.png" alt="Back" fill style={{ objectFit: 'contain' }} unoptimized />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slowSpin {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
      `}</style>
    </div>
  )
}
