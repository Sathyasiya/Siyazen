import React from 'react';

export default function Footer() {
  return (
    <footer style={{ background: '#111', padding: '70px 5% 36px', color: '#fff' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '50px', marginBottom: '50px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '32px', height: '32px', background: 'var(--accent)', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#fff', fontWeight: 800, fontSize: '16px', fontFamily: 'var(--font-display)' }}>S</span>
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '20px', letterSpacing: '1.5px' }}>SIYAZEN</span>
            </div>
            <p style={{ color: '#888', fontSize: '14px', lineHeight: 1.8, maxWidth: '260px', marginBottom: '24px' }}>A digital growth partner that moves brands forward with precision, performance, and progress.</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {['📷','💼','🐦','▶️'].map((icon, i) => (<a key={i} href="#" style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', transition: 'all 0.2s' }}
                onMouseEnter={e => e.target.style.background = 'rgba(37,99,235,0.3)'} onMouseLeave={e => e.target.style.background = 'rgba(255,255,255,0.06)'}>{icon}</a>))}
            </div>
          </div>
          {[
            { title: 'Pages', links: ['Case Studies', 'Contact Us', 'Privacy Policy', 'Terms & Conditions', 'Refund Policy'] },
            { title: 'Services', links: ['Strategy & Consulting', 'Creative', 'Social Media', 'PPC Advertising', 'Development', 'SEO & Growth'] },
            { title: 'Contact', links: ['hello@siyazen.com', '+91 73 73 73 5479', 'Bangalore, India'] },
          ].map((col, i) => (
            <div key={i}>
              <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '18px', fontSize: '14px' }}>{col.title}</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {col.links.map(link => (<li key={link}><a href="#" style={{ fontSize: '13px', color: '#888', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = '#888'}>{link}</a></li>))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontSize: '13px', color: '#555' }}>© 2025 SIYAZEN. All rights reserved.</p>
          <p style={{ fontSize: '13px', color: '#555' }}>Built with ❤️ for growth</p>
        </div>
      </div>
      <style>{`@media(max-width:900px){footer [style*="gridTemplateColumns: 2fr"]{grid-template-columns:1fr 1fr!important}}@media(max-width:480px){footer [style*="gridTemplateColumns: 2fr"]{grid-template-columns:1fr!important}}`}</style>
    </footer>
  );
}
