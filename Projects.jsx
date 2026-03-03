import React, { useState } from 'react';

const UNSPLASH = 'https://images.unsplash.com/';

const projects = [
  {
    client: 'Doosan Bobcat India',
    tag: 'B2B Industrial',
    tagColor: '#e8ff47',
    desc: 'Targeted campaigns that enhanced digital strategy, improved visibility, and boosted dealer engagement across India.',
    results: [
      { label: 'Increase in dealer enquiries', value: '+60%' },
      { label: 'Region-specific creatives', value: '12+' },
      { label: 'Dealer network reach', value: '3x' },
    ],
    image: `${UNSPLASH}photo-1504307651254-35680f356dfd?w=700&q=80`,
  },
  {
    client: 'RNS Motors',
    tag: 'Automotive',
    tagColor: '#ff6b35',
    desc: 'GMB management, Meta Ads, WhatsApp integration, and social media driving more walk-ins and qualified leads.',
    results: [
      { label: 'Increase in GMB views', value: '+40%' },
      { label: 'Social media growth', value: '2x' },
      { label: 'Leads from Meta Ads', value: '+25%' },
    ],
    image: `${UNSPLASH}photo-1552519507-da3b142c6e3d?w=700&q=80`,
  },
  {
    client: 'Technobind',
    tag: 'IT Distribution',
    tagColor: '#7c5cfc',
    desc: 'Strengthened digital presence through strategic EDMs, social media management, and tailored creatives for partner engagement.',
    results: [
      { label: 'Partner EDMs delivered', value: '30+' },
      { label: 'Boost in social reach', value: '3x' },
      { label: 'Brand presence across India', value: '✓' },
    ],
    image: `${UNSPLASH}photo-1558494949-ef010cbdcc31?w=700&q=80`,
  },
  {
    client: 'Shruti Motors',
    tag: 'Automotive',
    tagColor: '#00d4ff',
    desc: 'Full-funnel digital marketing strategy that transformed their online presence and drove consistent showroom visits.',
    results: [
      { label: 'Website traffic growth', value: '+80%' },
      { label: 'Cost per lead reduction', value: '-35%' },
      { label: 'Monthly leads', value: '5x' },
    ],
    image: `${UNSPLASH}photo-1492144534655-ae79c964c9d7?w=700&q=80`,
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" style={{ padding: '120px 5%' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '70px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '32px', height: '2px', background: 'var(--accent)' }}/>
              <span style={{ fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', opacity: 0.5 }}>Portfolio</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.1 }}>
              Projects That<br />Delivered Results
            </h2>
          </div>
          <a href="#contact" style={{
            border: '1px solid rgba(255,255,255,0.15)', padding: '12px 28px',
            borderRadius: '50px', fontSize: '14px', fontWeight: 500,
            transition: 'all 0.3s', display: 'inline-block',
          }}
            onMouseEnter={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)'; }}
            onMouseLeave={e => { e.target.style.borderColor = 'rgba(255,255,255,0.15)'; e.target.style.color = 'var(--white)'; }}>
            View all case studies →
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {projects.map((p, i) => (
            <div key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '24px', overflow: 'hidden', cursor: 'pointer',
                transition: 'all 0.4s', transform: hovered === i ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hovered === i ? '0 30px 60px rgba(0,0,0,0.4)' : 'none',
                borderColor: hovered === i ? `${p.tagColor}30` : 'rgba(255,255,255,0.07)',
              }}>
              {/* Image */}
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img src={p.image} alt={p.client}
                  style={{
                    width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                    transition: 'transform 0.6s ease', transform: hovered === i ? 'scale(1.05)' : 'scale(1)',
                  }} />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to bottom, transparent 40%, rgba(10,10,10,0.8) 100%)',
                }}/>
                <div style={{
                  position: 'absolute', top: '16px', left: '16px',
                  background: `${p.tagColor}20`, border: `1px solid ${p.tagColor}50`,
                  color: p.tagColor, padding: '4px 12px', borderRadius: '50px',
                  fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase',
                }}>
                  {p.tag}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '22px', marginBottom: '10px' }}>
                  {p.client}
                </h3>
                <p style={{ opacity: 0.5, fontSize: '14px', lineHeight: 1.7, marginBottom: '24px' }}>
                  {p.desc}
                </p>

                {/* Results */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {p.results.map((r, j) => (
                    <div key={j} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: 'rgba(255,255,255,0.03)', borderRadius: '10px' }}>
                      <span style={{ fontSize: '13px', opacity: 0.6 }}>{r.label}</span>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '16px', color: p.tagColor }}>{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
