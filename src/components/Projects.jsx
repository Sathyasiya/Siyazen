import React, { useState } from 'react';
const UNSPLASH = 'https://images.unsplash.com/';

const projects = [
  { client: 'Doosan Bobcat India', tag: 'B2B Industrial', tagColor: '#2563eb', desc: 'Targeted campaigns that enhanced digital strategy, improved visibility, and boosted dealer engagement across India.', results: [{ label: 'Dealer enquiries', value: '+60%' }, { label: 'Region creatives', value: '12+' }, { label: 'Dealer network', value: '3x' }], image: `${UNSPLASH}photo-1504307651254-35680f356dfd?w=700&q=80` },
  { client: 'RNS Motors', tag: 'Automotive', tagColor: '#dc2626', desc: 'GMB management, Meta Ads, WhatsApp integration, and social media driving more walk-ins and qualified leads.', results: [{ label: 'GMB views', value: '+40%' }, { label: 'Social growth', value: '2x' }, { label: 'Meta Ads leads', value: '+25%' }], image: `${UNSPLASH}photo-1552519507-da3b142c6e3d?w=700&q=80` },
  { client: 'Technobind', tag: 'IT Distribution', tagColor: '#7c3aed', desc: 'Strategic EDMs, social media management, and tailored creatives for partner engagement across India.', results: [{ label: 'Partner EDMs', value: '30+' }, { label: 'Social reach', value: '3x' }, { label: 'Brand presence', value: '✓' }], image: `${UNSPLASH}photo-1558494949-ef010cbdcc31?w=700&q=80` },
  { client: 'Shruti Motors', tag: 'Automotive', tagColor: '#059669', desc: 'Full-funnel digital marketing strategy that transformed their online presence and drove consistent showroom visits.', results: [{ label: 'Traffic growth', value: '+80%' }, { label: 'CPL reduction', value: '-35%' }, { label: 'Monthly leads', value: '5x' }], image: `${UNSPLASH}photo-1492144534655-ae79c964c9d7?w=700&q=80` },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);
  return (
    <section id="projects" style={{ padding: '100px 5%', background: '#fff' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '60px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{ width: '28px', height: '2px', background: '#111' }}/><span style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#999', fontWeight: 600 }}>Portfolio</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(30px, 5vw, 52px)', lineHeight: 1.1, color: '#111' }}>Projects That<br />Delivered Results</h2>
          </div>
          <a href="#contact" style={{ border: '1.5px solid #e0e0e0', padding: '11px 26px', borderRadius: '50px', fontSize: '14px', fontWeight: 500, color: '#555', transition: 'all 0.3s' }}
            onMouseEnter={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)'; }}
            onMouseLeave={e => { e.target.style.borderColor = '#e0e0e0'; e.target.style.color = '#555'; }}>View all case studies →</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {projects.map((p, i) => (
            <div key={i} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)} style={{ background: '#fff', border: `1px solid ${hovered === i ? p.tagColor + '30' : '#eee'}`, borderRadius: '20px', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.4s', transform: hovered === i ? 'translateY(-6px)' : 'translateY(0)', boxShadow: hovered === i ? '0 20px 50px rgba(0,0,0,0.1)' : '0 2px 12px rgba(0,0,0,0.04)' }}>
              <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                <img src={p.image} alt={p.client} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s', transform: hovered === i ? 'scale(1.05)' : 'scale(1)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.3) 100%)' }}/>
                <div style={{ position: 'absolute', top: '14px', left: '14px', background: `${p.tagColor}18`, border: `1px solid ${p.tagColor}40`, color: p.tagColor, padding: '3px 10px', borderRadius: '50px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.5px' }}>{p.tag}</div>
              </div>
              <div style={{ padding: '22px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '20px', marginBottom: '8px', color: '#111' }}>{p.client}</h3>
                <p style={{ color: '#777', fontSize: '13px', lineHeight: 1.7, marginBottom: '20px' }}>{p.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {p.results.map((r, j) => (
                    <div key={j} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: '#f8f8f8', borderRadius: '8px' }}>
                      <span style={{ fontSize: '12px', color: '#888' }}>{r.label}</span>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '14px', color: p.tagColor }}>{r.value}</span>
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
