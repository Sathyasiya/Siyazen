import React, { useState, useEffect } from 'react';
import { BRAND } from '../data/content';

const NAV_LINKS = ['Services', 'Work', 'About', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 200,
          padding: '0 6%',
          height: 68,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: scrolled ? 'rgba(13,12,10,0.93)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,169,110,0.1)' : 'none',
          transition: 'background 0.5s, backdrop-filter 0.5s, border-color 0.5s',
        }}
      >
        {/* Logo */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ cursor: 'pointer', fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, letterSpacing: '0.12em', userSelect: 'none' }}
        >
          <span style={{ color: 'var(--gold)' }}>S</span>{BRAND.name.slice(1)}
          <span style={{ color: 'var(--gold)', fontSize: 10, marginLeft: 3, verticalAlign: 'super' }}>✦</span>
        </div>

        {/* Desktop nav */}
        <nav className="desktop-only" style={{ display: 'flex', gap: 36 }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link.toLowerCase())}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 400,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--muted)', transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--gold)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--muted)')}
            >
              {link}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <button
          className="btn-outline desktop-only"
          onClick={() => scrollTo('contact')}
        >
          Enquire
        </button>

        {/* Mobile hamburger */}
        <button
          className="mobile-only"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}
        >
          <div style={{ width: 24, height: 1, background: 'var(--cream)', marginBottom: 6, transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <div style={{ width: 24, height: 1, background: 'var(--cream)', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
          <div style={{ width: 24, height: 1, background: 'var(--cream)', marginTop: 6, transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </header>

      {/* Mobile menu */}
      <div
        className="mobile-only"
        style={{
          position: 'fixed', top: 68, left: 0, right: 0, bottom: 0,
          zIndex: 190,
          background: 'rgba(13,12,10,0.97)',
          backdropFilter: 'blur(20px)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 40,
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            onClick={() => scrollTo(link.toLowerCase())}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 300,
              letterSpacing: '0.04em', color: 'var(--cream)',
              fontStyle: 'italic', transition: 'color 0.3s',
            }}
            onMouseEnter={(e) => (e.target.style.color = 'var(--gold)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--cream)')}
          >
            {link}
          </button>
        ))}
        <button className="btn-outline" onClick={() => scrollTo('contact')}>
          Begin a Project
        </button>
      </div>
    </>
  );
}
