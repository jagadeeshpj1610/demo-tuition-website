import { Link } from 'react-router-dom'
import { MapPin, Phone, Clock, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--navy-mid)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '70px 0 30px',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '48px',
          marginBottom: '60px',
        }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '20px' }}>
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '26px',
                background: 'linear-gradient(135deg, #ffffff, var(--blue-light))',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>Jagadeesh</div>
              <div style={{ fontSize: '11px', letterSpacing: '3px', color: 'var(--gold)', fontWeight: 600 }}>CLASSES</div>
            </div>
            <p style={{ color: 'var(--gray)', fontSize: '14px', lineHeight: 1.8, marginBottom: '20px' }}>
              Visakhapatnam's most trusted coaching center. Transforming students into achievers since years.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {['⭐ 4.9', '👥 109+ Reviews'].map(tag => (
                <span key={tag} style={{
                  background: 'rgba(244,196,48,0.1)', border: '1px solid rgba(244,196,48,0.2)',
                  color: 'var(--gold)', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600,
                }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '20px', fontSize: '16px' }}>Quick Links</h4>
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About Us' },
              { to: '/courses', label: 'Courses' },
              { to: '/gallery', label: 'Gallery' },
              { to: '/admissions', label: 'Admissions' },
              { to: '/contact', label: 'Contact' },
            ].map(link => (
              <Link key={link.to} to={link.to} style={{
                display: 'block', color: 'var(--gray)', fontSize: '14px',
                marginBottom: '10px', transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.target.style.color = 'white'}
                onMouseLeave={e => e.target.style.color = 'var(--gray)'}
              >→ {link.label}</Link>
            ))}
          </div>

          {/* Courses */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '20px', fontSize: '16px' }}>Courses</h4>
            {['IIT JEE Foundation', 'NEET Preparation', 'EAMCET Coaching', 'Class VI - X', 'Mathematics', 'Science'].map(c => (
              <div key={c} style={{ color: 'var(--gray)', fontSize: '14px', marginBottom: '10px' }}>→ {c}</div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '20px', fontSize: '16px' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <MapPin size={16} color="var(--gold)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ color: 'var(--gray)', fontSize: '14px', lineHeight: 1.6 }}>
                  Anakapalli, Visakhapatnam, AP 530016
                </span>
              </div>
              <a href="tel:+918143300100" style={{ display: 'flex', gap: '12px', alignItems: 'center', color: 'var(--gray)', fontSize: '14px' }}>
                <Phone size={16} color="var(--gold)" /> 9876543210
              </a>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Clock size={16} color="var(--gold)" />
                <span style={{ color: 'var(--gray)', fontSize: '14px' }}>Opens 3:30 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '28px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '12px',
        }}>
          <p style={{ color: 'var(--gray)', fontSize: '13px' }}>
            © 2026 Jagadeesh Classes. All rights reserved.
          </p>
          <p style={{ color: 'var(--gray)', fontSize: '13px' }}>
            Design and Build by PJ❤️
          </p>
        </div>
      </div>
    </footer>
  )
}
