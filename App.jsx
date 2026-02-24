import React, { useState, useEffect, useRef } from 'react'

/* ── useInView hook ── */
function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); obs.disconnect() }
    }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, vis]
}

/* ── Design Tokens ── */
const BLUE    = '#1a1aff'
const BLUE2   = '#4444ff'
const DARK    = '#0f0f1a'
const GRAY    = '#6b7280'
const LGRAY   = '#f4f4f8'
const BORDER  = '#e5e7eb'
const WHITE   = '#ffffff'
const DISPLAY = "'Syne', sans-serif"
const BODY    = "'DM Sans', sans-serif"

/* ── Data ── */
const SERVICES = [
  { icon: '🤖', num: '01', title: 'Artificial Intelligence', desc: 'Custom AI models, LLM integrations, chatbots, and automation pipelines — built to make your operations smarter and faster.', tags: ['Custom LLMs', 'Chatbots', 'Automation', 'ML Pipelines'] },
  { icon: '💻', num: '02', title: 'Website Development', desc: 'High-performance web apps, marketing sites, and platforms built with React and modern stacks that scale with your business.', tags: ['React', 'Next.js', 'Full-Stack', 'E-commerce'] },
  { icon: '🎨', num: '03', title: 'UI / UX Design', desc: 'User-first design systems and interfaces that convert. We obsess over every interaction to create experiences people love.', tags: ['Research', 'Figma', 'Design Systems', 'Prototyping'] },
  { icon: '✨', num: '04', title: 'Brand Identity', desc: 'Logos, visual systems, typography, and motion — crafted to give your brand a presence that stands out and endures.', tags: ['Logo', 'Branding', 'Motion', 'Guidelines'] },
]

const WORK = [
  { title: 'Aether Finance',   cat: 'AI · Web Platform',      year: '2024', color: '#e8f0ff' },
  { title: 'Lumina Health',    cat: 'UI/UX · AI Integration',  year: '2024', color: '#e8fff2' },
  { title: 'Obsidian Capital', cat: 'Web · Design System',     year: '2023', color: '#fff8e8' },
  { title: 'Solstice Retail',  cat: 'AI · Full Stack',         year: '2023', color: '#ffe8f0' },
  { title: 'Meridian Law',     cat: 'Web · Branding',          year: '2022', color: '#f0e8ff' },
]

const TESTIMONIALS = [
  { quote: 'The level of craft and strategic thinking was unlike anything we experienced before. They redefined what our digital presence could be.', name: 'Eleanor Voss',   role: 'CEO, Aether Finance',      stars: 5 },
  { quote: 'Exceptional taste combined with real engineering depth. They brought both to every single decision — rare combination.', name: 'James Harlow',  role: 'CPO, Lumina Health',       stars: 5 },
  { quote: 'Our conversion rate doubled. But more importantly, our brand finally felt worthy of the clients we serve.', name: 'Sophia Renaud', role: 'Founder, Obsidian Capital', stars: 5 },
]

const STATS = [
  { value: '50+',  label: 'Projects Delivered' },
  { value: '98%',  label: 'Client Retention'   },
  { value: '12',   label: 'Countries Served'   },
  { value: '6+',   label: 'Years Experience'   },
]

/* ── Global CSS ── */
const CSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: ${WHITE}; color: ${DARK}; font-family: ${BODY}; -webkit-font-smoothing: antialiased; overflow-x: hidden; }
  ::-webkit-scrollbar { width: 4px; background: ${LGRAY}; }
  ::-webkit-scrollbar-thumb { background: ${BLUE}; border-radius: 4px; }

  /* reveal animations */
  .rv { opacity: 0; transform: translateY(28px); transition: opacity .7s cubic-bezier(.16,1,.3,1), transform .7s cubic-bezier(.16,1,.3,1); }
  .rv.in { opacity: 1; transform: none; }
  .d1{transition-delay:.08s}.d2{transition-delay:.18s}.d3{transition-delay:.28s}.d4{transition-delay:.38s}.d5{transition-delay:.48s}.d6{transition-delay:.58s}

  /* nav */
  .nav-link { font-family: ${BODY}; font-size: 14px; font-weight: 500; color: ${DARK}; text-decoration: none; background: none; border: none; cursor: pointer; transition: color .2s; padding: 0; }
  .nav-link:hover { color: ${BLUE}; }

  /* buttons */
  .btn-primary { display: inline-flex; align-items: center; gap: 8px; font-family: ${BODY}; font-size: 14px; font-weight: 600; color: ${WHITE}; background: ${BLUE}; border: 2px solid ${BLUE}; border-radius: 50px; padding: 13px 28px; cursor: pointer; transition: all .25s; text-decoration: none; }
  .btn-primary:hover { background: ${BLUE2}; border-color: ${BLUE2}; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(26,26,255,.25); }
  .btn-outline { display: inline-flex; align-items: center; gap: 8px; font-family: ${BODY}; font-size: 14px; font-weight: 600; color: ${BLUE}; background: transparent; border: 2px solid ${BLUE}; border-radius: 50px; padding: 13px 28px; cursor: pointer; transition: all .25s; text-decoration: none; }
  .btn-outline:hover { background: ${BLUE}; color: ${WHITE}; transform: translateY(-1px); }

  /* service card */
  .scard { background: ${WHITE}; border: 1.5px solid ${BORDER}; border-radius: 20px; padding: 36px 32px; transition: all .3s; cursor: default; }
  .scard:hover { border-color: ${BLUE}; box-shadow: 0 12px 40px rgba(26,26,255,.1); transform: translateY(-4px); }
  .scard:hover .scard-icon { background: ${BLUE}; }

  /* work row */
  .wrow { display: flex; align-items: center; justify-content: space-between; padding: 28px 0; border-bottom: 1.5px solid ${BORDER}; transition: all .3s; cursor: pointer; gap: 16px; }
  .wrow:hover { padding-left: 12px; }
  .wrow:hover .wrow-dot { background: ${BLUE}; }
  .wrow:hover .wrow-title { color: ${BLUE}; }
  .wrow:hover .wrow-arrow { opacity: 1; transform: translateX(0); }

  /* testimonial */
  .tcard { background: ${WHITE}; border: 1.5px solid ${BORDER}; border-radius: 20px; padding: 36px 32px; transition: all .3s; }
  .tcard:hover { border-color: ${BLUE}; box-shadow: 0 8px 32px rgba(26,26,255,.08); }

  /* tag */
  .tag { display: inline-block; font-family: ${BODY}; font-size: 12px; font-weight: 500; background: ${LGRAY}; color: ${GRAY}; border-radius: 6px; padding: 4px 10px; margin: 3px 3px 0 0; transition: all .2s; }
  .scard:hover .tag { background: #e8e8ff; color: ${BLUE}; }

  /* scrolling ticker */
  @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  .ticker-track { display: flex; animation: ticker 28s linear infinite; width: max-content; }
  .ticker-track:hover { animation-play-state: paused; }

  /* logo strip */
  @keyframes strip { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  .strip-track { display: flex; align-items: center; gap: 56px; animation: strip 22s linear infinite; width: max-content; }

  /* section label */
  .slabel { display: inline-flex; align-items: center; gap: 8px; font-family: ${BODY}; font-size: 12px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; color: ${BLUE}; background: #e8e8ff; border-radius: 50px; padding: 6px 14px; margin-bottom: 20px; }

  /* form */
  .finput { width: 100%; font-family: ${BODY}; font-size: 15px; font-weight: 400; color: ${DARK}; background: ${LGRAY}; border: 1.5px solid transparent; border-radius: 12px; padding: 14px 18px; outline: none; transition: border-color .25s, background .25s; }
  .finput:focus { background: ${WHITE}; border-color: ${BLUE}; }
  .finput::placeholder { color: #9ca3af; }

  /* mobile nav */
  @media(max-width: 768px) { .desk { display: none !important; } }
  @media(min-width: 769px) { .mob { display: none !important; } }

  /* gradient hero text */
  .hero-grad { background: linear-gradient(135deg, ${DARK} 0%, ${BLUE} 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

  /* floating badge */
  @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
  .float { animation: float 4s ease-in-out infinite; }
  .float2 { animation: float 5s ease-in-out infinite .8s; }
  .float3 { animation: float 3.5s ease-in-out infinite 1.4s; }

  /* faq */
  .faq-item { border-bottom: 1.5px solid ${BORDER}; }
  .faq-btn { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 22px 0; background: none; border: none; cursor: pointer; font-family: ${BODY}; font-size: 16px; font-weight: 600; color: ${DARK}; text-align: left; transition: color .2s; gap: 16px; }
  .faq-btn:hover { color: ${BLUE}; }
`

/* ══════ NAVBAR ══════ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  const go = id => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        padding: '0 5%', height: 68,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(255,255,255,.95)' : WHITE,
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? `1px solid ${BORDER}` : 'none',
        transition: 'all .4s',
      }}>
        {/* Logo */}
        <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36, height: 36, background: BLUE, borderRadius: 10,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: DISPLAY, fontSize: 18, fontWeight: 800, color: WHITE,
          }}>S</div>
          <span style={{ fontFamily: DISPLAY, fontSize: 20, fontWeight: 800, color: DARK, letterSpacing: '-.02em' }}>
            Siyazen
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="desk" style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
          {[['Services','services'],['Work','work'],['About','about'],['Contact','contact']].map(([l, id]) => (
            <button key={id} className="nav-link" onClick={() => go(id)}>{l}</button>
          ))}
        </nav>

        <button className="btn-primary desk" style={{ padding: '10px 22px', fontSize: 13 }} onClick={() => go('contact')}>
          Get Started →
        </button>

        {/* Hamburger */}
        <button className="mob" onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, display: 'flex', flexDirection: 'column', gap: 5 }}>
          {[0,1,2].map(i => (
            <div key={i} style={{
              width: 22, height: 2, background: DARK, borderRadius: 2, transition: 'all .3s',
              transform: i===0&&open ? 'rotate(45deg) translate(5px,5px)' : i===2&&open ? 'rotate(-45deg) translate(5px,-5px)' : 'none',
              opacity: i===1&&open ? 0 : 1,
            }}/>
          ))}
        </button>
      </header>

      {/* Mobile menu */}
      <div className="mob" style={{
        position: 'fixed', top: 68, left: 0, right: 0, bottom: 0, zIndex: 190,
        background: WHITE, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 36,
        transform: open ? 'translateX(0)' : 'translateX(100%)', transition: 'transform .4s cubic-bezier(.16,1,.3,1)',
        borderTop: `1px solid ${BORDER}`,
      }}>
        {[['Services','services'],['Work','work'],['About','about'],['Contact','contact']].map(([l,id]) => (
          <button key={id} onClick={() => go(id)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: DISPLAY, fontSize: 32, fontWeight: 700, color: DARK }}>
            {l}
          </button>
        ))}
        <button className="btn-primary" onClick={() => go('contact')}>Get Started →</button>
      </div>
    </>
  )
}

/* ══════ HERO ══════ */
function Hero() {
  const [ref, vis] = useInView(0.05)

  return (
    <section ref={ref} id="hero" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: 'clamp(100px,14vw,160px) 5% clamp(60px,8vw,100px)',
      position: 'relative', overflow: 'hidden', background: WHITE,
    }}>
      {/* BG decorative blobs */}
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 'clamp(300px,50vw,600px)', height: 'clamp(300px,50vw,600px)', borderRadius: '50%', background: 'radial-gradient(circle, rgba(26,26,255,.07) 0%, transparent 70%)', pointerEvents: 'none' }}/>
      <div style={{ position: 'absolute', bottom: '5%', left: '-8%', width: 'clamp(200px,35vw,450px)', height: 'clamp(200px,35vw,450px)', borderRadius: '50%', background: 'radial-gradient(circle, rgba(26,26,255,.05) 0%, transparent 70%)', pointerEvents: 'none' }}/>

      {/* Grid dots */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.4, pointerEvents: 'none' }}/>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 860 }}>
        {/* Badge */}
        <div className={`rv slabel ${vis?'in':''}`} style={{ marginBottom: 28 }}>
          ✦ AI & Digital Studio
        </div>

        {/* Headline */}
        <h1 className={`rv d1 ${vis?'in':''}`} style={{
          fontFamily: DISPLAY, fontSize: 'clamp(44px,7vw,92px)', fontWeight: 800,
          lineHeight: 1.0, letterSpacing: '-.03em', marginBottom: 28,
          color: DARK,
        }}>
          We Build<br/>
          <span className="hero-grad">Intelligent</span><br/>
          Digital Products.
        </h1>

        <p className={`rv d2 ${vis?'in':''}`} style={{
          fontFamily: BODY, fontSize: 'clamp(16px,2vw,20px)', fontWeight: 400,
          color: GRAY, lineHeight: 1.7, maxWidth: 520, marginBottom: 44,
        }}>
          AI systems, world-class websites, and UI/UX design — crafted with precision for businesses that want to grow faster and smarter.
        </p>

        <div className={`rv d3 ${vis?'in':''}`} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>
            Start a Project →
          </button>
          <button className="btn-outline" onClick={() => document.getElementById('work')?.scrollIntoView({behavior:'smooth'})}>
            View Our Work
          </button>
        </div>

        {/* Stats row */}
        <div className={`rv d4 ${vis?'in':''}`} style={{
          display: 'flex', gap: 'clamp(24px,5vw,56px)', flexWrap: 'wrap',
          marginTop: 64, paddingTop: 48, borderTop: `1.5px solid ${BORDER}`,
        }}>
          {STATS.map(s => (
            <div key={s.label}>
              <div style={{ fontFamily: DISPLAY, fontSize: 'clamp(28px,4vw,42px)', fontWeight: 800, color: DARK, lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontFamily: BODY, fontSize: 13, color: GRAY, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating cards — desktop accent */}
      <div className="desk float" style={{
        position: 'absolute', right: '8%', top: '25%',
        background: WHITE, border: `1.5px solid ${BORDER}`, borderRadius: 16,
        padding: '18px 22px', boxShadow: '0 8px 32px rgba(0,0,0,.08)',
        display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <div style={{ width: 40, height: 40, background: '#e8f0ff', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>🤖</div>
        <div>
          <div style={{ fontFamily: BODY, fontSize: 13, fontWeight: 600, color: DARK }}>AI Integration</div>
          <div style={{ fontFamily: BODY, fontSize: 11, color: GRAY }}>Ready to deploy</div>
        </div>
      </div>

      <div className="desk float2" style={{
        position: 'absolute', right: '5%', top: '55%',
        background: WHITE, border: `1.5px solid ${BORDER}`, borderRadius: 16,
        padding: '18px 22px', boxShadow: '0 8px 32px rgba(0,0,0,.08)',
        display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <div style={{ width: 40, height: 40, background: '#e8fff2', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>🚀</div>
        <div>
          <div style={{ fontFamily: BODY, fontSize: 13, fontWeight: 600, color: DARK }}>98% Satisfaction</div>
          <div style={{ fontFamily: BODY, fontSize: 11, color: GRAY }}>Across all projects</div>
        </div>
      </div>

      <div className="desk float3" style={{
        position: 'absolute', right: '18%', top: '72%',
        background: WHITE, border: `1.5px solid ${BORDER}`, borderRadius: 16,
        padding: '16px 20px', boxShadow: '0 8px 32px rgba(0,0,0,.08)',
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <div style={{ display: 'flex', gap: 4 }}>
          {[...Array(5)].map((_,i) => <span key={i} style={{ color: '#f59e0b', fontSize: 14 }}>★</span>)}
        </div>
        <div style={{ fontFamily: BODY, fontSize: 13, fontWeight: 600, color: DARK }}>4.9 / 5.0</div>
      </div>
    </section>
  )
}

/* ══════ CLIENT TICKER ══════ */
function ClientTicker() {
  const clients = ['Aether Finance','Lumina Health','Obsidian Capital','Solstice Retail','Meridian Law','NovaMind AI','Pulse Analytics','Stellar Brand']
  const doubled = [...clients, ...clients]
  return (
    <div style={{ background: LGRAY, borderTop: `1.5px solid ${BORDER}`, borderBottom: `1.5px solid ${BORDER}`, padding: '18px 0', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
        <div className="ticker-track">
          {doubled.map((c,i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 48, padding: '0 48px', whiteSpace: 'nowrap' }}>
              <span style={{ fontFamily: BODY, fontSize: 14, fontWeight: 500, color: GRAY }}>{c}</span>
              <span style={{ color: BLUE, fontSize: 8 }}>✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ══════ SERVICES ══════ */
function Services() {
  const [ref, vis] = useInView(0.1)

  return (
    <section id="services" ref={ref} style={{ padding: 'clamp(80px,10vw,120px) 5%', background: WHITE }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 56 }}>
          <div>
            <div className={`rv slabel ${vis?'in':''}`}>Our Services</div>
            <h2 className={`rv d1 ${vis?'in':''}`} style={{ fontFamily: DISPLAY, fontSize: 'clamp(32px,5vw,56px)', fontWeight: 800, letterSpacing: '-.03em', color: DARK, lineHeight: 1.1 }}>
              What We Build<br/>For You
            </h2>
          </div>
          <p className={`rv d2 ${vis?'in':''}`} style={{ fontFamily: BODY, fontSize: 15, color: GRAY, maxWidth: 360, lineHeight: 1.7 }}>
            A focused set of capabilities executed to the highest standard — from strategy through to launch.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: 24 }}>
          {SERVICES.map((s,i) => (
            <div key={s.num} className={`scard rv d${i+1} ${vis?'in':''}`}>
              <div className="scard-icon" style={{
                width: 52, height: 52, background: '#e8e8ff', borderRadius: 14,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 24, marginBottom: 24, transition: 'background .3s',
              }}>{s.icon}</div>
              <div style={{ fontFamily: BODY, fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: BLUE, marginBottom: 10 }}>{s.num}</div>
              <h3 style={{ fontFamily: DISPLAY, fontSize: 22, fontWeight: 700, color: DARK, marginBottom: 14, letterSpacing: '-.02em' }}>{s.title}</h3>
              <p style={{ fontFamily: BODY, fontSize: 14, color: GRAY, lineHeight: 1.75, marginBottom: 20 }}>{s.desc}</p>
              <div>{s.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════ WORK ══════ */
function Work() {
  const [ref, vis] = useInView(0.1)
  const [hov, setHov] = useState(null)

  return (
    <section id="work" ref={ref} style={{ padding: 'clamp(80px,10vw,120px) 5%', background: LGRAY }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 56 }}>
          <div>
            <div className={`rv slabel ${vis?'in':''}`}>Our Portfolio</div>
            <h2 className={`rv d1 ${vis?'in':''}`} style={{ fontFamily: DISPLAY, fontSize: 'clamp(32px,5vw,56px)', fontWeight: 800, letterSpacing: '-.03em', color: DARK, lineHeight: 1.1 }}>
              Selected Work
            </h2>
          </div>
          <button className={`btn-outline rv d2 ${vis?'in':''}`} onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>
            Start a Project →
          </button>
        </div>

        {/* Work list */}
        <div style={{ background: WHITE, borderRadius: 24, border: `1.5px solid ${BORDER}`, overflow: 'hidden' }}>
          {WORK.map((w,i) => (
            <div key={w.title} className={`wrow rv d${Math.min(i+1,5)} ${vis?'in':''}`}
              onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}
              style={{ padding: 'clamp(20px,3vw,28px) clamp(20px,4vw,40px)', background: hov===i ? w.color : WHITE, transition: 'all .3s', borderBottom: i<WORK.length-1 ? `1.5px solid ${BORDER}` : 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                <div className="wrow-dot" style={{ width: 10, height: 10, borderRadius: '50%', background: hov===i ? BLUE : BORDER, flexShrink: 0, transition: 'background .3s' }}/>
                <div>
                  <div className="wrow-title" style={{ fontFamily: DISPLAY, fontSize: 'clamp(18px,2.5vw,28px)', fontWeight: 700, color: DARK, letterSpacing: '-.02em', transition: 'color .3s' }}>{w.title}</div>
                  <div style={{ fontFamily: BODY, fontSize: 13, color: GRAY, marginTop: 3 }}>{w.cat}</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{ fontFamily: BODY, fontSize: 13, color: GRAY }}>{w.year}</span>
                <div className="wrow-arrow" style={{ width: 36, height: 36, background: BLUE, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: WHITE, fontSize: 16, opacity: hov===i?1:0, transform: hov===i?'translateX(0)':'translateX(-10px)', transition: 'all .3s' }}>→</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════ TESTIMONIALS ══════ */
function Testimonials() {
  const [ref, vis] = useInView(0.1)

  return (
    <section id="testimonials" ref={ref} style={{ padding: 'clamp(80px,10vw,120px) 5%', background: WHITE }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className={`rv slabel ${vis?'in':''}`} style={{ justifyContent: 'center' }}>Client Reviews</div>
          <h2 className={`rv d1 ${vis?'in':''}`} style={{ fontFamily: DISPLAY, fontSize: 'clamp(32px,5vw,56px)', fontWeight: 800, letterSpacing: '-.03em', color: DARK, lineHeight: 1.1 }}>
            What Our Clients Say
          </h2>
        </div>

        {/* Stats bar */}
        <div className={`rv d2 ${vis?'in':''}`} style={{ background: LGRAY, border: `1.5px solid ${BORDER}`, borderRadius: 20, padding: '32px 40px', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 24, marginBottom: 40 }}>
          {[['120+','Happy Clients'],['$50M+','Revenue Added'],['4.9/5','Average Rating'],['98%','Satisfaction Rate']].map(([v,l]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: DISPLAY, fontSize: 'clamp(24px,3vw,36px)', fontWeight: 800, color: BLUE }}>{v}</div>
              <div style={{ fontFamily: BODY, fontSize: 13, color: GRAY, marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 24 }}>
          {TESTIMONIALS.map((t,i) => (
            <div key={t.name} className={`tcard rv d${i+1} ${vis?'in':''}`}>
              <div style={{ display: 'flex', marginBottom: 16 }}>
                {[...Array(t.stars)].map((_,j) => <span key={j} style={{ color: '#f59e0b', fontSize: 16 }}>★</span>)}
              </div>
              <p style={{ fontFamily: BODY, fontSize: 15, color: DARK, lineHeight: 1.75, fontStyle: 'italic', marginBottom: 28 }}>"{t.quote}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#e8e8ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: DISPLAY, fontSize: 18, fontWeight: 700, color: BLUE, flexShrink: 0 }}>
                  {t.name[0]}
                </div>
                <div>
                  <div style={{ fontFamily: BODY, fontSize: 14, fontWeight: 600, color: DARK }}>{t.name}</div>
                  <div style={{ fontFamily: BODY, fontSize: 12, color: GRAY, marginTop: 2 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════ ABOUT ══════ */
function About() {
  const [ref, vis] = useInView(0.1)

  return (
    <section id="about" ref={ref} style={{ padding: 'clamp(80px,10vw,120px) 5%', background: LGRAY }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' }}>
        <div>
          <div className={`rv slabel ${vis?'in':''}`}>About Siyazen</div>
          <h2 className={`rv d1 ${vis?'in':''}`} style={{ fontFamily: DISPLAY, fontSize: 'clamp(32px,5vw,52px)', fontWeight: 800, letterSpacing: '-.03em', color: DARK, lineHeight: 1.1, marginBottom: 24 }}>
            Precision &amp; craft<br/>at every layer
          </h2>
          <p className={`rv d2 ${vis?'in':''}`} style={{ fontFamily: BODY, fontSize: 15, color: GRAY, lineHeight: 1.8, marginBottom: 18 }}>
            Siyazen is a boutique digital studio founded on a simple belief: that great outcomes require deep collaboration, genuine expertise, and a relentless commitment to quality over volume.
          </p>
          <p className={`rv d3 ${vis?'in':''}`} style={{ fontFamily: BODY, fontSize: 15, color: GRAY, lineHeight: 1.8, marginBottom: 36 }}>
            We take on a limited number of engagements each year — by design. Each client receives our full attention, our sharpest thinking, and work we are genuinely proud to ship.
          </p>
          <button className={`btn-primary rv d4 ${vis?'in':''}`} onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>
            Work With Us →
          </button>
        </div>

        <div className={`rv d2 ${vis?'in':''}`} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[
            { icon: '🎯', title: 'Strategy First', desc: 'Every engagement starts with understanding your goals, market, and users — before a single line of code.' },
            { icon: '⚡', title: 'Fast Execution', desc: 'We move with urgency without sacrificing quality. Most projects delivered in 4–8 weeks.' },
            { icon: '🤝', title: 'Long-term Partnership', desc: 'We don\'t disappear at launch. We grow alongside you and iterate as your business evolves.' },
          ].map(p => (
            <div key={p.title} style={{ display: 'flex', gap: 18, background: WHITE, borderRadius: 16, padding: '22px 24px', border: `1.5px solid ${BORDER}` }}>
              <div style={{ width: 44, height: 44, background: '#e8e8ff', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{p.icon}</div>
              <div>
                <div style={{ fontFamily: BODY, fontSize: 15, fontWeight: 600, color: DARK, marginBottom: 4 }}>{p.title}</div>
                <div style={{ fontFamily: BODY, fontSize: 13, color: GRAY, lineHeight: 1.6 }}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════ FAQ ══════ */
function FAQ() {
  const [ref, vis] = useInView(0.1)
  const [open, setOpen] = useState(null)
  const toggle = i => setOpen(open===i ? null : i)
  const faqs = [
    { q: 'What services does Siyazen offer?', a: 'We offer AI integration & development, full-stack web development, UI/UX design, and brand identity. We work across the full digital stack.' },
    { q: 'How long does a typical project take?', a: 'Most projects are delivered within 4–8 weeks depending on scope. We\'ll give you a detailed timeline during our kickoff call.' },
    { q: 'Do you work with early-stage startups?', a: 'Yes. We love working with ambitious founders. We\'ve built MVPs, full platforms, and AI products for companies at every stage.' },
    { q: 'What does the process look like?', a: 'Discovery → Strategy → Design → Build → Launch → Iterate. You\'re involved at every step, not just the beginning and end.' },
    { q: 'Can you maintain and update the website after launch?', a: 'Absolutely. We offer ongoing maintenance, support retainers, and feature development after launch.' },
  ]

  return (
    <section ref={ref} style={{ padding: 'clamp(80px,10vw,120px) 5%', background: WHITE }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className={`rv slabel ${vis?'in':''}`} style={{ justifyContent: 'center' }}>FAQ</div>
          <h2 className={`rv d1 ${vis?'in':''}`} style={{ fontFamily: DISPLAY, fontSize: 'clamp(32px,5vw,52px)', fontWeight: 800, letterSpacing: '-.03em', color: DARK, lineHeight: 1.1 }}>
            Frequently Asked Questions
          </h2>
        </div>
        {faqs.map((f,i) => (
          <div key={i} className={`faq-item rv d${Math.min(i+1,5)} ${vis?'in':''}`}>
            <button className="faq-btn" onClick={() => toggle(i)} style={{ color: open===i ? BLUE : DARK }}>
              <span>{f.q}</span>
              <div style={{ width: 28, height: 28, background: open===i ? BLUE : LGRAY, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: open===i ? WHITE : GRAY, fontSize: 16, flexShrink: 0, transition: 'all .25s', transform: open===i ? 'rotate(45deg)' : 'none' }}>+</div>
            </button>
            {open===i && (
              <div style={{ fontFamily: BODY, fontSize: 15, color: GRAY, lineHeight: 1.8, paddingBottom: 22 }}>{f.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

/* ══════ CONTACT ══════ */
function Contact() {
  const [ref, vis] = useInView(0.1)
  const [form, setForm] = useState({ name:'', email:'', service:'', message:'' })
  const [submitted, setSubmitted] = useState(false)
  const [err, setErr] = useState('')

  const submit = () => {
    if (!form.name.trim() || !form.email.trim()) { setErr('Please fill in your name and email.'); return }
    if (!/\S+@\S+\.\S+/.test(form.email)) { setErr('Please enter a valid email address.'); return }
    setErr('')
    setSubmitted(true)
    console.log('Form:', form)
  }

  return (
    <section id="contact" ref={ref} style={{ padding: 'clamp(80px,10vw,120px) 5%', background: LGRAY }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(40px,6vw,80px)', alignItems: 'start' }}>
        {/* Left */}
        <div>
          <div className={`rv slabel ${vis?'in':''}`}>Contact</div>
          <h2 className={`rv d1 ${vis?'in':''}`} style={{ fontFamily: DISPLAY, fontSize: 'clamp(32px,5vw,52px)', fontWeight: 800, letterSpacing: '-.03em', color: DARK, lineHeight: 1.1, marginBottom: 20 }}>
            Let's Build<br/>Something Great
          </h2>
          <p className={`rv d2 ${vis?'in':''}`} style={{ fontFamily: BODY, fontSize: 15, color: GRAY, lineHeight: 1.8, marginBottom: 40 }}>
            We're currently accepting new projects. Tell us what you're working on and we'll get back to you within 24 hours.
          </p>
          <div className={`rv d3 ${vis?'in':''}`} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[['📧','Email','hello@siyazen.com'],['⏰','Response Time','Within 24 hours'],['📍','Based In','Remote — Global']].map(([ic,l,v]) => (
              <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 14, background: WHITE, borderRadius: 14, padding: '16px 20px', border: `1.5px solid ${BORDER}` }}>
                <span style={{ fontSize: 20 }}>{ic}</span>
                <div>
                  <div style={{ fontFamily: BODY, fontSize: 12, color: GRAY }}>{l}</div>
                  <div style={{ fontFamily: BODY, fontSize: 14, fontWeight: 500, color: DARK }}>{v}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div className={`rv d2 ${vis?'in':''}`}>
          {submitted ? (
            <div style={{ background: WHITE, border: `1.5px solid #a3e635`, borderRadius: 24, padding: 'clamp(48px,6vw,72px) 40px', textAlign: 'center' }}>
              <div style={{ fontSize: 52, marginBottom: 20 }}>🎉</div>
              <h3 style={{ fontFamily: DISPLAY, fontSize: 28, fontWeight: 700, color: DARK, marginBottom: 12 }}>Message Sent!</h3>
              <p style={{ fontFamily: BODY, fontSize: 15, color: GRAY, lineHeight: 1.7 }}>Thanks for reaching out. We'll be in touch within 24 hours.</p>
            </div>
          ) : (
            <div style={{ background: WHITE, borderRadius: 24, border: `1.5px solid ${BORDER}`, padding: 'clamp(28px,4vw,40px)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ fontFamily: BODY, fontSize: 13, fontWeight: 500, color: DARK, display: 'block', marginBottom: 8 }}>Full Name *</label>
                    <input className="finput" type="text" placeholder="Jane Smith" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
                  </div>
                  <div>
                    <label style={{ fontFamily: BODY, fontSize: 13, fontWeight: 500, color: DARK, display: 'block', marginBottom: 8 }}>Email *</label>
                    <input className="finput" type="email" placeholder="jane@co.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
                  </div>
                </div>
                <div>
                  <label style={{ fontFamily: BODY, fontSize: 13, fontWeight: 500, color: DARK, display: 'block', marginBottom: 8 }}>Service Needed</label>
                  <select className="finput" value={form.service} onChange={e=>setForm({...form,service:e.target.value})}>
                    <option value="">Select a service...</option>
                    {['Artificial Intelligence','Website Development','UI / UX Design','Brand Identity','Full Package'].map(o=><option key={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ fontFamily: BODY, fontSize: 13, fontWeight: 500, color: DARK, display: 'block', marginBottom: 8 }}>Tell Us About Your Project</label>
                  <textarea className="finput" rows={5} placeholder="Describe your project, goals, and timeline..." value={form.message} onChange={e=>setForm({...form,message:e.target.value})} style={{ resize: 'vertical' }}/>
                </div>
                {err && <div style={{ fontFamily: BODY, fontSize: 13, color: '#ef4444' }}>{err}</div>}
                <button className="btn-primary" onClick={submit} style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: 15 }}>
                  Send Message →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

/* ══════ FOOTER ══════ */
function Footer() {
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return (
    <footer style={{ background: DARK, color: WHITE, padding: 'clamp(48px,6vw,72px) 5% 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 40, paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,.1)', marginBottom: 32 }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div onClick={() => window.scrollTo({top:0,behavior:'smooth'})}
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, background: BLUE, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: DISPLAY, fontSize: 18, fontWeight: 800, color: WHITE }}>S</div>
              <span style={{ fontFamily: DISPLAY, fontSize: 20, fontWeight: 800, color: WHITE }}>Siyazen</span>
            </div>
            <p style={{ fontFamily: BODY, fontSize: 13, color: 'rgba(255,255,255,.5)', lineHeight: 1.7 }}>
              Premium AI, web development, and design for businesses that demand excellence.
            </p>
          </div>

          {/* Links */}
          <div>
            <div style={{ fontFamily: BODY, fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)', marginBottom: 20 }}>Company</div>
            {[['Services','services'],['Work','work'],['About','about'],['Contact','contact']].map(([l,id]) => (
              <button key={id} onClick={() => go(id)} style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer', fontFamily: BODY, fontSize: 14, color: 'rgba(255,255,255,.6)', marginBottom: 12, padding: 0, transition: 'color .2s' }}
                onMouseEnter={e=>e.target.style.color=WHITE} onMouseLeave={e=>e.target.style.color='rgba(255,255,255,.6)'}>
                {l}
              </button>
            ))}
          </div>

          {/* Services */}
          <div>
            <div style={{ fontFamily: BODY, fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)', marginBottom: 20 }}>Services</div>
            {['AI Development','Web Development','UI / UX Design','Brand Identity'].map(l => (
              <div key={l} style={{ fontFamily: BODY, fontSize: 14, color: 'rgba(255,255,255,.6)', marginBottom: 12 }}>{l}</div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: BODY, fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)', marginBottom: 20 }}>Get In Touch</div>
            <div style={{ fontFamily: BODY, fontSize: 14, color: 'rgba(255,255,255,.6)', marginBottom: 12 }}>hello@siyazen.com</div>
            <div style={{ fontFamily: BODY, fontSize: 14, color: 'rgba(255,255,255,.6)', marginBottom: 24 }}>Remote — Global</div>
            <div style={{ display: 'flex', gap: 12 }}>
              {['Instagram','LinkedIn','Twitter'].map(s => (
                <a key={s} href="#" style={{ width: 36, height: 36, background: 'rgba(255,255,255,.08)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: BODY, fontSize: 10, color: 'rgba(255,255,255,.6)', textDecoration: 'none', transition: 'background .2s' }}
                  onMouseEnter={e=>e.currentTarget.style.background=BLUE} onMouseLeave={e=>e.currentTarget.style.background='rgba(255,255,255,.08)'}>
                  {s[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ fontFamily: BODY, fontSize: 13, color: 'rgba(255,255,255,.3)' }}>
            © {new Date().getFullYear()} Siyazen. All rights reserved.
          </div>
          <div style={{ fontFamily: BODY, fontSize: 13, color: 'rgba(255,255,255,.3)' }}>
            Crafted with precision ✦
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ══════ ROOT ══════ */
export default function App() {
  return (
    <>
      <style>{CSS}</style>
      <Navbar/>
      <main>
        <Hero/>
        <ClientTicker/>
        <Services/>
        <Work/>
        <Testimonials/>
        <About/>
        <FAQ/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}
