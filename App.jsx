import React, { useState, useEffect, useRef } from 'react'

/* ── tiny hook ── */
function useInView(threshold = 0.12) {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect() } }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, vis]
}

/* ── data ── */
const SERVICES = [
  { n: '01', title: 'Artificial Intelligence', desc: 'Bespoke AI systems engineered to automate, predict, and elevate. Custom LLM integrations, intelligent pipelines, and AI-powered products built around your workflow.', tags: ['Custom LLMs', 'ML Pipelines', 'AI Automation', 'Chatbots'] },
  { n: '02', title: 'Website Development', desc: 'Web platforms of exceptional craft — performant, scalable, and built to the highest technical standards using modern React and Node ecosystems.', tags: ['React / Next.js', 'Full-Stack', 'Web Apps', 'E-commerce'] },
  { n: '03', title: 'UI / UX Design', desc: 'Interfaces conceived with intention. Where visual precision meets behavioural insight to create products that are both beautiful and deeply usable.', tags: ['Research', 'Design Systems', 'Prototyping', 'Figma'] },
  { n: '04', title: 'Brand Identity', desc: 'Visual systems that communicate who you are before you say a word. Logos, colour, typography, and motion — unified into a presence that lasts.', tags: ['Logo', 'Guidelines', 'Motion', 'Print'] },
]

const WORK = [
  { title: 'Aether Finance',   cat: 'AI · Web Platform',      year: '2024', accent: '#c9a96e' },
  { title: 'Lumina Health',    cat: 'UI/UX · AI Integration',  year: '2024', accent: '#a8b8a0' },
  { title: 'Obsidian Capital', cat: 'Web · Design System',     year: '2023', accent: '#8fa8c0' },
  { title: 'Solstice Retail',  cat: 'AI · Full Stack',         year: '2023', accent: '#c0a0a0' },
  { title: 'Meridian Law',     cat: 'Web · Branding',          year: '2022', accent: '#b0a8c8' },
]

const TESTIMONIALS = [
  { quote: 'The level of craft and strategic thinking was unlike anything we had experienced before. They redefined what our digital presence could be.', name: 'Eleanor Voss',   role: 'CEO, Aether Finance',    i: 'E' },
  { quote: 'Working with this team is a rarity — they brought both exceptional taste and real engineering depth to every single decision.',               name: 'James Harlow',  role: 'CPO, Lumina Health',     i: 'J' },
  { quote: 'Our conversion rate doubled. But more importantly, our brand finally felt worthy of the clients we serve.',                                   name: 'Sophia Renaud', role: 'Founder, Obsidian Capital', i: 'S' },
]

/* ── tokens ── */
const G = '#c9a96e'
const DARK = '#0d0c0a'
const MID  = '#1a1815'
const CREAM = '#f5f0e8'
const MUTED = 'rgba(245,240,232,0.45)'
const BORDER = 'rgba(245,240,232,0.07)'
const SERIF = "'Cormorant Garamond', Georgia, serif"
const SANS  = "'Jost', sans-serif"

/* ── shared styles injected once ── */
const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:${DARK};color:${CREAM};font-family:${SERIF};-webkit-font-smoothing:antialiased;overflow-x:hidden}
::-webkit-scrollbar{width:3px;background:${DARK}}
::-webkit-scrollbar-thumb{background:rgba(201,169,110,.35);border-radius:2px}
.rv{opacity:0;transform:translateY(34px);transition:opacity .9s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1)}
.rv.in{opacity:1;transform:none}
.d1{transition-delay:.10s}.d2{transition-delay:.22s}.d3{transition-delay:.34s}.d4{transition-delay:.46s}.d5{transition-delay:.58s}
.gold-line{display:inline-block;width:48px;height:1px;background:${G};vertical-align:middle;margin-right:14px}
.lbl{font-family:${SANS};font-size:10px;letter-spacing:.25em;text-transform:uppercase;color:${G};display:flex;align-items:center;margin-bottom:20px}
.h2{font-family:${SERIF};font-weight:300;letter-spacing:-.01em;line-height:1.1}
.tag{display:inline-block;font-family:${SANS};font-size:9px;letter-spacing:.18em;text-transform:uppercase;border:1px solid rgba(201,169,110,.25);color:rgba(201,169,110,.75);padding:4px 12px;margin:3px 4px 3px 0;transition:border-color .3s,color .3s}
.tag:hover{border-color:${G};color:${G}}
.btn-o{display:inline-block;font-family:${SANS};font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:${G};border:1px solid rgba(201,169,110,.4);padding:11px 26px;background:transparent;cursor:pointer;transition:background .35s,color .35s,border-color .35s}
.btn-o:hover{background:${G};color:${DARK};border-color:${G}}
.btn-g{font-family:${SANS};font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:${CREAM};background:none;border:none;border-bottom:1px solid ${G};padding-bottom:2px;cursor:pointer;transition:color .3s}
.btn-g:hover{color:${G}}
.srow{border-bottom:1px solid ${BORDER};transition:background .4s}
.srow:hover{background:rgba(201,169,110,.03)}
.wrow{border-bottom:1px solid ${BORDER};transition:background .4s;cursor:pointer;position:relative}
.wrow:hover{background:rgba(201,169,110,.03)}
.tcard{border:1px solid ${BORDER};transition:border-color .4s,background .4s}
.tcard:hover{border-color:rgba(201,169,110,.3);background:rgba(201,169,110,.02)}
.ff label{display:block;font-family:${SANS};font-size:9px;letter-spacing:.22em;text-transform:uppercase;color:${G};padding:20px 28px 0}
.ff input,.ff textarea,.ff select{width:100%;background:transparent;border:none;outline:none;color:${CREAM};font-family:${SANS};font-size:15px;font-weight:300;padding:10px 28px 20px;resize:none;transition:background .3s}
.ff select{cursor:pointer;appearance:none;-webkit-appearance:none;background-color:transparent}
.ff select option{background:${DARK}}
.nav-btn{background:none;border:none;cursor:pointer;font-family:${SANS};font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:${MUTED};transition:color .3s;padding:0}
.nav-btn:hover{color:${G}}
.sub-btn{width:100%;font-family:${SANS};font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:${CREAM};background:rgba(201,169,110,.08);border:none;border-top:1px solid rgba(201,169,110,.18);padding:22px;cursor:pointer;transition:background .35s,color .35s}
.sub-btn:hover{background:${G};color:${DARK}}
@media(max-width:768px){.desk{display:none!important}}
@media(min-width:769px){.mob{display:none!important}}
`

/* ══════════════════════════════════════════════
   COMPONENTS
══════════════════════════════════════════════ */

function CursorGlow() {
  const [p, setP] = useState({ x: -999, y: -999 })
  useEffect(() => {
    const fn = e => setP({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', fn)
    return () => window.removeEventListener('mousemove', fn)
  }, [])
  return (
    <div style={{
      position:'fixed',pointerEvents:'none',zIndex:0,
      width:520,height:520,borderRadius:'50%',
      background:'radial-gradient(circle,rgba(201,169,110,.045) 0%,transparent 65%)',
      left:p.x,top:p.y,transform:'translate(-50%,-50%)',
      transition:'left .12s ease,top .12s ease',
    }}/>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = id => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }

  return (
    <>
      <header style={{
        position:'fixed',top:0,left:0,right:0,zIndex:200,
        padding:'0 6%',height:68,display:'flex',alignItems:'center',justifyContent:'space-between',
        background: scrolled ? 'rgba(13,12,10,.93)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,169,110,.1)' : 'none',
        transition:'all .5s',
      }}>
        <div onClick={() => window.scrollTo({top:0,behavior:'smooth'})}
          style={{cursor:'pointer',fontFamily:SERIF,fontSize:22,fontWeight:600,letterSpacing:'.1em',userSelect:'none'}}>
          <span style={{color:G}}>S</span>iyazen
          <span style={{color:G,fontSize:9,marginLeft:3,verticalAlign:'super'}}>✦</span>
        </div>

        <nav className="desk" style={{display:'flex',gap:36}}>
          {['services','work','about','contact'].map(l => (
            <button key={l} className="nav-btn" onClick={() => go(l)}>
              {l.charAt(0).toUpperCase()+l.slice(1)}
            </button>
          ))}
        </nav>

        <button className="btn-o desk" onClick={() => go('contact')}>Enquire</button>

        {/* Hamburger */}
        <button className="mob" onClick={() => setOpen(!open)}
          style={{background:'none',border:'none',cursor:'pointer',padding:8,display:'flex',flexDirection:'column',gap:6}}>
          {[0,1,2].map(i => (
            <div key={i} style={{
              width:24,height:1,background:CREAM,transition:'all .3s',
              transform: i===0&&open?'rotate(45deg) translate(5px,5px)':i===2&&open?'rotate(-45deg) translate(5px,-5px)':'none',
              opacity: i===1&&open?0:1,
            }}/>
          ))}
        </button>
      </header>

      {/* Mobile menu */}
      <div className="mob" style={{
        position:'fixed',top:68,left:0,right:0,bottom:0,zIndex:190,
        background:'rgba(13,12,10,.97)',backdropFilter:'blur(20px)',
        display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:40,
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition:'transform .4s cubic-bezier(.16,1,.3,1)',
      }}>
        {['services','work','about','contact'].map(l => (
          <button key={l} onClick={() => go(l)}
            style={{background:'none',border:'none',cursor:'pointer',
              fontFamily:SERIF,fontSize:36,fontWeight:300,fontStyle:'italic',
              color:CREAM,transition:'color .3s'}}
            onMouseEnter={e=>e.target.style.color=G}
            onMouseLeave={e=>e.target.style.color=CREAM}>
            {l.charAt(0).toUpperCase()+l.slice(1)}
          </button>
        ))}
        <button className="btn-o" onClick={() => go('contact')}>Begin a Project</button>
      </div>
    </>
  )
}

function Hero() {
  const [ref, vis] = useInView(0.05)
  const go = id => document.getElementById(id)?.scrollIntoView({behavior:'smooth'})

  return (
    <section ref={ref} id="hero" style={{
      minHeight:'100vh',display:'flex',flexDirection:'column',justifyContent:'flex-end',
      padding:'clamp(100px,12vw,160px) 6% 80px',position:'relative',overflow:'hidden',
    }}>
      {/* bg glow */}
      <div style={{position:'absolute',inset:0,pointerEvents:'none',backgroundImage:
        `radial-gradient(ellipse 80% 60% at 70% 50%,rgba(201,169,110,.06) 0%,transparent 60%),
         radial-gradient(ellipse 40% 40% at 20% 80%,rgba(201,169,110,.04) 0%,transparent 70%)`}}/>
      {/* vertical lines */}
      {[30,60,79].map((p,i)=>(
        <div key={i} style={{position:'absolute',top:0,bottom:0,left:`${p}%`,width:1,
          background:`rgba(201,169,110,${.04+i*.015})`,pointerEvents:'none'}}/>
      ))}

      {/* meta row */}
      <div style={{position:'absolute',top:'clamp(80px,10vw,120px)',left:'6%',right:'6%',
        display:'flex',justifyContent:'space-between',alignItems:'flex-start',flexWrap:'wrap',gap:16}}>
        <div className={`rv ${vis?'in':''}`}
          style={{fontFamily:SANS,fontSize:10,letterSpacing:'.25em',textTransform:'uppercase',color:MUTED}}>
          Est. 2021 · AI & Digital Studio
        </div>
        <div className={`rv d1 ${vis?'in':''}`}
          style={{fontFamily:SANS,fontSize:10,letterSpacing:'.2em',textTransform:'uppercase',color:MUTED,textAlign:'right'}}>
          Selected clients:<br/>
          <span style={{color:'rgba(245,240,232,.65)'}}>Finance · Health · Retail · Tech</span>
        </div>
      </div>

      <div style={{position:'relative',zIndex:1}}>
        <div className={`rv lbl ${vis?'in':''}`}><span className="gold-line"/>Premium Digital Studio</div>

        <h1 className={`rv d1 ${vis?'in':''}`} style={{
          fontFamily:SERIF,fontSize:'clamp(48px,8vw,108px)',fontWeight:300,lineHeight:1.02,
          letterSpacing:'-.01em',marginBottom:0,
        }}>
          We craft digital<br/>
          <em style={{color:G}}>excellence</em> for<br/>
          the discerning few.
        </h1>

        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',flexWrap:'wrap',gap:32,marginTop:52}}>
          <p className={`rv d2 ${vis?'in':''}`}
            style={{fontFamily:SANS,fontSize:15,fontWeight:300,lineHeight:1.85,color:MUTED,maxWidth:400}}>
            AI systems, bespoke websites, and interfaces designed with the precision and intentionality your brand demands.
          </p>
          <div className={`rv d3 ${vis?'in':''}`} style={{display:'flex',gap:'clamp(24px,5vw,56px)'}}>
            {[['50+','Projects'],['98%','Retention'],['12','Countries']].map(([v,l])=>(
              <div key={l} style={{textAlign:'right'}}>
                <div style={{fontFamily:SERIF,fontSize:'clamp(28px,4vw,40px)',fontWeight:300,color:CREAM,lineHeight:1}}>{v}</div>
                <div style={{fontFamily:SANS,fontSize:10,letterSpacing:'.2em',textTransform:'uppercase',color:MUTED,marginTop:6}}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={`rv d4 ${vis?'in':''}`} style={{marginTop:52,display:'flex',gap:28,alignItems:'center',flexWrap:'wrap'}}>
          <button className="btn-g" onClick={()=>go('services')}>Explore our services →</button>
          <div style={{width:48,height:1,background:'rgba(245,240,232,.18)'}}/>
          <button className="btn-g" style={{color:MUTED,borderBottomColor:'transparent'}} onClick={()=>go('contact')}>Begin a project</button>
        </div>
      </div>

      {/* scroll hint */}
      <div className={`rv d5 ${vis?'in':''}`}
        style={{position:'absolute',bottom:36,right:'6%',display:'flex',flexDirection:'column',alignItems:'center',gap:10}}>
        <div style={{fontFamily:SANS,fontSize:9,letterSpacing:'.2em',textTransform:'uppercase',color:MUTED,writingMode:'vertical-rl'}}>Scroll</div>
        <div style={{width:1,height:48,background:`linear-gradient(to bottom,${G},transparent)`}}/>
      </div>
    </section>
  )
}

function Services() {
  const [ref, vis] = useInView(0.1)
  const [hov, setHov] = useState(null)

  return (
    <section id="services" ref={ref} style={{padding:'clamp(80px,10vw,120px) 6%',borderTop:`1px solid ${BORDER}`}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',flexWrap:'wrap',gap:32,marginBottom:72}}>
        <div>
          <div className={`rv lbl ${vis?'in':''}`}><span className="gold-line"/>What We Offer</div>
          <h2 className={`rv d1 h2 ${vis?'in':''}`} style={{fontSize:'clamp(36px,5vw,62px)'}}>Services</h2>
        </div>
        <p className={`rv d2 ${vis?'in':''}`}
          style={{fontFamily:SANS,fontSize:14,fontWeight:300,color:MUTED,maxWidth:320,textAlign:'right',lineHeight:1.85}}>
          A focused suite of capabilities, executed without compromise.
        </p>
      </div>

      <div style={{borderTop:`1px solid ${BORDER}`}}>
        {SERVICES.map((s,i)=>(
          <div key={s.n} className={`srow rv d${Math.min(i+1,5)} ${vis?'in':''}`}
            onMouseEnter={()=>setHov(i)} onMouseLeave={()=>setHov(null)}
            style={{display:'flex',alignItems:'flex-start',padding:'clamp(28px,4vw,44px) 0',gap:40}}>
            <div style={{fontFamily:SANS,fontSize:11,color:G,letterSpacing:'.15em',minWidth:32,marginTop:6,flexShrink:0}}>{s.n}</div>
            <div style={{flex:1}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:16}}>
                <h3 style={{fontFamily:SERIF,fontSize:'clamp(22px,3vw,36px)',fontWeight:300,letterSpacing:'-.01em'}}>{s.title}</h3>
                <span style={{color:G,fontSize:20,opacity:hov===i?1:0,transform:hov===i?'translateX(0)':'translateX(-10px)',transition:'opacity .3s,transform .3s'}}>→</span>
              </div>
              <p style={{fontFamily:SANS,fontSize:14,fontWeight:300,color:MUTED,lineHeight:1.85,maxWidth:580,marginBottom:20}}>{s.desc}</p>
              <div>{s.tags.map(t=><span key={t} className="tag">{t}</span>)}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Work() {
  const [ref, vis] = useInView(0.1)
  const [hov, setHov] = useState(null)

  return (
    <section id="work" ref={ref} style={{padding:'clamp(80px,10vw,120px) 6%',background:MID,borderTop:`1px solid ${BORDER}`}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',flexWrap:'wrap',gap:24,marginBottom:72}}>
        <div>
          <div className={`rv lbl ${vis?'in':''}`}><span className="gold-line"/>Portfolio</div>
          <h2 className={`rv d1 h2 ${vis?'in':''}`} style={{fontSize:'clamp(36px,5vw,62px)'}}>Selected Work</h2>
        </div>
        <p className={`rv d2 ${vis?'in':''}`} style={{fontFamily:SANS,fontSize:14,fontWeight:300,color:MUTED,lineHeight:1.85}}>
          A curated selection of recent engagements.
        </p>
      </div>

      <div style={{borderTop:`1px solid ${BORDER}`}}>
        {WORK.map((w,i)=>(
          <div key={w.title} className={`wrow rv d${Math.min(i+1,5)} ${vis?'in':''}`}
            onMouseEnter={()=>setHov(i)} onMouseLeave={()=>setHov(null)}
            style={{display:'flex',alignItems:'center',justifyContent:'space-between',
              padding:'clamp(24px,3.5vw,36px) 0',gap:24,background:hov===i?'rgba(201,169,110,.03)':'transparent',transition:'background .4s'}}>
            {/* accent line */}
            <div style={{position:'absolute',bottom:0,left:0,right:0,height:1,
              background:`linear-gradient(90deg,${w.accent}88,transparent)`,
              opacity:hov===i?1:0,transition:'opacity .4s'}}/>
            <div style={{display:'flex',alignItems:'center',gap:'clamp(16px,4vw,36px)'}}>
              <span style={{fontFamily:SANS,fontSize:10,color:hov===i?G:MUTED,letterSpacing:'.15em',minWidth:24,transition:'color .3s'}}>0{i+1}</span>
              <div>
                <h3 style={{fontFamily:SERIF,fontSize:'clamp(20px,2.8vw,34px)',fontWeight:300,letterSpacing:'-.01em'}}>{w.title}</h3>
                <div style={{fontFamily:SANS,fontSize:11,color:MUTED,letterSpacing:'.12em',textTransform:'uppercase',marginTop:6}}>{w.cat}</div>
              </div>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:24,flexShrink:0}}>
              <span style={{fontFamily:SANS,fontSize:11,color:MUTED}}>{w.year}</span>
              <span style={{color:G,fontSize:18,opacity:hov===i?1:0,transform:hov===i?'translateX(0)':'translateX(-8px)',transition:'opacity .3s,transform .3s'}}>→</span>
            </div>
          </div>
        ))}
      </div>

      <div className={`rv d5 ${vis?'in':''}`} style={{marginTop:56,textAlign:'center'}}>
        <button className="btn-g" onClick={()=>document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>
          Start your project →
        </button>
      </div>
    </section>
  )
}

function Testimonials() {
  const [ref, vis] = useInView(0.1)

  return (
    <section id="testimonials" ref={ref} style={{padding:'clamp(80px,10vw,120px) 6%',borderTop:`1px solid ${BORDER}`}}>
      <div style={{marginBottom:72}}>
        <div className={`rv lbl ${vis?'in':''}`}><span className="gold-line"/>Client Voices</div>
        <h2 className={`rv d1 h2 ${vis?'in':''}`} style={{fontSize:'clamp(36px,5vw,62px)'}}>What They Say</h2>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:2,background:'rgba(245,240,232,.04)'}}>
        {TESTIMONIALS.map((t,i)=>{
          const [h,setH]=useState(false)
          return (
            <div key={t.name} className={`tcard rv d${i+1} ${vis?'in':''}`}
              onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
              style={{background:h?'rgba(201,169,110,.02)':DARK,padding:'clamp(36px,5vw,52px) clamp(28px,4vw,44px)'}}>
              <div style={{fontSize:52,fontWeight:300,fontFamily:SERIF,color:G,lineHeight:.8,marginBottom:28,opacity:.55,fontStyle:'italic'}}>"</div>
              <p style={{fontFamily:SERIF,fontSize:'clamp(16px,2vw,19px)',fontWeight:300,lineHeight:1.75,
                letterSpacing:'.01em',color:'rgba(245,240,232,.85)',fontStyle:'italic',marginBottom:36}}>
                {t.quote}
              </p>
              <div style={{display:'flex',alignItems:'center',gap:16}}>
                <div style={{width:44,height:44,borderRadius:'50%',background:'rgba(201,169,110,.1)',
                  border:'1px solid rgba(201,169,110,.3)',display:'flex',alignItems:'center',justifyContent:'center',
                  fontFamily:SERIF,fontSize:16,color:G,fontWeight:300,flexShrink:0}}>
                  {t.i}
                </div>
                <div>
                  <div style={{fontFamily:SANS,fontSize:13,fontWeight:500,letterSpacing:'.06em'}}>{t.name}</div>
                  <div style={{fontFamily:SANS,fontSize:11,color:MUTED,letterSpacing:'.08em',marginTop:3}}>{t.role}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function About() {
  const [ref, vis] = useInView(0.1)

  return (
    <section id="about" ref={ref} style={{padding:'clamp(80px,10vw,120px) 6%',background:MID,borderTop:`1px solid ${BORDER}`}}>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:'clamp(48px,8vw,100px)',alignItems:'start'}}>
        <div>
          <div className={`rv lbl ${vis?'in':''}`}><span className="gold-line"/>About the Studio</div>
          <h2 className={`rv d1 h2 ${vis?'in':''}`} style={{fontSize:'clamp(34px,4vw,52px)',marginBottom:36,lineHeight:1.15}}>
            Precision craft<br/><em style={{color:G}}>at every layer</em>
          </h2>
          {[
            'Siyazen is a boutique digital practice founded on a simple belief: that great outcomes require deep collaboration, genuine expertise, and a relentless commitment to quality over volume.',
            'We take on a limited number of engagements each year — by design. Each client receives our full attention, our sharpest thinking, and work we are genuinely proud to have made.',
          ].map((p,i)=>(
            <p key={i} className={`rv d${i+2} ${vis?'in':''}`}
              style={{fontFamily:SANS,fontSize:15,fontWeight:300,color:MUTED,lineHeight:1.9,marginBottom:i===0?18:0}}>{p}</p>
          ))}
        </div>

        <div className={`rv d2 ${vis?'in':''}`}>
          <div style={{borderTop:`1px solid ${BORDER}`}}>
            {[
              ['Philosophy','We build for longevity. Every decision is made with your long-term growth in mind, not short-term deliverables.'],
              ['Process','Rigorous discovery. Considered strategy. Impeccable execution. No corners cut.'],
              ['Partnership','We don\'t disappear after launch. We grow alongside the businesses we help build.'],
            ].map(([t,d])=>(
              <div key={t} style={{padding:'clamp(24px,3vw,36px) 0',borderBottom:`1px solid ${BORDER}`}}>
                <div style={{fontFamily:SANS,fontSize:10,letterSpacing:'.2em',textTransform:'uppercase',color:G,marginBottom:12}}>{t}</div>
                <p style={{fontFamily:SANS,fontSize:14,fontWeight:300,color:MUTED,lineHeight:1.8}}>{d}</p>
              </div>
            ))}
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',marginTop:40,border:`1px solid ${BORDER}`}}>
            {[['50+','Projects'],['6+','Years'],['12','Countries']].map(([v,l],i)=>(
              <div key={l} style={{padding:'clamp(20px,3vw,28px) clamp(16px,2.5vw,24px)',borderLeft:i===0?'none':`1px solid ${BORDER}`}}>
                <div style={{fontFamily:SERIF,fontSize:'clamp(26px,3.5vw,34px)',fontWeight:300,color:CREAM}}>{v}</div>
                <div style={{fontFamily:SANS,fontSize:10,letterSpacing:'.15em',textTransform:'uppercase',color:MUTED,marginTop:6}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [ref, vis] = useInView(0.1)
  const [form, setForm] = useState({ name:'', email:'', budget:'', message:'' })
  const [submitted, setSubmitted] = useState(false)
  const [err, setErr] = useState('')

  const submit = () => {
    if (!form.name.trim() || !form.email.trim()) { setErr('Please fill in your name and email.'); return }
    if (!/\S+@\S+\.\S+/.test(form.email)) { setErr('Please enter a valid email address.'); return }
    setErr('')
    setSubmitted(true)
    console.log('Form submitted:', form)
  }

  return (
    <section id="contact" ref={ref} style={{padding:'clamp(80px,10vw,120px) 6%',borderTop:`1px solid ${BORDER}`}}>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:'clamp(48px,8vw,100px)',alignItems:'start'}}>
        <div>
          <div className={`rv lbl ${vis?'in':''}`}><span className="gold-line"/>Get in Touch</div>
          <h2 className={`rv d1 h2 ${vis?'in':''}`} style={{fontSize:'clamp(34px,4vw,56px)',lineHeight:1.15,marginBottom:36}}>
            Begin your<br/><em style={{color:G}}>project</em>
          </h2>
          <p className={`rv d2 ${vis?'in':''}`}
            style={{fontFamily:SANS,fontSize:15,fontWeight:300,color:MUTED,lineHeight:1.9,marginBottom:48}}>
            We currently accept a limited number of new engagements. If you have a project in mind, we would love to hear from you.
          </p>
          <div className={`rv d3 ${vis?'in':''}`}>
            {[['Email','hello@siyazen.com'],['Response Time','Within 48 hours'],['Availability','Limited slots open']].map(([l,v])=>(
              <div key={l} style={{display:'flex',justifyContent:'space-between',padding:'16px 0',borderBottom:`1px solid ${BORDER}`}}>
                <span style={{fontFamily:SANS,fontSize:11,letterSpacing:'.12em',textTransform:'uppercase',color:MUTED}}>{l}</span>
                <span style={{fontFamily:SANS,fontSize:13,color:'rgba(245,240,232,.75)'}}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`rv d2 ${vis?'in':''}`}>
          {submitted ? (
            <div style={{textAlign:'center',padding:'clamp(48px,8vw,80px) 40px',border:'1px solid rgba(201,169,110,.2)'}}>
              <div style={{fontSize:44,color:G,marginBottom:24,fontStyle:'italic'}}>✦</div>
              <h3 style={{fontFamily:SERIF,fontSize:30,fontWeight:300,marginBottom:14}}>Thank you</h3>
              <p style={{fontFamily:SANS,fontSize:14,color:MUTED,lineHeight:1.8}}>We'll be in touch within 48 hours.</p>
            </div>
          ):(
            <div style={{border:`1px solid ${BORDER}`}}>
              <div className="ff" style={{borderBottom:`1px solid ${BORDER}`}}>
                <label htmlFor="cn">Full Name</label>
                <input id="cn" type="text" placeholder="Jane Smith" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
              </div>
              <div className="ff" style={{borderBottom:`1px solid ${BORDER}`}}>
                <label htmlFor="ce">Email Address</label>
                <input id="ce" type="email" placeholder="jane@company.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
              </div>
              <div className="ff" style={{borderBottom:`1px solid ${BORDER}`}}>
                <label htmlFor="cb">Project Budget</label>
                <select id="cb" value={form.budget} onChange={e=>setForm({...form,budget:e.target.value})}>
                  {['Select a range','Under $5,000','$5k – $15k','$15k – $50k','$50k+'].map(o=><option key={o}>{o}</option>)}
                </select>
              </div>
              <div className="ff">
                <label htmlFor="cm">Tell Us About Your Project</label>
                <textarea id="cm" rows={5} placeholder="What are you looking to build?" value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/>
              </div>
              {err && <div style={{fontFamily:SANS,fontSize:12,color:'#e08080',padding:'0 28px 12px'}}>{err}</div>}
              <button className="sub-btn" onClick={submit}>Submit Enquiry →</button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const go = id => document.getElementById(id)?.scrollIntoView({behavior:'smooth'})

  return (
    <footer style={{borderTop:`1px solid ${BORDER}`,padding:'clamp(36px,5vw,52px) 6%'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',flexWrap:'wrap',gap:40,paddingBottom:40,borderBottom:`1px solid ${BORDER}`,marginBottom:32}}>
        <div>
          <div onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}
            style={{fontFamily:SERIF,fontSize:22,fontWeight:600,letterSpacing:'.1em',marginBottom:12,cursor:'pointer'}}>
            <span style={{color:G}}>S</span>iyazen<span style={{color:G,fontSize:9,marginLeft:3,verticalAlign:'super'}}>✦</span>
          </div>
          <p style={{fontFamily:SANS,fontSize:13,fontWeight:300,color:MUTED,maxWidth:260,lineHeight:1.7}}>
            Premium AI, web development, and UI/UX design for brands that demand excellence.
          </p>
        </div>

        <div>
          <div style={{fontFamily:SANS,fontSize:9,letterSpacing:'.22em',textTransform:'uppercase',color:G,marginBottom:16}}>Navigation</div>
          <div style={{display:'flex',flexDirection:'column',gap:10}}>
            {['services','work','about','contact'].map(l=>(
              <button key={l} className="nav-btn" onClick={()=>go(l)}
                style={{textAlign:'left',fontFamily:SANS,fontSize:13,fontWeight:300,letterSpacing:'.05em'}}>
                {l.charAt(0).toUpperCase()+l.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div style={{fontFamily:SANS,fontSize:9,letterSpacing:'.22em',textTransform:'uppercase',color:G,marginBottom:16}}>Contact</div>
          {['hello@siyazen.com','+1 (555) 000-0000','New York · London · Remote'].map(v=>(
            <div key={v} style={{fontFamily:SANS,fontSize:13,fontWeight:300,color:MUTED,marginBottom:10}}>{v}</div>
          ))}
        </div>

        <div>
          <div style={{fontFamily:SANS,fontSize:9,letterSpacing:'.22em',textTransform:'uppercase',color:G,marginBottom:16}}>Follow</div>
          {[['Instagram','https://instagram.com'],['LinkedIn','https://linkedin.com'],['Twitter','https://twitter.com']].map(([p,u])=>(
            <a key={p} href={u} target="_blank" rel="noopener noreferrer"
              style={{display:'block',fontFamily:SANS,fontSize:13,fontWeight:300,color:MUTED,textDecoration:'none',marginBottom:10,transition:'color .3s'}}
              onMouseEnter={e=>e.target.style.color=G}
              onMouseLeave={e=>e.target.style.color=MUTED}>
              {p}
            </a>
          ))}
        </div>
      </div>

      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:16}}>
        <div style={{fontFamily:SANS,fontSize:11,color:MUTED,letterSpacing:'.1em'}}>
          © {new Date().getFullYear()} Siyazen · All rights reserved
        </div>
        <div style={{fontFamily:SANS,fontSize:11,color:MUTED,letterSpacing:'.08em'}}>Crafted with precision</div>
      </div>
    </footer>
  )
}

/* ══════════════════════════════════════════════
   ROOT APP
══════════════════════════════════════════════ */
export default function App() {
  return (
    <>
      <style>{CSS}</style>
      <CursorGlow/>
      <Navbar/>
      <main>
        <Hero/>
        <Services/>
        <Work/>
        <Testimonials/>
        <About/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}
