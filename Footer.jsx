import React from 'react';

const socials = [
  { name: 'Instagram', icon: '📷', href: '#' },
  { name: 'LinkedIn', icon: '💼', href: '#' },
  { name: 'Twitter', icon: '🐦', href: '#' },
  { name: 'YouTube', icon: '▶️', href: '#' },
];

export default function Footer() {
  return (
    <footer style={{
      background: 'rgba(5,5,5,1)', borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '80px 5% 40px',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '60px', marginBottom: '60px', flexWrap: 'wrap' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{
                width: '36px', height: '36px', background: 'var(--accent)', borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ color: '#000', fontWeight: 800, fontSize: '18px', fontFamily: 'var(--font-display)' }}>S</span>
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '22px', letterSpacing: '2px' }}>SIYAZEN</span>
            </div>
            <p style={{ opacity: 0.4, fontSize: '14px', lineHeight: 1.8, maxWidth: '280px', marginBottom: '28px' }}>
              A digital growth partner that moves brands forward with precision, performance, and progress.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {socials.map((s, i) => (
                <a key={i} href={s.href} style={{
                  width: '40px', height: '40px', borderRadius: '10px',
                  background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px',
                  transition: 'all 0.3s',
                }}
                  onMouseEnter={e => { e.target.style.background = 'rgba(232,255,71,0.1)'; e.target.style.borderColor = 'rgba(232,255,71,0.3)'; }}
                  onMouseLeave={e => { e.target.style.background = 'rgba(255,255,255,0.06)'; e.target.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                  title={s.name}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '20px', fontSize: '15px' }}>Pages</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Case Studies', 'Contact Us', 'Privacy Policy', 'Terms & Conditions', 'Refund Policy'].map(item => (
                <li key={item}>
                  <a href="#" style={{ fontSize: '14px', opacity: 0.5, transition: 'opacity 0.2s' }}
                    onMouseEnter={e => e.target.style.opacity = 1}
                    onMouseLeave={e => e.target.style.opacity = 0.5}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '20px', fontSize: '15px' }}>Services</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Strategy & Consulting', 'Creative', 'Social Media Marketing', 'PPC Advertising', 'Development', 'SEO & Organic Growth'].map(item => (
                <li key={item}>
                  <a href="#services" style={{ fontSize: '14px', opacity: 0.5, transition: 'opacity 0.2s' }}
                    onMouseEnter={e => e.target.style.opacity = 1}
                    onMouseLeave={e => e.target.style.opacity = 0.5}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '20px', fontSize: '15px' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <a href="mailto:hello@siyazen.com" style={{ fontSize: '14px', opacity: 0.5, transition: 'opacity 0.2s' }}
                onMouseEnter={e => e.target.style.opacity = 1}
                onMouseLeave={e => e.target.style.opacity = 0.5}>hello@siyazen.com</a>
              <a href="tel:+917373735479" style={{ fontSize: '14px', opacity: 0.5, transition: 'opacity 0.2s' }}
                onMouseEnter={e => e.target.style.opacity = 1}
                onMouseLeave={e => e.target.style.opacity = 0.5}>+91 73 73 73 5479</a>
              <span style={{ fontSize: '14px', opacity: 0.5 }}>Bangalore, India</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px',
        }}>
          <p style={{ fontSize: '13px', opacity: 0.35 }}>
            © 2025 SIYAZEN. All rights reserved.
          </p>
          <p style={{ fontSize: '13px', opacity: 0.35 }}>
            Built with ❤️ for growth
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer [style*="gridTemplateColumns"] {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          footer [style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
