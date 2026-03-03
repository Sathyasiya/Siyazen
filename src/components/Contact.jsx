import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" style={{ padding: '100px 5%', background: '#f0f6ff' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '70px', alignItems: 'start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{ width: '28px', height: '2px', background: '#111' }}/><span style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#999', fontWeight: 600 }}>Get In Touch</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.1, marginBottom: '20px', color: '#111' }}>Ready to Move<br /><span style={{ color: 'var(--accent)' }}>Your Brand</span><br />Forward?</h2>
            <p style={{ color: '#666', fontSize: '15px', lineHeight: 1.8, marginBottom: '44px', maxWidth: '380px' }}>Let's build something remarkable together. Tell us about your project and we'll get back to you within 24 hours.</p>
            {[{ icon: '📧', label: 'Email Us', value: 'hello@siyazen.com' }, { icon: '📞', label: 'Call Us', value: '+91 73 73 73 5479' }, { icon: '📍', label: 'Location', value: 'Bangalore, India' }].map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>{c.icon}</div>
                <div><div style={{ fontSize: '11px', color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '2px' }}>{c.label}</div><div style={{ fontWeight: 600, color: '#111' }}>{c.value}</div></div>
              </div>
            ))}
          </div>
          <div style={{ background: '#fff', borderRadius: '24px', padding: '40px', boxShadow: '0 8px 40px rgba(0,0,0,0.08)', border: '1px solid #eee' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '56px', marginBottom: '16px' }}>🎉</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '26px', color: '#111', marginBottom: '10px' }}>Message Sent!</h3>
                <p style={{ color: '#888' }}>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                  {['name', 'email'].map(field => (
                    <div key={field}>
                      <label style={{ fontSize: '11px', color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.8px', display: 'block', marginBottom: '7px' }}>{field}</label>
                      <input type={field === 'email' ? 'email' : 'text'} placeholder={field === 'name' ? 'Your name' : 'your@email.com'} value={formData[field]} onChange={e => setFormData({...formData, [field]: e.target.value})} required style={{ width: '100%', padding: '11px 14px', background: '#f8f8f8', border: '1.5px solid #eee', borderRadius: '10px', color: '#111', fontSize: '14px', fontFamily: 'var(--font-body)', outline: 'none', transition: 'border-color 0.2s' }}
                        onFocus={e => e.target.style.borderColor = 'var(--accent)'} onBlur={e => e.target.style.borderColor = '#eee'} />
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom: '14px' }}>
                  <label style={{ fontSize: '11px', color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.8px', display: 'block', marginBottom: '7px' }}>COMPANY</label>
                  <input type="text" placeholder="Your company" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} style={{ width: '100%', padding: '11px 14px', background: '#f8f8f8', border: '1.5px solid #eee', borderRadius: '10px', color: '#111', fontSize: '14px', fontFamily: 'var(--font-body)', outline: 'none' }}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'} onBlur={e => e.target.style.borderColor = '#eee'} />
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ fontSize: '11px', color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.8px', display: 'block', marginBottom: '7px' }}>MESSAGE</label>
                  <textarea rows={5} placeholder="Tell us about your project..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} required style={{ width: '100%', padding: '11px 14px', background: '#f8f8f8', border: '1.5px solid #eee', borderRadius: '10px', color: '#111', fontSize: '14px', fontFamily: 'var(--font-body)', outline: 'none', resize: 'vertical' }}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'} onBlur={e => e.target.style.borderColor = '#eee'} />
                </div>
                <button type="submit" style={{ width: '100%', padding: '14px', background: 'var(--accent)', color: '#fff', border: 'none', borderRadius: '12px', fontSize: '15px', fontWeight: 700, fontFamily: 'var(--font-display)', cursor: 'pointer', letterSpacing: '0.3px', transition: 'all 0.3s', boxShadow: '0 6px 20px rgba(37,99,235,0.3)' }}
                  onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 12px 28px rgba(37,99,235,0.4)'; }}
                  onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 6px 20px rgba(37,99,235,0.3)'; }}>Send Message →</button>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){#contact [style*="gridTemplateColumns: 1fr 1fr"]{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
