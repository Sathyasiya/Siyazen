import React, { useState } from 'react';

const UNSPLASH = 'https://images.unsplash.com/';

const tabs = [
  {
    id: 'whatsapp',
    label: 'WhatsApp API',
    icon: '💬',
    title: 'WhatsApp Business API',
    desc: 'Scale your business communication with the official WhatsApp API. Send broadcasts, automate responses, and manage thousands of conversations.',
    image: `${UNSPLASH}photo-1611746872915-64382b5c76da?w=700&q=80`,
    features: ['Bulk messaging campaigns', 'Chatbot automation', 'CRM integration', 'Template approval support'],
  },
  {
    id: 'chat',
    label: 'Chat Inbox',
    icon: '📥',
    title: 'Unified Chat Inbox',
    desc: 'Manage all customer conversations from WhatsApp, Instagram, and web chat in one powerful, team-ready inbox.',
    image: `${UNSPLASH}photo-1556742049-0cfed4f6a45d?w=700&q=80`,
    features: ['Multi-channel inbox', 'Team assignment & notes', 'Quick reply templates', 'Customer history view'],
  },
  {
    id: 'crm',
    label: 'CRM',
    icon: '👥',
    title: 'Customer Relationship Manager',
    desc: 'Track your leads, deals, and customer journeys with an intuitive CRM built for digital-first businesses.',
    image: `${UNSPLASH}photo-1553484771-371a605b060b?w=700&q=80`,
    features: ['Pipeline management', 'Lead scoring', 'Contact segmentation', 'Deal tracking'],
  },
  {
    id: 'review',
    label: 'Review',
    icon: '⭐',
    title: 'Review Management',
    desc: 'Monitor, respond to, and grow your online reputation across Google, Facebook, and more from one dashboard.',
    image: `${UNSPLASH}photo-1600880292089-90a7e086ee0c?w=700&q=80`,
    features: ['Google & Facebook reviews', 'Auto review requests', 'Sentiment analysis', 'Response templates'],
  },
  {
    id: 'social',
    label: 'Social Post',
    icon: '📸',
    title: 'Social Media Publisher',
    desc: 'Plan, schedule, and publish content across all your social channels with an AI-powered content calendar.',
    image: `${UNSPLASH}photo-1611162617474-5b21e879e113?w=700&q=80`,
    features: ['Multi-platform scheduling', 'AI caption generator', 'Analytics dashboard', 'Content calendar'],
  },
];

export default function Products() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section id="products" style={{
      padding: '120px 5%',
      background: 'linear-gradient(180deg, transparent 0%, rgba(232,255,71,0.02) 50%, transparent 100%)',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '32px', height: '2px', background: 'var(--accent)' }}/>
            <span style={{ fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', opacity: 0.5 }}>Platform</span>
            <div style={{ width: '32px', height: '2px', background: 'var(--accent)' }}/>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.1 }}>
            Your Digital Marketing<br />
            <span style={{ color: 'var(--accent)' }}>Command Center</span>
          </h2>
        </div>

        {/* Tab nav */}
        <div style={{
          display: 'flex', gap: '8px', justifyContent: 'center',
          marginBottom: '48px', flexWrap: 'wrap',
        }}>
          {tabs.map((t, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              background: active === i ? 'var(--accent)' : 'rgba(255,255,255,0.05)',
              color: active === i ? '#000' : 'var(--white)',
              border: '1px solid', borderColor: active === i ? 'var(--accent)' : 'rgba(255,255,255,0.1)',
              padding: '10px 22px', borderRadius: '50px', cursor: 'pointer',
              fontSize: '14px', fontWeight: 600, transition: 'all 0.3s',
              fontFamily: 'var(--font-body)', display: 'flex', alignItems: 'center', gap: '8px',
            }}>
              <span>{t.icon}</span>
              <span>{t.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div key={active} style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center',
          animation: 'fadeInUp 0.5s ease forwards',
        }}>
          {/* Left */}
          <div>
            <div style={{
              fontSize: '48px', marginBottom: '20px',
              background: 'rgba(232,255,71,0.1)', width: '80px', height: '80px',
              borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {tab.icon}
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(24px, 3vw, 36px)', marginBottom: '16px' }}>
              {tab.title}
            </h3>
            <p style={{ opacity: 0.6, fontSize: '16px', lineHeight: 1.8, marginBottom: '32px', maxWidth: '420px' }}>
              {tab.desc}
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {tab.features.map((f, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0,
                  }}/>
                  <span style={{ fontSize: '15px', fontWeight: 500 }}>{f}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '40px',
              background: 'var(--accent)', color: '#000', padding: '14px 32px', borderRadius: '50px',
              fontSize: '14px', fontWeight: 700, fontFamily: 'var(--font-display)',
              transition: 'all 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 16px 32px rgba(232,255,71,0.25)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              Get Started →
            </a>
          </div>

          {/* Right - Image */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
            }}>
              <img src={tab.image} alt={tab.title} style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{
              position: 'absolute', bottom: '-20px', right: '-20px',
              background: 'var(--accent)', color: '#000', padding: '16px 24px', borderRadius: '16px',
              fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '24px',
              boxShadow: '0 16px 40px rgba(232,255,71,0.3)',
            }}>
              {tab.icon}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            #products [style*="gridTemplateColumns"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
