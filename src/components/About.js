import React from 'react';
import useInView from '../hooks/useInView';
import { ABOUT } from '../data/content';

export default function About() {
  const [ref, inView] = useInView(0.1);

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: 'clamp(80px, 10vw, 120px) 6%',
        background: 'var(--mid)',
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
        {/* Left column */}
        <div>
          <div className={`reveal section-label ${inView ? 'visible' : ''}`}>
            <span className="gold-line" />About the Studio
          </div>
          <h2
            className={`reveal delay-1 section-heading ${inView ? 'visible' : ''}`}
            style={{ fontSize: 'clamp(34px, 4vw, 52px)', marginBottom: 36, lineHeight: 1.15 }}
          >
            {ABOUT.headline[0]}<br />
            <em style={{ color: 'var(--gold)' }}>{ABOUT.headline[1]}</em>
          </h2>
          {ABOUT.paras.map((p, i) => (
            <p
              key={i}
              className={`reveal delay-${i + 2} ${inView ? 'visible' : ''}`}
              style={{
                fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 300,
                color: 'var(--muted)', lineHeight: 1.9,
                marginBottom: i < ABOUT.paras.length - 1 ? 18 : 0,
              }}
            >
              {p}
            </p>
          ))}
        </div>

        {/* Right column */}
        <div className={`reveal delay-2 ${inView ? 'visible' : ''}`}>
          {/* Pillars */}
          <div style={{ borderTop: '1px solid var(--border)' }}>
            {ABOUT.pillars.map((pillar) => (
              <div
                key={pillar.title}
                style={{
                  padding: 'clamp(24px, 3vw, 36px) 0',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-body)', fontSize: 10,
                    letterSpacing: '0.2em', textTransform: 'uppercase',
                    color: 'var(--gold)', marginBottom: 12,
                  }}
                >
                  {pillar.title}
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 300,
                    color: 'var(--muted)', lineHeight: 1.8,
                  }}
                >
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${ABOUT.stats.length}, 1fr)`,
              marginTop: 40,
              border: '1px solid var(--border)',
            }}
          >
            {ABOUT.stats.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  padding: 'clamp(20px, 3vw, 28px) clamp(16px, 2.5vw, 24px)',
                  borderLeft: i === 0 ? 'none' : '1px solid var(--border)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.5vw, 34px)',
                    fontWeight: 300, color: 'var(--cream)',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)', fontSize: 10,
                    letterSpacing: '0.15em', textTransform: 'uppercase',
                    color: 'var(--muted)', marginTop: 6,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
