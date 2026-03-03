import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{
      padding: '120px 5%',
      background: 'linear-gradient(180deg, transparent 0%, rgba(232,255,71,0.03) 50%, transparent 100%)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
          {/* Left */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '32px', height: '2px', background: 'var(--accent)' }}/>
              <span style={{ fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', opacity: 0.5 }}>Get In Touch</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.1, marginBottom: '24px' }}>
              Ready to Move<br />
              <span style={{ color: 'var(--accent)' }}>Your Brand</span><br />
              Forward?
            </h2>
            <p style={{ opacity: 0.5, fontSize: '16px', lineHeight: 1.8, marginBottom: '48px', maxWidth: '400px' }}>
              Let's build something remarkable together. Tell us about your project and we'll get back to you within 24 hours.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { icon: '📧', label: 'Email Us', value: 'hello@siyazen.com' },
                { icon: '📞', label: 'Call Us', value: '+91 73 73 73 5479' },
                { icon: '📍', label: 'Location', value: 'Bangalore, India' },
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '12px',
                    background: 'rgba(232,255,71,0.08)', border: '1px solid rgba(232,255,71,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px',
                  }}>
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', opacity: 0.4, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '2px' }}>{c.label}</div>
                    <div style={{ fontWeight: 600 }}>{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{
            background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '24px', padding: '40px',
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '60px', marginBottom: '20px' }}>🎉</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '28px', marginBottom: '12px' }}>Message Sent!</h3>
                <p style={{ opacity: 0.6 }}>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  {['name', 'email'].map(field => (
                    <div key={field}>
                      <label style={{ fontSize: '12px', opacity: 0.5, textTransform: 'capitalize', letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>{field}</label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        placeholder={field === 'name' ? 'Your name' : 'your@email.com'}
                        value={formData[field]}
                        onChange={e => setFormData({...formData, [field]: e.target.value})}
                        required
                        style={{
                          width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px',
                          color: 'var(--white)', fontSize: '14px', fontFamily: 'var(--font-body)',
                          outline: 'none', transition: 'border-color 0.3s',
                        }}
                        onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                      />
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ fontSize: '12px', opacity: 0.5, letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>COMPANY</label>
                  <input
                    type="text" placeholder="Your company name"
                    value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                    style={{
                      width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px',
                      color: 'var(--white)', fontSize: '14px', fontFamily: 'var(--font-body)', outline: 'none',
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>
                <div style={{ marginBottom: '28px' }}>
                  <label style={{ fontSize: '12px', opacity: 0.5, letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>MESSAGE</label>
                  <textarea
                    rows={5} placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    required
                    style={{
                      width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px',
                      color: 'var(--white)', fontSize: '14px', fontFamily: 'var(--font-body)',
                      outline: 'none', resize: 'vertical',
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>
                <button type="submit" style={{
                  width: '100%', padding: '16px', background: 'var(--accent)', color: '#000',
                  border: 'none', borderRadius: '12px', fontSize: '15px', fontWeight: 700,
                  fontFamily: 'var(--font-display)', cursor: 'pointer', letterSpacing: '0.5px',
                  transition: 'all 0.3s',
                }}
                  onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 12px 30px rgba(232,255,71,0.3)'; }}
                  onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none'; }}>
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact [style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
