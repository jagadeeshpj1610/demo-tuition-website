import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Award, Users, BookOpen, ChevronRight, Quote } from 'lucide-react'

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return count
}

const stats = [
  { value: 109, suffix: '+', label: 'Happy Reviews', icon: '⭐' },
  { value: 4.9, suffix: '', label: 'Google Rating', icon: '🏆', isDecimal: true },
  { value: 100, suffix: '+', label: 'Students Yearly', icon: '👨‍🎓' },
  { value: 10, suffix: '+', label: 'Years Excellence', icon: '🎯' },
]

const highlights = [
  { icon: '🧠', title: 'Expert Faculty', desc: 'Learn from Hari Sir — Vizag\'s most celebrated educator with proven results.' },
  { icon: '📱', title: 'Digital Classes', desc: 'Modern digital teaching methods for better conceptual understanding.' },
  { icon: '🎯', title: 'IIT JEE Foundation', desc: 'Early foundation building for students targeting top engineering colleges.' },
  { icon: '✍️', title: 'Activity Based', desc: 'Hands-on activity based learning that makes concepts stick forever.' },
  { icon: '💬', title: 'Communication Skills', desc: 'Building confident communicators alongside academic excellence.' },
  { icon: '🏅', title: 'Proven Results', desc: 'Consistently producing top performers across Visakhapatnam.' },
]

const reviews = [
  { name: 'Shekar', text: 'One of the best places to study in Visakhapatnam. Hari Sir is the best teacher in Vizag — his way of teaching is speechless.', rating: 5 },
  { name: 'Sandhya', text: 'Hari Sir helps understand content needed for reality — problem solving attitude, logical thinking. Absolutely brilliant!', rating: 5 },
  { name: 'Prabhavathi', text: 'A right place for students wanting to excel in studies. A right choice for a bright future.', rating: 5 },
]

export default function Home() {
  const statsRef = useRef(null)
  const [statsVisible, setStatsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true) },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  const c0 = useCountUp(stats[0].value, 2000, statsVisible)
  const c2 = useCountUp(stats[2].value, 2000, statsVisible)
  const c3 = useCountUp(stats[3].value, 2000, statsVisible)

  return (
    <main>
      {/* Hero */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        background: 'radial-gradient(ellipse at 20% 50%, rgba(67,97,238,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(244,196,48,0.08) 0%, transparent 50%), var(--navy)',
        paddingTop: '100px', position: 'relative', overflow: 'hidden',
      }}>
        {/* Background grid */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.03,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        {/* Orbs */}
        <div style={{
          position: 'absolute', top: '20%', right: '10%', width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(67,97,238,0.12) 0%, transparent 70%)',
          borderRadius: '50%', filter: 'blur(40px)',
        }} className="animate-float" />
        <div style={{
          position: 'absolute', bottom: '20%', left: '5%', width: '300px', height: '300px',
          background: 'radial-gradient(circle, rgba(244,196,48,0.08) 0%, transparent 70%)',
          borderRadius: '50%', filter: 'blur(40px)',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '720px' }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(244,196,48,0.1)', border: '1px solid rgba(244,196,48,0.25)',
              padding: '8px 18px', borderRadius: '50px', marginBottom: '32px',
              animation: 'fadeUp 0.6s ease forwards',
            }}>
              <span style={{ fontSize: '14px' }}>⭐</span>
              <span style={{ color: 'var(--gold)', fontSize: '13px', fontWeight: 600, letterSpacing: '0.5px' }}>
                Rated 4.9/5 · 109+ Reviews · Vizag's Best
              </span>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(32px, 5vw, 58px)', lineHeight: 1.1,
              marginBottom: '28px', animation: 'fadeUp 0.7s 0.1s ease both',
            }}>
              Where Students<br />
              <span className="gradient-text">Become Achievers</span>
            </h1>

            <p style={{
              color: 'var(--gray)', fontSize: '18px', lineHeight: 1.8,
              marginBottom: '40px', maxWidth: '560px',
              animation: 'fadeUp 0.7s 0.2s ease both',
            }}>
              Jagadeesh Classes — Visakhapatnam's most trusted coaching center. Expert guidance by <strong style={{ color: 'white' }}>Hari Sir</strong> for IIT JEE, NEET, EAMCET and academic excellence.
            </p>

            <div style={{
              display: 'flex', gap: '16px', flexWrap: 'wrap',
              animation: 'fadeUp 0.7s 0.3s ease both',
            }}>
              <Link to="/admissions" className="btn-gold">
                Start Your Journey <ArrowRight size={18} />
              </Link>
              <Link to="/courses" className="btn-outline">
                Explore Courses <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} style={{
        background: 'var(--navy-mid)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '60px 0',
      }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px' }}>
            {stats.map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>{stat.icon}</div>
                <div style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: '48px', lineHeight: 1,
                  background: 'linear-gradient(135deg, var(--gold), #ff9f43)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>
                  {stat.isDecimal ? '4.9' : [c0, null, c2, c3][i]}{stat.suffix}
                </div>
                <div style={{ color: 'var(--gray)', fontSize: '14px', marginTop: '6px', fontWeight: 500 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '60px' }}>
            <span className="section-label">✨ Why Choose Us</span>
            <h2 className="section-title">Everything You Need<br />to <span className="gold-text">Excel</span></h2>
            <p className="section-sub">From expert faculty to modern methods — we provide everything students need to succeed.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {highlights.map((h, i) => (
              <div key={i} className="glass" style={{
                padding: '32px', transition: 'all 0.3s ease', cursor: 'default',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.borderColor = 'rgba(67,97,238,0.3)'
                  e.currentTarget.style.background = 'rgba(67,97,238,0.06)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                }}
              >
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>{h.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', marginBottom: '10px' }}>{h.title}</h3>
                <p style={{ color: 'var(--gray)', fontSize: '15px', lineHeight: 1.7 }}>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hari Sir Banner */}
      <section style={{
        background: 'linear-gradient(135deg, var(--navy-light) 0%, rgba(67,97,238,0.1) 100%)',
        border: '1px solid rgba(67,97,238,0.15)',
        padding: '80px 0',
      }}>
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '60px', alignItems: 'center',
          }}>
            <div>
              <span className="section-label">👨‍🏫 Our Founder</span>
              <h2 className="section-title" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
                Meet <span className="gradient-text">Hari Sir</span>
              </h2>
              <p style={{ color: 'var(--gray)', lineHeight: 1.8, marginBottom: '24px' }}>
                Visakhapatnam's most celebrated educator. Hari Sir brings years of expertise, passion for teaching, and a track record of producing top performers. His unique approach to problem-solving and logical thinking has transformed hundreds of students.
              </p>
              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                {['Problem Solving', 'Logical Thinking', 'Student-First'].map(tag => (
                  <span key={tag} style={{
                    background: 'rgba(67,97,238,0.15)', border: '1px solid rgba(67,97,238,0.25)',
                    color: 'var(--blue-light)', padding: '6px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 600,
                  }}>{tag}</span>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { icon: '🎓', label: 'Highly Qualified', sub: 'Expert in Mathematics & Science' },
                { icon: '🏆', label: 'Award Winning', sub: 'Recognized for teaching excellence' },
                { icon: '📈', label: 'Proven Results', sub: 'Consistent top performers' },
              ].map((item, i) => (
                <div key={i} className="glass" style={{ display: 'flex', gap: '16px', padding: '20px', alignItems: 'center' }}>
                  <span style={{ fontSize: '28px' }}>{item.icon}</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '15px' }}>{item.label}</div>
                    <div style={{ color: 'var(--gray)', fontSize: '13px' }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '60px' }}>
            <span className="section-label">💬 Testimonials</span>
            <h2 className="section-title">What Students <span className="gold-text">Say</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {reviews.map((r, i) => (
              <div key={i} className="glass" style={{ padding: '32px', position: 'relative' }}>
                <Quote size={32} color="var(--blue)" style={{ opacity: 0.4, marginBottom: '16px' }} />
                <p style={{ color: 'var(--gray)', fontSize: '15px', lineHeight: 1.8, marginBottom: '24px' }}>"{r.text}"</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '15px' }}>{r.name}</div>
                    <div style={{ color: 'var(--gold)', fontSize: '13px' }}>{'⭐'.repeat(r.rating)}</div>
                  </div>
                  <span style={{
                    background: 'rgba(244,196,48,0.1)', border: '1px solid rgba(244,196,48,0.2)',
                    color: 'var(--gold)', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600,
                  }}>Verified</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a href="" target="_blank" rel="noopener" className="btn-outline">
              See All 109+ Reviews on Google ↗
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: 'linear-gradient(135deg, var(--blue) 0%, #2d4fd6 100%)',
        padding: '80px 0', textAlign: 'center',
      }}>
        <div className="container">
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(28px, 5vw, 52px)', marginBottom: '20px',
          }}>
            Ready to Transform Your Future?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', marginBottom: '40px' }}>
            Join hundreds of students who chose excellence. Limited seats available!
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admissions" className="btn-gold">
              Apply Now <ArrowRight size={18} />
            </Link>
            <a href="tel:+918143300100" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)' }}>
              📞 Call: 9876543210
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
