import React, { useState } from 'react';
import useInView from '../hooks/useInView';
import { WORK } from '../data/content';

export default function Work() {
  const [ref, inView] = useInView(0.1);
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="work"
      ref={ref}
      style={{
        padding: 'clamp(80px, 10vw, 120px) 6%',
        background: 'var(--mid)',
        borderTop: '1px solid var(--border)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 72 }}>
        <div>
          <div className={`reveal section-label ${inView ? 'visible' : ''}`}>
            <span className="gold-line" />Portfolio
          </div>
          <h2
            className={`reveal delay-1 section-heading ${inView ? 'visible' : ''}`}
            style={{ fontSize: 'clamp(36px, 5vw, 62px)' }}
          >
            Selected Work
          </h2>
        </div>
        <p
          className={`reveal delay-2 ${inView ? 'visible' : ''}`}
          style={{
            fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 300,
            color: 'var(--muted)', lineHeight: 1.85,
          }}
        >
          A curated selection of recent engagements.
        </p>
      </div>

      {/* Work list */}
      <div style={{ borderTop: '1px solid var(--border)' }}>
        {WORK.map((item, i) => (
          <div
            key={item.title}
            className={`reveal delay-${Math.min(i + 1, 5)} ${inView ? 'visible' : ''}`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 'clamp(24px, 3.5vw, 36px) 0',
              gap: 24,
              borderBottom: '1px solid var(--border)',
              background: hovered === i ? 'rgba(201,169,110,0.03)' : 'transparent',
              transition: 'background 0.4s',
              cursor: 'pointer',
              position: 'relative',
            }}
          >
            {/* Accent underline on hover */}
            <div
              style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
                background: `linear-gradient(90deg, ${item.accent}88, transparent)`,
                opacity: hovered === i ? 1 : 0,
                transition: 'opacity 0.4s',
              }}
            />

            <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px, 4vw, 36px)' }}>
              <span
                style={{
                  fontFamily: 'var(--font-body)', fontSize: 10,
                  color: hovered === i ? 'var(--gold)' : 'var(--muted)',
                  letterSpacing: '0.15em', minWidth: 24,
                  transition: 'color 0.3s',
                }}
              >
                0{i + 1}
              </span>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(20px, 2.8vw, 34px)',
                    fontWeight: 300, letterSpacing: '-0.01em',
                  }}
                >
                  {item.title}
                </h3>
                <div
                  style={{
                    fontFamily: 'var(--font-body)', fontSize: 11,
                    color: 'var(--muted)', letterSpacing: '0.12em',
                    textTransform: 'uppercase', marginTop: 6,
                  }}
                >
                  {item.category}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexShrink: 0 }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--muted)' }}>
                {item.year}
              </span>
              <span
                style={{
                  color: 'var(--gold)', fontSize: 18,
                  opacity: hovered === i ? 1 : 0,
                  transform: hovered === i ? 'translateX(0)' : 'translateX(-8px)',
                  transition: 'opacity 0.3s, transform 0.3s',
                }}
              >
                →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div
        className={`reveal delay-5 ${inView ? 'visible' : ''}`}
        style={{ marginTop: 56, textAlign: 'center' }}
      >
        <button
          className="btn-ghost"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Start your project →
        </button>
      </div>
    </section>
  );
}
