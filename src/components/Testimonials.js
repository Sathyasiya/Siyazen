import React from 'react';
import useInView from '../hooks/useInView';
import { TESTIMONIALS } from '../data/content';

export default function Testimonials() {
  const [ref, inView] = useInView(0.1);

  return (
    <section
      id="testimonials"
      ref={ref}
      style={{
        padding: 'clamp(80px, 10vw, 120px) 6%',
        borderTop: '1px solid var(--border)',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 72 }}>
        <div className={`reveal section-label ${inView ? 'visible' : ''}`}>
          <span className="gold-line" />Client Voices
        </div>
        <h2
          className={`reveal delay-1 section-heading ${inView ? 'visible' : ''}`}
          style={{ fontSize: 'clamp(36px, 5vw, 62px)' }}
        >
          What They Say
        </h2>
      </div>

      {/* Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 2,
          background: 'rgba(245,240,232,0.04)',
        }}
      >
        {TESTIMONIALS.map((t, i) => (
          <TestimonialCard key={t.name} testimonial={t} delay={i + 1} inView={inView} />
        ))}
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, delay, inView }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className={`reveal delay-${delay} ${inView ? 'visible' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--dark)',
        padding: 'clamp(36px, 5vw, 52px) clamp(28px, 4vw, 44px)',
        border: `1px solid ${hovered ? 'rgba(201,169,110,0.3)' : 'var(--border)'}`,
        transition: 'border-color 0.4s, background 0.4s',
        background: hovered ? 'rgba(201,169,110,0.02)' : 'var(--dark)',
      }}
    >
      <div
        style={{
          fontSize: 52, fontWeight: 300, fontFamily: 'var(--font-display)',
          color: 'var(--gold)', lineHeight: 0.8, marginBottom: 28, opacity: 0.55,
          fontStyle: 'italic',
        }}
      >
        "
      </div>
      <p
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(16px, 2vw, 19px)',
          fontWeight: 300, lineHeight: 1.75,
          letterSpacing: '0.01em',
          color: 'rgba(245,240,232,0.85)',
          fontStyle: 'italic',
          marginBottom: 36,
        }}
      >
        {testimonial.quote}
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div
          style={{
            width: 44, height: 44, borderRadius: '50%',
            background: 'rgba(201,169,110,0.1)',
            border: '1px solid rgba(201,169,110,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-display)', fontSize: 16,
            color: 'var(--gold)', fontWeight: 300, flexShrink: 0,
          }}
        >
          {testimonial.initial}
        </div>
        <div>
          <div
            style={{
              fontFamily: 'var(--font-body)', fontSize: 13,
              fontWeight: 500, letterSpacing: '0.06em',
            }}
          >
            {testimonial.name}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-body)', fontSize: 11,
              color: 'var(--muted)', letterSpacing: '0.08em', marginTop: 3,
            }}
          >
            {testimonial.role}
          </div>
        </div>
      </div>
    </div>
  );
}
