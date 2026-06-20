import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const values = [
  { icon: '🎯', title: 'Result Oriented', desc: 'Every teaching method is designed with student success as the ultimate goal.' },
  { icon: '💡', title: 'Conceptual Clarity', desc: 'We build deep understanding, not just exam preparation.' },
  { icon: '🤝', title: 'Personal Attention', desc: 'Each student receives individual guidance and mentoring.' },
  { icon: '📚', title: 'Comprehensive Curriculum', desc: 'Complete coverage of syllabus with beyond-textbook insights.' },
  { icon: '🌱', title: 'Holistic Growth', desc: 'Academic excellence combined with communication and life skills.' },
  { icon: '🔬', title: 'Modern Methods', desc: 'Digital tools and activity-based teaching for better retention.' },
  { icon: '⚡', title: 'Dynamic Teaching', desc: 'Engaging sessions that keep students motivated and curious.' },
  { icon: '🏆', title: 'Excellence Culture', desc: 'We cultivate a culture where every student strives for the best.' },
]

export default function About() {
  return (
    <main style={{ paddingTop: '100px' }}>
      {/* Hero */}
      <section style={{
        padding: '80px 0',
        background: 'radial-gradient(ellipse at 30% 50%, rgba(67,97,238,0.12) 0%, transparent 60%), var(--navy)',
      }}>
        <div className="container">
          <span className="section-label">📖 Our Story</span>
          <h1 className="section-title" style={{ maxWidth: '700px' }}>
            Built on Passion,<br />Driven by <span className="gradient-text">Results</span>
          </h1>
          <p className="section-sub" style={{ maxWidth: '600px', lineHeight: 1.9 }}>
            Jagadeesh Classes was founded with a single vision — to create a learning environment where every student can realize their full potential. Located in the heart of Akkayyapalem, Visakhapatnam, we have grown to become one of Vizag's most trusted coaching centers.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '60px', alignItems: 'center',
          }}>
            <div>
              <h2 className="section-title" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>
                The <span className="gold-text">Jagadeesh</span> Story
              </h2>
              <p style={{ color: 'var(--gray)', lineHeight: 1.9, marginBottom: '20px' }}>
                What started as a small coaching initiative by Hari Sir has grown into Visakhapatnam's most respected educational institution. With a 4.9 Google rating and 109+ verified reviews, Jagadeesh Classes stands as a testament to quality education.
              </p>
              <p style={{ color: 'var(--gray)', lineHeight: 1.9, marginBottom: '32px' }}>
                Our approach goes beyond textbooks. We believe in building thinkers, problem-solvers, and confident individuals who are ready to face any challenge — academic or otherwise.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { num: '4.9★', label: 'Google Rating' },
                  { num: '109+', label: 'Student Reviews' },
                  { num: '100+', label: 'Students/Year' },
                  { num: '10+', label: 'Years Experience' },
                ].map((s, i) => (
                  <div key={i} className="glass" style={{ padding: '20px', textAlign: 'center' }}>
                    <div style={{
                      fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '28px',
                      background: 'linear-gradient(135deg, var(--gold), #ff9f43)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    }}>{s.num}</div>
                    <div style={{ color: 'var(--gray)', fontSize: '13px', marginTop: '4px' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision Mission */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { icon: '🔭', title: 'Our Vision', text: 'To be Visakhapatnam\'s most impactful educational institution — where every student discovers their potential and achieves excellence.' },
                { icon: '🎯', title: 'Our Mission', text: 'To provide personalized, high-quality education through innovative teaching methods, expert faculty, and a student-first approach.' },
                { icon: '💎', title: 'Our Promise', text: 'We promise every student dedicated attention, honest guidance, and the tools they need to succeed in exams and in life.' },
              ].map((item, i) => (
                <div key={i} className="glass" style={{ padding: '28px' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '32px' }}>{item.icon}</span>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '8px', fontSize: '18px' }}>{item.title}</h3>
                      <p style={{ color: 'var(--gray)', fontSize: '14px', lineHeight: 1.7 }}>{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hari Sir */}
      <section style={{
        background: 'var(--navy-mid)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '80px 0',
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-label">👨‍🏫 Lead Educator</span>
            <h2 className="section-title">The Mind Behind<br /><span className="gradient-text">Jagadeesh Classes</span></h2>
          </div>

          <div className="glass" style={{ maxWidth: '800px', margin: '0 auto', padding: '48px' }}>
            <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div style={{
                width: '100px', height: '100px', borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--blue), var(--gold))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '40px', flexShrink: 0,
              }}>👨‍🏫</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '28px', marginBottom: '4px' }}>Hari Sir</h3>
                <div style={{ color: 'var(--gold)', fontWeight: 600, marginBottom: '16px' }}>Founder & Lead Educator · Jagadeesh Classes</div>
                <p style={{ color: 'var(--gray)', lineHeight: 1.9, marginBottom: '20px' }}>
                  With years of teaching experience and a passion for student success, Hari Sir has built a reputation as Vizag's most impactful educator. His unique teaching style combines conceptual depth with practical application, making complex topics simple and engaging.
                </p>
                <p style={{ color: 'var(--gray)', lineHeight: 1.9 }}>
                  Known for his problem-solving approach and communication-focused teaching, Hari Sir goes beyond academics to prepare students for real-world challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '60px' }}>
            <span className="section-label">💪 What We Stand For</span>
            <h2 className="section-title">Our Core <span className="gold-text">Values</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {values.map((v, i) => (
              <div key={i} className="glass" style={{ padding: '28px', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(67,97,238,0.3)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'none' }}
              >
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{v.icon}</div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '8px' }}>{v.title}</h4>
                <p style={{ color: 'var(--gray)', fontSize: '14px', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--navy-mid)', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title">Be Part of the<br /><span className="gradient-text">Jagadeesh Family</span></h2>
          <p style={{ color: 'var(--gray)', marginBottom: '36px', fontSize: '17px' }}>Join hundreds of students who chose excellence!</p>
          <Link to="/admissions" className="btn-gold">
            Apply for Admission <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
