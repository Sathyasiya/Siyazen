import React, { useState } from 'react';
const UNSPLASH = 'https://images.unsplash.com/';

const tabs = [
  { id: 'whatsapp', label: 'WhatsApp API', icon: '💬', title: 'WhatsApp Business API', desc: 'Scale your business communication with the official WhatsApp API. Send broadcasts, automate responses, and manage thousands of conversations.', image: `${UNSPLASH}photo-1611746872915-64382b5c76da?w=700&q=80`, features: ['Bulk messaging campaigns', 'Chatbot automation', 'CRM integration', 'Template approval support'], color: '#25D366' },
  { id: 'chat', label: 'Chat Inbox', icon: '📥', title: 'Unified Chat Inbox', desc: 'Manage all customer conversations from WhatsApp, Instagram, and web chat in one powerful, team-ready inbox.', image: `${UNSPLASH}photo-1556742049-0cfed4f6a45d?w=700&q=80`, features: ['Multi-channel inbox', 'Team assignment & notes', 'Quick reply templates', 'Customer history view'], color: '#2563eb' },
  { id: 'crm', label: 'CRM', icon: '👥', title: 'Customer Relationship Manager', desc: 'Track your leads, deals, and customer journeys with an intuitive CRM built for digital-first businesses.', image: `${UNSPLASH}photo-1553484771-371a605b060b?w=700&q=80`, features: ['Pipeline management', 'Lead scoring', 'Contact segmentation', 'Deal tracking'], color: '#7c3aed' },
  { id: 'review', label: 'Review', icon: '⭐', title: 'Review Management', desc: 'Monitor, respond to, and grow your online reputation across Google, Facebook, and more from one dashboard.', image: `${UNSPLASH}photo-1600880292089-90a7e086ee0c?w=700&q=80`, features: ['Google & Facebook reviews', 'Auto review requests', 'Sentiment analysis', 'Response templates'], color: '#f59e0b' },
  { id: 'social', label: 'Social Post', icon: '📸', title: 'Social Media Publisher', desc: 'Plan, schedule, and publish content across all your social channels with an AI-powered content calendar.', image: `${UNSPLASH}photo-1611162617474-5b21e879e113?w=700&q=80`, features: ['Multi-platform scheduling', 'AI caption generator', 'Analytics dashboard', 'Content calendar'], color: '#ec4899' },
];

export default function Products() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section id="products" style={{ padding: '100px 5%', background: '#f7f5f2' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '14px' }}>
            <div style={{ width: '28px', height: '2px', background: '#111' }}/><span style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#999', fontWeight: 600 }}>Platform</span><div style={{ width: '28px', height: '2px', background: '#111' }}/>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(30px, 5vw, 52px)', lineHeight: 1.1, color: '#111' }}>
            Your Digital Marketing<br /><span style={{ color: 'var(--accent)' }}>Command Center</span>
          </h2>
        </div>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '48px', flexWrap: 'wrap' }}>
          {tabs.map((t, i) => (
            <button key={i} onClick={() => setActive(i)} style={{ background: active === i ? t.color : '#fff', color: active === i ? '#fff' : '#555', border: `1.5px solid ${active === i ? t.color : '#e0e0e0'}`, padding: '9px 20px', borderRadius: '50px', cursor: 'pointer', fontSize: '13px', fontWeight: 600, transition: 'all 0.25s', fontFamily: 'var(--font-body)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>{t.icon}</span><span>{t.label}</span>
            </button>
          ))}
        </div>
        <div key={active} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', animation: 'fadeInUp 0.4s ease forwards', background: '#fff', borderRadius: '28px', padding: '52px', boxShadow: '0 4px 40px rgba(0,0,0,0.06)', border: '1px solid #eee' }}>
          <div>
            <div style={{ fontSize: '44px', marginBottom: '20px', background: `${tab.color}15`, width: '72px', height: '72px', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{tab.icon}</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(22px, 2.5vw, 32px)', marginBottom: '14px', color: '#111' }}>{tab.title}</h3>
            <p style={{ color: '#666', fontSize: '15px', lineHeight: 1.8, marginBottom: '28px', maxWidth: '400px' }}>{tab.desc}</p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {tab.features.map((f, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: `${tab.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="10" height="8" viewBox="0 0 10 8"><path d="M1 4l3 3 5-6" stroke={tab.color} strokeWidth="1.6" fill="none" strokeLinecap="round"/></svg>
                  </div>
                  <span style={{ fontSize: '14px', fontWeight: 500, color: '#333' }}>{f}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" style={{ display: 'inline-block', marginTop: '36px', background: tab.color, color: '#fff', padding: '13px 30px', borderRadius: '50px', fontSize: '14px', fontWeight: 700, fontFamily: 'var(--font-display)', transition: 'all 0.3s', boxShadow: `0 6px 20px ${tab.color}40` }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>Get Started →</a>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.1)', border: '1px solid #eee' }}>
              <img src={tab.image} alt={tab.title} style={{ width: '100%', height: '340px', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){#products [style*="gridTemplateColumns: 1fr 1fr"]{grid-template-columns:1fr!important}#products [style*="padding: 52px"]{padding:28px!important}}`}</style>
    </section>
  );
}
