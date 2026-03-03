import React, { useState, useEffect } from 'react';

const services = [
  { name: 'Strategy & Consulting', desc: 'Data-driven strategy aligned with growth.' },
  { name: 'Creative', desc: 'Compelling visuals for brand communication.' },
  { name: 'PPC Advertising', desc: 'Drive qualified traffic with precision.' },
  { name: 'Development', desc: 'Scalable digital experiences.' },
  { name: 'Social Media Management', desc: 'Engagement & trust at scale.' },
  { name: 'SEO & Organic Growth', desc: 'Sustainable visibility that lasts.' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      transition: 'all 0.4s ease',
      padding: '0 5%',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '72px', maxWidth: '1400px', margin: '0 auto',
      }}>
        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '36px', height: '36px', background: 'var(--accent)',
            borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <span style={{ color: '#000', fontWeight: 800, fontSize: '18px', fontFamily: 'var(--font-display)' }}>S</span>
          </div>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '22px', letterSpacing: '2px' }}>SIYAZEN</span>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }} className="desktop-nav">
          <a href="#hero" style={{ fontSize: '14px', fontWeight: 500, opacity: 0.8, transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.target.style.opacity = 1}
            onMouseLeave={e => e.target.style.opacity = 0.8}>Home</a>

          <div style={{ position: 'relative' }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}>
            <button style={{
              background: 'none', border: 'none', color: 'var(--white)',
              fontSize: '14px', fontWeight: 500, cursor: 'pointer', opacity: 0.8,
              fontFamily: 'var(--font-body)', display: 'flex', alignItems: 'center', gap: '6px'
            }}>
              Services
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 8L1 3h10L6 8z"/>
              </svg>
            </button>
            {servicesOpen && (
              <div style={{
                position: 'absolute', top: '100%', left: '-20px',
                background: 'rgba(20,20,20,0.98)', backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px',
                padding: '16px', width: '320px', marginTop: '12px',
                boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
              }}>
                {services.map((s, i) => (
                  <a key={i} href="#services" style={{
                    display: 'flex', flexDirection: 'column', padding: '12px 14px',
                    borderRadius: '10px', transition: 'background 0.2s', marginBottom: '2px',
                  }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(232,255,71,0.06)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                    <span style={{ fontWeight: 600, fontSize: '14px' }}>{s.name}</span>
                    <span style={{ fontSize: '12px', opacity: 0.5, marginTop: '2px' }}>{s.desc}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#products" style={{ fontSize: '14px', fontWeight: 500, opacity: 0.8 }}
            onMouseEnter={e => e.target.style.opacity = 1}
            onMouseLeave={e => e.target.style.opacity = 0.8}>Products</a>
          <a href="#projects" style={{ fontSize: '14px', fontWeight: 500, opacity: 0.8 }}
            onMouseEnter={e => e.target.style.opacity = 1}
            onMouseLeave={e => e.target.style.opacity = 0.8}>Case Studies</a>
        </div>

        <a href="#contact" style={{
          background: 'var(--accent)', color: '#000',
          padding: '10px 24px', borderRadius: '50px',
          fontSize: '14px', fontWeight: 700, fontFamily: 'var(--font-display)',
          letterSpacing: '0.5px', transition: 'all 0.2s', display: 'inline-block'
        }}
          onMouseEnter={e => { e.target.style.background = '#fff'; e.target.style.transform = 'scale(1.03)'; }}
          onMouseLeave={e => { e.target.style.background = 'var(--accent)'; e.target.style.transform = 'scale(1)'; }}>
          Let's Talk
        </a>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          display: 'none', background: 'none', border: 'none',
          color: 'var(--white)', cursor: 'pointer', padding: '4px'
        }} className="hamburger">
          <div style={{ width: '24px', height: '2px', background: menuOpen ? 'transparent' : 'var(--white)', marginBottom: '5px', transition: 'all 0.3s' }}/>
          <div style={{ width: '24px', height: '2px', background: 'var(--white)', marginBottom: '5px', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none', transition: 'all 0.3s' }}/>
          <div style={{ width: '24px', height: '2px', background: 'var(--white)', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none', transition: 'all 0.3s' }}/>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(10,10,10,0.98)', borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '20px 5%', display: 'flex', flexDirection: 'column', gap: '16px'
        }}>
          {['Home', 'Services', 'Products', 'Case Studies'].map(item => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: '16px', fontWeight: 600, padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              {item}
            </a>
          ))}
          <a href="#contact" style={{
            background: 'var(--accent)', color: '#000', padding: '12px 24px',
            borderRadius: '50px', textAlign: 'center', fontWeight: 700, marginTop: '8px'
          }}>Let's Talk</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
