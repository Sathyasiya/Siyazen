import React, { useState } from 'react';
import useInView from '../hooks/useInView';
import { SERVICES } from '../data/content';

export default function Services() {
  const [ref, inView] = useInView(0.1);
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="services"
      ref={ref}
      style={{
        padding: 'clamp(80px, 10vw, 120px) 6%',
        borderTop: '1px solid var(--border)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 32, marginBottom: 72 }}>
        <div>
          <div className={`reveal section-label ${inView ? 'visible' : ''}`}>
            <span className="gold-line" />What We Offer
          </div>
          <h2
            className={`reveal delay-1 section-heading ${inView ? 'visible' : ''}`}
            style={{ fontSize: 'clamp(36px, 5vw, 62px)' }}
          >
            Services
          </h2>
        </div>
        <p
          className={`reveal delay-2 ${inView ? 'visible' : ''}`}
          style={{
            fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 300,
            color: 'var(--muted)', maxWidth: 320, textAlign: 'right', lineHeight: 1.85,
          }}
        >
          A focused suite of capabilities, executed without compromise.
        </p>
      </div>

      {/* Service rows */}
      <div style={{ borderTop: '1px solid var(--border)' }}>
        {SERVICES.map((service, i) => (
          <div
            key={service.num}
            className={`reveal delay-${i + 1} ${inView ? 'visible' : ''}`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              padding: 'clamp(28px, 4vw, 44px) 0',
              gap: 40,
              borderBottom: '1px solid var(--border)',
              background: hovered === i ? 'rgba(201,169,110,0.03)' : 'transparent',
              transition: 'background 0.4s',
              cursor: 'default',
            }}
          >
            {/* Number */}
            <div
              style={{
                fontFamily: 'var(--font-body)', fontSize: 11,
                color: 'var(--gold)', letterSpacing: '0.15em',
                minWidth: 32, marginTop: 6, flexShrink: 0,
              }}
            >
              {service.num}
            </div>

            {/* Content */}
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(22px, 3vw, 36px)',
                    fontWeight: 300, letterSpacing: '-0.01em',
                  }}
                >
                  {service.title}
                </h3>
                <span
                  style={{
                    color: 'var(--gold)', fontSize: 20,
                    opacity: hovered === i ? 1 : 0,
                    transform: hovered === i ? 'translateX(0)' : 'translateX(-10px)',
                    transition: 'opacity 0.3s, transform 0.3s',
                  }}
                >
                  →
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 300,
                  color: 'var(--muted)', lineHeight: 1.85, maxWidth: 580,
                  marginBottom: 20,
                }}
              >
                {service.desc}
              </p>
              <div>
                {service.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
