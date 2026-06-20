import { ArrowRight, CheckCircle } from 'lucide-react'

const steps = [
  { num: '01', title: 'Call or WhatsApp', desc: 'Reach out to us via phone or WhatsApp to express your interest and get details about available batches.', icon: '📞' },
  { num: '02', title: 'Visit Our Center', desc: 'Visit Jagadeesh Classes at Anakapalli. Meet Suresh Sir and get a feel of our learning environment.', icon: '🏫' },
  { num: '03', title: 'Assessment & Counseling', desc: 'Student undergoes a brief assessment. We counsel parents and students on the best program for their goals.', icon: '📋' },
  { num: '04', title: 'Enroll & Begin', desc: 'Complete enrollment formalities, pay fees, and start your journey toward excellence with Humjee Classes!', icon: '🎉' },
]

const documents = [
  'Previous class marksheet / report card',
  'Recent passport-size photographs (2)',
  'Aadhar card (student)',
  'Parent / Guardian contact details',
  'School name and current class',
]

export default function Admissions() {
  return (
    <main style={{ paddingTop: '100px' }}>
      {/* Hero */}
      <section style={{
        padding: '80px 0',
        background: 'radial-gradient(ellipse at 60% 40%, rgba(244,196,48,0.08) 0%, transparent 60%), var(--navy)',
      }}>
        <div className="container">
          <span className="section-label">🎓 Admissions 2025-26</span>
          <h1 className="section-title" style={{ maxWidth: '680px' }}>
            Begin Your Journey<br />to <span className="gradient-text">Excellence</span>
          </h1>
          <p className="section-sub">
            Seats are limited. Secure your place at Vizag's most trusted coaching center today!
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '36px' }}>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener" className="btn-gold">
              📱 WhatsApp Us <ArrowRight size={18} />
            </a>
            <a href="tel:+919876543210" className="btn-outline">
              📞 Call: 9876543210
            </a>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section" style={{ paddingTop: '60px' }}>
        <div className="container">
          <div style={{ marginBottom: '60px' }}>
            <span className="section-label">📋 Process</span>
            <h2 className="section-title">How to <span className="gold-text">Enroll</span></h2>
            <p className="section-sub">Simple 4-step admission process — no complicated paperwork!</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {steps.map((step, i) => (
              <div key={i} className="glass" style={{
                padding: '36px 28px', position: 'relative', overflow: 'hidden', transition: 'all 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = 'rgba(67,97,238,0.3)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
              >
                <div style={{
                  position: 'absolute', top: '-10px', right: '-10px',
                  fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '80px',
                  color: 'rgba(67,97,238,0.06)', lineHeight: 1,
                }}>{step.num}</div>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{step.icon}</div>
                <div style={{ color: 'var(--blue-light)', fontWeight: 700, fontSize: '13px', letterSpacing: '1px', marginBottom: '8px', textTransform: 'uppercase' }}>
                  Step {step.num}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px', marginBottom: '12px' }}>{step.title}</h3>
                <p style={{ color: 'var(--gray)', fontSize: '14px', lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info + Documents */}
      <section style={{ background: 'var(--navy-mid)', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px' }}>

            {/* Admission Details */}
            <div>
              <h2 className="section-title" style={{ fontSize: 'clamp(24px, 3vw, 36px)', marginBottom: '32px' }}>
                Admission <span className="gold-text">Details</span>
              </h2>
              {[
                { label: 'Classes Offered', value: 'VI to X + IIT JEE / NEET / EAMCET' },
                { label: 'Batch Size', value: 'Limited seats per batch' },
                { label: 'Medium', value: 'English Medium' },
                { label: 'Location', value: 'Anakapalli, Visakhapatnam' },
                { label: 'Timings', value: 'Starts 3:30 PM onwards' },
                { label: 'Contact', value: '081433 00100' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                  padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.06)',
                  gap: '16px',
                }}>
                  <span style={{ color: 'var(--gray)', fontSize: '14px', flexShrink: 0 }}>{item.label}</span>
                  <span style={{ fontWeight: 600, fontSize: '14px', textAlign: 'right' }}>{item.value}</span>
                </div>
              ))}
            </div>

            {/* Documents */}
            <div>
              <h2 className="section-title" style={{ fontSize: 'clamp(24px, 3vw, 36px)', marginBottom: '32px' }}>
                Documents <span className="gold-text">Needed</span>
              </h2>
              {documents.map((doc, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <CheckCircle size={18} color="var(--gold)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span style={{ color: 'var(--gray)', fontSize: '15px', lineHeight: 1.6 }}>{doc}</span>
                </div>
              ))}

              <div className="glass" style={{
                marginTop: '32px', padding: '24px',
                background: 'rgba(67,97,238,0.06)', borderColor: 'rgba(67,97,238,0.2)',
              }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>⚡</div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '8px' }}>Limited Seats!</h4>
                <p style={{ color: 'var(--gray)', fontSize: '14px', lineHeight: 1.7 }}>
                  We maintain small batch sizes for personalized attention. Seats fill up fast — don't wait!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', textAlign: 'center', background: 'linear-gradient(135deg, var(--blue) 0%, #2d4fd6 100%)' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '16px' }}>
            Secure Your Seat Today!
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '36px', fontSize: '17px' }}>
            Call or WhatsApp us — we'll guide you through the entire process!
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener" className="btn-gold">
              📱 WhatsApp Now <ArrowRight size={18} />
            </a>
            <a href="tel:+919876543210" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)' }}>
              📞 Call: 9876543210
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
