import React, { useState } from 'react';

const UNSPLASH = 'https://images.unsplash.com/';

const services = [
  {
    id: 'growth',
    title: 'Growth Marketing',
    subtitle: 'Performance-driven marketing from awareness to acquisition.',
    items: ['SEO & Organic Growth', 'Social Media Management', 'Paid Ads | PPC', 'Affiliate & Influencer Marketing', 'Email & WhatsApp Marketing'],
    images: [
      `${UNSPLASH}photo-1460925895917-afdab827c52f?w=400&q=80`,
      `${UNSPLASH}photo-1611532736597-de2d4265fba3?w=400&q=80`,
      `${UNSPLASH}photo-1432888622747-4eb9a8efeb07?w=400&q=80`,
      `${UNSPLASH}photo-1533750516457-a7f992034fec?w=400&q=80`,
      `${UNSPLASH}photo-1551288049-bebda4e38f71?w=400&q=80`,
      `${UNSPLASH}photo-1460925895917-afdab827c52f?w=400&q=80`,
    ],
    color: '#e8ff47',
  },
  {
    id: 'creative',
    title: 'Creative',
    subtitle: 'Impactful visuals and compelling storytelling for brand success.',
    items: ['Branding & Identity', 'Content Writing', 'Graphic Design', 'Social Media Content', 'Video & Motion Graphics'],
    images: [
      `${UNSPLASH}photo-1561070791-2526d30994b5?w=400&q=80`,
      `${UNSPLASH}photo-1626785774573-4b799315345d?w=400&q=80`,
      `${UNSPLASH}photo-1558655146-9f40138edfeb?w=400&q=80`,
      `${UNSPLASH}photo-1611162617213-7d7a39e9b1d7?w=400&q=80`,
      `${UNSPLASH}photo-1581291518857-4e27b48ff24e?w=400&q=80`,
      `${UNSPLASH}photo-1561070791-2526d30994b5?w=400&q=80`,
    ],
    color: '#ff6b35',
    reverse: true,
  },
  {
    id: 'development',
    title: 'Development',
    subtitle: 'Robust, scalable digital solutions powering business growth.',
    items: ['Website Development', 'Custom Web Applications', 'E-commerce Solutions', 'Database & CRM Development', 'Landing Pages & Funnels'],
    images: [
      `${UNSPLASH}photo-1498050108023-c5249f4df085?w=400&q=80`,
      `${UNSPLASH}photo-1461749280684-dccba630e2f6?w=400&q=80`,
      `${UNSPLASH}photo-1555066931-4365d14bab8c?w=400&q=80`,
      `${UNSPLASH}photo-1507238691740-187a5b1d37b8?w=400&q=80`,
      `${UNSPLASH}photo-1516116216624-53e697fedbea?w=400&q=80`,
      `${UNSPLASH}photo-1498050108023-c5249f4df085?w=400&q=80`,
    ],
    color: '#7c5cfc',
  },
  {
    id: 'strategy',
    title: 'Strategy & Consulting',
    subtitle: 'Strategic thinking meets data-driven execution for sustainable growth.',
    items: ['Digital Strategy & Planning', 'Reputation Management', 'Lead Generation & Funnels', 'AI & Automation Consulting', 'Analytics & Reporting'],
    images: [
      `${UNSPLASH}photo-1552664730-d307ca884978?w=400&q=80`,
      `${UNSPLASH}photo-1454165804606-c3d57bc86b40?w=400&q=80`,
      `${UNSPLASH}photo-1507679799987-c73779587ccf?w=400&q=80`,
      `${UNSPLASH}photo-1521791136064-7986c2920216?w=400&q=80`,
      `${UNSPLASH}photo-1600880292203-757bb62b4baf?w=400&q=80`,
      `${UNSPLASH}photo-1552664730-d307ca884978?w=400&q=80`,
    ],
    color: '#00d4ff',
    reverse: true,
  },
];

function ImageStrip({ images, reverse, speed = 30 }) {
  const doubled = [...images, ...images];
  return (
    <div style={{ overflow: 'hidden', marginBottom: '12px' }}>
      <div style={{
        display: 'flex', gap: '12px',
        animation: `${reverse ? 'marqueeReverse' : 'marquee'} ${speed}s linear infinite`,
        width: 'max-content',
      }}>
        {doubled.map((src, i) => (
          <div key={i} style={{
            width: '200px', height: '130px', borderRadius: '12px', overflow: 'hidden',
            flexShrink: 0, border: '1px solid rgba(255,255,255,0.08)',
          }}>
            <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" style={{ padding: '120px 0', overflow: 'hidden' }}>
      {/* Section label */}
      <div style={{ padding: '0 5%', maxWidth: '1400px', margin: '0 auto 60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{ width: '32px', height: '2px', background: 'var(--accent)' }}/>
          <span style={{ fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', opacity: 0.5 }}>Services</span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.1 }}>
          What We Do
        </h2>
      </div>

      {/* Tab switcher (mobile) */}
      <div style={{ padding: '0 5%', marginBottom: '40px', display: 'flex', gap: '12px', overflowX: 'auto', maxWidth: '1400px', margin: '0 auto 40px' }}>
        {services.map((s, i) => (
          <button key={i} onClick={() => setActive(i)} style={{
            background: active === i ? s.color : 'rgba(255,255,255,0.06)',
            color: active === i ? '#000' : 'var(--white)',
            border: 'none', padding: '8px 20px', borderRadius: '50px',
            fontSize: '13px', fontWeight: 600, cursor: 'pointer',
            whiteSpace: 'nowrap', transition: 'all 0.3s', fontFamily: 'var(--font-body)',
          }}>
            {s.title}
          </button>
        ))}
      </div>

      {/* Service blocks */}
      {services.map((svc, i) => (
        <div key={i} style={{
          marginBottom: '100px', display: i !== active ? 'block' : 'block',
        }}>
          {/* Content row */}
          <div style={{
            padding: '0 5%', maxWidth: '1400px', margin: '0 auto 40px',
            display: 'flex', alignItems: 'flex-start', gap: '60px',
            flexDirection: svc.reverse ? 'row-reverse' : 'row', flexWrap: 'wrap',
          }}>
            <div style={{ flex: '1', minWidth: '280px' }}>
              <div style={{
                display: 'inline-block', background: `${svc.color}15`,
                border: `1px solid ${svc.color}40`, borderRadius: '6px',
                padding: '4px 12px', fontSize: '11px', fontWeight: 700,
                letterSpacing: '2px', color: svc.color, textTransform: 'uppercase', marginBottom: '20px',
              }}>
                0{i + 1}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(28px, 3.5vw, 44px)', marginBottom: '16px', lineHeight: 1.15,
              }}>
                {svc.title}
              </h3>
              <p style={{ opacity: 0.5, marginBottom: '32px', fontSize: '16px', maxWidth: '420px', lineHeight: 1.7 }}>
                {svc.subtitle}
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {svc.items.map((item, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '22px', height: '22px', borderRadius: '50%',
                      background: `${svc.color}20`, border: `1px solid ${svc.color}50`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <svg width="10" height="8" viewBox="0 0 10 8" fill={svc.color}>
                        <path d="M1 4l3 3 5-6" stroke={svc.color} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span style={{ fontSize: '15px', fontWeight: 500 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                marginTop: '36px', padding: '12px 28px', borderRadius: '50px',
                border: `1px solid ${svc.color}40`, color: svc.color, fontSize: '14px', fontWeight: 600,
                transition: 'all 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = `${svc.color}15`; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}>
                Learn more →
              </a>
            </div>
          </div>

          {/* Image strips */}
          <ImageStrip images={svc.images} reverse={false} speed={35} />
          <ImageStrip images={[...svc.images].reverse()} reverse={true} speed={28} />
        </div>
      ))}
    </section>
  );
}
