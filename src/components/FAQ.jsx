import React, { useState } from 'react';

const faqs = [
  {
    q: 'Can we use WhatsApp API for marketing purposes?',
    a: 'Yes, absolutely. You can use the WhatsApp API for marketing campaigns. You\'ll need to get your message templates approved under the marketing category by Meta before sending broadcasts.',
  },
  {
    q: 'Can we migrate from a different provider?',
    a: 'Yes, you can migrate your WhatsApp API number from any other provider to our platform. This migration is independent of your existing provider and can be done seamlessly.',
  },
  {
    q: 'What is the difference between WhatsApp Business and WhatsApp API?',
    a: 'WhatsApp Business app is designed for small businesses with basic automation for direct communication, supporting one device. The WhatsApp Business API is for larger businesses requiring scalability, CRM integration, advanced chatbots, high-volume messaging, and multi-agent support.',
  },
  {
    q: 'How to get the WhatsApp Green Tick verification?',
    a: 'The Green Tick is subject to Meta\'s approval. Requirements include a verified Facebook Business Account, a strong online presence with at least 5 credible PR links, and compliance with WhatsApp\'s business category guidelines.',
  },
  {
    q: 'What are the prerequisites to get WhatsApp API?',
    a: 'You need a verified Facebook Business Manager account and a phone number not already linked to any WhatsApp account (personal or business). Our team will guide you through the entire setup process.',
  },
  {
    q: 'Do you configure the chatbot for us?',
    a: 'Yes! We\'re happy to configure the chatbot to your specific requirements at no additional cost. Simply reach out to your dedicated manager and we\'ll handle the entire setup effortlessly.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" style={{ padding: '120px 5%' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '32px', height: '2px', background: 'var(--accent)' }}/>
            <span style={{ fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', opacity: 0.5 }}>FAQ</span>
            <div style={{ width: '32px', height: '2px', background: 'var(--accent)' }}/>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.1 }}>
            Frequently Asked<br />
            <span style={{ color: 'var(--accent)' }}>Questions</span>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.03)', border: `1px solid ${open === i ? 'rgba(232,255,71,0.2)' : 'rgba(255,255,255,0.07)'}`,
              borderRadius: '16px', overflow: 'hidden', transition: 'border-color 0.3s',
            }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{
                width: '100%', padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                background: 'none', border: 'none', color: 'var(--white)', cursor: 'pointer',
                fontFamily: 'var(--font-body)', textAlign: 'left',
              }}>
                <span style={{ fontSize: '16px', fontWeight: 600, flex: 1, paddingRight: '20px' }}>{faq.q}</span>
                <div style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  background: open === i ? 'var(--accent)' : 'rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  transition: 'all 0.3s',
                }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill={open === i ? '#000' : 'var(--white)'}
                    style={{ transition: 'transform 0.3s', transform: open === i ? 'rotate(45deg)' : 'rotate(0)' }}>
                    <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </button>
              {open === i && (
                <div style={{ padding: '0 28px 24px', animation: 'fadeInUp 0.3s ease' }}>
                  <p style={{ opacity: 0.6, fontSize: '15px', lineHeight: 1.8 }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
