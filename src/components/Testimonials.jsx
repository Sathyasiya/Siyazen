import React, { useState, useEffect } from 'react';
const UNSPLASH = 'https://images.unsplash.com/';

const testimonials = [
  { name: 'Sudhakar', company: 'Surakshaa', rating: 5, text: 'The solutions they offer are simple, effective and serve the purpose. Their pricing is competitive and they absolutely deserve the investment.', avatar: `${UNSPLASH}photo-1507003211169-0a1dd7228f2d?w=80&q=80` },
  { name: 'Mohan', company: 'Shruti Motors', rating: 5, text: 'The team quickly understood our vision and delivered work that matched it perfectly. Communication was smooth, and results were consistently impressive.', avatar: `${UNSPLASH}photo-1500648767791-00dcc994a43e?w=80&q=80` },
  { name: 'Prashanth G J', company: 'Technobind', rating: 5, text: 'They bring clarity, structure, and great ideas to the table every time. Even tight deadlines never felt like a problem with their team.', avatar: `${UNSPLASH}photo-1560250097-0b93528c311a?w=80&q=80` },
  { name: 'Anmol', company: 'RNS Motors', rating: 5, text: 'They just understand what we want without overcomplicating things. The final output felt thoughtful, clean, and exactly what we needed.', avatar: `${UNSPLASH}photo-1472099645785-5658abf4ff4e?w=80&q=80` },
];

function Stars({ count }) {
  return <div style={{ display: 'flex', gap: '2px' }}>{Array.from({ length: 5 }).map((_, i) => (<svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < count ? '#f59e0b' : '#e5e7eb'}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>))}</div>;
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  useEffect(() => { const t = setInterval(() => setCurrent(c => (c + 1) % testimonials.length), 5000); return () => clearInterval(t); }, []);

  return (
    <section style={{ padding: '100px 5%', background: '#f7f5f2' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: '#e5e5e5', borderRadius: '20px', overflow: 'hidden', marginBottom: '70px', border: '1px solid #e5e5e5' }}>
          {[{ val: '120+', label: 'Happy Clients' }, { val: '$50M+', label: 'Revenue Added' }, { val: '4.8 ⭐', label: 'Average Rating' }].map((s, i) => (
            <div key={i} style={{ padding: '40px 32px', textAlign: 'center', background: i === 1 ? '#fff' : '#fafafa' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--accent)' }}>{s.val}</div>
              <div style={{ fontSize: '13px', color: '#999', marginTop: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{ width: '28px', height: '2px', background: '#111' }}/><span style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#999', fontWeight: 600 }}>Testimonials</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 46px)', lineHeight: 1.1, color: '#111' }}>Clients Love Us</h2>
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            {testimonials.map((_, i) => (<button key={i} onClick={() => setCurrent(i)} style={{ width: i === current ? '26px' : '8px', height: '8px', borderRadius: '4px', background: i === current ? 'var(--accent)' : '#ccc', border: 'none', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }}/>))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px' }}>
          {testimonials.map((t, i) => (
            <div key={i} onClick={() => setCurrent(i)} style={{ padding: '28px', borderRadius: '18px', background: '#fff', border: `1.5px solid ${i === current ? 'var(--accent)' : '#eee'}`, transition: 'all 0.4s', cursor: 'pointer', transform: i === current ? 'scale(1.02)' : 'scale(1)', boxShadow: i === current ? '0 8px 32px rgba(37,99,235,0.12)' : '0 2px 8px rgba(0,0,0,0.04)' }}>
              <Stars count={t.rating} />
              <p style={{ fontSize: '14px', lineHeight: 1.8, color: '#555', margin: '14px 0 20px' }}>"{t.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={t.avatar} alt={t.name} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                <div><div style={{ fontWeight: 700, fontSize: '14px', color: '#111' }}>{t.name}</div><div style={{ fontSize: '12px', color: '#999' }}>{t.company}</div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
