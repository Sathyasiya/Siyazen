import React, { useState, useEffect } from 'react';

const UNSPLASH = 'https://images.unsplash.com/';

const testimonials = [
  {
    name: 'Sudhakar',
    company: 'Surakshaa',
    rating: 5,
    text: 'The solutions they offer are simple, effective and serve the purpose. Their pricing is competitive and they absolutely deserve the investment.',
    avatar: `${UNSPLASH}photo-1507003211169-0a1dd7228f2d?w=80&q=80`,
  },
  {
    name: 'Mohan',
    company: 'Shruti Motors',
    rating: 5,
    text: 'The team quickly understood our vision and delivered work that matched it perfectly. Communication was smooth, and results were consistently impressive.',
    avatar: `${UNSPLASH}photo-1500648767791-00dcc994a43e?w=80&q=80`,
  },
  {
    name: 'Prashanth G J',
    company: 'Technobind',
    rating: 5,
    text: 'They bring clarity, structure, and great ideas to the table every time. Even tight deadlines never felt like a problem with their team.',
    avatar: `${UNSPLASH}photo-1560250097-0b93528c311a?w=80&q=80`,
  },
  {
    name: 'Anmol',
    company: 'RNS Motors',
    rating: 5,
    text: 'They just understand what we want without overcomplicating things. The final output felt thoughtful, clean, and exactly what we needed.',
    avatar: `${UNSPLASH}photo-1472099645785-5658abf4ff4e?w=80&q=80`,
  },
];

function Stars({ count }) {
  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < count ? '#e8ff47' : 'rgba(255,255,255,0.15)'}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{ padding: '120px 5%', background: 'rgba(255,255,255,0.01)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Stats bar */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2px', background: 'rgba(255,255,255,0.05)', borderRadius: '24px',
          overflow: 'hidden', marginBottom: '80px', border: '1px solid rgba(255,255,255,0.07)',
        }}>
          {[
            { val: '120+', label: 'Happy Clients' },
            { val: '$50M+', label: 'Revenue Added' },
            { val: '4.8 ⭐', label: 'Average Rating' },
          ].map((s, i) => (
            <div key={i} style={{
              padding: '40px 32px', textAlign: 'center',
              background: i === 1 ? 'rgba(232,255,71,0.04)' : 'transparent',
              borderRight: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 48px)', color: 'var(--accent)' }}>{s.val}</div>
              <div style={{ fontSize: '14px', opacity: 0.5, marginTop: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '50px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '32px', height: '2px', background: 'var(--accent)' }}/>
              <span style={{ fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', opacity: 0.5 }}>Testimonials</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 50px)', lineHeight: 1.1 }}>
              Clients Love Us
            </h2>
          </div>
          {/* Pagination dots */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} style={{
                width: i === current ? '28px' : '8px', height: '8px', borderRadius: '4px',
                background: i === current ? 'var(--accent)' : 'rgba(255,255,255,0.2)',
                border: 'none', cursor: 'pointer', transition: 'all 0.3s',
              }}/>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              padding: '32px', borderRadius: '20px',
              background: i === current ? 'rgba(232,255,71,0.05)' : 'rgba(255,255,255,0.03)',
              border: `1px solid ${i === current ? 'rgba(232,255,71,0.2)' : 'rgba(255,255,255,0.06)'}`,
              transition: 'all 0.5s', cursor: 'pointer',
              transform: i === current ? 'scale(1.02)' : 'scale(1)',
            }} onClick={() => setCurrent(i)}>
              <Stars count={t.rating} />
              <p style={{ fontSize: '15px', lineHeight: 1.8, opacity: 0.75, margin: '16px 0 24px' }}>
                "{t.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img src={t.avatar} alt={t.name} style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '15px' }}>{t.name}</div>
                  <div style={{ fontSize: '12px', opacity: 0.5 }}>{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
