import React from 'react';
import { BRAND } from '../data/content';

const NAV = ['Services', 'Work', 'About', 'Contact'];

export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: 'clamp(36px, 5vw, 52px) 6%',
      }}
    >
      {/* Top row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: 40,
          paddingBottom: 40,
          borderBottom: '1px solid var(--border)',
          marginBottom: 32,
        }}
      >
        {/* Brand */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 22, fontWeight: 600, letterSpacing: '0.12em',
              marginBottom: 12, cursor: 'pointer',
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span style={{ color: 'var(--gold)' }}>S</span>{BRAND.name.slice(1)}
            <span style={{ color: 'var(--gold)', fontSize: 10, marginLeft: 3, verticalAlign: 'super' }}>✦</span>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 300,
              color: 'var(--muted)', maxWidth: 260, lineHeight: 1.7,
            }}
          >
            Premium AI, web development, and UI/UX design for brands that demand excellence.
          </p>
        </div>

        {/* Nav links */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-body)', fontSize: 9, letterSpacing: '0.22em',
              textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16,
            }}
          >
            Navigation
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {NAV.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                  fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 300,
                  color: 'var(--muted)', letterSpacing: '0.05em', transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--cream)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--muted)')}
              >
                {link}
              </button>
            ))}
          </div>
        </div>

        {/* Contact info */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-body)', fontSize: 9, letterSpacing: '0.22em',
              textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16,
            }}
          >
            Contact
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[BRAND.email, BRAND.phone, BRAND.location].map((item) => (
              <div
                key={item}
                style={{
                  fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 300,
                  color: 'var(--muted)', letterSpacing: '0.03em',
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Social */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-body)', fontSize: 9, letterSpacing: '0.22em',
              textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16,
            }}
          >
            Follow
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {Object.entries(BRAND.social).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 300,
                  color: 'var(--muted)', textDecoration: 'none',
                  textTransform: 'capitalize', letterSpacing: '0.03em', transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--gold)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--muted)')}
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-body)', fontSize: 11,
            color: 'var(--muted)', letterSpacing: '0.1em',
          }}
        >
          © {new Date().getFullYear()} {BRAND.name}{BRAND.nameSuffix} · All rights reserved
        </div>
        <div
          style={{
            fontFamily: 'var(--font-body)', fontSize: 11,
            color: 'var(--muted)', letterSpacing: '0.08em',
          }}
        >
          Crafted with precision
        </div>
      </div>
    </footer>
  );
}
