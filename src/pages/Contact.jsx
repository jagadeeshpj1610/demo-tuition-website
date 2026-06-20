import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react'

export default function Contact() {
  return (
    <main style={{ paddingTop: '100px' }}>
      {/* Hero */}
      <section style={{ padding: '80px 0', background: 'var(--navy)' }}>
        <div className="container">
          <span className="section-label">📍 Find Us</span>
          <h1 className="section-title">Get in <span className="gradient-text">Touch</span></h1>
          <p className="section-sub">We're here to answer all your questions. Reach out anytime!</p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '60px' }}>
            {[
              {
                icon: <Phone size={28} color="var(--gold)" />,
                title: 'Call Us',
                info: '9876543210',
                sub: 'Mon - Sun · 9AM - 9PM',
                href: 'tel:+919876543210',
                action: 'Call Now',
              },
              {
                icon: <MessageCircle size={28} color="#25D366" />,
                title: 'WhatsApp',
                info: '+91 9876543210',
                sub: 'Quick replies guaranteed',
                href: 'https://wa.me/919876543210',
                action: 'Message Us',
              },
              {
                icon: <MapPin size={28} color="var(--blue-light)" />,
                title: 'Visit Us',
                info: '3rd Floor, Above Apollo Pharmacy',
                sub: 'Anakapalli, Visakhapatnam',
                href: 'https://maps.google.com/?q=Visakhapatnam',
                action: 'Get Directions',
              },
              {
                icon: <Clock size={28} color="#ff9f43" />,
                title: 'Timings',
                info: 'Opens 3:30 PM',
                sub: 'Mon - Sun',
                href: null,
                action: null,
              },
            ].map((card, i) => (
              <div key={i} className="glass" style={{ padding: '32px', textAlign: 'center', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(67,97,238,0.3)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
              >
                <div style={{ marginBottom: '16px' }}>{card.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '8px' }}>{card.title}</h3>
                <p style={{ fontWeight: 600, marginBottom: '4px', fontSize: '15px' }}>{card.info}</p>
                <p style={{ color: 'var(--gray)', fontSize: '13px', marginBottom: '20px' }}>{card.sub}</p>
                {card.href && (
                  <a href={card.href} target={card.href.startsWith('http') ? '_blank' : '_self'} rel="noopener"
                    className="btn-outline" style={{ fontSize: '13px', padding: '10px 20px' }}>
                    {card.action}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="glass" style={{ overflow: 'hidden', marginBottom: '48px' }}>
            <div style={{ padding: '24px 28px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px' }}>📍 Our Location</h3>
              <p style={{ color: 'var(--gray)', fontSize: '14px', marginTop: '4px' }}>
                RK Beach Visakhapatnam - 530016
              </p>
            </div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7601.305885006947!2d83.31947376369784!3d17.713847752832645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39436f113dca6d%3A0xd76a1de2271dff26!2sRamakrishna%20Beach!5e0!3m2!1sen!2sus!4v1781952597791!5m2!1sen!2sus" 
               width="100%" height="400" style={{ border: 0, display: 'block' }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="Jagadeesh Classes Location"
              ></iframe>
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.5!2d83.3!3d17.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395!2sHumjee+Classes!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%" height="400" style={{ border: 0, display: 'block' }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="Humjee Classes Location"
            /> */}
          </div>

          {/* Address Detail */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            <div className="glass" style={{ padding: '32px' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '20px', fontSize: '18px' }}>🏫 Full Address</h3>
              <p style={{ color: 'var(--gray)', lineHeight: 2, fontSize: '15px' }}>
                Jagadeesh Classes<br />
                Above Apollo Pharmacy,<br />
                Beside Parlour,<br />
                Anakapalli,<br />
                Visakhapatnam, Andhra Pradesh<br />
                PIN: 530016
              </p>
            </div>

            <div className="glass" style={{ padding: '32px', background: 'rgba(67,97,238,0.06)', borderColor: 'rgba(67,97,238,0.2)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '20px', fontSize: '18px' }}>🚀 Quick Contact</h3>
              <p style={{ color: 'var(--gray)', fontSize: '15px', lineHeight: 1.8, marginBottom: '24px' }}>
                Ready to join? Don't wait — call or WhatsApp us right now and secure your seat!
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a href="tel:+918143300100" className="btn-primary" style={{ justifyContent: 'center' }}>
                  📞 Call: 9876543210
                </a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    background: '#25D366', color: 'white', padding: '14px 32px', borderRadius: '50px',
                    fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '15px', transition: 'all 0.3s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  📱 WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
