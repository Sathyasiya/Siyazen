import React, { useEffect, useRef } from 'react';

const brandLogos = [
  'BOBCAT', 'DOOSAN', 'TECHNOBIND', 'RNS MOTORS', 'SHRUTI', 'FUSION', 'ZLEARNING', 'FIVESTAR',
  'BOBCAT', 'DOOSAN', 'TECHNOBIND', 'RNS MOTORS', 'SHRUTI', 'FUSION', 'ZLEARNING', 'FIVESTAR',
];

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = 0;
    setTimeout(() => {
      el.style.transition = 'opacity 1s ease, transform 1s ease';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, 200);
  }, []);

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(232,255,71,0.08) 0%, transparent 60%)',
      paddingTop: '80px',
    }}>
      {/* Background grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }}/>

      {/* Glow blobs */}
      <div style={{
        position: 'absolute', width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(232,255,71,0.05) 0%, transparent 70%)',
        top: '10%', left: '10%', pointerEvents: 'none',
      }}/>
      <div style={{
        position: 'absolute', width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(255,107,53,0.05) 0%, transparent 70%)',
        bottom: '20%', right: '10%', pointerEvents: 'none',
      }}/>

      <div style={{ textAlign: 'center', padding: '0 20px', maxWidth: '900px', position: 'relative' }}>
        <div style={{
          display: 'inline-block', background: 'rgba(232,255,71,0.1)',
          border: '1px solid rgba(232,255,71,0.3)', borderRadius: '50px',
          padding: '6px 18px', fontSize: '12px', fontWeight: 600,
          letterSpacing: '2px', color: 'var(--accent)', marginBottom: '32px',
          textTransform: 'uppercase',
        }}>
          Digital Growth Partner
        </div>

        <div ref={titleRef} style={{ transform: 'translateY(30px)' }}>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(48px, 8vw, 100px)', lineHeight: 1,
            letterSpacing: '-2px', marginBottom: '8px',
          }}>
            We Move<br />
            <span style={{
              background: 'linear-gradient(135deg, var(--accent) 0%, #b8ff00 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>Brands</span> Forward
          </h1>
        </div>

        <p style={{
          fontSize: 'clamp(16px, 2vw, 20px)', opacity: 0.5, marginTop: '24px',
          fontWeight: 300, letterSpacing: '0.5px',
        }}>
          Precision. Performance. Progress.
        </p>

        <div style={{ marginTop: '48px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#contact" style={{
            background: 'var(--accent)', color: '#000',
            padding: '16px 40px', borderRadius: '50px',
            fontSize: '15px', fontWeight: 700, fontFamily: 'var(--font-display)',
            letterSpacing: '0.5px', transition: 'all 0.3s', display: 'inline-block',
          }}
            onMouseEnter={e => { e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 20px 40px rgba(232,255,71,0.3)'; }}
            onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none'; }}>
            Let's Connect →
          </a>
          <a href="#services" style={{
            background: 'transparent', color: 'var(--white)',
            padding: '16px 40px', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.15)',
            fontSize: '15px', fontWeight: 500, transition: 'all 0.3s', display: 'inline-block',
          }}
            onMouseEnter={e => { e.target.style.borderColor = 'rgba(255,255,255,0.4)'; e.target.style.transform = 'translateY(-3px)'; }}
            onMouseLeave={e => { e.target.style.borderColor = 'rgba(255,255,255,0.15)'; e.target.style.transform = 'translateY(0)'; }}>
            Our Services
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: '48px', justifyContent: 'center', marginTop: '80px',
          flexWrap: 'wrap',
        }}>
          {[
            { val: '120+', label: 'Happy Clients' },
            { val: '$50M+', label: 'Revenue Added' },
            { val: '4.8', label: 'Avg Rating' },
            { val: '6+', label: 'Years Experience' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--accent)' }}>{s.val}</div>
              <div style={{ fontSize: '13px', opacity: 0.5, marginTop: '4px', letterSpacing: '1px', textTransform: 'uppercase' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Brand marquee */}
      <div style={{ width: '100%', overflow: 'hidden', marginTop: '80px', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '24px 0' }}>
        <div style={{
          display: 'flex', gap: '60px', animation: 'marquee 25s linear infinite',
          width: 'max-content',
        }}>
          {brandLogos.map((b, i) => (
            <span key={i} style={{
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '13px',
              letterSpacing: '3px', opacity: 0.25, whiteSpace: 'nowrap', textTransform: 'uppercase',
              color: i % 3 === 0 ? 'var(--accent)' : 'var(--white)',
            }}>{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
