import React, { useState } from 'react';
import useInView from '../hooks/useInView';
import { CONTACT, BRAND } from '../data/content';

export default function Contact() {
  const [ref, inView] = useInView(0.1);
  const [form, setForm] = useState({ name: '', email: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!form.name.trim() || !form.email.trim()) {
      setError('Please fill in your name and email.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
    // 👉 Replace this with your actual form submission logic
    // e.g. fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
    // or use Formspree: https://formspree.io
    console.log('Form submitted:', form);
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: 'clamp(80px, 10vw, 120px) 6%',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(48px, 8vw, 100px)',
          alignItems: 'start',
        }}
      >
        {/* Left — info */}
        <div>
          <div className={`reveal section-label ${inView ? 'visible' : ''}`}>
            <span className="gold-line" />Get in Touch
          </div>
          <h2
            className={`reveal delay-1 section-heading ${inView ? 'visible' : ''}`}
            style={{ fontSize: 'clamp(34px, 4vw, 56px)', lineHeight: 1.15, marginBottom: 36 }}
          >
            {CONTACT.headline[0]}<br />
            <em style={{ color: 'var(--gold)' }}>{CONTACT.headline[1]}</em>
          </h2>
          <p
            className={`reveal delay-2 ${inView ? 'visible' : ''}`}
            style={{
              fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 300,
              color: 'var(--muted)', lineHeight: 1.9, marginBottom: 48,
            }}
          >
            {CONTACT.subtext}
          </p>

          <div className={`reveal delay-3 ${inView ? 'visible' : ''}`}>
            {CONTACT.info.map(({ label, value }) => (
              <div
                key={label}
                style={{
                  display: 'flex', justifyContent: 'space-between',
                  padding: '16px 0', borderBottom: '1px solid var(--border)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body)', fontSize: 11,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'var(--muted)',
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-body)', fontSize: 13,
                    color: 'rgba(245,240,232,0.75)',
                  }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className={`reveal delay-2 ${inView ? 'visible' : ''}`}>
          {submitted ? (
            <div
              style={{
                textAlign: 'center', padding: 'clamp(48px, 8vw, 80px) 40px',
                border: '1px solid rgba(201,169,110,0.2)',
              }}
            >
              <div style={{ fontSize: 44, color: 'var(--gold)', marginBottom: 24, fontStyle: 'italic' }}>✦</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 300, marginBottom: 14 }}>
                Thank you
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--muted)', lineHeight: 1.8 }}>
                We'll be in touch within 48 hours.
              </p>
            </div>
          ) : (
            <div style={{ border: '1px solid var(--border)' }}>
              {/* Name */}
              <div className="form-field">
                <label htmlFor="contact-name">Full Name</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>

              {/* Email */}
              <div className="form-field">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="jane@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              {/* Budget */}
              <div className="form-field">
                <label htmlFor="contact-budget">Project Budget</label>
                <select
                  id="contact-budget"
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                >
                  {CONTACT.budgetOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="form-field" style={{ borderBottom: 'none' }}>
                <label htmlFor="contact-message">Tell Us About Your Project</label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="What are you looking to build?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              {/* Error */}
              {error && (
                <div
                  style={{
                    fontFamily: 'var(--font-body)', fontSize: 12,
                    color: '#e08080', padding: '0 28px 12px',
                  }}
                >
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                onClick={handleSubmit}
                style={{
                  width: '100%',
                  fontFamily: 'var(--font-body)', fontSize: 10,
                  fontWeight: 400, letterSpacing: '0.22em', textTransform: 'uppercase',
                  color: 'var(--cream)',
                  background: 'rgba(201,169,110,0.08)',
                  border: 'none',
                  borderTop: '1px solid rgba(201,169,110,0.18)',
                  padding: '22px', cursor: 'pointer',
                  transition: 'background 0.35s, color 0.35s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'var(--gold)';
                  e.target.style.color = 'var(--dark)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(201,169,110,0.08)';
                  e.target.style.color = 'var(--cream)';
                }}
              >
                Submit Enquiry →
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
