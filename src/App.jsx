import React, { useState, useEffect, useRef } from 'react'

/* ─── useInView hook ─── */
function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

/* ─── Tokens ─── */
const BLUE  = '#0066FF'
const BLUE2 = '#0052CC'
const INK   = '#111827'
const MID   = '#374151'
const GRAY  = '#6B7280'
const LGRAY = '#F3F4F6'
const BDR   = '#E5E7EB'
const WHITE = '#FFFFFF'
const FONT  = "'Plus Jakarta Sans', sans-serif"

/* ─── Global CSS ─── */
const CSS = `
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth;font-size:16px}
  body{background:${WHITE};color:${INK};font-family:${FONT};-webkit-font-smoothing:antialiased;overflow-x:hidden}
  ::-webkit-scrollbar{width:4px;background:#f1f1f1}
  ::-webkit-scrollbar-thumb{background:${BLUE};border-radius:4px}

  /* reveal */
  .rv{opacity:0;transform:translateY(28px);transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .7s cubic-bezier(.16,1,.3,1)}
  .rv.on{opacity:1;transform:none}
  .d1{transition-delay:.08s}.d2{transition-delay:.16s}.d3{transition-delay:.24s}
  .d4{transition-delay:.32s}.d5{transition-delay:.40s}.d6{transition-delay:.48s}

  /* nav links */
  .nl{background:none;border:none;cursor:pointer;font-family:${FONT};font-size:15px;font-weight:500;color:${MID};padding:0;transition:color .2s}
  .nl:hover{color:${BLUE}}

  /* primary button */
  .btnP{display:inline-flex;align-items:center;gap:8px;font-family:${FONT};font-size:14px;font-weight:700;
    color:${WHITE};background:${BLUE};border:2px solid ${BLUE};border-radius:6px;
    padding:12px 26px;cursor:pointer;transition:all .22s;text-decoration:none}
  .btnP:hover{background:${BLUE2};border-color:${BLUE2};transform:translateY(-2px);box-shadow:0 6px 20px rgba(0,102,255,.3)}

  /* outline button */
  .btnO{display:inline-flex;align-items:center;gap:8px;font-family:${FONT};font-size:14px;font-weight:700;
    color:${BLUE};background:transparent;border:2px solid ${BLUE};border-radius:6px;
    padding:10px 24px;cursor:pointer;transition:all .22s;text-decoration:none}
  .btnO:hover{background:${BLUE};color:${WHITE};transform:translateY(-2px)}

  /* section label */
  .lbl{display:inline-block;font-family:${FONT};font-size:11px;font-weight:700;letter-spacing:.12em;
    text-transform:uppercase;color:${BLUE};background:#EEF4FF;border-radius:4px;
    padding:5px 12px;margin-bottom:16px}

  /* service tab buttons */
  .stab{font-family:${FONT};font-size:14px;font-weight:600;padding:10px 20px;
    border-radius:6px;border:1.5px solid ${BDR};background:${WHITE};color:${MID};
    cursor:pointer;transition:all .2s;white-space:nowrap}
  .stab.act{background:${BLUE};border-color:${BLUE};color:${WHITE}}
  .stab:hover:not(.act){border-color:${BLUE};color:${BLUE}}

  /* checklist */
  .ck{list-style:none;display:flex;flex-direction:column;gap:14px}
  .ck li{display:flex;align-items:center;gap:12px;font-family:${FONT};font-size:15px;color:${MID};line-height:1.5}
  .ck li::before{content:"✓";display:inline-flex;align-items:center;justify-content:center;
    width:24px;height:24px;min-width:24px;border-radius:50%;background:#EEF4FF;
    color:${BLUE};font-size:13px;font-weight:800}

  /* work card */
  .wc{background:${WHITE};border:1.5px solid ${BDR};border-radius:16px;overflow:hidden;
    transition:transform .3s,box-shadow .3s;cursor:default}
  .wc:hover{transform:translateY(-6px);box-shadow:0 16px 48px rgba(0,0,0,.1)}

  /* testimonial card */
  .tc{background:${WHITE};border:1.5px solid ${BDR};border-radius:14px;padding:28px;
    transition:border-color .3s,box-shadow .3s}
  .tc:hover{border-color:${BLUE};box-shadow:0 8px 28px rgba(0,102,255,.1)}

  /* faq */
  .fq{border-bottom:1.5px solid ${BDR};padding:0}
  .fq button{width:100%;display:flex;justify-content:space-between;align-items:center;
    gap:16px;padding:22px 0;background:none;border:none;cursor:pointer;text-align:left;
    font-family:${FONT};font-size:16px;font-weight:600;color:${INK};transition:color .2s}
  .fq button:hover,.fq button.open{color:${BLUE}}
  .fq-body{font-family:${FONT};font-size:15px;color:${GRAY};line-height:1.8;padding-bottom:22px}

  /* form input */
  .fi{width:100%;font-family:${FONT};font-size:14.5px;color:${INK};background:${LGRAY};
    border:1.5px solid transparent;border-radius:8px;padding:13px 16px;
    outline:none;transition:border-color .2s,background .2s}
  .fi:focus{background:${WHITE};border-color:${BLUE}}
  .fi::placeholder{color:#9CA3AF}
  select.fi{cursor:pointer;appearance:none}
  select.fi option{background:${WHITE}}

  /* ticker animation */
  @keyframes tick{from{transform:translateX(0)}to{transform:translateX(-50%)}}
  .tkr{display:flex;width:max-content;animation:tick 32s linear infinite}
  .tkr:hover{animation-play-state:paused}

  /* scroll images animation */
  @keyframes scrollImg{from{transform:translateX(0)}to{transform:translateX(-50%)}}
  .imgScroll{display:flex;width:max-content;animation:scrollImg 18s linear infinite}

  /* float animation for hero visual */
  @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}

  /* mobile */
  @media(max-width:768px){.dsk{display:none!important}}
  @media(min-width:769px){.mob{display:none!important}}
  @media(max-width:600px){.grid2{grid-template-columns:1fr!important}}
`

/* ─── DATA ─── */
const SERVICES = [
  {
    id:'ai', label:'AI Solutions',
    title:'Artificial Intelligence',
    desc:'Custom AI systems built to automate, predict and elevate your business — from LLM integrations to fully autonomous pipelines.',
    list:['Custom LLM & GPT Integrations','AI Chatbots & Assistants','Process Automation','ML Model Development','AI Strategy & Consulting'],
    accent:'#EEF4FF',
  },
  {
    id:'web', label:'Web Development',
    title:'Website Development',
    desc:'High-performance websites and web applications built with modern stacks — from marketing sites to complex SaaS platforms.',
    list:['React / Next.js Development','Full-Stack Web Apps','E-commerce Platforms','Landing Pages & Funnels','CMS Integration'],
    accent:'#F0FDF4',
  },
  {
    id:'ux', label:'UI / UX Design',
    title:'UI / UX Design',
    desc:'User-first interfaces designed with intent — every screen, flow and interaction crafted to engage users and drive conversions.',
    list:['User Research & Discovery','Wireframes & Prototypes','Design Systems in Figma','Mobile & Web UI','Usability Testing'],
    accent:'#FFF7ED',
  },
  {
    id:'brand', label:'Branding',
    title:'Brand Identity',
    desc:'Visual identity systems that make your brand instantly recognisable across every channel, screen and surface.',
    list:['Logo & Visual Identity','Brand Strategy','Typography & Colour Systems','Brand Guidelines','Motion & Animation'],
    accent:'#FDF4FF',
  },
]

const PROJECTS = [
  {
    name:'Aether Finance', cat:'AI · Web Platform',
    result:'+60%', metric:'User Engagement',
    desc:'AI-powered investment dashboard with real-time analytics and predictive portfolio insights.',
    pills:['Increased active users','Reduced churn by 34%','Custom AI data pipeline'],
    bg:'#EEF4FF',
  },
  {
    name:'Lumina Health', cat:'UI/UX · AI',
    result:'+45%', metric:'Task Completion',
    desc:'Patient app redesign with embedded AI diagnostic assistant for clinical decision support.',
    pills:['NPS score up 40pts','Launched in 8 weeks','HIPAA-compliant design'],
    bg:'#F0FDF4',
  },
  {
    name:'Obsidian Capital', cat:'Web · Branding',
    result:'3x', metric:'Lead Increase',
    desc:'Full digital rebrand and new web presence for a boutique investment firm targeting HNW clients.',
    pills:['3× qualified leads','Brand consistency','Award-winning design'],
    bg:'#FFF7ED',
  },
]

const TESTIMONIALS = [
  {init:'EV', name:'Eleanor Voss',  role:'CEO, Aether Finance',    stars:5, text:'The level of craft and strategic thinking was unlike anything we experienced before. They redefined what our digital presence could be.'},
  {init:'JH', name:'James Harlow',  role:'CPO, Lumina Health',     stars:5, text:'Exceptional taste combined with real engineering depth. Every decision was made with clarity and purpose — a genuinely rare combination.'},
  {init:'SR', name:'Sophia Renaud', role:'Founder, Obsidian Capital',stars:5, text:'Our conversion rate doubled. But more importantly, our brand finally felt worthy of the clients we serve.'},
  {init:'MC', name:'Marcus Chen',   role:'CTO, Solstice Retail',   stars:5, text:'They delivered on time, on budget, and beyond expectations. The AI integration they built has become the backbone of our entire product.'},
]

const FAQS = [
  {q:'What services does Siyazen offer?', a:'We offer AI development & integration, full-stack web development, UI/UX design, and brand identity. We work across the full digital stack from discovery to deployment.'},
  {q:'How long does a typical project take?', a:'Most projects are delivered within 4–8 weeks depending on scope. We provide a detailed timeline during our initial discovery call, and we stick to it.'},
  {q:'Do you work with startups?', a:'Absolutely. We love working with ambitious founders at every stage — from pre-seed MVPs to scaling Series B products.'},
  {q:'What happens after launch?', a:'We offer ongoing maintenance retainers, new feature development, and performance monitoring. Most of our clients continue with us long after launch.'},
  {q:'How do we get started?', a:'Fill in the contact form below. We respond within 24 hours and schedule a free 30-minute discovery call to understand your project and put together a proposal.'},
]

/* ══════════════════════════════
   NAVBAR
══════════════════════════════ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  const go = id => { setOpen(false); document.getElementById(id)?.scrollIntoView({behavior:'smooth'}) }

  return (
    <>
      <header style={{
        position:'fixed',top:0,left:0,right:0,zIndex:500,
        height:68,padding:'0 5%',
        display:'flex',alignItems:'center',justifyContent:'space-between',
        background: scrolled ? 'rgba(255,255,255,.96)' : WHITE,
        borderBottom:`1.5px solid ${scrolled?BDR:'transparent'}`,
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        transition:'all .35s',
      }}>
        {/* Logo */}
        <div onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}
          style={{cursor:'pointer',display:'flex',alignItems:'center',gap:10,userSelect:'none'}}>
          {/* SZ badge */}
          <div style={{
            width:40,height:40,background:BLUE,borderRadius:10,
            display:'flex',alignItems:'center',justifyContent:'center',
            position:'relative',overflow:'hidden',flexShrink:0,
          }}>
            <span style={{fontFamily:FONT,fontSize:15,fontWeight:900,color:WHITE,letterSpacing:'-1px',lineHeight:1}}>SZ</span>
          </div>
          <div style={{lineHeight:1}}>
            <span style={{fontFamily:FONT,fontSize:21,fontWeight:800,color:INK,letterSpacing:'-.03em'}}>Siyazen</span>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="dsk" style={{display:'flex',gap:36,alignItems:'center'}}>
          {[['Home','hero'],['Services','services'],['Work','work'],['About','about'],['Contact','contact']].map(([l,id])=>(
            <button key={id} className="nl" onClick={()=>go(id)}>{l}</button>
          ))}
        </nav>

        <button className="btnP dsk" style={{fontSize:13,padding:'10px 22px'}} onClick={()=>go('contact')}>
          Contact Us
        </button>

        {/* Mobile hamburger */}
        <button className="mob" onClick={()=>setOpen(!open)}
          style={{background:'none',border:'none',cursor:'pointer',padding:6,display:'flex',flexDirection:'column',gap:5}}>
          {[0,1,2].map(i=>(
            <span key={i} style={{
              display:'block',width:22,height:2,background:INK,borderRadius:2,transition:'all .28s',
              transform:i===0&&open?'rotate(45deg) translate(5px,5px)':i===2&&open?'rotate(-45deg) translate(5px,-5px)':'none',
              opacity:i===1&&open?0:1,
            }}/>
          ))}
        </button>
      </header>

      {/* Mobile menu */}
      <div className="mob" style={{
        position:'fixed',top:68,left:0,right:0,bottom:0,zIndex:490,
        background:WHITE,borderTop:`1.5px solid ${BDR}`,
        display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:28,
        transform:open?'none':'translateX(100%)',
        transition:'transform .38s cubic-bezier(.16,1,.3,1)',
      }}>
        {[['Home','hero'],['Services','services'],['Work','work'],['About','about'],['Contact','contact']].map(([l,id])=>(
          <button key={id} onClick={()=>go(id)}
            style={{background:'none',border:'none',cursor:'pointer',fontFamily:FONT,fontSize:30,fontWeight:800,color:INK}}>
            {l}
          </button>
        ))}
        <button className="btnP" onClick={()=>go('contact')}>Contact Us</button>
      </div>
    </>
  )
}

/* ══════════════════════════════
   HERO  (exactly like emovur)
══════════════════════════════ */
function Hero() {
  const [ref, vis] = useInView(0.05)

  return (
    <section ref={ref} id="hero" style={{
      background:WHITE,
      padding:'clamp(110px,14vw,160px) 5% clamp(60px,8vw,100px)',
      position:'relative',overflow:'hidden',
    }}>
      {/* dot grid bg */}
      <div style={{position:'absolute',inset:0,backgroundImage:`radial-gradient(${BDR} 1.5px, transparent 1.5px)`,backgroundSize:'32px 32px',opacity:.5,pointerEvents:'none'}}/>
      {/* blue blob */}
      <div style={{position:'absolute',top:'-20%',right:'-12%',width:'55vw',height:'55vw',maxWidth:700,borderRadius:'50%',background:'radial-gradient(circle,rgba(0,102,255,.07) 0%,transparent 65%)',pointerEvents:'none'}}/>

      <div style={{position:'relative',zIndex:1,maxWidth:1200,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:'clamp(40px,6vw,80px)',alignItems:'center'}}>
        {/* Left copy */}
        <div>
          <p className={`rv lbl ${vis?'on':''}`}>✦ AI & Digital Growth Partner</p>

          <h1 className={`rv d1 ${vis?'on':''}`} style={{
            fontFamily:FONT,fontSize:'clamp(40px,7vw,88px)',fontWeight:800,
            lineHeight:.97,letterSpacing:'-.04em',color:INK,marginBottom:24,
          }}>
            We Move<br/>
            <span style={{color:BLUE}}>Brands</span><br/>
            Forward.
          </h1>

          <p className={`rv d2 ${vis?'on':''}`} style={{
            fontFamily:FONT,fontSize:'clamp(15px,1.8vw,18px)',fontWeight:400,
            color:GRAY,lineHeight:1.75,maxWidth:480,marginBottom:10,
          }}>
            Precision. Performance. Progress.
          </p>
          <p className={`rv d2 ${vis?'on':''}`} style={{
            fontFamily:FONT,fontSize:15,color:GRAY,lineHeight:1.8,maxWidth:460,marginBottom:36,
          }}>
            We build intelligent AI systems, world-class websites, and interfaces that drive real business results for forward-thinking brands.
          </p>

          <div className={`rv d3 ${vis?'on':''}`} style={{display:'flex',gap:14,flexWrap:'wrap',alignItems:'center'}}>
            <button className="btnP" onClick={()=>document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>
              Let's Connect →
            </button>
            <button className="btnO" onClick={()=>document.getElementById('services')?.scrollIntoView({behavior:'smooth'})}>
              Our Services
            </button>
          </div>
        </div>

        {/* Right — visual card stack */}
        <div className={`rv d2 dsk ${vis?'on':''}`} style={{position:'relative',height:380}}>
          {/* Main card */}
          <div style={{
            position:'absolute',top:0,left:'5%',right:0,
            background:WHITE,border:`1.5px solid ${BDR}`,borderRadius:20,
            padding:28,boxShadow:'0 20px 60px rgba(0,0,0,.1)',
            animation:'float 4s ease-in-out infinite',
          }}>
            <div style={{fontFamily:FONT,fontSize:12,fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase',color:BLUE,marginBottom:12}}>Active Projects</div>
            {['Aether Finance — AI Dashboard','Lumina Health — App Redesign','Obsidian Capital — Web & Brand'].map((p,i)=>(
              <div key={i} style={{display:'flex',alignItems:'center',gap:12,padding:'10px 0',borderBottom:i<2?`1px solid ${BDR}`:'none'}}>
                <div style={{width:8,height:8,borderRadius:'50%',background:['#22c55e','#3b82f6','#f59e0b'][i],flexShrink:0}}/>
                <span style={{fontFamily:FONT,fontSize:14,color:MID}}>{p}</span>
              </div>
            ))}
          </div>
          {/* Stat badge */}
          <div style={{
            position:'absolute',bottom:30,left:0,
            background:WHITE,border:`1.5px solid ${BDR}`,borderRadius:14,
            padding:'16px 20px',boxShadow:'0 8px 28px rgba(0,0,0,.1)',
            animation:'float 5s ease-in-out infinite .6s',
          }}>
            <div style={{fontFamily:FONT,fontSize:28,fontWeight:800,color:BLUE,lineHeight:1}}>98%</div>
            <div style={{fontFamily:FONT,fontSize:12,color:GRAY,marginTop:4}}>Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className={`rv d4 ${vis?'on':''}`} style={{maxWidth:1200,margin:'clamp(48px,6vw,72px) auto 0',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(130px,1fr))',border:`1.5px solid ${BDR}`,borderRadius:14,overflow:'hidden',background:LGRAY}}>
        {[['50+','Projects Delivered'],['98%','Client Retention'],['12','Countries Served'],['6+','Years Experience']].map(([v,l],i,a)=>(
          <div key={l} style={{padding:'clamp(18px,2.5vw,28px) 20px',borderRight:i<a.length-1?`1.5px solid ${BDR}`:'none',textAlign:'center'}}>
            <div style={{fontFamily:FONT,fontSize:'clamp(22px,3.5vw,36px)',fontWeight:800,color:INK,lineHeight:1}}>{v}</div>
            <div style={{fontFamily:FONT,fontSize:12,color:GRAY,marginTop:6}}>{l}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ══════════════════════════════
   CLIENT TICKER
══════════════════════════════ */
function Ticker() {
  const clients = ['Aether Finance','Lumina Health','Obsidian Capital','Solstice Retail','Meridian Law','NovaMind AI','Pulse Analytics','Stellar Brand','Vertex Corp','Axiom Tech']
  const all = [...clients,...clients]
  return (
    <div style={{background:LGRAY,borderTop:`1.5px solid ${BDR}`,borderBottom:`1.5px solid ${BDR}`,padding:'18px 0',overflow:'hidden'}}>
      <div className="tkr">
        {all.map((c,i)=>(
          <div key={i} style={{display:'flex',alignItems:'center',padding:'0 36px',gap:36,whiteSpace:'nowrap'}}>
            <span style={{fontFamily:FONT,fontSize:14,fontWeight:600,color:GRAY}}>{c}</span>
            <span style={{color:BLUE,fontSize:8}}>◆</span>
          </div>
        ))}
      </div>
    </div>
  )
}
function SimpleSlider({ images }) {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div style={{position: 'relative', width: '100%', height: '400px', overflow: 'hidden'}}>
      {images.map((src, i) => (
        <img 
          key={i} 
          src={src} 
          alt={`Slide ${i}`} 
          style={{
            position: 'absolute', 
            top: 0, 
            left: `${(i - current) * 100}%`, 
            width: '100%', 
            height: '100%', 
            transition: 'left 0.5s ease'
          }} 
        />
      ))}
      <button onClick={prev} style={{position: 'absolute', top: '50%', left: 10, background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', padding: '10px', cursor: 'pointer'}}>❮</button>
      <button onClick={next} style={{position: 'absolute', top: '50%', right: 10, background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', padding: '10px', cursor: 'pointer'}}>❯</button>
    </div>
  );
}

function Services() {
  const [ref, vis] = useInView(0.08)
  const [tab, setTab] = useState(0)
  const s = SERVICES[tab]

  return (
    <section id="services" ref={ref} style={{padding:'clamp(72px,9vw,110px) 5%',background:WHITE}}>
      <div style={{maxWidth:1200,margin:'0 auto'}}>
        <p className={`rv lbl ${vis?'on':''}`}>SERVICES</p>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',flexWrap:'wrap',gap:24,marginBottom:40}}>
          // Replace the tab content return with:
           <div style={{display: 'flex', gap: '40px', alignItems: 'flex-start'}}>
           <div style={{flex: 1}}>
           <p style={{...}}> {/* Existing description */}</p>
         <ul className="ck"> {/* Existing checklist */}</ul>
         </div>
       <div style={{position: 'relative', width: '50%', height: '400px'}}> {/* Image stack above */}</div>
      </div>

          <h2 className={`rv d1 ${vis?'on':''}`} style={{fontFamily:FONT,fontSize:'clamp(28px,5vw,52px)',fontWeight:800,letterSpacing:'-.03em',color:INK,lineHeight:1.05}}>
            What We Do
          </h2>
          <p className={`rv d2 ${vis?'on':''}`} style={{fontFamily:FONT,fontSize:15,color:GRAY,maxWidth:380,lineHeight:1.7}}>
            A focused suite of capabilities, each executed without compromise — from strategy through to launch.
          </p>
        </div>

        {/* Tab buttons */}
        <div className={`rv d3 ${vis?'on':''}`} style={{display:'flex',gap:10,flexWrap:'wrap',marginBottom:36}}>
          {SERVICES.map((sv,i)=>(
            <button key={sv.id} className={`stab${tab===i?' act':''}`} onClick={()=>setTab(i)}>{sv.label}</button>
          ))}
        </div>

        {/* Panel */}
        <div className={`rv d4 ${vis?'on':''}`} style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',border:`1.5px solid ${BDR}`,borderRadius:18,overflow:'hidden'}}>
          {/* Left */}
          <div style={{padding:'clamp(32px,4vw,52px)',background:s.accent}}>
            <p style={{fontFamily:FONT,fontSize:11,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:BLUE,marginBottom:12}}>{s.label}</p>
            <h3 style={{fontFamily:FONT,fontSize:'clamp(22px,3vw,34px)',fontWeight:800,color:INK,letterSpacing:'-.02em',marginBottom:18,lineHeight:1.1}}>{s.title}</h3>
            <p style={{fontFamily:FONT,fontSize:15,color:MID,lineHeight:1.8,marginBottom:32}}>{s.desc}</p>
            <button className="btnP" onClick={()=>document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>
              Get Started →
            </button>
          </div>
          {/* Right */}
          <div style={{padding:'clamp(32px,4vw,52px)',background:WHITE,borderLeft:`1.5px solid ${BDR}`}}>
            <p style={{fontFamily:FONT,fontSize:12,fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase',color:GRAY,marginBottom:22}}>What's Included</p>
            <ul className="ck">
              {s.list.map(f=><li key={f}>{f}</li>)}
            </ul>
 <SimpleSlider images={[
  'https://via.placeholder.com/800x400?text=Dashboard+1',
  'https://via.placeholder.com/800x400?text=Happy+Customers',
  'https://via.placeholder.com/800x400?text=Analytics'
]} />
            
            // Inside Services() component, after the <ul className="ck">...</ul>
<div style={{position: 'relative', width: '50%', height: '400px', marginLeft: 'auto'}}> {/* Adjust width for layout */}
  <img 
    src="https://via.placeholder.com/600x400?text=Dashboard+1" 
    alt="Dashboard 1" 
    style={{
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '80%', 
      boxShadow: '0 10px 30px rgba(0,0,0,0.15)', 
      borderRadius: '12px', 
      transform: 'rotate(-5deg)'
    }} 
  />
  <img 
    src="https://via.placeholder.com/600x400?text=Happy+Customers" 
    alt="Dashboard 2" 
    style={{
      position: 'absolute', 
      top: '40px', 
      left: '100px', 
      width: '80%', 
      boxShadow: '0 10px 30px rgba(0,0,0,0.15)', 
      borderRadius: '12px', 
      transform: 'rotate(3deg)'
    }} 
  />
  <img 
    src="https://via.placeholder.com/600x400?text=Analytics" 
    alt="Dashboard 3" 
    style={{
      position: 'absolute', 
      top: '80px', 
      left: '200px', 
      width: '80%', 
      boxShadow: '0 10px 30px rgba(0,0,0,0.15)', 
      borderRadius: '12px', 
      transform: 'rotate(-2deg)'
    }} 
  />
</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Dashboard() {
  const [ref, visible] = useInView(0.1);
  return (
    <section id="dashboard" ref={ref} className={`rv ${visible ? 'on' : ''}`} style={{padding: 'clamp(60px,8vw,100px) 5%'}}>
      <div style={{maxWidth: 1200, margin: '0 auto'}}>
        <span className="lbl">Our Platform</span>
        <h2 style={{fontSize: 'clamp(32px,4vw,48px)', fontWeight: 800, marginBottom: 16}}>Command Center Dashboard</h2>
        <p style={{fontSize: 18, color: GRAY, maxWidth: 600, marginBottom: 48}}>Centralized hub for AI-driven marketing and client management.</p>
        
        {/* Dashboard Mockup */}
        <div style={{background: LGRAY, borderRadius: 16, padding: 32, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24}}>
          {/* Wallet Balance Card */}
          <div style={{background: WHITE, borderRadius: 12, padding: 20, boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}>
            <h3 style={{fontSize: 16, fontWeight: 600, marginBottom: 8}}>Wallet Balance</h3>
            <p style={{fontSize: 24, fontWeight: 800, color: BLUE}}>₹22,580</p>
            <p style={{fontSize: 14, color: GRAY}}>Add Funds</p>
          </div>
          
          {/* WhatsApp Business API Status */}
          <div style={{background: WHITE, borderRadius: 12, padding: 20, boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}>
            <h3 style={{fontSize: 16, fontWeight: 600, marginBottom: 8}}>WhatsApp Business API Status</h3>
            <p style={{fontSize: 18, color: 'green'}}>Active</p>
            <p style={{fontSize: 14, color: GRAY}}>High Quality</p>
          </div>
          
          {/* Messaging Limits */}
          <div style={{background: WHITE, borderRadius: 12, padding: 20, boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}>
            <h3 style={{fontSize: 16, fontWeight: 600, marginBottom: 8}}>Messaging Limits</h3>
            <p style={{fontSize: 24, fontWeight: 800}}>10,000/day</p>
          </div>
          
          {/* Other cards – add more as needed */}
          <div style={{background: WHITE, borderRadius: 12, padding: 20, boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}>
            <h3 style={{fontSize: 16, fontWeight: 600, marginBottom: 8}}>Emovur Profile</h3>
            <p style={{fontSize: 14, color: GRAY}}>+91 80977 74255</p>
            <p style={{fontSize: 14, color: BLUE}}>View Profile</p>
          </div>
        </div>
        
        {/* Navigation Tabs like in screenshot */}
        <div style={{display: 'flex', gap: 20, marginTop: 32, justifyContent: 'center'}}>
          <button className="stab act">WhatsApp API</button>
          <button className="stab">Chat Inbox</button>
          <button className="stab">CRM</button>
          <button className="stab">Review</button>
          <button className="stab">Social Post</button>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════
   WORK / PROJECTS
══════════════════════════════ */
function Work() {
  const [ref, vis] = useInView(0.08)

  return (
    <section id="work" ref={ref} style={{padding:'clamp(72px,9vw,110px) 5%',background:LGRAY}}>
      <div style={{maxWidth:1200,margin:'0 auto'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',flexWrap:'wrap',gap:24,marginBottom:48}}>
          <div>
            <p className={`rv lbl ${vis?'on':''}`}>PROJECTS</p>
            <h2 className={`rv d1 ${vis?'on':''}`} style={{fontFamily:FONT,fontSize:'clamp(28px,5vw,52px)',fontWeight:800,letterSpacing:'-.03em',color:INK,lineHeight:1.05}}>Selected Work</h2>
          </div>
          <button className={`btnO rv d2 ${vis?'on':''}`} onClick={()=>document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>
            Start a Project →
          </button>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:24}}>
          {PROJECTS.map((p,i)=>(
            <div key={p.name} className={`wc rv d${i+1} ${vis?'on':''}`}>
              {/* Header */}
              <div style={{background:p.bg,padding:'32px 28px 28px',position:'relative'}}>
                <span style={{position:'absolute',top:16,right:16,fontFamily:FONT,fontSize:11,fontWeight:600,color:GRAY,background:WHITE,borderRadius:6,padding:'4px 10px'}}>{p.cat}</span>
                <div style={{fontFamily:FONT,fontSize:'clamp(36px,5vw,52px)',fontWeight:800,color:INK,lineHeight:1}}>{p.result}</div>
                <div style={{fontFamily:FONT,fontSize:13,color:GRAY,marginTop:4}}>{p.metric}</div>
              </div>
              {/* Body */}
              <div style={{padding:'24px 28px 28px'}}>
                <h3 style={{fontFamily:FONT,fontSize:20,fontWeight:800,color:INK,letterSpacing:'-.02em',marginBottom:10}}>{p.name}</h3>
                <p style={{fontFamily:FONT,fontSize:14,color:GRAY,lineHeight:1.7,marginBottom:18}}>{p.desc}</p>
                <ul className="ck" style={{gap:8}}>
                  {p.pills.map(pp=><li key={pp} style={{fontSize:13}}>{pp}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════
   CLIENTS LOVE US
══════════════════════════════ */
function ClientsSection() {
  const [ref, vis] = useInView(0.08)

  return (
    <section ref={ref} style={{padding:'clamp(72px,9vw,110px) 5%',background:WHITE}}>
      <div style={{maxWidth:1200,margin:'0 auto'}}>
        {/* Header */}
        <div style={{textAlign:'center',marginBottom:48}}>
          <p className={`rv lbl ${vis?'on':''}`} style={{display:'inline-block'}}>TESTIMONIALS</p>
          <h2 className={`rv d1 ${vis?'on':''}`} style={{fontFamily:FONT,fontSize:'clamp(28px,5vw,52px)',fontWeight:800,letterSpacing:'-.03em',color:INK,marginTop:4}}>
            Clients Love Siyazen
          </h2>
          <p className={`rv d2 ${vis?'on':''}`} style={{fontFamily:FONT,fontSize:16,color:GRAY,marginTop:12}}>
            Trusted by growing businesses across 12 countries.
          </p>
        </div>

        {/* Stats strip */}
        <div className={`rv d3 ${vis?'on':''}`} style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))',border:`1.5px solid ${BDR}`,borderRadius:14,overflow:'hidden',background:LGRAY,marginBottom:40}}>
          {[['50+','Happy Clients'],['98%','Satisfaction Rate'],['4.9 ★','Avg Rating'],['$20M+','Revenue Added']].map(([v,l],i,a)=>(
            <div key={l} style={{padding:'clamp(20px,2.5vw,28px) 16px',borderRight:i<a.length-1?`1.5px solid ${BDR}`:'none',textAlign:'center'}}>
              <div style={{fontFamily:FONT,fontSize:'clamp(20px,3vw,34px)',fontWeight:800,color:BLUE,lineHeight:1}}>{v}</div>
              <div style={{fontFamily:FONT,fontSize:12,color:GRAY,marginTop:6}}>{l}</div>
            </div>
          ))}
        </div>

        {/* Review cards */}
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:20}}>
          {TESTIMONIALS.map((t,i)=>(
            <div key={t.name} className={`tc rv d${i+1} ${vis?'on':''}`}>
              <div style={{display:'flex',alignItems:'center',gap:4,marginBottom:14}}>
                {[...Array(t.stars)].map((_,j)=><span key={j} style={{color:'#F59E0B',fontSize:16}}>★</span>)}
                <span style={{fontFamily:FONT,fontSize:13,fontWeight:700,color:INK,marginLeft:6}}>{t.stars}.0</span>
              </div>
              <p style={{fontFamily:FONT,fontSize:14.5,color:MID,lineHeight:1.75,fontStyle:'italic',marginBottom:22}}>"{t.text}"</p>
              <div style={{display:'flex',alignItems:'center',gap:12}}>
                <div style={{width:42,height:42,borderRadius:'50%',background:'#EEF4FF',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:FONT,fontSize:14,fontWeight:800,color:BLUE,flexShrink:0}}>{t.init}</div>
                <div>
                  <div style={{fontFamily:FONT,fontSize:14,fontWeight:700,color:INK}}>{t.name}</div>
                  <div style={{fontFamily:FONT,fontSize:12,color:GRAY,marginTop:2}}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════
   ABOUT
══════════════════════════════ */
function About() {
  const [ref, vis] = useInView(0.08)

  return (
    <section id="about" ref={ref} style={{padding:'clamp(72px,9vw,110px) 5%',background:LGRAY}}>
      <div style={{maxWidth:1200,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:'clamp(40px,6vw,80px)',alignItems:'center'}}>
        <div>
          <p className={`rv lbl ${vis?'on':''}`}>ABOUT SIYAZEN</p>
          <h2 className={`rv d1 ${vis?'on':''}`} style={{fontFamily:FONT,fontSize:'clamp(28px,5vw,50px)',fontWeight:800,letterSpacing:'-.03em',color:INK,lineHeight:1.07,marginBottom:22}}>
            The Minds<br/>Behind Siyazen
          </h2>
          <p className={`rv d2 ${vis?'on':''}`} style={{fontFamily:FONT,fontSize:15,color:GRAY,lineHeight:1.8,marginBottom:16}}>
            Siyazen is a boutique digital studio built on a single belief: that great outcomes require deep collaboration, genuine expertise, and a relentless commitment to quality over volume.
          </p>
          <p className={`rv d3 ${vis?'on':''}`} style={{fontFamily:FONT,fontSize:15,color:GRAY,lineHeight:1.8,marginBottom:36}}>
            We take on a limited number of projects each year by design, so every client receives our full attention and our sharpest thinking.
          </p>
          <button className={`btnP rv d4 ${vis?'on':''}`} onClick={()=>document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>
            Work With Us →
          </button>
        </div>

        <div className={`rv d2 ${vis?'on':''}`} style={{display:'flex',flexDirection:'column',gap:16}}>
          {[
            {icon:'🎯',t:'Strategy First',    d:'Every project starts with understanding your goals, market, and users before writing a single line of code.'},
            {icon:'⚡',t:'Fast Execution',     d:'We move with urgency, not haste. Most projects launch within 4–8 weeks without cutting corners.'},
            {icon:'🤝',t:'Long-term Partner', d:"We don't disappear at launch. Most of our clients continue working with us for months and years after."},
          ].map(p=>(
            <div key={p.t} style={{display:'flex',gap:16,background:WHITE,border:`1.5px solid ${BDR}`,borderRadius:14,padding:'20px 22px',transition:'border-color .25s,box-shadow .25s'}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor=BLUE;e.currentTarget.style.boxShadow=`0 4px 16px rgba(0,102,255,.1)`}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor=BDR;e.currentTarget.style.boxShadow='none'}}>
              <div style={{width:44,height:44,minWidth:44,background:'#EEF4FF',borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',fontSize:20}}>{p.icon}</div>
              <div>
                <div style={{fontFamily:FONT,fontSize:15,fontWeight:700,color:INK,marginBottom:5}}>{p.t}</div>
                <div style={{fontFamily:FONT,fontSize:13.5,color:GRAY,lineHeight:1.65}}>{p.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════
   FAQ
══════════════════════════════ */
function FAQ() {
  const [ref, vis] = useInView(0.08)
  const [open, setOpen] = useState(null)

  return (
    <section ref={ref} style={{padding:'clamp(72px,9vw,110px) 5%',background:WHITE}}>
      <div style={{maxWidth:820,margin:'0 auto'}}>
        <div style={{textAlign:'center',marginBottom:52}}>
          <p className={`rv lbl ${vis?'on':''}`} style={{display:'inline-block'}}>FAQ</p>
          <h2 className={`rv d1 ${vis?'on':''}`} style={{fontFamily:FONT,fontSize:'clamp(28px,5vw,50px)',fontWeight:800,letterSpacing:'-.03em',color:INK,lineHeight:1.07,marginTop:4}}>
            Frequently Asked Questions
          </h2>
        </div>
        {FAQS.map((f,i)=>(
          <div key={i} className={`fq rv d${Math.min(i+1,5)} ${vis?'on':''}`}>
            <button className={open===i?'open':''} onClick={()=>setOpen(open===i?null:i)}>
              <span>{f.q}</span>
              <div style={{
                width:30,height:30,minWidth:30,borderRadius:'50%',
                background:open===i?BLUE:LGRAY,border:`1.5px solid ${open===i?BLUE:BDR}`,
                display:'flex',alignItems:'center',justifyContent:'center',
                color:open===i?WHITE:GRAY,fontSize:20,fontWeight:300,
                transition:'all .25s',transform:open===i?'rotate(45deg)':'none',
              }}>+</div>
            </button>
            {open===i&&<div className="fq-body">{f.a}</div>}
          </div>
        ))}
      </div>
    </section>
  )
}

/* ══════════════════════════════
   CONTACT
══════════════════════════════ */
function Contact() {
  const [ref, vis] = useInView(0.08)
  const [form, setForm] = useState({name:'',email:'',service:'',message:''})
  const [done, setDone] = useState(false)
  const [err, setErr] = useState('')

  const send = () => {
    if(!form.name.trim()||!form.email.trim()){setErr('Please fill in your name and email.');return}
    if(!/\S+@\S+\.\S+/.test(form.email)){setErr('Please enter a valid email address.');return}
    setErr('');setDone(true)
    console.log('Form submission:',form)
  }

  return (
    <section id="contact" ref={ref} style={{padding:'clamp(72px,9vw,110px) 5%',background:LGRAY}}>
      <div style={{maxWidth:1200,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:'clamp(40px,6vw,72px)',alignItems:'start'}}>
        {/* Left */}
        <div>
          <p className={`rv lbl ${vis?'on':''}`}>CONTACT</p>
          <h2 className={`rv d1 ${vis?'on':''}`} style={{fontFamily:FONT,fontSize:'clamp(28px,5vw,50px)',fontWeight:800,letterSpacing:'-.03em',color:INK,lineHeight:1.07,marginBottom:18}}>
            Let's Build<br/>Something Great
          </h2>
          <p className={`rv d2 ${vis?'on':''}`} style={{fontFamily:FONT,fontSize:15,color:GRAY,lineHeight:1.8,marginBottom:36}}>
            We are currently taking on new projects. Tell us what you are working on — we respond within 24 hours and schedule a free discovery call.
          </p>
          <div className={`rv d3 ${vis?'on':''}`} style={{display:'flex',flexDirection:'column',gap:14}}>
            {[['📧','Email','hello@siyazen.com'],['⏰','Response Time','Within 24 hours'],['🌍','Location','Remote — Worldwide']].map(([ic,l,v])=>(
              <div key={l} style={{display:'flex',alignItems:'center',gap:14,background:WHITE,border:`1.5px solid ${BDR}`,borderRadius:12,padding:'14px 18px'}}>
                <span style={{fontSize:20}}>{ic}</span>
                <div>
                  <div style={{fontFamily:FONT,fontSize:11,fontWeight:700,color:GRAY,textTransform:'uppercase',letterSpacing:'.08em'}}>{l}</div>
                  <div style={{fontFamily:FONT,fontSize:14,fontWeight:600,color:INK,marginTop:2}}>{v}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className={`rv d2 ${vis?'on':''}`} style={{background:WHITE,border:`1.5px solid ${BDR}`,borderRadius:18,padding:'clamp(28px,4vw,44px)'}}>
          {done ? (
            <div style={{textAlign:'center',padding:'40px 16px'}}>
              <div style={{fontSize:52,marginBottom:16}}>🎉</div>
              <h3 style={{fontFamily:FONT,fontSize:26,fontWeight:800,color:INK,marginBottom:10}}>Message Sent!</h3>
              <p style={{fontFamily:FONT,fontSize:15,color:GRAY,lineHeight:1.7}}>Thanks for reaching out. We will be in touch within 24 hours.</p>
            </div>
          ):(
            <div style={{display:'flex',flexDirection:'column',gap:16}}>
              <div className="grid2" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
                <div>
                  <label style={{fontFamily:FONT,fontSize:13,fontWeight:600,color:MID,display:'block',marginBottom:7}}>Full Name *</label>
                  <input className="fi" type="text" placeholder="Jane Smith" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
                </div>
                <div>
                  <label style={{fontFamily:FONT,fontSize:13,fontWeight:600,color:MID,display:'block',marginBottom:7}}>Email Address *</label>
                  <input className="fi" type="email" placeholder="jane@company.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
                </div>
              </div>
              <div>
                <label style={{fontFamily:FONT,fontSize:13,fontWeight:600,color:MID,display:'block',marginBottom:7}}>Service Needed</label>
                <select className="fi" value={form.service} onChange={e=>setForm({...form,service:e.target.value})}>
                  <option value="">Select a service...</option>
                  {['AI Solutions','Website Development','UI / UX Design','Brand Identity','Full Package'].map(o=><option key={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label style={{fontFamily:FONT,fontSize:13,fontWeight:600,color:MID,display:'block',marginBottom:7}}>Tell Us About Your Project</label>
                <textarea className="fi" rows={5} placeholder="Describe your project, goals, and timeline..." value={form.message} onChange={e=>setForm({...form,message:e.target.value})} style={{resize:'vertical'}}/>
              </div>
              {err&&<p style={{fontFamily:FONT,fontSize:13,color:'#EF4444'}}>{err}</p>}
              <button className="btnP" onClick={send} style={{justifyContent:'center',padding:'15px',fontSize:15,width:'100%'}}>
                Send Message →
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════
   FOOTER
══════════════════════════════ */
function Footer() {
  const go = id => document.getElementById(id)?.scrollIntoView({behavior:'smooth'})
  return (
    <footer style={{background:INK,color:WHITE,padding:'clamp(48px,6vw,72px) 5% 28px'}}>
      <div style={{maxWidth:1200,margin:'0 auto'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:40,paddingBottom:48,borderBottom:'1px solid rgba(255,255,255,.1)',marginBottom:28}}>
          {/* Brand */}
          <div>
            <div onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} style={{cursor:'pointer',display:'flex',alignItems:'center',gap:10,marginBottom:16}}>
              <div style={{width:38,height:38,background:BLUE,borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                <span style={{fontFamily:FONT,fontSize:14,fontWeight:900,color:WHITE,letterSpacing:'-1px'}}>SZ</span>
              </div>
              <span style={{fontFamily:FONT,fontSize:20,fontWeight:800,color:WHITE,letterSpacing:'-.03em'}}>Siyazen</span>
            </div>
            <p style={{fontFamily:FONT,fontSize:13,color:'rgba(255,255,255,.5)',lineHeight:1.7,maxWidth:220}}>
              AI, web development, and design for brands that demand real results.
            </p>
          </div>
          {/* Company */}
          <div>
            <p style={{fontFamily:FONT,fontSize:11,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'rgba(255,255,255,.35)',marginBottom:18}}>Company</p>
            {[['Home','hero'],['Services','services'],['Work','work'],['About','about'],['Contact','contact']].map(([l,id])=>(
              <button key={id} onClick={()=>go(id)} style={{display:'block',background:'none',border:'none',cursor:'pointer',fontFamily:FONT,fontSize:14,color:'rgba(255,255,255,.6)',marginBottom:11,padding:0,transition:'color .2s'}}
                onMouseEnter={e=>e.target.style.color=WHITE} onMouseLeave={e=>e.target.style.color='rgba(255,255,255,.6)'}>
                {l}
              </button>
            ))}
          </div>
          {/* Services */}
          <div>
            <p style={{fontFamily:FONT,fontSize:11,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'rgba(255,255,255,.35)',marginBottom:18}}>Services</p>
            {['AI Solutions','Web Development','UI / UX Design','Brand Identity'].map(l=>(
              <div key={l} style={{fontFamily:FONT,fontSize:14,color:'rgba(255,255,255,.6)',marginBottom:11}}>{l}</div>
            ))}
          </div>
          {/* Contact */}
          <div>
            <p style={{fontFamily:FONT,fontSize:11,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'rgba(255,255,255,.35)',marginBottom:18}}>Get In Touch</p>
            <p style={{fontFamily:FONT,fontSize:14,color:'rgba(255,255,255,.6)',marginBottom:10}}>hello@siyazen.com</p>
            <p style={{fontFamily:FONT,fontSize:14,color:'rgba(255,255,255,.6)',marginBottom:24}}>Remote — Worldwide</p>
            <div style={{display:'flex',gap:10}}>
              {[['Li','LinkedIn'],['Tw','Twitter'],['Ig','Instagram']].map(([a,name])=>(
                <a key={name} href="#" title={name} style={{width:34,height:34,background:'rgba(255,255,255,.08)',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:FONT,fontSize:11,fontWeight:700,color:'rgba(255,255,255,.6)',textDecoration:'none',transition:'background .2s'}}
                  onMouseEnter={e=>e.currentTarget.style.background=BLUE} onMouseLeave={e=>e.currentTarget.style.background='rgba(255,255,255,.08)'}>
                  {a}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
          <p style={{fontFamily:FONT,fontSize:13,color:'rgba(255,255,255,.3)'}}>© {new Date().getFullYear()} Siyazen. All rights reserved.</p>
          <p style={{fontFamily:FONT,fontSize:13,color:'rgba(255,255,255,.3)'}}>Precision. Performance. Progress.</p>
        </div>
      </div>
    </footer>
  )
}

/* ══════════════════════════════
   ROOT
══════════════════════════════ */
export default function App() {
  return (
    <>
      <style>{CSS}</style>
      <Navbar/>
      <main>
        <Hero/>
        <Ticker/>
        <Services/>
        <Work/>
        <ClientsSection/>
        <About/>
        <FAQ/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}
