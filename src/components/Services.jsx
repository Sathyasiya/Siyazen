import React, { useEffect, useRef, useState } from 'react';

const UNSPLASH = 'https://images.unsplash.com/';

const services = [
  {
    id: 'growth',
    title: 'Growth Marketing',
    subtitle: 'Performance-driven marketing—from awareness to acquisition—designed to drive real business outcomes.',
    items: ['SEO & Organic Growth', 'Social Media Management', 'Paid Ads | PPC', 'Affiliate & Influencer Marketing', 'Email & WhatsApp Marketing'],
    images: [
      `${UNSPLASH}photo-1611532736597-de2d4265fba3?w=500&q=80`,
      `${UNSPLASH}photo-1460925895917-afdab827c52f?w=500&q=80`,
      `${UNSPLASH}photo-1432888622747-4eb9a8efeb07?w=500&q=80`,
      `${UNSPLASH}photo-1533750516457-a7f992034fec?w=500&q=80`,
      `${UNSPLASH}photo-1551288049-bebda4e38f71?w=500&q=80`,
      `${UNSPLASH}photo-1552664730-d307ca884978?w=500&q=80`,
    ],
    bg: '#f0f7e6',
    accent: '#16a34a',
  },
  {
    id: 'creative',
    title: 'Creative',
    subtitle: 'Impactful visuals and compelling storytelling that captivate, engage, and drive brand success.',
    items: ['Branding & Identity', 'Content Writing', 'Graphic Design', 'Social Media Content', 'Video & Motion Graphics'],
    images: [
      `${UNSPLASH}photo-1561070791-2526d30994b5?w=500&q=80`,
      `${UNSPLASH}photo-1626785774573-4b799315345d?w=500&q=80`,
      `${UNSPLASH}photo-1558655146-9f40138edfeb?w=500&q=80`,
      `${UNSPLASH}photo-1611162617213-7d7a39e9b1d7?w=500&q=80`,
      `${UNSPLASH}photo-1581291518857-4e27b48ff24e?w=500&q=80`,
      `${UNSPLASH}photo-1542744094-24638eff58bb?w=500&q=80`,
    ],
    bg: '#fef3e2',
    accent: '#ea580c',
  },
  {
    id: 'development',
    title: 'Development',
    subtitle: 'Robust, scalable, and high-performing digital solutions that power business efficiency and growth.',
    items: ['Website Development', 'Custom Web Applications', 'E-commerce Solutions', 'Database & CRM Development', 'Landing Pages & Funnels'],
    images: [
      `${UNSPLASH}photo-1498050108023-c5249f4df085?w=500&q=80`,
      `${UNSPLASH}photo-1461749280684-dccba630e2f6?w=500&q=80`,
      `${UNSPLASH}photo-1555066931-4365d14bab8c?w=500&q=80`,
      `${UNSPLASH}photo-1507238691740-187a5b1d37b8?w=500&q=80`,
      `${UNSPLASH}photo-1516116216624-53e697fedbea?w=500&q=80`,
      `${UNSPLASH}photo-1504639725590-34d0984388bd?w=500&q=80`,
    ],
    bg: '#eff6ff',
    accent: '#2563eb',
  },
  {
    id: 'strategy',
    title: 'Strategy & Consulting',
    subtitle: 'Strategic thinking meets data-driven execution — guiding your business towards sustainable growth.',
    items: ['Digital Strategy & Planning', 'Reputation Management', 'Lead Generation & Funnels', 'AI & Automation Consulting', 'Analytics & Reporting'],
    images: [
      `${UNSPLASH}photo-1552664730-d307ca884978?w=500&q=80`,
      `${UNSPLASH}photo-1454165804606-c3d57bc86b40?w=500&q=80`,
      `${UNSPLASH}photo-1507679799987-c73779587ccf?w=500&q=80`,
      `${UNSPLASH}photo-1521791136064-7986c2920216?w=500&q=80`,
      `${UNSPLASH}photo-1600880292203-757bb62b4baf?w=500&q=80`,
      `${UNSPLASH}photo-1600880292089-90a7e086ee0c?w=500&q=80`,
    ],
    bg: '#fdf2f8',
    accent: '#9333ea',
  },
];

function ImageMosaic({ images }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridTemplateRows: '170px 170px',
      gap: '10px',
      width: '100%',
    }}>
      {images.slice(0, 6).map((src, i) => (
        <div
          key={i}
          style={{
            borderRadius: '14px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.13)',
            transform: i % 2 === 1 ? 'translateY(16px)' : 'translateY(0)',
          }}
        >
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
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowH = window.innerHeight;

      // Calculate progress through the section
      const scrolled = -sectionTop;
      const totalScroll = sectionHeight - windowH;
      const progress = Math.max(0, Math.min(1, scrolled / totalScroll));

      const idx = Math.min(
        services.length - 1,
        Math.floor(progress * services.length)
      );
      setActiveIndex(idx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const svc = services[activeIndex];

  return (
    <section id="services" style={{ background: '#fff', padding: '80px 0 0' }}>
      {/* Header */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5% 56px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <div style={{ width: '28px', height: '2px', background: '#111' }} />
          <span style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#999', fontWeight: 600 }}>Services</span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.1, color: '#111' }}>
          What We Do
        </h2>
      </div>

      {/* Sticky scroll section */}
      <div
        ref={sectionRef}
        style={{
          height: `${services.length * 100}vh`,
          position: 'relative',
        }}
      >
        {/* Sticky container */}
        <div style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}>
          {/* Background transition */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: svc.bg,
            transition: 'background 0.7s ease',
          }} />

          <div style={{
            maxWidth: '1400px',
            width: '100%',
            margin: '0 auto',
            padding: '0 5%',
            display: 'grid',
            gridTemplateColumns: '420px 1fr',
            gap: '60px',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
          }}>
            {/* LEFT — Text panel */}
            <div>
              {/* Progress indicator */}
              <div style={{ display: 'flex', gap: '6px', marginBottom: '32px' }}>
                {services.map((s, i) => (
                  <div
                    key={i}
                    style={{
                      height: '3px',
                      flex: 1,
                      borderRadius: '2px',
                      background: i <= activeIndex ? svc.accent : 'rgba(0,0,0,0.1)',
                      transition: 'background 0.5s ease',
                    }}
                  />
                ))}
              </div>

              <div key={activeIndex} style={{ animation: 'fadeInUp 0.5s ease forwards' }}>
                <div style={{
                  display: 'inline-block',
                  background: `${svc.accent}15`,
                  border: `1px solid ${svc.accent}30`,
                  color: svc.accent,
                  padding: '4px 14px',
                  borderRadius: '50px',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  marginBottom: '18px',
                }}>
                  {String(activeIndex + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 'clamp(28px, 3.5vw, 44px)',
                  lineHeight: 1.1,
                  color: '#111',
                  marginBottom: '16px',
                }}>
                  {svc.title}
                </h3>

                <p style={{
                  fontSize: '15px',
                  color: '#555',
                  lineHeight: 1.8,
                  marginBottom: '28px',
                  maxWidth: '360px',
                }}>
                  {svc.subtitle}
                </p>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>
                  {svc.items.map((item, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <circle cx="9" cy="9" r="9" fill={`${svc.accent}18`} />
                        <path d="M5.5 9l2.5 2.5 4.5-5" stroke={svc.accent} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span style={{ fontSize: '14px', color: '#333', fontWeight: 500 }}>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: svc.accent,
                    color: '#fff',
                    padding: '12px 28px',
                    borderRadius: '50px',
                    fontSize: '14px',
                    fontWeight: 700,
                    fontFamily: 'var(--font-display)',
                    boxShadow: `0 6px 20px ${svc.accent}40`,
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  Learn more →
                </a>
              </div>
            </div>

            {/* RIGHT — Image mosaic */}
            <div key={`img-${activeIndex}`} style={{ animation: 'fadeIn 0.6s ease forwards' }}>
              <ImageMosaic images={svc.images} />
            </div>
          </div>

          {/* Side dot nav */}
          <div style={{
            position: 'absolute',
            right: '32px',
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            zIndex: 10,
          }}>
            {services.map((s, i) => (
              <div
                key={i}
                style={{
                  width: '8px',
                  height: i === activeIndex ? '28px' : '8px',
                  borderRadius: '4px',
                  background: i === activeIndex ? svc.accent : 'rgba(0,0,0,0.15)',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile fallback — tab-based for small screens */}
      <div className="services-mobile" style={{ display: 'none', padding: '0 5% 60px' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '28px', flexWrap: 'wrap' }}>
          {services.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              style={{
                padding: '8px 18px', borderRadius: '50px', cursor: 'pointer',
                fontSize: '12px', fontWeight: 600, border: 'none',
                background: activeIndex === i ? s.accent : '#f0f0f0',
                color: activeIndex === i ? '#fff' : '#555',
                fontFamily: 'var(--font-body)', transition: 'all 0.25s',
              }}
            >
              {s.title}
            </button>
          ))}
        </div>
        <div style={{ borderRadius: '20px', overflow: 'hidden', background: svc.bg, padding: '32px' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '26px', color: '#111', marginBottom: '12px' }}>{svc.title}</h3>
          <p style={{ color: '#666', fontSize: '14px', lineHeight: 1.8, marginBottom: '20px' }}>{svc.subtitle}</p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
            {svc.items.map((item, j) => (
              <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="9" fill={`${svc.accent}18`} />
                  <path d="M5.5 9l2.5 2.5 4.5-5" stroke={svc.accent} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontSize: '13px', fontWeight: 500, color: '#333' }}>{item}</span>
              </li>
            ))}
          </ul>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {svc.images.slice(0, 4).map((src, i) => (
              <div key={i} style={{ borderRadius: '10px', overflow: 'hidden', height: '100px' }}>
                <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @media (max-width: 900px) {
          #services [style*="height: 400vh"] { display: none !important; }
          .services-mobile { display: block !important; }
        }
        @media (max-width: 1100px) {
          #services [style*="gridTemplateColumns: 420px 1fr"] {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
