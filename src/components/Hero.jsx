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
    el.style.transform = 'translateY(30px)';
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
      background: 'linear-gradient(160deg, #f0f6ff 0%, #ffffff 50%, #f7f5f2 100%)',
      paddingTop: '80px',
    }}>
      {/* Subtle dot grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, #c7d7f0 1px, transparent 1px)',
        backgroundSize: '36px 36px', opacity: 0.4, pointerEvents: 'none',
      }}/>

      {/* Soft glow */}
      <div style={{
        position: 'absolute', width: '600px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 70%)',
        top: '15%', left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none',
      }}/>

      <div style={{ textAlign: 'center', padding: '0 20px', maxWidth: '900px', position: 'relative' }}>
        <div style={{
          display: 'inline-block', background: 'rgba(37,99,235,0.08)',
          border: '1px solid rgba(37,99,235,0.2)', borderRadius: '50px',
          padding: '6px 18px', fontSize: '12px', fontWeight: 600,
          letterSpacing: '2px', color: 'var(--accent)', marginBottom: '32px',
          textTransform: 'uppercase',
        }}>
          Digital Growth Partner
        </div>

        <div ref={titleRef}>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(44px, 8vw, 96px)', lineHeight: 1,
            letterSpacing: '-2px', marginBottom: '8px', color: '#111',
          }}>
            We Move<br />
            <span style={{ color: 'var(--accent)' }}>Brands</span> Forward
          </h1>
        </div>

        <p style={{
          fontSize: 'clamp(16px, 2vw, 20px)', color: '#888', marginTop: '24px',
          fontWeight: 300, letterSpacing: '0.5px',
        }}>
          Precision. Performance. Progress.
        </p>

        <div style={{ marginTop: '48px', display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#contact" style={{
            background: 'var(--accent)', color: '#fff',
            padding: '15px 40px', borderRadius: '50px',
            fontSize: '15px', fontWeight: 700, fontFamily: 'var(--font-display)',
            letterSpacing: '0.3px', transition: 'all 0.3s', display: 'inline-block',
            boxShadow: '0 8px 24px rgba(37,99,235,0.3)',
          }}
            onMouseEnter={e => { e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 16px 36px rgba(37,99,235,0.4)'; }}
            onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 8px 24px rgba(37,99,235,0.3)'; }}>
            Let's Connect →
          </a>
          <a href="#services" style={{
            background: '#fff', color: '#333',
            padding: '15px 40px', borderRadius: '50px', border: '1.5px solid #e0e0e0',
            fontSize: '15px', fontWeight: 500, transition: 'all 0.3s', display: 'inline-block',
          }}
            onMouseEnter={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)'; }}
            onMouseLeave={e => { e.target.style.borderColor = '#e0e0e0'; e.target.style.color = '#333'; }}>
            Our Services
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: '0', justifyContent: 'center', marginTop: '80px',
          background: '#fff', borderRadius: '20px', border: '1px solid #eee',
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)', flexWrap: 'wrap', overflow: 'hidden',
        }}>
          {[
            { val: '120+', label: 'Happy Clients' },
            { val: '$50M+', label: 'Revenue Added' },
            { val: '4.8 ⭐', label: 'Avg Rating' },
            { val: '6+', label: 'Years Experience' },
          ].map((s, i) => (
            <div key={i} style={{
              padding: '28px 40px', textAlign: 'center',
              borderRight: i < 3 ? '1px solid #f0f0f0' : 'none',
              flex: '1', minWidth: '120px',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(24px, 3vw, 36px)', color: 'var(--accent)' }}>{s.val}</div>
              <div style={{ fontSize: '12px', color: '#999', marginTop: '4px', letterSpacing: '0.5px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Brand marquee */}
      <div style={{ width: '100%', overflow: 'hidden', marginTop: '70px', borderTop: '1px solid #eee', borderBottom: '1px solid #eee', padding: '20px 0', background: '#fafafa' }}>
        <div style={{
          display: 'flex', gap: '60px', animation: 'marquee 25s linear infinite',
          width: 'max-content',
        }}>
          {brandLogos.map((b, i) => (
            <span key={i} style={{
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '12px',
              letterSpacing: '3px', color: i % 3 === 0 ? 'var(--accent)' : '#bbb',
              whiteSpace: 'nowrap', textTransform: 'uppercase',
            }}>{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
