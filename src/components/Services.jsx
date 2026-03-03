import React, { useState, useRef, useEffect } from 'react';

const UNSPLASH = 'https://images.unsplash.com/';

const services = [
  {
    id: 'growth',
    title: 'Growth Marketing',
    subtitle: 'Performance-driven marketing—from awareness to acquisition—designed to drive real business outcomes.',
    items: ['SEO & Organic Growth', 'Social Media Management', 'Paid Ads | PPC', 'Affiliate & Influencer Marketing', 'Email & WhatsApp Marketing'],
    images: [
      `${UNSPLASH}photo-1611532736597-de2d4265fba3?w=400&q=80`,
      `${UNSPLASH}photo-1460925895917-afdab827c52f?w=400&q=80`,
      `${UNSPLASH}photo-1432888622747-4eb9a8efeb07?w=400&q=80`,
      `${UNSPLASH}photo-1533750516457-a7f992034fec?w=400&q=80`,
      `${UNSPLASH}photo-1551288049-bebda4e38f71?w=400&q=80`,
      `${UNSPLASH}photo-1552664730-d307ca884978?w=400&q=80`,
    ],
    bg: '#f5f0e8',
    accent: '#2563eb',
  },
  {
    id: 'creative',
    title: 'Creative',
    subtitle: 'Impactful visuals and compelling storytelling that captivate, engage, and drive brand success.',
    items: ['Branding & Identity', 'Content Writing', 'Graphic Design', 'Social Media Content', 'Video & Motion Graphics'],
    images: [
      `${UNSPLASH}photo-1561070791-2526d30994b5?w=400&q=80`,
      `${UNSPLASH}photo-1626785774573-4b799315345d?w=400&q=80`,
      `${UNSPLASH}photo-1558655146-9f40138edfeb?w=400&q=80`,
      `${UNSPLASH}photo-1611162617213-7d7a39e9b1d7?w=400&q=80`,
      `${UNSPLASH}photo-1581291518857-4e27b48ff24e?w=400&q=80`,
      `${UNSPLASH}photo-1561070791-2526d30994b5?w=400&q=80`,
    ],
    bg: '#eef3f0',
    accent: '#16a34a',
  },
  {
    id: 'development',
    title: 'Development',
    subtitle: 'Robust, scalable, and high-performing digital solutions that power business efficiency and growth.',
    items: ['Website Development', 'Custom Web Applications', 'E-commerce Solutions', 'Database & CRM Development', 'Landing Pages & Funnels'],
    images: [
      `${UNSPLASH}photo-1498050108023-c5249f4df085?w=400&q=80`,
      `${UNSPLASH}photo-1461749280684-dccba630e2f6?w=400&q=80`,
      `${UNSPLASH}photo-1555066931-4365d14bab8c?w=400&q=80`,
      `${UNSPLASH}photo-1507238691740-187a5b1d37b8?w=400&q=80`,
      `${UNSPLASH}photo-1516116216624-53e697fedbea?w=400&q=80`,
      `${UNSPLASH}photo-1498050108023-c5249f4df085?w=400&q=80`,
    ],
    bg: '#eef0f8',
    accent: '#7c3aed',
  },
  {
    id: 'strategy',
    title: 'Strategy & Consulting',
    subtitle: 'Strategic thinking meets data-driven execution — guiding your business towards sustainable growth.',
    items: ['Digital Strategy & Planning', 'Reputation Management', 'Lead Generation & Funnels', 'AI & Automation Consulting', 'Analytics & Reporting'],
    images: [
      `${UNSPLASH}photo-1552664730-d307ca884978?w=400&q=80`,
      `${UNSPLASH}photo-1454165804606-c3d57bc86b40?w=400&q=80`,
      `${UNSPLASH}photo-1507679799987-c73779587ccf?w=400&q=80`,
      `${UNSPLASH}photo-1521791136064-7986c2920216?w=400&q=80`,
      `${UNSPLASH}photo-1600880292203-757bb62b4baf?w=400&q=80`,
      `${UNSPLASH}photo-1600880292089-90a7e086ee0c?w=400&q=80`,
    ],
    bg: '#fdf0ee',
    accent: '#dc2626',
  },
];

// Image mosaic grid — matching the Emovur style right panel
function ImageMosaic({ images }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridTemplateRows: '160px 160px',
      gap: '10px',
      height: '100%',
      minHeight: '330px',
    }}>
      {images.slice(0, 6).map((src, i) => (
        <div key={i} style={{
          borderRadius: '12px', overflow: 'hidden',
          boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
          transform: i % 2 === 1 ? 'translateY(12px)' : 'translateY(0)',
          transition: 'transform 0.4s ease',
        }}>
          <img
            src={src}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

export default function Services() {
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const svc = services[active];

  const switchTo = (i) => {
    setActive(i);
    setAnimKey(k => k + 1);
  };

  return (
    <section id="services" style={{ padding: '100px 0', background: '#fff', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5%' }}>

        {/* Header */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <div style={{ width: '28px', height: '2px', background: '#111' }}/>
            <span style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#999', fontWeight: 600 }}>Services</span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.1, color: '#111'
          }}>
            What We Do
          </h2>
        </div>

        {/* Tab switcher */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '40px', flexWrap: 'wrap' }}>
          {services.map((s, i) => (
            <button key={i} onClick={() => switchTo(i)} style={{
              padding: '9px 22px', borderRadius: '50px', cursor: 'pointer',
              fontSize: '13px', fontWeight: 600, transition: 'all 0.25s',
              border: active === i ? 'none' : '1.5px solid #e0e0e0',
              background: active === i ? s.accent : '#fff',
              color: active === i ? '#fff' : '#555',
              fontFamily: 'var(--font-body)',
              boxShadow: active === i ? `0 4px 16px ${s.accent}40` : 'none',
            }}>
              {s.title}
            </button>
          ))}
        </div>

        {/* Main slider card — Emovur style */}
        <div key={animKey} style={{
          borderRadius: '28px',
          background: svc.bg,
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          minHeight: '380px',
          boxShadow: '0 8px 48px rgba(0,0,0,0.08)',
          animation: 'fadeInUp 0.45s ease forwards',
          border: '1px solid rgba(0,0,0,0.04)',
        }}>
          {/* Left — text panel */}
          <div style={{
            padding: '52px 48px',
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
          }}>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(26px, 3vw, 38px)', lineHeight: 1.15,
              color: '#111', marginBottom: '16px',
            }}>
              {svc.title}
            </h3>
            <p style={{
              fontSize: '15px', color: '#555', lineHeight: 1.75,
              marginBottom: '32px', maxWidth: '360px',
            }}>
              {svc.subtitle}
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {svc.items.map((item, j) => (
                <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="8" fill={`${svc.accent}18`}/>
                    <path d="M5 8l2 2 4-4" stroke={svc.accent} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={{ fontSize: '14px', color: '#333', fontWeight: 500 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — image mosaic */}
          <div style={{
            padding: '28px 28px 28px 0',
            display: 'flex', alignItems: 'center',
          }}>
            <ImageMosaic images={svc.images} />
          </div>
        </div>

        {/* Dot navigation */}
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '28px' }}>
          {services.map((_, i) => (
            <button key={i} onClick={() => switchTo(i)} style={{
              width: active === i ? '28px' : '8px', height: '8px', borderRadius: '4px',
              background: active === i ? services[active].accent : '#ccc',
              border: 'none', cursor: 'pointer', transition: 'all 0.3s', padding: 0,
            }}/>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #services [style*="gridTemplateColumns: 1fr 1.4fr"] {
            grid-template-columns: 1fr !important;
          }
          #services [style*="padding: 52px 48px"] {
            padding: 32px 24px !important;
          }
          #services [style*="padding: 28px 28px 28px 0"] {
            padding: 0 24px 28px !important;
          }
        }
      `}</style>
    </section>
  );
}
