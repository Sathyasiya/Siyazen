import React from 'react';
import useInView from '../hooks/useInView';
import { HERO } from '../data/content';

export default function Hero() {
  const [ref, inView] = useInView(0.05);

  const scrollTo = (id) =>
    document.getElementById(id.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      ref={ref}
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 'clamp(100px, 12vw, 160px) 6% 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient background glow */}
      <div
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `
            radial-gradient(ellipse 80% 60% at 70% 50%, rgba(201,169,110,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 20% 80%, rgba(201,169,110,0.04) 0%, transparent 70%)
          `,
        }}
      />

      {/* Vertical grid lines */}
      {[30, 60, 79].map((pct, i) => (
        <div
          key={i}
          style={{
            position: 'absolute', top: 0, bottom: 0,
            left: `${pct}%`, width: 1,
            background: `rgba(201,169,110,${0.04 + i * 0.015})`,
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Top metadata row */}
      <div
        style={{
          position: 'absolute',
          top: 'clamp(80px, 10vw, 120px)',
          left: '6%', right: '6%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <div className={`reveal ${inView ? 'visible' : ''}`}
          style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--muted)' }}>
          Est. {HERO.estYear || '2021'} · {HERO.badge}
        </div>
        <div className={`reveal delay-1 ${inView ? 'visible' : ''}`}
          style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', textAlign: 'right' }}>
          Selected clients:<br />
          <span style={{ color: 'rgba(245,240,232,0.65)' }}>{HERO.clients}</span>
        </div>
      </div>

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className={`reveal section-label ${inView ? 'visible' : ''}`}>
          <span className="gold-line" />
          {HERO.badge}
        </div>

        <h1
          className={`reveal delay-1 ${inView ? 'visible' : ''}`}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(48px, 8vw, 108px)',
            fontWeight: 300, lineHeight: 1.02,
            letterSpacing: '-0.01em',
            marginBottom: 0,
          }}
        >
          {HERO.headline[0]}<br />
          <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>{HERO.headline[1].split(' ')[0]}</em>
          {' '}{HERO.headline[1].split(' ').slice(1).join(' ')}<br />
          {HERO.headline[2]}
        </h1>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: 32,
            marginTop: 52,
          }}
        >
          <p
            className={`reveal delay-2 ${inView ? 'visible' : ''}`}
            style={{
              fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 300,
              lineHeight: 1.85, color: 'var(--muted)', maxWidth: 400,
            }}
          >
            {HERO.subtext}
          </p>

          <div
            className={`reveal delay-3 ${inView ? 'visible' : ''}`}
            style={{ display: 'flex', gap: 'clamp(24px, 5vw, 56px)' }}
          >
            {HERO.stats.map((s) => (
              <div key={s.label} style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1 }}>
                  {s.value}
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 6 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`reveal delay-4 ${inView ? 'visible' : ''}`}
          style={{ marginTop: 52, display: 'flex', gap: 28, alignItems: 'center', flexWrap: 'wrap' }}
        >
          <button className="btn-ghost" onClick={() => scrollTo(HERO.cta1.href)}>
            {HERO.cta1.label} →
          </button>
          <div style={{ width: 48, height: 1, background: 'rgba(245,240,232,0.18)' }} />
          <button
            onClick={() => scrollTo(HERO.cta2.href)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'var(--muted)', transition: 'color 0.3s',
            }}
            onMouseEnter={(e) => (e.target.style.color = 'var(--cream)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--muted)')}
          >
            {HERO.cta2.label}
          </button>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className={`reveal delay-5 ${inView ? 'visible' : ''}`}
        style={{
          position: 'absolute', bottom: 36, right: '6%',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
        }}
      >
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', writingMode: 'vertical-rl' }}>
          Scroll
        </div>
        <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, var(--gold), transparent)' }} />
      </div>
    </section>
  );
}
